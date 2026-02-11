# Runbook - Operasyonel Prosedürler

> **Doküman:** 10-OPERASYON-DESTEK/02-runbook.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🔥 RB-001: Gateway Yanıt Vermiyor

### Belirtiler
- API istekleri timeout
- Health check başarısız
- Kullanıcılar bağlanamıyor

### Teşhis
```bash
# Pod durumu
kubectl get pods -l app=gateway

# Loglar
kubectl logs -l app=gateway --tail=100

# Resource kullanımı
kubectl top pods -l app=gateway
```

### Çözüm
1. Pod'u restart et:
   ```bash
   kubectl rollout restart deployment/gateway
   ```
2. Hala sorun varsa, önceki versiyona rollback
3. Database bağlantısını kontrol et

---

## 🔥 RB-002: Gemini API Hatası

### Belirtiler
- Belge analizi çalışmıyor
- "API Error" logları

### Teşhis
```bash
# API Key kontrolü
echo $GEMINI_API_KEY | base64 -d | head -c 10

# Quota kontrolü - Google Cloud Console
```

### Çözüm
1. API key'i kontrol et
2. Quota aşımı varsa bekle veya plan upgrade
3. Geçici olarak rate limiting artır

---

## 🔥 RB-003: Database Bağlantı Hatası

### Belirtiler
- "Connection refused" logları
- CRUD operasyonları başarısız

### Teşhis
```bash
# PostgreSQL durumu
pg_isready -h $DB_HOST -p 5432

# Bağlantı sayısı
psql -c "SELECT count(*) FROM pg_stat_activity;"
```

### Çözüm
1. DB pod'unu kontrol et
2. Connection pool sıfırla
3. Max connections artır (gerekirse)

---

## 🔥 RB-004: Disk Dolu

### Belirtiler
- Log yazılamıyor
- Upload başarısız

### Teşhis
```bash
df -h
du -sh /var/log/*
```

### Çözüm
1. Eski logları temizle
2. Log rotation kontrolü
3. Disk scale (gerekirse)

---

## 🔥 RB-005: Yüksek Latency

### Belirtiler
- API yanıt süreleri > 2s
- Kullanıcı şikayetleri

### Teşhis
```bash
# Metrics
kubectl top pods

# Tracing
# Jaeger/Grafana kontrol
```

### Çözüm
1. Yoğun işlemleri tespit et
2. Cache kontrolü
3. Horizontal scale (pod sayısı artır)

---

## 📞 Escalation Path

| Seviye | Konu | Kişi |
|--------|------|------|
| L1 | Genel sorunlar | On-call |
| L2 | Karmaşık teknik | Sr. Dev |
| L3 | Kritik/güvenlik | Lead + CEO |

---

*Runbook güncel tutulmalı, her olay sonrası gözden geçirin.*
