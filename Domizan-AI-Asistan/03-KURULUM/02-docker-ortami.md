# Docker Ortamı Yapılandırması

> **Doküman:** 03-KURULUM/02-docker-ortami.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🎯 Amaç

Veritabanları ve servislerin Docker ile yönetimi.

---

## 📊 Servis Haritası

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          DOCKER SERVİSLERİ                                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   ┌─────────────────────────────────────────────────────────────────────────────┐   │
│   │                           DEVELOPMENT                                         │   │
│   │                                                                               │   │
│   │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │   │
│   │   │  PostgreSQL │  │   MongoDB   │  │   ChromaDB  │  │    Redis    │        │   │
│   │   │             │  │             │  │             │  │             │        │   │
│   │   │  :5432      │  │  :27017     │  │  :8000      │  │  :6379      │        │   │
│   │   │  ─────────  │  │  ─────────  │  │  ─────────  │  │  ─────────  │        │   │
│   │   │  Licenses   │  │  Documents  │  │  Vectors    │  │  Cache      │        │   │
│   │   │  Devices    │  │  Corrections│  │             │  │  Sessions   │        │   │
│   │   │  Leads      │  │  Patterns   │  │             │  │  Rate limit │        │   │
│   │   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘        │   │
│   │                                                                               │   │
│   └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│   ┌─────────────────────────────────────────────────────────────────────────────┐   │
│   │                           PRODUCTION (Ek)                                     │   │
│   │                                                                               │   │
│   │   + nginx (reverse proxy)                                                    │   │
│   │   + certbot (SSL)                                                            │   │
│   │   + pgadmin (opsiyonel)                                                      │   │
│   │                                                                               │   │
│   └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Dosyalar

### docker-compose.dev.yml (Development)

```yaml
version: '3.8'

services:
  # ═══════════════════════════════════════════════════════════════════════════
  # PostgreSQL - License Management
  # ═══════════════════════════════════════════════════════════════════════════
  postgres:
    image: postgres:15-alpine
    container_name: domizan-postgres
    restart: unless-stopped
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: domizan
      POSTGRES_PASSWORD: domizan_dev_password
      POSTGRES_DB: domizan
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./scripts/init-db.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U domizan"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - domizan-network

  # ═══════════════════════════════════════════════════════════════════════════
  # MongoDB - Document Storage
  # ═══════════════════════════════════════════════════════════════════════════
  mongodb:
    image: mongo:7
    container_name: domizan-mongodb
    restart: unless-stopped
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    healthcheck:
      test: echo 'db.runCommand("ping").ok' | mongosh localhost:27017/test --quiet
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - domizan-network

  # ═══════════════════════════════════════════════════════════════════════════
  # ChromaDB - Vector Storage
  # ═══════════════════════════════════════════════════════════════════════════
  chromadb:
    image: chromadb/chroma:latest
    container_name: domizan-chromadb
    restart: unless-stopped
    ports:
      - "8000:8000"
    volumes:
      - chromadb_data:/chroma/chroma
    environment:
      - ANONYMIZED_TELEMETRY=false
      - ALLOW_RESET=true
      - IS_PERSISTENT=true
    networks:
      - domizan-network

  # ═══════════════════════════════════════════════════════════════════════════
  # Redis - Caching & Sessions
  # ═══════════════════════════════════════════════════════════════════════════
  redis:
    image: redis:7-alpine
    container_name: domizan-redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - domizan-network

volumes:
  postgres_data:
    driver: local
  mongodb_data:
    driver: local
  chromadb_data:
    driver: local
  redis_data:
    driver: local

networks:
  domizan-network:
    driver: bridge
```

---

## 🛠️ Yönetim Komutları

### Genel Komutlar

```powershell
# Docker Compose dosyası ile çalış
$DC = "docker-compose -f docker-compose.dev.yml"

# Servisleri başlat
Invoke-Expression "$DC up -d"

# Servisleri durdur
Invoke-Expression "$DC down"

# Logları izle
Invoke-Expression "$DC logs -f"

# Tek servis logu
Invoke-Expression "$DC logs -f postgres"

# Durumu kontrol et
Invoke-Expression "$DC ps"

# Servisleri yeniden başlat
Invoke-Expression "$DC restart"
```

### Veritabanı Spesifik

```powershell
# PostgreSQL shell
docker exec -it domizan-postgres psql -U domizan -d domizan

# MongoDB shell
docker exec -it domizan-mongodb mongosh

# Redis CLI
docker exec -it domizan-redis redis-cli

# ChromaDB health check
curl http://localhost:8000/api/v1/heartbeat
```

---

## 📊 Volume Yedekleme

```powershell
# PostgreSQL backup
docker exec domizan-postgres pg_dump -U domizan domizan > backup_$(Get-Date -Format "yyyyMMdd").sql

# MongoDB backup
docker exec domizan-mongodb mongodump --out /data/backup
docker cp domizan-mongodb:/data/backup ./mongodb_backup

# Volume temizliği (DİKKAT!)
docker-compose -f docker-compose.dev.yml down -v
```

---

