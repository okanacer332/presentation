# Ürün Yol Haritası (Product Roadmap)

> **Doküman:** 05-STRATEJI-URUN/07-urun-yol-haritasi.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🗺️ Stratejik Görünüm

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              DOMİZAN ÜRÜN YOL HARİTASI 2026-2027                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ╔═══════════════════════════════════════════════════════════════════════════════╗  │
│  ║                                  VİZYON                                        ║  │
│  ║  "Türkiye'nin en akıllı mali müşavir asistanı"                                ║  │
│  ╚═══════════════════════════════════════════════════════════════════════════════╝  │
│                                                                                      │
│  ┌───────────────┬───────────────┬───────────────┬───────────────┬───────────────┐  │
│  │    Q1 2026    │    Q2 2026    │    Q3 2026    │    Q4 2026    │    2027       │  │
│  │    ────────   │    ────────   │    ────────   │    ────────   │    ────       │  │
│  │               │               │               │               │               │  │
│  │   ┌───────┐   │   ┌───────┐   │   ┌───────┐   │   ┌───────┐   │   ┌───────┐   │  │
│  │   │ ALPHA │   │   │ BETA  │   │   │LAUNCH │   │   │GROWTH │   │   │EXPAND │   │  │
│  │   └───────┘   │   └───────┘   │   └───────┘   │   └───────┘   │   └───────┘   │  │
│  │               │               │               │               │               │  │
│  │  • MVP Dev    │  • Telegram   │  • Public     │  • Muhasebe   │  • Federated  │  │
│  │  • Windows    │  • Öğrenme    │  • Auto-upd   │    entegre    │    learning   │  │
│  │  • 10 pilot   │  • Mac OS     │  • 100 müşt   │  • Enterprise │  • Multi-lang │  │
│  │               │  • 50 müşteri │               │  • API public │  • 1000 müşt  │  │
│  │               │               │               │               │               │  │
│  └───────────────┴───────────────┴───────────────┴───────────────┴───────────────┘  │
│                                                                                      │
│  🎯 Tema: Temel → Genişleme → Ölçeklendirme → Monetizasyon → Platform             │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📅 Q1 2026 - Alpha (Ocak-Mart)

### Tema: Temel Altyapı ve MVP

| Özellik | Durum | Hedef Tarih | Sorumlu |
|---------|-------|-------------|---------|
| **Gateway API** | 🔄 | 15 Şub | Backend |
| **Intelligence servis** | 🔄 | 28 Şub | AI |
| **Desktop app (Windows)** | 🔄 | 15 Mar | Frontend |
| **Admin panel (basic)** | ⏳ | 20 Mar | Frontend |
| **Landing page** | ✅ | Tamamlandı | - |
| **Lisans doğrulama** | 🔄 | 10 Mar | Backend |
| **PostgreSQL + MongoDB** | ✅ | Tamamlandı | DevOps |

### Milestone: Alpha Release (31 Mart)
- [ ] 10 pilot müşteri aktif
- [ ] Belge analizi %85+ doğruluk
- [ ] Temel lisans yönetimi çalışıyor

---

## 📅 Q2 2026 - Beta (Nisan-Haziran)

### Tema: Öğrenme ve Genişleme

| Özellik | Durum | Hedef Tarih | Sorumlu |
|---------|-------|-------------|---------|
| **Telegram entegrasyonu** | ⏳ | 30 Nis | Backend |
| **Öğrenme sistemi v1** | ⏳ | 15 May | AI |
| **macOS desteği** | ⏳ | 31 May | Frontend |
| **Cihaz yönetimi (multi)** | ⏳ | 15 Haz | Backend |
| **Admin analytics** | ⏳ | 30 Haz | Frontend |
| **ChromaDB vektör arama** | ⏳ | 30 Nis | AI |

### Milestone: Beta Release (30 Haziran)
- [ ] 50 aktif müşteri
- [ ] Telegram komutları çalışıyor
- [ ] Öğrenme sistemi aktif
- [ ] NPS anketi yapıldı

---

## 📅 Q3 2026 - Launch (Temmuz-Eylül)

### Tema: Public Launch ve Ölçeklendirme

| Özellik | Durum | Hedef Tarih | Sorumlu |
|---------|-------|-------------|---------|
| **Otomatik güncelleme** | ⏳ | 15 Tem | Frontend |
| **Token kota yönetimi** | ⏳ | 31 Tem | Backend |
| **Performans optimizasyonu** | ⏳ | 31 Ağu | All |
| **Güvenlik audit** | ⏳ | 15 Eyl | Security |
| **Onboarding iyileştirme** | ⏳ | 30 Eyl | UX |
| **Referral program** | ⏳ | 30 Eyl | Growth |

### Milestone: Public Launch (30 Eylül)
- [ ] 100 aktif müşteri
- [ ] Churn < %5
- [ ] Uptime %99.5+
- [ ] Belgede doğruluk %90+

---

## 📅 Q4 2026 - Growth (Ekim-Aralık)

### Tema: Monetizasyon ve Entegrasyon

| Özellik | Durum | Hedef Tarih | Sorumlu |
|---------|-------|-------------|---------|
| **Luca entegrasyonu** | ⏳ | 31 Eki | Backend |
| **Mikro entegrasyonu** | ⏳ | 30 Kas | Backend |
| **Enterprise paket** | ⏳ | 15 Kas | Product |
| **API (3rd party)** | ⏳ | 31 Ara | Backend |
| **Gelişmiş analytics** | ⏳ | 31 Ara | Frontend |

### Milestone: Growth (31 Aralık)
- [ ] 200+ aktif müşteri
- [ ] MRR 100,000+ TL
- [ ] En az 1 muhasebe yazılımı entegrasyonu
- [ ] Enterprise müşteri (1+)

---

## 📅 2027 - Expand

### Tema: Platform ve Uluslararası

| Özellik | Hedef Çeyrek |
|---------|--------------|
| Federated learning | Q1 |
| Public API marketplace | Q2 |
| Multi-language support | Q2 |
| Uluslararası genişleme (1+ ülke) | Q3 |
| 1000 aktif müşteri | Q4 |
| Series A hazırlık | Q4 |

---

## 📊 Özellik Durumu Özeti

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              ÖZELLİK DURUMU MATRİSİ                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   Kategori            ✅ Tamamlandı   🔄 Devam    ⏳ Planlandı    ❓ Düşünülüyor    │
│   ────────            ────────────    ──────      ──────────      ────────────      │
│                                                                                      │
│   Altyapı                  4            2            1               0              │
│   Desktop App              1            3            2               1              │
│   AI/ML                    1            2            3               2              │
│   Telegram                 0            0            4               1              │
│   Admin Panel              1            2            3               1              │
│   Entegrasyonlar           0            0            3               3              │
│                                                                                      │
│   TOPLAM                   7           9            16               8              │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🚨 Riskler ve Bağımlılıklar

| Risk | Etki | Olasılık | Azaltma |
|------|------|----------|---------|
| Gemini API değişikliği | Yüksek | Orta | Abstraction layer |
| Pilot müşteri gecikmesi | Orta | Orta | Paralel müşteri adayları |
| macOS geliştirme gecikmesi | Düşük | Orta | Windows öncelikli |
| Entegrasyon API erişimi | Orta | Düşük | Alternatif yöntemler |

---

## 🔄 Güncelleme Sıklığı

- **Haftalık:** Sprint review'da roadmap kontrolü
- **Aylık:** Stratejik güncelleme
- **Çeyreklik:** Full roadmap revizyonu

---

*Bu roadmap yaşayan bir dokümandır ve pazar koşullarına göre güncellenecektir.*
