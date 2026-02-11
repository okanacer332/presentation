# Domizan AI Asistan - Dokümantasyon

> **Versiyon:** 5.0
> **Son Güncelleme:** 5 Şubat 2026
> **Metodoloji:** BMAD (Build, Measure, Analyze, Decide)

---

## 📚 Dokümantasyon İndeksi

### Genel Bakış

- [00-GENEL-BAKIS.md](./00-GENEL-BAKIS.md) - Proje vizyonu ve sistem bileşenleri

---

### 1. 🏗️ Mimari

| Doküman | Açıklama |
|---------|----------|
| [genel-mimari.md](./01-MIMARI/genel-mimari.md) | Mikroservis yapısı, bileşen iletişimi, Docker |
| [port-haritasi.md](./01-MIMARI/port-haritasi.md) | Tüm port yapılandırmaları, URL'ler |
| [veritabani-semasi.md](./01-MIMARI/veritabani-semasi.md) | PostgreSQL, MongoDB, ChromaDB, Redis şemaları |

---

### 2. 🔄 Kullanıcı Akışları

| # | Akış | Açıklama |
|---|------|----------|
| 01 | [landing-page-akisi.md](./02-KULLANICI-AKISLARI/01-landing-page-akisi.md) | Form → Lead → Admin Panel |
| 02 | [lisans-aktivasyonu.md](./02-KULLANICI-AKISLARI/02-lisans-aktivasyonu.md) | İlk aktivasyon, fingerprint |
| 03 | [coklu-cihaz-akisi.md](./02-KULLANICI-AKISLARI/03-coklu-cihaz-akisi.md) | Multi-device, admin onayı |
| 04 | [belge-analiz-akisi.md](./02-KULLANICI-AKISLARI/04-belge-analiz-akisi.md) | AI analiz, doğrulama, öğrenme |
| 05 | [telegram-akisi.md](./02-KULLANICI-AKISLARI/05-telegram-akisi.md) | RAG, brif, hatırlatma |
| 06 | [admin-panel-akisi.md](./02-KULLANICI-AKISLARI/06-admin-panel-akisi.md) | Dashboard, lisans, lead, cihaz |
| 07 | [lisans-api-telegram-baglama.md](./02-KULLANICI-AKISLARI/07-lisans-api-telegram-baglama.md) | Müşteriye özel API key + Bot |
| 08 | [otomatik-guncelleme.md](./02-KULLANICI-AKISLARI/08-otomatik-guncelleme.md) | Electron auto-update, versiyon |
| 09 | [dinamik-telegram-hatirlaticilar.md](./02-KULLANICI-AKISLARI/09-dinamik-telegram-hatirlaticilar.md) | AI zamanlar, öğrenme |

---

### 3. 🚀 Kurulum Rehberleri

| Doküman | Açıklama |
|---------|----------|
| [01-sifirdan-kurulum.md](./03-KURULUM/01-sifirdan-kurulum.md) | Tam kurulum (BMAD, Docker, packages) |
| [02-docker-ortami.md](./03-KURULUM/02-docker-ortami.md) | Docker servisleri, init scripts |

---

### 4. 📡 API Referans

| Doküman | Açıklama |
|---------|----------|
| [01-api-anahtarlari-referans.md](./04-API/01-api-anahtarlari-referans.md) | Tüm API key'ler, .env yapıları, güvenlik |
| [02-uctan-uca-landing-admin.md](./04-API/02-uctan-uca-landing-admin.md) | Landing → Gateway → Admin Panel akışı |
| [03-uctan-uca-desktop-intelligence.md](./04-API/03-uctan-uca-desktop-intelligence.md) | Desktop → Gateway → Intelligence akışı |
| [04-uctan-uca-telegram.md](./04-API/04-uctan-uca-telegram.md) | Telegram webhook, bot komutları |
| [05-uctan-uca-admin-gateway.md](./04-API/05-uctan-uca-admin-gateway.md) | Admin Panel ↔ Gateway tüm API'lar |

---

### 5. 📊 Strateji & Ürün

