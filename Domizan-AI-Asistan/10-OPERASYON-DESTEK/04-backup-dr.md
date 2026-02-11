# Backup ve Disaster Recovery

> **Doküman:** 10-OPERASYON-DESTEK/04-backup-dr.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 💾 Backup Stratejisi

### PostgreSQL

| Tip | Frekans | Retention |
|-----|---------|-----------|
| Full backup | Günlük | 30 gün |
| Incremental | Saatlik | 7 gün |
| Point-in-time | WAL logs | 24 saat |

```bash
# Full backup
pg_dumpall -U postgres > backup_$(date +%Y%m%d).sql

# Restore
psql -U postgres < backup_20260205.sql
```

### MongoDB

| Tip | Frekans | Retention |
|-----|---------|-----------|
| Full backup | Günlük | 30 gün |
| Oplog | Continuous | 7 gün |

```bash
# Backup
mongodump --out /backup/$(date +%Y%m%d)

# Restore
mongorestore /backup/20260205/
```

---

## 🔄 RTO ve RPO

| Metrik | Hedef |
|--------|-------|
| **RPO** (Recovery Point Objective) | 1 saat |
| **RTO** (Recovery Time Objective) | 4 saat |

---

## 🏥 Disaster Recovery Planı

### Seviye 1: Tek Servis Çökmesi
1. Otomatik pod restart (Kubernetes)
2. Health check başarısız → restart
3. RTO: < 5 dakika

### Seviye 2: Veritabanı Sorunu
1. Replica'ya failover
2. Sorun giderilince geri dön
3. RTO: < 30 dakika

### Seviye 3: Bölgesel Felaket
1. Farklı region'a failover
2. DNS güncellemesi
3. Backup'tan restore
4. RTO: < 4 saat

---

## ✅ DR Test Takvimi

| Test | Frekans |
|------|---------|
| Backup restore testi | Aylık |
| Failover drill | Çeyreklik |
| Full DR simulation | Yıllık |

---

*Test edilmemiş backup, backup değildir.*
