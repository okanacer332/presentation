# Veritabanı Şeması

> **Doküman:** 01-MIMARI/veritabani-semasi.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 📊 Veritabanı Dağılımı

| Veritabanı | Teknoloji | Kullanım Alanı |
|------------|-----------|----------------|
| **PostgreSQL** | Relational | Lisanslar, kullanıcılar, işlem verileri |
| **MongoDB** | Document | Belgeler, patternler, öğrenme verileri |
| **ChromaDB** | Vector | Embedding'ler, benzerlik araması |
| **Redis** | Key-Value | Cache, session, rate limiting |

---

## 🐘 PostgreSQL Şeması (Gateway)

```sql
-- =====================================================
-- DATABASE: domizan
-- PORT: 5432
-- =====================================================

-- Lisanslar
CREATE TABLE licenses (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    license_key     VARCHAR(64) UNIQUE NOT NULL,
    
    -- Sahip bilgileri
    owner_name      VARCHAR(255) NOT NULL,
    owner_email     VARCHAR(255) NOT NULL,
    owner_phone     VARCHAR(50),
    company_name    VARCHAR(255),
    
    -- Paket bilgileri
    package_type    VARCHAR(20) NOT NULL DEFAULT 'basic',
                    -- 'basic' = 1 cihaz, 100K token
                    -- 'pro' = 5 cihaz, 500K token
                    -- 'enterprise' = 20 cihaz, 2M token
    
    -- Cihaz limitleri
    max_devices     INTEGER NOT NULL DEFAULT 1,
    active_devices  INTEGER NOT NULL DEFAULT 0,
    
    -- Token kotası
    monthly_quota   INTEGER NOT NULL DEFAULT 100000,
    used_quota      INTEGER NOT NULL DEFAULT 0,
    quota_reset_at  TIMESTAMP WITH TIME ZONE,
    
    -- Durum
    status          VARCHAR(20) NOT NULL DEFAULT 'active',
                    -- 'active', 'suspended', 'expired', 'trial'
    
    -- Tarihler
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at      TIMESTAMP WITH TIME ZONE,
    last_used_at    TIMESTAMP WITH TIME ZONE,
    
    -- Notlar
    notes           TEXT
);

CREATE INDEX idx_licenses_key ON licenses(license_key);
CREATE INDEX idx_licenses_email ON licenses(owner_email);
CREATE INDEX idx_licenses_status ON licenses(status);


-- Cihazlar
CREATE TABLE devices (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    license_id      UUID NOT NULL REFERENCES licenses(id) ON DELETE CASCADE,
    
    -- Cihaz tanımlama
    fingerprint     VARCHAR(255) UNIQUE NOT NULL,
    device_name     VARCHAR(255),
    os_type         VARCHAR(50),  -- 'windows', 'macos'
    os_version      VARCHAR(100),
    
    -- Ağ bilgileri
    ip_address      VARCHAR(45),
    ip_whitelist    JSONB,  -- ["192.168.1.0/24", "10.0.0.0/8"]
    
    -- Yetkilendirme
    is_master       BOOLEAN DEFAULT FALSE,
    status          VARCHAR(20) NOT NULL DEFAULT 'pending',
                    -- 'pending', 'approved', 'rejected', 'revoked'
    
    -- Onay bilgileri
    approved_by     VARCHAR(255),
    approved_at     TIMESTAMP WITH TIME ZONE,
    rejected_reason TEXT,
    
    -- Aktivite
    last_seen_at    TIMESTAMP WITH TIME ZONE,
    last_ip         VARCHAR(45),
    
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_devices_license ON devices(license_id);
CREATE INDEX idx_devices_fingerprint ON devices(fingerprint);
CREATE INDEX idx_devices_status ON devices(status);


-- Token kullanım logları
CREATE TABLE usage_logs (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    license_id      UUID NOT NULL REFERENCES licenses(id),
    device_id       UUID REFERENCES devices(id),
    
    -- Kullanım detayları
    operation       VARCHAR(50) NOT NULL,  -- 'analyze', 'query', 'pattern'
    tokens_input    INTEGER NOT NULL DEFAULT 0,
    tokens_output   INTEGER NOT NULL DEFAULT 0,
    tokens_total    INTEGER NOT NULL DEFAULT 0,
    cost_usd        DECIMAL(10, 6) DEFAULT 0,
    
    -- Bağlam
    document_type   VARCHAR(50),
    success         BOOLEAN DEFAULT TRUE,
    error_message   TEXT,
    
    -- Meta
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata        JSONB
);

CREATE INDEX idx_usage_license ON usage_logs(license_id);
CREATE INDEX idx_usage_created ON usage_logs(created_at);
CREATE INDEX idx_usage_operation ON usage_logs(operation);


-- Telegram kullanıcıları
CREATE TABLE telegram_users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    license_id      UUID NOT NULL REFERENCES licenses(id) ON DELETE CASCADE,
    
    -- Telegram bilgileri
    telegram_id     VARCHAR(50) UNIQUE NOT NULL,
    username        VARCHAR(255),
    first_name      VARCHAR(255),
    last_name       VARCHAR(255),
    
    -- Yetki
    role            VARCHAR(20) NOT NULL DEFAULT 'viewer',
                    -- 'owner', 'employee', 'viewer'
    status          VARCHAR(20) NOT NULL DEFAULT 'active',
                    -- 'active', 'blocked'
    
    -- Tarihler
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_message_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_telegram_license ON telegram_users(license_id);
CREATE INDEX idx_telegram_id ON telegram_users(telegram_id);


-- Landing page kayıtları
CREATE TABLE leads (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- İletişim
    name            VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    phone           VARCHAR(50),
    company         VARCHAR(255),
    
    -- Mesaj
    message         TEXT,
    source          VARCHAR(50) DEFAULT 'landing_form',
    
    -- Takip
    status          VARCHAR(20) NOT NULL DEFAULT 'new',
                    -- 'new', 'contacted', 'demo_scheduled', 
                    -- 'converted', 'rejected'
    assigned_to     VARCHAR(255),
    notes           TEXT,
    
    -- Tarihler
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    contacted_at    TIMESTAMP WITH TIME ZONE,
    converted_at    TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_email ON leads(email);


-- Admin kullanıcıları
CREATE TABLE admin_users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           VARCHAR(255) UNIQUE NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    name            VARCHAR(255) NOT NULL,
    role            VARCHAR(20) NOT NULL DEFAULT 'admin',
                    -- 'super_admin', 'admin', 'support'
    status          VARCHAR(20) NOT NULL DEFAULT 'active',
    
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_login_at   TIMESTAMP WITH TIME ZONE
);
```

