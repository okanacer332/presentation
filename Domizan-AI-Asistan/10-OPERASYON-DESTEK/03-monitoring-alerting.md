# Monitoring ve Alerting

> **Doküman:** 10-OPERASYON-DESTEK/03-monitoring-alerting.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 📊 Monitoring Stack

| Araç | Kullanım |
|------|----------|
| Prometheus | Metrics toplama |
| Grafana | Dashboards |
| Loki | Log aggregation |
| AlertManager | Alert routing |

---

## 📈 Key Metrics

### İş Metrikleri
| Metrik | Alarm Eşiği |
|--------|-------------|
| Günlük belge sayısı | < 1000 (warning) |
| Aktif lisans sayısı | Trend azalma |
| Churn rate | > 5% |

### Teknik Metrikler
| Metrik | Warning | Critical |
|--------|---------|----------|
| API Latency (p99) | > 1s | > 3s |
| Error Rate | > 1% | > 5% |
| CPU Usage | > 70% | > 90% |
| Memory Usage | > 70% | > 90% |
| Disk Usage | > 70% | > 85% |

---

## 🚨 Alert Kuralları

### Critical Alerts (Page)
```yaml
- alert: GatewayDown
  expr: up{job="gateway"} == 0
  for: 1m
  severity: critical
  
- alert: HighErrorRate
  expr: rate(http_errors_total[5m]) > 0.05
  for: 5m
  severity: critical
```

### Warning Alerts (Slack)
```yaml
- alert: HighLatency
  expr: http_request_duration_seconds{quantile="0.99"} > 1
  for: 10m
  severity: warning
  
- alert: LowDiskSpace
  expr: disk_free_percent < 30
  for: 15m
  severity: warning
```

---

## 📱 Alert Routing

| Severity | Kanal | Zaman |
|----------|-------|-------|
| Critical | SMS + Slack | 7/24 |
| Warning | Slack | İş saatleri |
| Info | Email digest | Günlük |

---

## 📋 Grafana Dashboards

### System Overview
- Uptime
- Request rate
- Error rate
- Latency percentiles

### Business Metrics
- Daily documents
- Active licenses
- Token usage
- Revenue tracking

---

## 🔄 On-Call Rotasyonu

| Hafta | Primary | Secondary |
|-------|---------|-----------|
| 1 | Dev A | Dev B |
| 2 | Dev B | Dev C |
| 3 | Dev C | Dev A |

---

*Proaktif monitoring, reaktif sorun gidermeden iyidir.*