| Doküman | Açıklama |
|---------|----------|
| [01-vizyon-misyon.md](./05-STRATEJI-URUN/01-vizyon-misyon.md) | Proje vizyonu ve misyonu |
| [02-hedef-kitle-pazar-analizi.md](./05-STRATEJI-URUN/02-hedef-kitle-pazar-analizi.md) | Hedef kitle ve pazar analizi |
| [03-kullanici-personalar.md](./05-STRATEJI-URUN/03-kullanici-personalar.md) | Kullanıcı personaları |
| [04-kullanici-hikayeleri.md](./05-STRATEJI-URUN/04-kullanici-hikayeleri.md) | Kullanıcı hikayeleri ve senaryolar |
| [05-kullanim-senaryolari.md](./05-STRATEJI-URUN/05-kullanim-senaryolari.md) | Detaylı kullanım senaryoları |
| [06-prd-urun-gereksinimleri.md](./05-STRATEJI-URUN/06-prd-urun-gereksinimleri.md) | Ürün gereksinimleri (PRD) |
| [07-urun-yol-haritasi.md](./05-STRATEJI-URUN/07-urun-yol-haritasi.md) | Ürün yol haritası (roadmap) |
| [08-ozellik-onceliklendirme.md](./05-STRATEJI-URUN/08-ozellik-onceliklendirme.md) | Özellik önceliklendirme matrisi |
| [09-kpi-basari-metrikleri.md](./05-STRATEJI-URUN/09-kpi-basari-metrikleri.md) | KPI ve başarı metrikleri |

---

### 6. 🎨 UX/UI & Tasarım

| Doküman | Açıklama |
|---------|----------|
| [01-site-haritasi.md](./06-UX-UI-TASARIM/01-site-haritasi.md) | Site haritası (sitemap) |
| [02-kullanici-akis-diyagramlari.md](./06-UX-UI-TASARIM/02-kullanici-akis-diyagramlari.md) | Kullanıcı akış diyagramları |
| [03-bilgi-mimarisi.md](./06-UX-UI-TASARIM/03-bilgi-mimarisi.md) | Bilgi mimarisi blueprint |
| [04-wireframes.md](./06-UX-UI-TASARIM/04-wireframes.md) | Low-fidelity wireframe'ler |
| [05-tasarim-sistemi.md](./06-UX-UI-TASARIM/05-tasarim-sistemi.md) | Tasarım sistemi (design system) |
| [06-erisilebilirlik.md](./06-UX-UI-TASARIM/06-erisilebilirlik.md) | Erişilebilirlik rehberi (A11Y) |

---

### 7. 🛠️ Teknik Mimari

| Doküman | Açıklama |
|---------|----------|
| [01-yazilim-mimari-dokumani.md](./07-TEKNIK-MIMARI/01-yazilim-mimari-dokumani.md) | Software Architecture Document (SAD) |
| [02-sistem-baglam-diyagrami.md](./07-TEKNIK-MIMARI/02-sistem-baglam-diyagrami.md) | Sistem bağlam diyagramı (C4 L1) |
| [03-bilesen-diyagramlari.md](./07-TEKNIK-MIMARI/03-bilesen-diyagramlari.md) | Bileşen diyagramları |
| [04-erd-veri-modeli.md](./07-TEKNIK-MIMARI/04-erd-veri-modeli.md) | ERD ve veri modeli |
| [05-adr-listesi.md](./07-TEKNIK-MIMARI/05-adr-listesi.md) | Architecture Decision Records |
| [06-guvenlik-politikasi.md](./07-TEKNIK-MIMARI/06-guvenlik-politikasi.md) | Güvenlik politikası ve tehdit modeli |

---

### 8. 💻 Geliştirme Süreçleri

| Doküman | Açıklama |
|---------|----------|
| [01-kodlama-standartlari.md](./08-GELISTIRME-SURECLERI/01-kodlama-standartlari.md) | Kodlama standartları |
| [02-git-stratejisi.md](./08-GELISTIRME-SURECLERI/02-git-stratejisi.md) | Git stratejisi ve branching |
| [03-cicd-pipeline.md](./08-GELISTIRME-SURECLERI/03-cicd-pipeline.md) | CI/CD pipeline |
| [04-dod-dor.md](./08-GELISTIRME-SURECLERI/04-dod-dor.md) | Definition of Done/Ready |
| [05-code-review-checklist.md](./08-GELISTIRME-SURECLERI/05-code-review-checklist.md) | Code review checklist |

