# Ürün Gereksinimleri Dokümanı (PRD)

> **Doküman:** 05-STRATEJI-URUN/02-prd.md
> **Son Güncelleme:** 5 Şubat 2026
> **Versiyon:** 1.0
> **Durum:** Draft

---

## 📋 Özet

Bu doküman, Domizan AI Asistan ürününün fonksiyonel ve fonksiyonel olmayan gereksinimlerini tanımlar.

---

## 🎯 Ürün Hedefleri

1. Mali müşavirlerin belge yönetim süresini %70 azaltmak
2. Belge sınıflandırma doğruluğunu %95'e çıkarmak
3. 6 ay içinde 100 ödeme yapan müşteriye ulaşmak
4. NPS skorunu 40+ tutmak

---

## 📦 Fonksiyonel Gereksinimler

### FR-001: Belge Analizi

| ID | Gereksinim | Öncelik | Durum |
|----|------------|---------|-------|
| FR-001.1 | Sistem PDF formatındaki belgeleri analiz edebilmeli | P0 | ✅ |
| FR-001.2 | Sistem JPG/PNG formatındaki belgeleri analiz edebilmeli | P0 | ✅ |
| FR-001.3 | Sistem belge tipini (fatura, dekont, makbuz, vb.) tespit edebilmeli | P0 | 🔄 |
| FR-001.4 | Sistem VKN/TC kimlik numarasını çıkarabilmeli | P0 | 🔄 |
| FR-001.5 | Sistem tarih ve tutar bilgisini çıkarabilmeli | P1 | ⏳ |
| FR-001.6 | Sistem fatura/belge numarasını çıkarabilmeli | P1 | ⏳ |

### FR-002: Mükellef Eşleştirme

| ID | Gereksinim | Öncelik | Durum |
|----|------------|---------|-------|
| FR-002.1 | Sistem VKN ile mükellef eşleştirebilmeli | P0 | 🔄 |
| FR-002.2 | Sistem yeni mükellef önerisi yapabilmeli | P1 | ⏳ |
| FR-002.3 | Sistem benzer isimli mükellefleri ayırt edebilmeli | P2 | ⏳ |

### FR-003: Dosyalama

| ID | Gereksinim | Öncelik | Durum |
|----|------------|---------|-------|
| FR-003.1 | Sistem onaylanan belgeyi doğru klasöre taşıyabilmeli | P0 | 🔄 |
| FR-003.2 | Sistem dosya adını standart formata çevirebilmeli | P1 | ⏳ |
| FR-003.3 | Sistem klasör yapısını otomatik oluşturabilmeli | P1 | ⏳ |

### FR-004: Öğrenme Sistemi

| ID | Gereksinim | Öncelik | Durum |
|----|------------|---------|-------|
| FR-004.1 | Sistem kullanıcı düzeltmelerini kaydedebilmeli | P1 | ⏳ |
| FR-004.2 | Sistem pattern'lerden öğrenebilmeli | P2 | ⏳ |
| FR-004.3 | Sistem öğrenilen pattern'leri gelecek analizlerde kullanabilmeli | P2 | ⏳ |

### FR-005: Telegram Entegrasyonu

| ID | Gereksinim | Öncelik | Durum |
|----|------------|---------|-------|
| FR-005.1 | Kullanıcı günlük özet (brif) alabilmeli | P1 | ⏳ |
| FR-005.2 | Kullanıcı belgeler hakkında soru sorabilmeli (RAG) | P2 | ⏳ |
| FR-005.3 | Kullanıcı hatırlatma oluşturabilmeli | P2 | ⏳ |
| FR-005.4 | Sistem proaktif bildirim gönderebilmeli | P3 | ⏳ |

### FR-006: Lisans ve Cihaz Yönetimi

| ID | Gereksinim | Öncelik | Durum |
|----|------------|---------|-------|
| FR-006.1 | Sistem lisans anahtarını doğrulayabilmeli | P0 | 🔄 |
| FR-006.2 | Sistem cihaz fingerprint'i oluşturabilmeli | P0 | 🔄 |
| FR-006.3 | Sistem çoklu cihazı yönetebilmeli | P1 | ⏳ |
| FR-006.4 | Admin yeni cihazı onaylayabilmeli | P1 | ⏳ |
| FR-006.5 | Sistem token kotasını takip edebilmeli | P1 | ⏳ |

