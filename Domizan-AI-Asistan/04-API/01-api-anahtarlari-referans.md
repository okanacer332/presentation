# API Anahtarları ve Güvenlik Referansı

> **Doküman:** 04-API/01-api-anahtarlari-referans.md
> **Son Güncelleme:** 5 Şubat 2026
> **Kritik Doküman:** 🔴

---

## 🎯 Amaç

Sistemdeki tüm API anahtarlarının, token'ların ve güvenlik credential'larının kapsamlı referansı.

---

## 📊 API Anahtarları Haritası

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          API ANAHTARLARI HARİTASI                                    │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   ┌─────────────────────────────────────────────────────────────────────────────┐   │
│   │                         SİSTEM SEVİYESİ (Admin/Developer)                     │   │
│   │                                                                               │   │
│   │   🔑 ENCRYPTION_KEY           → Tüm hassas verilerin şifrelenmesi            │   │
│   │   🔑 JWT_SECRET               → Token imzalama                               │   │
│   │   🔑 ADMIN_API_SECRET         → Admin Panel ↔ Gateway güvenli iletişim       │   │
│   │   🔑 LANDING_API_KEY          → Landing Page ↔ Gateway güvenli iletişim      │   │
│   │   🔑 INTERNAL_SERVICE_KEY     → Gateway ↔ Intelligence güvenli iletişim      │   │
│   │                                                                               │   │
│   └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│   ┌─────────────────────────────────────────────────────────────────────────────┐   │
│   │                         MÜŞTERİ SEVİYESİ (Her Lisans İçin)                    │   │
│   │                                                                               │   │
│   │   🔑 GEMINI_API_KEY           → Müşterinin AI analiz kotası                  │   │
│   │   🔑 TELEGRAM_BOT_TOKEN       → Müşterinin özel Telegram botu                │   │
│   │   🔑 LICENSE_KEY              → Müşteri lisans anahtarı                      │   │
│   │   🔑 DEVICE_FINGERPRINT       → Cihaz kimliği                                │   │
│   │                                                                               │   │
│   └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│   ┌─────────────────────────────────────────────────────────────────────────────┐   │
│   │                         EXTERNAL SERVİSLER                                    │   │
│   │                                                                               │   │
│   │   🔑 DATABASE_URL             → PostgreSQL bağlantı dizesi                   │   │
│   │   🔑 MONGODB_URI              → MongoDB bağlantı dizesi                      │   │
│   │   🔑 REDIS_URL                → Redis bağlantı dizesi                        │   │
│   │   🔑 CHROMA_HOST              → ChromaDB endpoint                            │   │
│   │                                                                               │   │
│   └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔐 Detaylı Anahtar Referansı

### 1. Sistem Seviyesi Anahtarlar

#### ENCRYPTION_KEY
```
Kullanım:  Müşteri API key'lerini şifrelemek için (AES-256-GCM)
Format:    32 byte hex string (64 karakter)
Örnek:     a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6...
Oluşturma: openssl rand -hex 32
Nerede:    Gateway .env dosyası
Güvenlik:  🔴 KRİTİK - Sızarsa tüm şifreli veriler açığa çıkar
```

#### JWT_SECRET
```
Kullanım:  Admin panel oturum token'larını imzalamak
Format:    Minimum 256 bit (32 karakter+)
Oluşturma: openssl rand -base64 32
Nerede:    Gateway .env dosyası
Güvenlik:  🔴 KRİTİK - Token'lar taklit edilebilir
```

#### ADMIN_API_SECRET
```
Kullanım:  Admin Panel'in Gateway'e yaptığı isteklerde kimlik doğrulama
Format:    UUID v4 veya rastgele string
Oluşturma: uuidgen veya rastgele 32+ karakter
Nerede:    Gateway .env + Admin Panel .env
Güvenlik:  🟠 YÜKSEK - Admin işlemleri yetkisiz yapılabilir
Header:    X-Admin-Secret: <value>
```

#### LANDING_API_KEY
```
Kullanım:  Landing Page form gönderimlerinin doğrulanması
Format:    API key formatı (prefix + rastgele)
Örnek:     lp_live_a1b2c3d4e5f6g7h8i9j0
Nerede:    Gateway .env + Landing Page .env
Güvenlik:  🟡 ORTA - Lead spam'i önlenir
Header:    X-API-Key: <value>
```

