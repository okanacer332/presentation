# CI/CD Pipeline Dokümantasyonu

> **Doküman:** 08-GELISTIRME-SURECLERI/03-cicd-pipeline.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🔄 Pipeline Genel Bakış

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              CI/CD PIPELINE                                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐          │
│   │  Code   │───▶│  Build  │───▶│  Test   │───▶│ Deploy  │───▶│  Verify │          │
│   │  Push   │    │         │    │         │    │         │    │         │          │
│   └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘          │
│                                                                                      │
│   Trigger:       Actions:       Actions:       Actions:       Actions:              │
│   • PR open      • npm install  • lint         • staging      • smoke test          │
│   • Push         • build        • unit test    • production   • health check        │
│   • Tag          • type check   • e2e test                                          │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ GitHub Actions Workflows

### PR Check Pipeline

```yaml
# .github/workflows/pr-check.yml
name: PR Check

on:
  pull_request:
    branches: [develop, main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test -- --coverage

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
```

### Deploy Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run build
      - run: npm run deploy:staging

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - run: npm run deploy:production
```

---

## 📦 Build Outputs

| Proje | Output | Destination |
|-------|--------|-------------|
| Gateway | Docker image | Container Registry |
| Intelligence | Docker image | Container Registry |
| Desktop | .exe/.dmg | GitHub Releases |
| Admin Panel | Static files | CDN |
| Landing Page | Static files | CDN |

---

## 🌍 Ortamlar

| Ortam | Trigger | URL |
|-------|---------|-----|
| Development | Local | localhost |
| Staging | develop branch | staging.domizan.com |
| Production | main branch (tag) | domizan.com |

---

## ✅ Quality Gates

| Gate | Threshold | Blocking |
|------|-----------|----------|
| Lint errors | 0 | ✅ |
| Test coverage | >70% | ✅ |
| Build success | Required | ✅ |
| PR approval | ≥1 | ✅ |
| E2E tests | Pass | ✅ |

---

## 🔐 Secrets Management

| Secret | Scope | Storage |
|--------|-------|---------|
| GEMINI_API_KEY | Production | GitHub Secrets |
| DATABASE_URL | Per env | GitHub Secrets |
| JWT_SECRET | Per env | GitHub Secrets |

---

## 📊 Pipeline Metrikleri

| Metrik | Hedef |
|--------|-------|
| Build time | < 5 dakika |
| Test time | < 10 dakika |
| Deploy time | < 5 dakika |
| Pipeline success rate | > 95% |

---

*Otomatik pipeline güvenilir deployment sağlar.*
