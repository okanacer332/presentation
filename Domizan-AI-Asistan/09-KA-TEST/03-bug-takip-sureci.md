# Bug Takip Süreci

> **Doküman:** 09-KA-TEST/03-bug-takip-sureci.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🐛 Bug Yaşam Döngüsü

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              BUG YAŞAM DÖNGÜSÜ                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   ┌─────────┐     ┌───────────┐     ┌──────────┐     ┌────────────┐     ┌────────┐ │
│   │   NEW   │────▶│  TRIAGED  │────▶│ ASSIGNED │────▶│ IN PROGRESS│────▶│  FIXED │ │
│   └─────────┘     └───────────┘     └──────────┘     └────────────┘     └────┬───┘ │
│                         │                                                     │     │
│                         │ Won't Fix                                           │     │
│                         ▼                                         ┌───────────▼───┐ │
│                   ┌──────────┐                                    │   VERIFIED    │ │
│                   │  CLOSED  │◀───────────────────────────────────│   (QA test)   │ │
│                   │(won't fix)│                                   └───────┬───────┘ │
│                   └──────────┘                     Fail                   │ Pass    │
│                         ▲                            │                    │         │
│                         │                            ▼                    ▼         │
│                         │                      ┌──────────┐         ┌──────────┐    │
│                         └──────────────────────│ REOPENED │         │  CLOSED  │    │
│                                                └──────────┘         └──────────┘    │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Bug Report Template

```markdown
## Başlık
[Kısa, açıklayıcı başlık]

## Öncelik
- [ ] P0 - Critical
- [ ] P1 - High
- [ ] P2 - Medium
- [ ] P3 - Low

## Ortam
- OS: [Windows 11 / macOS 14]
- Versiyon: [v1.2.3]
- Modül: [Desktop / Admin / Gateway]

## Adımlar
1. [İlk adım]
2. [İkinci adım]
3. [Hatayı tetikleyen adım]

## Beklenen Davranış
[Ne olmalıydı?]

## Gerçekleşen Davranış
[Ne oldu?]

## Ekran Görüntüsü / Log
[Varsa ekle]

## Ek Notlar
[Şüpheliler, workaround]
```

---

## ⏱️ SLA

| Öncelik | Yanıt | Çözüm |
|---------|-------|-------|
| P0 | < 1 saat | < 4 saat |
| P1 | < 4 saat | < 24 saat |
| P2 | < 1 gün | Sprint içi |
| P3 | Sprint planlama | Backlog |

---

## 📊 Metrikler

| Metrik | Hedef |
|--------|-------|
| Mean Time to Resolution (P0) | < 4 saat |
| Bug escape rate | < 5% |
| Reopen rate | < 10% |

---

*Hızlı ve etkili bug yönetimi kaliteyi artırır.*