#### INTERNAL_SERVICE_KEY
```
Kullanım:  Gateway ↔ Intelligence arasında güvenli iletişim
Format:    Rastgele 64 karakter
Oluşturma: openssl rand -hex 32
Nerede:    Gateway .env + Intelligence .env
Güvenlik:  🟠 YÜKSEK - Servisler arası güven
Header:    X-Internal-Key: <value>
```

---

### 2. Müşteri Seviyesi Anahtarlar

#### GEMINI_API_KEY (Müşteriye Özel)
```
Kullanım:  Google Gemini AI API erişimi
Format:    AIzaSy... (39 karakter)
Kaynak:    Google AI Studio (aistudio.google.com)
Saklanma:  PostgreSQL licenses tablosu (şifreli)
Şifreleme: AES-256-GCM ile ENCRYPTION_KEY kullanarak
Güvenlik:  🔴 KRİTİK - Müşteri kotası tüketilebilir
```

#### TELEGRAM_BOT_TOKEN (Müşteriye Özel)
```
Kullanım:  Her müşterinin özel Telegram botu
Format:    1234567890:ABCdefGHIjklMNOpqrsTUVwxyz (46 karakter)
Kaynak:    Telegram @BotFather
Saklanma:  PostgreSQL licenses tablosu (şifreli)
Webhook:   https://api.domizan.com/v1/webhook/telegram/<license_key>
Güvenlik:  🟠 YÜKSEK - Bot ele geçirilebilir
```

#### LICENSE_KEY
```
Kullanım:  Müşteri kimlik doğrulama
Format:    DOMIZAN-XXXX-YYYY-ZZZZ (23 karakter)
           XXXX: Paket tipi + cihaz sayısı (PRO5, ENT10, BAS3)
           YYYY-ZZZZ: Rastgele alfanumerik
Oluşturma: Gateway tarafından otomatik
Saklanma:  PostgreSQL licenses tablosu (plaintext)
Kullanım:  Desktop app X-License-Key header'ı
Güvenlik:  🟠 YÜKSEK - Lisans paylaşımı riski
```

#### DEVICE_FINGERPRINT
```
Kullanım:  Cihaz kimlik tespiti
Format:    SHA-256 hash (64 karakter hex)
Bileşenler:
  - Disk serial
  - CPU ID
  - MAC address
  - OS install date
Oluşturma: Desktop app tarafından
Saklanma:  PostgreSQL devices tablosu
Güvenlik:  🟡 ORTA - Cihaz takibi
```

---

### 3. Veritabanı Bağlantıları

#### DATABASE_URL (PostgreSQL)
```
Format:    postgresql://user:password@host:port/database
Örnek:     postgresql://domizan:secure_pass@localhost:5432/domizan
Güvenlik:  🔴 KRİTİK - Tüm lisans verileri
```

#### MONGODB_URI
```
Format:    mongodb://user:password@host:port/database
Örnek:     mongodb://localhost:27017/domizan
Güvenlik:  🟠 YÜKSEK - Belge ve pattern verileri
```

#### REDIS_URL
```
Format:    redis://[:password@]host:port[/database]
Örnek:     redis://localhost:6379/0
Güvenlik:  🟡 ORTA - Cache ve session verileri
```

---

## 📁 .env Dosya Yapıları

### Gateway (.env)

```bash
# ===============================================
# GATEWAY ENVIRONMENT VARIABLES
# ===============================================

# Server
PORT=3001
NODE_ENV=production

# Cryptography
ENCRYPTION_KEY=<64-char-hex>           # openssl rand -hex 32
JWT_SECRET=<32-char-base64>             # openssl rand -base64 32

# Service Authentication
ADMIN_API_SECRET=<uuid-v4>              # Admin Panel erişimi
LANDING_API_KEY=lp_live_<random>        # Landing Page erişimi
INTERNAL_SERVICE_KEY=<64-char-hex>      # Intelligence erişimi

# Databases
DATABASE_URL=postgresql://domizan:pass@localhost:5432/domizan
MONGODB_URI=mongodb://localhost:27017/domizan
REDIS_URL=redis://localhost:6379/0
CHROMA_HOST=http://localhost:8000

# Intelligence Service
INTELLIGENCE_URL=http://localhost:8001

# External (varsa fallback)
GEMINI_API_KEY_FALLBACK=AIzaSy...       # Müşterinin key'i yoksa kullanılacak
```

### Admin Panel (.env)