---

## 🍃 MongoDB Şeması (Intelligence)

```javascript
// =====================================================
// DATABASE: domizan
// PORT: 27017
// =====================================================

// Analiz edilen belgeler
// Collection: documents
{
    _id: ObjectId,
    license_id: String,      // UUID referans
    device_id: String,       // UUID referans
    
    // Belge bilgileri
    document: {
        original_filename: String,
        file_type: String,      // 'pdf', 'image', 'jpg', 'png'
        file_size: Number,
        hash: String            // Duplicate detection
    },
    
    // AI analiz sonucu
    analysis: {
        document_type: String,  // 'fatura', 'dekont', 'makbuz', etc.
        confidence: Number,     // 0-1 arası
        
        extracted: {
            vkn: String,
            unvan: String,
            tarih: Date,
            tutar: Number,
            kdv: Number,
            aciklama: String,
            // ... diğer alanlar
        },
        
        matched_mukellef: {
            id: String,
            name: String,
            confidence: Number
        },
        
        suggested_path: String,
        applied_patterns: [String]  // Pattern ID'leri
    },
    
    // Kullanıcı eylemi
    user_action: {
        status: String,         // 'pending', 'approved', 'corrected', 'rejected'
        corrections: Object,    // Yapılan düzeltmeler
        final_path: String,
        processed_at: Date
    },
    
    // Token bilgileri
    tokens: {
        input: Number,
        output: Number,
        total: Number,
        cost_usd: Number
    },
    
    // Meta
    created_at: Date,
    updated_at: Date
}

// Indexes
db.documents.createIndex({ license_id: 1, created_at: -1 })
db.documents.createIndex({ "document.hash": 1 })
db.documents.createIndex({ "analysis.document_type": 1 })


// Düzeltmeler
// Collection: corrections
{
    _id: ObjectId,
    license_id: String,
    document_id: ObjectId,
    
    // Orijinal değer
    original: {
        field: String,          // 'document_type', 'vkn', 'mukellef', etc.
        value: Mixed
    },
    
    // Düzeltilen değer
    corrected: {
        field: String,
        value: Mixed
    },
    
    // Bağlam
    context: {
        document_type: String,
        document_hash: String,
        snippet: String         // Belge özeti
    },
    
    // Embedding
    embedding: [Number],        // 384-dim vector
    
    // Cluster bilgisi
    cluster_id: ObjectId,
    
    created_at: Date
}

// Indexes
db.corrections.createIndex({ license_id: 1 })
db.corrections.createIndex({ cluster_id: 1 })
db.corrections.createIndex({ "original.field": 1 })


// Pattern'ler (Öğrenilen kurallar)
// Collection: patterns
{
    _id: ObjectId,
    
    // Kimlik
    name: String,               // Auto-generated
    description: String,
    
    // Kaynak
    cluster_id: ObjectId,
    correction_count: Number,   // Bu pattern'i oluşturan düzeltme sayısı
    
    // Kural
    rule: {
        condition: {
            field: String,
            operator: String,   // 'equals', 'contains', 'regex'
            value: Mixed
        },
        action: {
            field: String,
            value: Mixed
        }
    },
    
    // Güvenilirlik
    consistency: Number,        // 0-1 arası
    applications: Number,       // Kaç kez uygulandı
    success_rate: Number,
    
    // Durum
    status: String,             // 'active', 'inactive', 'testing'
    
    created_at: Date,
    updated_at: Date
}

// Indexes
db.patterns.createIndex({ status: 1, consistency: -1 })
db.patterns.createIndex({ cluster_id: 1 })


// Düzeltme kümeleri
// Collection: clusters
{
    _id: ObjectId,
    
    // Küme merkezi
    centroid: [Number],         // Ortalama embedding
    
    // İçerik
    correction_ids: [ObjectId],
    correction_count: Number,
    
    // Pattern bilgisi
    has_pattern: Boolean,
    pattern_id: ObjectId,
    
    // Meta
    field: String,              // Hangi alan için
    created_at: Date,
    updated_at: Date
}


// Prompt versiyonları
// Collection: prompts
{
    _id: ObjectId,
    
    name: String,               // 'document_analysis', 'query_answer', etc.
    version: String,            // 'v1.0.0'
    
    template: String,           // Prompt template
    
    // A/B test
    variant: String,            // 'A', 'B', 'control'
    traffic_percentage: Number,
    
    // Performans
    usage_count: Number,
    avg_confidence: Number,
    correction_rate: Number,
    
    status: String,             // 'active', 'testing', 'deprecated'
    
    created_at: Date
}
```