## 🔧 İlk Kurulum Scripti

### scripts/init-db.sql

```sql
-- PostgreSQL başlangıç şeması
-- Bu dosya container ilk oluşturulduğunda çalışır

-- UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Licenses tablosu
CREATE TABLE IF NOT EXISTS licenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    license_key VARCHAR(32) UNIQUE NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    owner_email VARCHAR(255) NOT NULL,
    company_name VARCHAR(255),
    package_type VARCHAR(20) NOT NULL CHECK (package_type IN ('basic', 'pro', 'enterprise')),
    max_devices INTEGER NOT NULL,
    active_devices INTEGER DEFAULT 0,
    monthly_token_limit INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'expired', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    metadata JSONB DEFAULT '{}'
);

-- Devices tablosu
CREATE TABLE IF NOT EXISTS devices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    license_id UUID NOT NULL REFERENCES licenses(id) ON DELETE CASCADE,
    fingerprint VARCHAR(64) UNIQUE NOT NULL,
    device_name VARCHAR(255),
    os_type VARCHAR(20),
    os_version VARCHAR(50),
    ip_address VARCHAR(45),
    is_master BOOLEAN DEFAULT FALSE,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'revoked')),
    approved_by VARCHAR(255),
    approved_at TIMESTAMP WITH TIME ZONE,
    last_seen_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads tablosu
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company_name VARCHAR(255),
    message TEXT,
    source VARCHAR(50) DEFAULT 'landing_page',
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'demo_scheduled', 'converted', 'lost')),
    assigned_to VARCHAR(255),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Telegram users tablosu
CREATE TABLE IF NOT EXISTS telegram_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    license_id UUID NOT NULL REFERENCES licenses(id) ON DELETE CASCADE,
    telegram_id VARCHAR(20) UNIQUE NOT NULL,
    telegram_username VARCHAR(255),
    display_name VARCHAR(255),
    role VARCHAR(20) DEFAULT 'viewer' CHECK (role IN ('owner', 'employee', 'viewer')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Usage logs tablosu
CREATE TABLE IF NOT EXISTS usage_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    license_id UUID NOT NULL REFERENCES licenses(id),
    device_id UUID REFERENCES devices(id),
    action_type VARCHAR(50) NOT NULL,
    tokens_used INTEGER DEFAULT 0,
    request_data JSONB,
    response_summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- İndeksler
CREATE INDEX idx_licenses_key ON licenses(license_key);
CREATE INDEX idx_licenses_email ON licenses(owner_email);
CREATE INDEX idx_devices_license ON devices(license_id);
CREATE INDEX idx_devices_fingerprint ON devices(fingerprint);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_telegram_license ON telegram_users(license_id);
CREATE INDEX idx_telegram_id ON telegram_users(telegram_id);
CREATE INDEX idx_usage_license ON usage_logs(license_id);
CREATE INDEX idx_usage_date ON usage_logs(created_at);

-- Demo lisans ekle
INSERT INTO licenses (license_key, owner_name, owner_email, company_name, package_type, max_devices, monthly_token_limit, expires_at)
VALUES ('DOMIZAN-DEMO-1234-5678', 'Demo User', 'demo@domizan.com', 'Demo Company', 'pro', 5, 500000, NOW() + INTERVAL '1 year')
ON CONFLICT (license_key) DO NOTHING;

COMMIT;
```

---

## 🚦 Health Check Script

```powershell
# health-check.ps1

Write-Host "🔍 Domizan Docker Servis Kontrolü" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan

# PostgreSQL
Write-Host "`n📊 PostgreSQL (5432):" -NoNewline
try {
    docker exec domizan-postgres pg_isready -U domizan 2>$null | Out-Null
    Write-Host " ✅ Bağlı" -ForegroundColor Green
} catch {
    Write-Host " ❌ Bağlanamadı" -ForegroundColor Red
}

# MongoDB
Write-Host "📦 MongoDB (27017):" -NoNewline
$mongoCheck = docker exec domizan-mongodb mongosh --eval "db.runCommand('ping').ok" --quiet 2>$null
if ($mongoCheck -eq "1") {
    Write-Host " ✅ Bağlı" -ForegroundColor Green
} else {
    Write-Host " ❌ Bağlanamadı" -ForegroundColor Red
}

# ChromaDB
Write-Host "🔮 ChromaDB (8000):" -NoNewline
try {
    $response = Invoke-WebRequest -Uri "http://localhost:8000/api/v1/heartbeat" -TimeoutSec 2 2>$null
    Write-Host " ✅ Bağlı" -ForegroundColor Green
} catch {
    Write-Host " ❌ Bağlanamadı" -ForegroundColor Red
}

# Redis
Write-Host "⚡ Redis (6379):" -NoNewline
$redisCheck = docker exec domizan-redis redis-cli ping 2>$null
if ($redisCheck -eq "PONG") {
    Write-Host " ✅ Bağlı" -ForegroundColor Green
} else {
    Write-Host " ❌ Bağlanamadı" -ForegroundColor Red
}

Write-Host "`n=================================" -ForegroundColor Cyan
```