```bash
# ===============================================
# ADMIN PANEL ENVIRONMENT VARIABLES
# ===============================================

# API
VITE_GATEWAY_URL=http://localhost:3001  # veya https://api.domizan.com
VITE_ADMIN_API_SECRET=<uuid-v4>         # Gateway ile aynı olmalı

# App
VITE_APP_NAME=Domizan Admin
VITE_APP_VERSION=1.0.0
```

### Landing Page (.env)

```bash
# ===============================================
# LANDING PAGE ENVIRONMENT VARIABLES
# ===============================================

# API
VITE_GATEWAY_URL=http://localhost:3001
VITE_LANDING_API_KEY=lp_live_<random>   # Gateway ile aynı olmalı
```

### Intelligence (.env)

```bash
# ===============================================
# INTELLIGENCE SERVICE ENVIRONMENT VARIABLES
# ===============================================

# Server
PORT=8001

# Security
INTERNAL_SERVICE_KEY=<64-char-hex>      # Gateway ile aynı olmalı

# Databases
MONGODB_URI=mongodb://localhost:27017/domizan
CHROMA_HOST=http://localhost:8000

# Note: Gemini API key'ler müşteriye özel, Gateway'den gelir
```

### Desktop App (.env.production)

```bash
# ===============================================
# DESKTOP APP ENVIRONMENT (build-time)
# ===============================================

VITE_GATEWAY_URL=https://api.domizan.com
VITE_APP_VERSION=1.0.0

# License key kullanıcı tarafından runtime'da girilir
# Device fingerprint otomatik oluşturulur
```

---

## 🔄 Anahtar Rotasyonu

### Acil Durum Rotasyonu

```
┌───────────────────────────────────────────────────────────────────────────────────┐
│                          ANAHTAR ROTASYON PROSEDÜRÜ                                │
├───────────────────────────────────────────────────────────────────────────────────┤
│                                                                                    │
│  1. ENCRYPTION_KEY Sızdı                                                          │
│  ─────────────────────────                                                        │
│                                                                                    │
│  ⚠️ EN KRİTİK - Tüm şifreli veriler risk altında                                  │
│                                                                                    │
│  Adımlar:                                                                          │
│  a. Yeni ENCRYPTION_KEY oluştur                                                   │
│  b. Gateway'i durdur                                                              │
│  c. Migration script çalıştır (eski key ile decrypt, yeni key ile encrypt)        │
│  d. .env güncelle                                                                 │
│  e. Gateway'i başlat                                                              │
│                                                                                    │
│  ═══════════════════════════════════════════════════════════════════════════════  │
│                                                                                    │
│  2. JWT_SECRET Sızdı                                                              │
│  ──────────────────                                                               │
│                                                                                    │
│  ⚠️ Admin oturumları risk altında                                                 │
│                                                                                    │
│  Adımlar:                                                                          │
│  a. Yeni JWT_SECRET oluştur                                                       │
│  b. .env güncelle                                                                 │
│  c. Gateway yeniden başlat                                                        │
│  d. Tüm admin'ler otomatik logout olur (yeni giriş gerekir)                       │
│                                                                                    │
│  ═══════════════════════════════════════════════════════════════════════════════  │
│                                                                                    │
│  3. Müşteri GEMINI_API_KEY Sızdı                                                  │
│  ──────────────────────────────                                                   │
│                                                                                    │
│  ⚠️ Tek müşteri etkilenir                                                         │
│                                                                                    │
│  Adımlar:                                                                          │
│  a. Google AI Studio'dan yeni key oluştur                                         │
│  b. Eski key'i iptal et                                                           │
│  c. Admin Panel'den müşteri lisansını güncelle                                    │
│                                                                                    │
└───────────────────────────────────────────────────────────────────────────────────┘
```

---

## ✅ Güvenlik Kontrol Listesi

| Kontrol | Durum | Açıklama |
|---------|-------|----------|
| Tüm key'ler .env'de | ☐ | Kod içinde hardcoded key yok |
| .env .gitignore'da | ☐ | Repo'ya commit edilmemeli |
| Production key'ler farklı | ☐ | Dev ve prod ayrı key'ler |
| Key uzunlukları yeterli | ☐ | Minimum 32 karakter |
| Şifreleme aktif | ☐ | Gemini/Telegram key'ler şifreli |
| HTTPS zorunlu | ☐ | Production'da TLS aktif |
| Rate limiting aktif | ☐ | API abuse koruması |