---

## 🔮 ChromaDB Koleksiyonları

```python
# =====================================================
# CHROMADB
# PORT: 8000
# =====================================================

# Belge vektörleri
collection: document_vectors
{
    id: str,                    # Document ID
    embedding: List[float],     # 384-dim sentence-transformer
    metadata: {
        license_id: str,
        document_type: str,
        created_at: str
    },
    document: str               # Belge özeti
}

# Düzeltme vektörleri
collection: correction_vectors
{
    id: str,                    # Correction ID
    embedding: List[float],     # 384-dim
    metadata: {
        license_id: str,
        field: str,
        original_value: str,
        corrected_value: str
    },
    document: str               # Context
}
```

---

## 🔴 Redis Key Yapısı

```
# =====================================================
# REDIS
# PORT: 6379
# =====================================================

# Session tokens
session:{admin_id}          → JSON { token, expires_at, ... }
TTL: 24 hours

# Rate limiting
rate:license:{license_id}   → Integer (request count)
TTL: 60 seconds

rate:ip:{ip_address}        → Integer (request count)
TTL: 60 seconds

# License cache
cache:license:{license_key} → JSON { license data }
TTL: 5 minutes

# Device cache
cache:device:{fingerprint}  → JSON { device data }
TTL: 5 minutes
```

---

## 📐 ER Diyagramı (PostgreSQL)

```
┌──────────────────┐       ┌──────────────────┐
│     licenses     │       │     devices      │
├──────────────────┤       ├──────────────────┤
│ id (PK)          │───┐   │ id (PK)          │
│ license_key      │   │   │ license_id (FK)  │◀─┐
│ owner_name       │   │   │ fingerprint      │  │
│ owner_email      │   │   │ device_name      │  │
│ package_type     │   │   │ status           │  │
│ max_devices      │   │   │ is_master        │  │
│ monthly_quota    │   │   │ ip_address       │  │
│ status           │   │   └──────────────────┘  │
└──────────────────┘   │                         │
         │             │   ┌──────────────────┐  │
         │             │   │   usage_logs     │  │
         │             │   ├──────────────────┤  │
         │             └──▶│ id (PK)          │  │
         │                 │ license_id (FK)  │◀─┤
         │                 │ device_id (FK)   │◀─┘
         │                 │ tokens_total     │
         │                 │ operation        │
         │                 └──────────────────┘
         │
         │             ┌──────────────────┐
         │             │ telegram_users   │
         │             ├──────────────────┤
         └────────────▶│ id (PK)          │
                       │ license_id (FK)  │
                       │ telegram_id      │
                       │ role             │
                       │ status           │
                       └──────────────────┘


┌──────────────────┐       ┌──────────────────┐
│      leads       │       │   admin_users    │
├──────────────────┤       ├──────────────────┤
│ id (PK)          │       │ id (PK)          │
│ name             │       │ email            │
│ email            │       │ password_hash    │
│ phone            │       │ role             │
│ status           │       │ status           │
└──────────────────┘       └──────────────────┘
```
