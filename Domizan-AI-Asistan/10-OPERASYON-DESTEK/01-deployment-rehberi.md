# Deployment Rehberi

> **Doküman:** 10-OPERASYON-DESTEK/01-deployment-rehberi.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🚀 Deployment Türleri

| Tür | Trigger | Ortam |
|-----|---------|-------|
| Staging | develop merge | staging.domizan.com |
| Production | main merge + tag | domizan.com |
| Hotfix | hotfix branch → main | Immediate |

---

## 📦 Bileşen Deployment

### Gateway
```bash
# Build
docker build -t domizan-gateway:v1.2.3 .

# Push
docker push registry/domizan-gateway:v1.2.3

# Deploy
kubectl apply -f k8s/gateway-deployment.yaml
```

### Intelligence
```bash
docker build -t domizan-intelligence:v1.2.3 .
docker push registry/domizan-intelligence:v1.2.3
kubectl apply -f k8s/intelligence-deployment.yaml
```

### Desktop App
```bash
# Build
npm run build:win
npm run build:mac

# Upload to GitHub Releases
gh release create v1.2.3 dist/*.exe dist/*.dmg
```

### Admin Panel
```bash
npm run build
# Deploy to CDN
aws s3 sync dist/ s3://admin.domizan.com/
```

---

## ✅ Pre-Deployment Checklist

- [ ] Tüm testler geçiyor
- [ ] Code review tamamlandı
- [ ] Staging'de test edildi
- [ ] Environment variables kontrol edildi
- [ ] Database migrations hazır
- [ ] Rollback planı belirlendi

---

## 🔄 Rollback Prosedürü

1. Problemi tespit et ve logları topla
2. Önceki versiyona rollback
   ```bash
   kubectl rollout undo deployment/gateway
   ```
3. Monitoring ile doğrula
4. Post-mortem oluştur

---

## 📊 Health Checks

| Endpoint | Beklenen |
|----------|----------|
| GET /health | 200 OK |
| GET /ready | 200 OK |

---

*Her deployment risk taşır, hazırlıklı olun.*
