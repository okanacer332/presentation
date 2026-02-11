# Master Test Planı

> **Doküman:** 09-KA-TEST/01-master-test-plani.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🎯 Test Hedefleri

| Hedef | Metrik |
|-------|--------|
| Kod coverage | >70% |
| Critical bug | 0 (release'de) |
| Regression | <5% |
| Test automation | >80% |

---

## 🧪 Test Seviyeleri

### 1. Unit Test
- **Araç:** Jest
- **Kapsam:** Fonksiyonlar, modüller
- **Sorumluluk:** Geliştirici
- **Frekans:** Her commit

### 2. Integration Test
- **Araç:** Jest + Supertest
- **Kapsam:** API endpoints, servisler arası
- **Sorumluluk:** Geliştirici
- **Frekans:** Her PR

### 3. E2E Test
- **Araç:** Playwright
- **Kapsam:** Kullanıcı akışları
- **Sorumluluk:** QA + Geliştirici
- **Frekans:** Nightly + PR

### 4. Manuel Test
- **Kapsam:** Exploratory, edge cases
- **Sorumluluk:** QA
- **Frekans:** Sprint sonu

---

## 📊 Test Matrisi

| Özellik | Unit | Integration | E2E | Manuel |
|---------|------|-------------|-----|--------|
| Lisans aktivasyon | ✅ | ✅ | ✅ | ✅ |
| Belge analizi | ✅ | ✅ | ✅ | ✅ |
| Mükellef eşleştirme | ✅ | ✅ | ✅ | ✅ |
| Telegram komutları | ✅ | ✅ | ❌ | ✅ |
| Admin panel | ✅ | ✅ | ✅ | ✅ |
| Çoklu cihaz | ✅ | ✅ | ❌ | ✅ |

---

## 🔄 Test Ortamları

| Ortam | Kullanım | Veri |
|-------|----------|------|
| Local | Development | Mock data |
| CI | Automated tests | Test fixtures |
| Staging | QA testing | Seeded data |

---

## 📅 Test Takvimi

| Aktivite | Zaman |
|----------|-------|
| Unit tests | Her PR |
| Integration tests | Her PR |
| E2E tests | Nightly + release |
| Regression test | Sprint sonu |
| Smoke test | Her deployment |

---

## 🐛 Bug Öncelikleri

| Öncelik | Tanım | SLA |
|---------|-------|-----|
| P0 - Critical | Sistem çalışmıyor | Immediate |
| P1 - High | Major fonksiyon bozuk | 24 saat |
| P2 - Medium | Minor fonksiyon bozuk | Sprint içi |
| P3 - Low | Kozmetik | Backlog |

---

*Kaliteli test, kaliteli ürün demektir.*
