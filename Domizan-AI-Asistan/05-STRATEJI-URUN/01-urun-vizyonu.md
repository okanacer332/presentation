# Ürün Vizyonu ve Kapsamı (Product Vision & Scope)

> **Doküman:** 05-STRATEJI-URUN/01-urun-vizyonu.md
> **Son Güncelleme:** 5 Şubat 2026
> **Versiyon:** 1.0

---

## 🎯 Vizyon Bildirisi

**Domizan**, Türkiye'deki mali müşavirlerin belge yönetimi süreçlerini yapay zeka ile otomatikleştiren, öğrenen ve sürekli iyileşen bir dijital asistan platformudur.

### Vizyon Cümlesi

> *"Her mali müşavirin yanında, 7/24 çalışan, öğrenen ve gelişen bir yapay zeka asistanı."*

---

## 🌟 Temel Değer Önerisi (Value Proposition)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              DEĞER ÖNERİSİ KANVASİ                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌─────────────────────────────────┐    ┌─────────────────────────────────────────┐ │
│  │        MÜŞTERİ AĞRILARI         │    │           ÇÖZÜMÜMÜZ                      │ │
│  ├─────────────────────────────────┤    ├─────────────────────────────────────────┤ │
│  │                                 │    │                                          │ │
│  │  😫 Günde 50-200 belge manuel   │───▶│  ✅ AI otomatik analiz ve sınıflandırma  │ │
│  │     dosyalama                   │    │                                          │ │
│  │                                 │    │                                          │ │
│  │  😫 VKN/TC eşleştirme hataları │───▶│  ✅ Akıllı mükellef eşleştirme           │ │
│  │                                 │    │                                          │ │
│  │  😫 Ay sonu yoğunluğu          │───▶│  ✅ 7/24 çalışan AI asistan              │ │
│  │                                 │    │                                          │ │
│  │  😫 Yeni personel eğitimi      │───▶│  ✅ Öğrenen sistem, düzeltmelerden       │ │
│  │                                 │    │     pattern oluşturma                    │ │
│  │                                 │    │                                          │ │
│  │  😫 Uzaktan erişim zorluğu     │───▶│  ✅ Telegram entegrasyonu, mobil bildirim│ │
│  │                                 │    │                                          │ │
│  └─────────────────────────────────┘    └─────────────────────────────────────────┘ │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📐 Kapsam Tanımı

### Kapsam Dahilinde (In Scope)

| Kategori | Özellikler |
|----------|------------|
| **Belge Yönetimi** | PDF/resim analizi, OCR, sınıflandırma, dosyalama |
| **AI Analiz** | Gemini ile içerik analizi, VKN/TC çıkarımı, tutar tespiti |
| **Öğrenme Sistemi** | Düzeltmelerden pattern oluşturma, federated learning |
| **Mükellef Yönetimi** | Otomatik eşleştirme, profil oluşturma |
| **Telegram Entegrasyonu** | Günlük brif, RAG soru-cevap, hatırlatmalar |
| **Desktop Uygulama** | Windows + Mac, folder watch, onay sistemi |
| **Admin Panel** | Lisans, lead, cihaz, analitik yönetimi |
| **Lisanslama** | Çoklu cihaz, token kotası, paket yönetimi |

### Kapsam Dışında (Out of Scope)

| Kategori | Neden Dışarıda |
|----------|----------------|
| **Muhasebe Yazılımı Entegrasyonu** | Faz 2 planında (Luca, Mikro, Logo) |
| **E-Fatura Oluşturma** | Mevcut sistemlerle çakışma riski |
| **Mobil Uygulama (Native)** | Telegram yeterli MVP için |
| **Bordro/Ücret Hesaplama** | Farklı domain, ayrı ürün olabilir |
| **Vergi Beyannamesi Otomasyonu** | Yasal sorumluluk riski yüksek |

---

## 👥 Hedef Kitle

