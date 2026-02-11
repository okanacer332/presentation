# Güvenlik Politikası ve Tehdit Modeli

> **Doküman:** 07-TEKNIK-MIMARI/06-guvenlik-politikasi.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🔐 Güvenlik Prensipleri

| Prensip | Açıklama |
|---------|----------|
| Defense in Depth | Çoklu güvenlik katmanı |
| Least Privilege | Minimum yetki prensibi |
| Fail Secure | Hata durumunda güvenli davranış |
| Zero Trust | Kimseye otomatik güvenme |

---

## 🛡️ Tehdit Modeli (STRIDE)

### Spoofing (Kimlik Sahteciliği)

| Tehdit | Etki | Azaltma |
|--------|------|---------|
| Lisans anahtarı çalınması | Yüksek | Cihaz fingerprinting |
| Admin hesabı ele geçirme | Kritik | 2FA, güçlü parola |
| API key sızıntısı | Yüksek | Şifreli depolama |

### Tampering (Kurcalama)

| Tehdit | Etki | Azaltma |
|--------|------|---------|
| İletişim manipülasyonu | Yüksek | HTTPS, TLS 1.3 |
| Veri tabanı değişikliği | Kritik | Access control, audit log |
| Belge değişikliği | Orta | Hash doğrulama |

### Repudiation (İnkar)

| Tehdit | Etki | Azaltma |
|--------|------|---------|
| İşlem inkarı | Orta | Audit logging |
| Admin aksiyonları | Yüksek | Immutable logs |

### Information Disclosure (Bilgi Sızıntısı)

| Tehdit | Etki | Azaltma |
|--------|------|---------|
| API key görünürlüğü | Kritik | Encryption at rest |
| Belge içeriği sızıntısı | Yüksek | Access control, KVKK |
| Log dosyalarında veri | Orta | PII maskeleme |

### Denial of Service (Hizmet Engelleme)

| Tehdit | Etki | Azaltma |
|--------|------|---------|
| API flood | Yüksek | Rate limiting |
| Büyük dosya upload | Orta | Size limits |
| Resource exhaustion | Yüksek | Timeout, quotas |

### Elevation of Privilege (Yetki Yükseltme)

| Tehdit | Etki | Azaltma |
|--------|------|---------|
| Admin yetkisi alma | Kritik | RBAC, validation |
| Başka lisansa erişim | Yüksek | Tenant isolation |

---

## 🔒 Güvenlik Kontrolleri

### Kimlik Doğrulama

| Sistem | Yöntem |
|--------|--------|
| Desktop App | Lisans Key + Device Fingerprint |
| Admin Panel | Email + Password + JWT |
| Telegram | Chat ID + Lisans bağlama |
| API (Inter-service) | Shared secret |

### Şifreleme

| Veri | Yöntem |
|------|--------|
| Transport | TLS 1.3 |
| At Rest (API Keys) | AES-256-GCM |
| Passwords | bcrypt (cost 12) |
| Lisans Keys | HMAC-SHA256 |

### Erişim Kontrolü

```
Admin Rolleri:
├── super_admin
│   ├── Tüm yetkiler
│   └── Admin yönetimi
├── admin
│   ├── Lead/Lisans yönetimi
│   ├── Cihaz onayı
│   └── Analytics görünümü
└── viewer
    └── Sadece okuma
```

---

## 📋 Güvenlik Kontrol Listesi

### Deployment

- [ ] HTTPS zorunlu
- [ ] Güvenlik header'ları (HSTS, CSP, X-Frame-Options)
- [ ] Rate limiting aktif
- [ ] CORS doğru yapılandırılmış
- [ ] Secrets environment variable'da

### Kod

- [ ] SQL injection koruması (parameterized queries)
- [ ] XSS koruması (output encoding)
- [ ] CSRF token (state-changing işlemler)
- [ ] Input validation
- [ ] Error handling (detay gösterme)

### Altyapı

- [ ] Firewall kuralları
- [ ] DB erişimi kısıtlı (internal network)
- [ ] Log rotasyonu
- [ ] Backup şifrelemesi

---

## 📊 Güvenlik Metrikleri

| Metrik | Hedef |
|--------|-------|
| Security vulnerabilities (critical) | 0 |
| Time to patch (critical) | < 24 saat |
| Failed login attempts before lockout | 5 |
| Session timeout | 24 saat |
| Password minimum length | 12 karakter |

---

## 🔄 İnceleme Takvimi

| Aktivite | Sıklık |
|----------|--------|
| Dependency audit | Haftalık (otomatik) |
| Kod güvenlik taraması | PR bazlı |
| Penetration testing | Yıllık |
| Access review | Çeyreklik |

---

*Güvenlik herkesin sorumluluğudur.*
