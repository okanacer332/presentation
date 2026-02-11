# Rakip Analizi (Competitive Analysis)

> **Doküman:** 05-STRATEJI-URUN/04-rakip-analizi.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🎯 Analiz Amacı

Türkiye'deki mali müşavirler için mevcut belge yönetimi çözümlerini analiz etmek ve Domizan'ın rekabet avantajlarını belirlemek.

---

## 📊 Rakip Haritası

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              RAKİP KONUMLANDIRMA MATRİSİ                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   Yüksek AI Yetkinliği                                                              │
│         ▲                                                                            │
│         │                                                                            │
│         │          ┌─────────────┐                                                  │
│         │          │  DOMIZAN    │  ← Hedef konum                                   │
│         │          │  (Planlanan)│                                                  │
│         │          └─────────────┘                                                  │
│         │                                                                            │
│         │                              ┌──────────────┐                             │
│         │                              │ Global AI    │                             │
│         │                              │ Çözümler     │                             │
│         │                              │ (Rossum,etc) │                             │
│         │                              └──────────────┘                             │
│         │                                                                            │
│         │    ┌──────────────┐                                                       │
│         │    │ OCR+Temel AI │                                                       │
│         │    │ (ABBYY, etc) │                                                       │
│         │    └──────────────┘                                                       │
│         │                                                                            │
│   ─────┼────────────────────────────────────────────────────────────────────────▶   │
│   Düşük│                                                                  Yüksek    │
│   Sektör│                                                                 Sektör    │
│   Odağı │    ┌──────────────┐          ┌──────────────┐                  Odağı     │
│         │    │ Genel DMS    │          │ Muhasebe     │                             │
│         │    │ (Dropbox,    │          │ Yazılımları  │                             │
│         │    │  Google Drv) │          │ (Luca, Mikro)│                             │
│         │    └──────────────┘          └──────────────┘                             │
│         │                                                                            │
│   Düşük AI Yetkinliği                                                               │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🏢 Detaylı Rakip Analizi

### 1. Muhasebe Yazılımları (Luca, Mikro, Logo)

| Özellik | Durum | Not |
|---------|-------|-----|
| **Tip** | Dolaylı rakip | Belge yönetimi değil, muhasebe yazılımı |
| **Güçlü Yanlar** | Geniş kullanıcı tabanı, entegrasyon, yasal uyumluluk |
| **Zayıf Yanlar** | AI yok, belge analizi yok, karmaşık UX |
| **Fiyatlama** | 200-2000 TL/ay |
| **Tehdit Seviyesi** | 🟡 Orta |

**Strateji:** Entegrasyon ortağı olarak konumlan, rakip değil tamamlayıcı.

---

### 2. ABBYY FineReader / FlexiCapture

| Özellik | Durum | Not |
|---------|-------|-----|
| **Tip** | Kısmi rakip | OCR + temel sınıflandırma |
| **Güçlü Yanlar** | Olgun OCR, kurumsal güven, global marka |
| **Zayıf Yanlar** | Pahalı, Türkçe desteği sınırlı, öğrenme yok |
| **Fiyatlama** | $500+ yıllık |
| **Tehdit Seviyesi** | 🟡 Orta |

**Strateji:** LLM tabanlı analiz ile farklılaş, fiyat avantajı.

---

### 3. Rossum / HyperScience (Global AI)

| Özellik | Durum | Not |
|---------|-------|-----|
| **Tip** | Potansiyel rakip | AI-native belge işleme |
| **Güçlü Yanlar** | Gelişmiş AI, self-learning, API-first |
| **Zayıf Yanlar** | Türkiye pazarında yok, Türkçe zayıf, pahalı |
| **Fiyatlama** | $1000+/ay |
| **Tehdit Seviyesi** | 🟢 Düşük (şimdilik) |

**Strateji:** Türkçe ve yerel sektör bilgisi ile farklılaş.

---

### 4. Genel DMS (Dropbox, Google Drive)

| Özellik | Durum | Not |
|---------|-------|-----|
| **Tip** | Dolaylı rakip | Genel dosya depolama |
| **Güçlü Yanlar** | Ucuz, yaygın, entegrasyonlar |
| **Zayıf Yanlar** | Sektöre özel değil, AI yok, sınıflandırma yok |
| **Fiyatlama** | $10-20/ay |
| **Tehdit Seviyesi** | 🟢 Düşük |

**Strateji:** Otomatik sınıflandırma ve öğrenme ile farklılaş.

---

### 5. Manuel Excel/Notepad Yöntemi

| Özellik | Durum | Not |
|---------|-------|-----|
| **Tip** | Mevcut durum (Status Quo) | En büyük rakip! |
| **Güçlü Yanlar** | Ücretsiz, bilinen yöntem, değişim gerektirmiyor |
| **Zayıf Yanlar** | Zaman kaybı, hata riski, ölçeklenmiyor |
| **Tehdit Seviyesi** | 🔴 Yüksek |

**Strateji:** Zaman tasarrufu ROI'sini net göster, kolay onboarding.

---

## ⚔️ Rekabet Matrisi