---

### 9. 🧪 QA & Test

| Doküman | Açıklama |
|---------|----------|
| [01-master-test-plani.md](./09-KA-TEST/01-master-test-plani.md) | Master test planı |
| [02-test-senaryolari.md](./09-KA-TEST/02-test-senaryolari.md) | Test senaryoları |
| [03-bug-takip-sureci.md](./09-KA-TEST/03-bug-takip-sureci.md) | Bug takip süreci |

---

### 10. ⚙️ Operasyon & Destek

| Doküman | Açıklama |
|---------|----------|
| [01-deployment-rehberi.md](./10-OPERASYON-DESTEK/01-deployment-rehberi.md) | Deployment rehberi |
| [02-runbook.md](./10-OPERASYON-DESTEK/02-runbook.md) | Operasyonel runbook |
| [03-monitoring-alerting.md](./10-OPERASYON-DESTEK/03-monitoring-alerting.md) | Monitoring ve alerting |
| [04-backup-dr.md](./10-OPERASYON-DESTEK/04-backup-dr.md) | Backup ve disaster recovery |
| [05-kullanici-kilavuzu.md](./10-OPERASYON-DESTEK/05-kullanici-kilavuzu.md) | Kullanıcı kılavuzu |

---

## 📁 Klasör Yapısı

```
Domizan-AI-Asistan/
├── README.md                    # Bu dosya
├── 00-GENEL-BAKIS.md            # Proje vizyonu
│
├── 01-MIMARI/                   # Mimari dökümanlar (3)
├── 02-KULLANICI-AKISLARI/       # Kullanıcı akışları (9)
├── 03-KURULUM/                  # Kurulum rehberleri (2)
├── 04-API/                      # API referansları (5)
├── 05-STRATEJI-URUN/            # Strateji & ürün (9)
├── 06-UX-UI-TASARIM/            # UX/UI & tasarım (6)
├── 07-TEKNIK-MIMARI/            # Teknik mimari (6)
├── 08-GELISTIRME-SURECLERI/     # Geliştirme süreçleri (5)
├── 09-KA-TEST/                  # QA & test (3)
└── 10-OPERASYON-DESTEK/         # Operasyon & destek (5)
```

---

## 📊 Dokümantasyon Durumu

| Bölüm | Durumu | Doküman Sayısı |
|-------|--------|----------------|
| Genel Bakış | ✅ Tamamlandı | 1 |
| Mimari | ✅ Tamamlandı | 3 |
| Kullanıcı Akışları | ✅ Tamamlandı | 9 |
| Kurulum | ✅ Tamamlandı | 2 |
| API Referans | ✅ Tamamlandı | 5 |
| Strateji & Ürün | ✅ Tamamlandı | 9 |
| UX/UI & Tasarım | ✅ Tamamlandı | 6 |
| Teknik Mimari | ✅ Tamamlandı | 6 |
| Geliştirme Süreçleri | ✅ Tamamlandı | 5 |
| QA & Test | ✅ Tamamlandı | 3 |
| Operasyon & Destek | ✅ Tamamlandı | 5 |

**Toplam:** 54 doküman tamamlandı ✅

---

## 🚀 Hızlı Başlangıç

1. **Projeyi Tanı:** [Genel Bakış](./00-GENEL-BAKIS.md)
2. **Stratejiyi Anla:** [Vizyon & Misyon](./05-STRATEJI-URUN/01-vizyon-misyon.md)
3. **Mimariyi Anla:** [Yazılım Mimarisi](./07-TEKNIK-MIMARI/01-yazilim-mimari-dokumani.md)
4. **Sıfırdan Kur:** [Kurulum Rehberi](./03-KURULUM/01-sifirdan-kurulum.md)
5. **Akışları İncele:** [Kullanıcı Akışları](./02-KULLANICI-AKISLARI/)
6. **Tasarımı Gör:** [Tasarım Sistemi](./06-UX-UI-TASARIM/05-tasarim-sistemi.md)

---

*Bu dokümantasyon BMAD metodolojisi ile geliştirilmektedir.*