### FR-007: Admin Panel

| ID | Gereksinim | Öncelik | Durum |
|----|------------|---------|-------|
| FR-007.1 | Admin lead listesini görüntüleyebilmeli | P0 | ⏳ |
| FR-007.2 | Admin lisans oluşturabilmeli | P0 | ⏳ |
| FR-007.3 | Admin cihaz onaylayabilmeli | P1 | ⏳ |
| FR-007.4 | Admin analitikleri görüntüleyebilmeli | P2 | ⏳ |

---

## ⚙️ Fonksiyonel Olmayan Gereksinimler

### NFR-001: Performans

| ID | Gereksinim | Hedef | Ölçüm |
|----|------------|-------|-------|
| NFR-001.1 | Belge analizi süresi | < 10 saniye | API response time |
| NFR-001.2 | Desktop app başlangıç süresi | < 5 saniye | Cold start |
| NFR-001.3 | Admin panel sayfa yüklemesi | < 2 saniye | Page load |
| NFR-001.4 | Eşzamanlı kullanıcı kapasitesi | 1000+ | Load test |

### NFR-002: Güvenlik

| ID | Gereksinim | Hedef |
|----|------------|-------|
| NFR-002.1 | API key'ler şifreli saklanmalı | AES-256-GCM |
| NFR-002.2 | Tüm iletişim HTTPS üzerinden olmalı | TLS 1.3 |
| NFR-002.3 | JWT token süresi kısa olmalı | 15 dakika |
| NFR-002.4 | Brute force koruması olmalı | Rate limiting |

### NFR-003: Kullanılabilirlik

| ID | Gereksinim | Hedef |
|----|------------|-------|
| NFR-003.1 | Sistem uptime | %99.5 |
| NFR-003.2 | Planlı bakım süresi | Ay/2 saat max |
| NFR-003.3 | Veri yedekleme sıklığı | Günlük |

### NFR-004: Uyumluluk

| ID | Gereksinim | Hedef |
|----|------------|-------|
| NFR-004.1 | Windows desteği | 10, 11 |
| NFR-004.2 | macOS desteği | 12+ (Monterey+) |
| NFR-004.3 | Tarayıcı desteği | Chrome, Firefox, Edge |

---

## 🔗 Bağımlılıklar

| Bağımlılık | Tip | Risk | Alternatif |
|------------|-----|------|------------|
| Google Gemini API | External | Medium | OpenAI, Anthropic |
| Telegram Bot API | External | Low | WhatsApp Business |
| PostgreSQL | Internal | Low | - |
| MongoDB | Internal | Low | PostgreSQL JSONB |
| ChromaDB | Internal | Medium | Pinecone, Weaviate |

---

## ⚠️ Riskler ve Azaltma

| Risk | Olasılık | Etki | Azaltma |
|------|----------|------|---------|
| Gemini API maliyet artışı | Orta | Yüksek | Müşteriye özel API key |
| Türkçe OCR düşük doğruluk | Düşük | Yüksek | Gemini Vision kullanımı |
| Çoklu cihaz kötüye kullanım | Orta | Orta | Fingerprint + admin onay |
| Rakip ürün çıkışı | Orta | Orta | Öğrenme sistemi ile farklılaşma |

---

## 📊 Kabul Kriterleri

### MVP Kabul Kriterleri

- [ ] Desktop app Windows'ta çalışıyor
- [ ] Belge analizi %85+ doğruluk
- [ ] Lisans doğrulama çalışıyor
- [ ] Admin panel lead/lisans yönetimi çalışıyor
- [ ] 10 pilot müşteri ile test tamamlandı

### Beta Kabul Kriterleri

- [ ] macOS desteği eklendi
- [ ] Telegram entegrasyonu çalışıyor
- [ ] Öğrenme sistemi aktif
- [ ] 50 müşteri aktif kullanıyor
- [ ] NPS anketi yapıldı

---

## 📎 Ekler

- [User Personas](./04-kullanici-profilleri.md)
- [User Stories](./05-kullanici-hikayeleri.md)
- [Wireframes](../06-UX-UI-TASARIM/04-wireframes.md)

---

*Son güncelleme: 5 Şubat 2026*