| Özellik | Domizan | Luca/Mikro | ABBYY | Rossum | Dropbox |
|---------|---------|------------|-------|--------|---------|
| AI Belge Analizi | ✅ | ❌ | ⚠️ | ✅ | ❌ |
| Türkçe Desteği | ✅ | ✅ | ⚠️ | ❌ | ✅ |
| Öğrenme Sistemi | ✅ | ❌ | ❌ | ✅ | ❌ |
| SMMM Sektör Odağı | ✅ | ⚠️ | ❌ | ❌ | ❌ |
| Telegram Entegrasyonu | ✅ | ❌ | ❌ | ❌ | ❌ |
| Muhasebe Yazılımı Entegrasyonu | ⏳ | ✅ | ⚠️ | ⚠️ | ❌ |
| Fiyat (Pro) | 599 TL | 500+ TL | $500+ | $1000+ | $10 |
| Cross-Platform | ✅ | ⚠️ | ✅ | ✅ | ✅ |

**Semboller:** ✅ Var/Güçlü | ⚠️ Kısmi | ❌ Yok | ⏳ Planlanıyor

---

## 🎯 Rekabet Avantajlarımız

### 1. Teknik Avantajlar

| Avantaj | Açıklama |
|---------|----------|
| **Gemini 2.0 Entegrasyonu** | En güncel LLM teknolojisi |
| **Öğrenen Sistem** | Her düzeltme sistemi daha akıllı yapar |
| **Müşteriye Özel AI** | Her müşterinin kendi API key'i ve pattern'ı |

### 2. Pazar Avantajları

| Avantaj | Açıklama |
|---------|----------|
| **Sektör Odağı** | SMMM/YMM'ye özel tasarım |
| **Türkçe Native** | Yerelden başlayarak global değil |
| **Fiyat/Performans** | Kurumsal çözümlerden çok daha uygun |

### 3. UX Avantajları

| Avantaj | Açıklama |
|---------|----------|
| **Telegram Erişimi** | Mobil app gerektirmeden uzaktan erişim |
| **Desktop Onboarding** | Kolay kurulum, hızlı aktivasyon |

---

## 📈 SWOT Analizi

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                    SWOT ANALİZİ                                      │
├─────────────────────────────────┬───────────────────────────────────────────────────┤
│                                 │                                                    │
│   GÜÇLÜ YANLAR (Strengths)      │   ZAYIF YANLAR (Weaknesses)                       │
│   ──────────────────────────    │   ──────────────────────────────                  │
│                                 │                                                    │
│   ✅ LLM tabanlı modern AI      │   ⚠️ Küçük ekip (2-3 kişi)                        │
│   ✅ Sektör odaklı tasarım      │   ⚠️ Marka bilinirliği yok                        │
│   ✅ Öğrenen sistem             │   ⚠️ Muhasebe yazılımı entegrasyonu yok (henüz)   │
│   ✅ Türkçe native              │   ⚠️ Bootstrap, sınırlı bütçe                     │
│   ✅ Telegram entegrasyonu      │   ⚠️ Müşteri tabanı yok (henüz)                   │
│   ✅ Cross-platform             │                                                    │
│                                 │                                                    │
├─────────────────────────────────┼───────────────────────────────────────────────────┤
│                                 │                                                    │
│   FIRSATLAR (Opportunities)     │   TEHDİTLER (Threats)                             │
│   ──────────────────────────    │   ──────────────────────────                      │
│                                 │                                                    │
│   🚀 Dijital dönüşüm trendi     │   ⚠️ Büyük teknoloji şirketlerinin girişi         │
│   🚀 SMMM sayısı 100,000+       │   ⚠️ Gemini API maliyet/erişim değişiklikleri    │
│   🚀 AI farkındalığı artıyor    │   ⚠️ Muhasebe yazılımlarının AI eklemesi         │
│   🚀 E-fatura zorunluluğu       │   ⚠️ Ekonomik belirsizlik                         │
│   🚀 Muhasebe yazılımı          │   ⚠️ Veri gizliliği kaygıları                     │
│      entegrasyon fırsatı        │                                                    │
│                                 │                                                    │
└─────────────────────────────────┴───────────────────────────────────────────────────┘
```

---

## 🎯 Rekabet Stratejisi

### Kısa Vade (6 ay)
1. **Niş Odaklanma:** SMMM segmentine yoğunlaş
2. **Referans Ağı:** Pilot müşterilerden referans topla
3. **İçerik Pazarlama:** Sektöre özel blog/video içerik

### Orta Vade (12 ay)
1. **Entegrasyon:** Luca, Mikro entegrasyonu
2. **Genişleme:** YMM ve kurumsal segmente açıl
3. **Lokalizasyon:** Türkiye'ye özgü özellikler

### Uzun Vade (24 ay)
1. **Platform:** API ile 3. parti entegrasyonlar
2. **AI Liderliği:** Federated learning ile farklılaşma
3. **Uluslararası:** Benzer pazarlara genişleme

---

*Bu analiz pazar değiştikçe güncellenecektir.*