### Birincil Hedef: Mali Müşavirler (SMMM/YMM)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           BİRİNCİL HEDEF KİTLE                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   👤 Profil: Bağımsız veya küçük-orta ölçekli mali müşavirlik ofisi                 │
│                                                                                      │
│   📊 Sayısal Özellikler:                                                            │
│   • Mükellef sayısı: 10-100 firma                                                   │
│   • Günlük belge: 50-200 adet                                                       │
│   • Çalışan sayısı: 1-10 kişi                                                       │
│   • Yaş aralığı: 30-55                                                              │
│                                                                                      │
│   🎯 Ağrı Noktaları:                                                                │
│   • Zaman baskısı (özellikle ay sonu)                                               │
│   • Personel maliyeti ve eğitimi                                                    │
│   • Manuel hata riski                                                               │
│   • Dijital dönüşüm ihtiyacı                                                        │
│                                                                                      │
│   💰 Bütçe Profili:                                                                 │
│   • Aylık 500-2000 TL yazılım bütçesi                                               │
│   • ROI duyarlı (zaman kazancı = maliyet tasarrufu)                                 │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### İkincil Hedef: Muhasebe Departmanları

- Orta ölçekli şirketlerin iç muhasebe ekipleri
- Benzer zorluklar, farklı satış ve onboarding süreci

---

## 🏆 Başarı Kriterleri

### Kısa Vadeli (6 Ay)

| Metrik | Hedef |
|--------|-------|
| Aktif lisans sayısı | 100+ |
| Müşteri memnuniyeti (NPS) | 40+ |
| Günlük işlenen belge | 10,000+ |
| Churn rate | < %5 |
| Belge sınıflandırma doğruluğu | > %90 |

### Orta Vadeli (12 Ay)

| Metrik | Hedef |
|--------|-------|
| Aktif lisans sayısı | 500+ |
| MRR (Monthly Recurring Revenue) | 100,000+ TL |
| Referans ile gelen müşteri oranı | > %30 |
| Öğrenme sistemi ile doğruluk artışı | +5% |

### Uzun Vadeli (24 Ay)

| Metrik | Hedef |
|--------|-------|
| Pazar payı (SMMM segmenti) | %5+ |
| Muhasebe yazılımı entegrasyonu | 3+ platform |
| Uluslararası genişleme | 1+ ülke |

---

## 🚫 Varsayımlar ve Kısıtlar

### Varsayımlar

1. Mali müşavirler dijital araçlara adaptasyon sağlayabilir
2. Gemini API maliyetleri ölçeklenebilir seviyede kalır
3. Türkçe OCR ve NLP yeterli doğruluk sağlar
4. Müşteriler kendi API key'lerini yönetir

### Kısıtlar

1. **Teknolojik:** Google Gemini API limitleri
2. **Yasal:** Vergi danışmanlığı yapılamaz, sadece belge yönetimi
3. **Operasyonel:** Küçük ekip (2-3 geliştirici)
4. **Finansal:** Bootstrap, dış yatırım yok

---

## 📅 Zaman Çizelgesi

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              ÜRÜN ZAMAN ÇİZELGESİ                                    │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  2026 Q1 (Ocak-Mart)                                                                │
│  ├── ✅ Mimari tasarım tamamlandı                                                   │
│  ├── 🔄 MVP geliştirme (Desktop + Gateway + Intelligence)                           │
│  └── 🔄 Alpha test (5-10 pilot müşteri)                                             │
│                                                                                      │
│  2026 Q2 (Nisan-Haziran)                                                            │
│  ├── ⏳ Beta launch (50 müşteri)                                                    │
│  ├── ⏳ Telegram entegrasyonu                                                       │
│  └── ⏳ Öğrenme sistemi v1                                                          │
│                                                                                      │
│  2026 Q3 (Temmuz-Eylül)                                                             │
│  ├── ⏳ Public launch                                                               │
│  ├── ⏳ Otomatik güncelleme sistemi                                                 │
│  └── ⏳ 100 aktif lisans hedefi                                                     │
│                                                                                      │
│  2026 Q4 (Ekim-Aralık)                                                              │
│  ├── ⏳ Muhasebe yazılımı entegrasyonları                                           │
│  ├── ⏳ Federated learning                                                          │
│  └── ⏳ Enterprise paket                                                            │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ✅ Onay ve İmzalar

| Rol | İsim | Tarih | İmza |
|-----|------|-------|------|
| Ürün Sahibi | | | |
| Teknik Lider | | | |
| İş Geliştirme | | | |

---

*Bu doküman yaşayan bir dokümandır ve ürün geliştikçe güncellenecektir.*
