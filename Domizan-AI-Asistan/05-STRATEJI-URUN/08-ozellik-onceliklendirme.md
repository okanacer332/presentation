# Özellik Önceliklendirme Matrisi

> **Doküman:** 05-STRATEJI-URUN/08-ozellik-onceliklendirme.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🎯 Önceliklendirme Metodolojisi

Bu dokümanda iki metod kullanılmaktadır:
1. **MoSCoW** - Must/Should/Could/Won't kategorileri
2. **RICE** - Reach, Impact, Confidence, Effort puanlama

---

## 📊 MoSCoW Matrisi

### Must Have (Olmazsa Olmaz) - MVP için zorunlu

| # | Özellik | Nedeni |
|---|---------|--------|
| M1 | Belge analizi (PDF/resim) | Core value proposition |
| M2 | VKN/TC çıkarımı | Mükellef eşleştirme için gerekli |
| M3 | Lisans doğrulama | Monetizasyon için zorunlu |
| M4 | Desktop app (Windows) | Ana dağıtım kanalı |
| M5 | Admin panel (temel) | Lisans yönetimi için |
| M6 | Mükellef eşleştirme | Dosyalama için zorunlu |
| M7 | Onay ve dosyalama | Core iş akışı |

### Should Have (Olmalı) - Beta için hedef

| # | Özellik | Nedeni |
|---|---------|--------|
| S1 | Telegram entegrasyonu | Mobil erişim için önemli |
| S2 | Öğrenme sistemi | Farklılaştırıcı özellik |
| S3 | macOS desteği | Pazar genişletme |
| S4 | Çoklu cihaz yönetimi | İş kullanımı için |
| S5 | Otomatik güncelleme | Operasyonel gereklilik |
| S6 | Token kota takibi | Maliyet kontrolü |

### Could Have (Olabilir) - Güzel olur

| # | Özellik | Nedeni |
|---|---------|--------|
| C1 | RAG soru-cevap | Gelişmiş kullanım |
| C2 | Hatırlatmalar | Ek değer |
| C3 | Gelişmiş analytics | Karar desteği |
| C4 | Muhasebe yazılımı entegrasyonu | Pazar genişletme |
| C5 | Enterprise paket | Yüksek gelir |

### Won't Have (Olmayacak) - Bu sürümde değil

| # | Özellik | Nedeni |
|---|---------|--------|
| W1 | Native mobil uygulama | Telegram yeterli, maliyet yüksek |
| W2 | Vergi beyannamesi otomasyonu | Yasal risk |
| W3 | Multi-tenant (SaaS to SaaS) | Karmaşıklık |
| W4 | Uluslararası (şimdilik) | Odak kaybı |

---

## 📈 RICE Puanlama

### RICE Formülü
```
RICE Score = (Reach × Impact × Confidence) / Effort
```

| Parametre | Açıklama | Ölçek |
|-----------|----------|-------|
| **Reach** | Kaç kullanıcı etkilenecek (çeyrek) | Sayı |
| **Impact** | Dönüşüm/kullanım etkisi | 0.25, 0.5, 1, 2, 3 |
| **Confidence** | Ne kadar eminiz | 0.5, 0.8, 1.0 |
| **Effort** | Kişi-hafta | Sayı |

---

### RICE Tablosu

| # | Özellik | Reach | Impact | Conf. | Effort | RICE Score | Öncelik |
|---|---------|-------|--------|-------|--------|------------|---------|
| 1 | Belge analizi (PDF) | 100 | 3 | 1.0 | 4 | **75.0** | 🔴 P0 |
| 2 | VKN/TC çıkarımı | 100 | 3 | 0.8 | 2 | **120.0** | 🔴 P0 |
| 3 | Mükellef eşleştirme | 100 | 2 | 0.8 | 4 | **40.0** | 🔴 P0 |
| 4 | Lisans doğrulama | 100 | 2 | 1.0 | 2 | **100.0** | 🔴 P0 |
| 5 | Desktop app (Win) | 100 | 3 | 1.0 | 8 | **37.5** | 🔴 P0 |
| 6 | Admin panel (temel) | 10 | 2 | 1.0 | 4 | **5.0** | 🟡 P1 |
| 7 | Telegram entegre. | 80 | 2 | 0.8 | 6 | **21.3** | 🟡 P1 |
| 8 | Öğrenme sistemi | 100 | 2 | 0.5 | 8 | **12.5** | 🟡 P1 |
| 9 | macOS desteği | 30 | 1 | 1.0 | 4 | **7.5** | 🟡 P1 |
| 10 | Çoklu cihaz | 50 | 1 | 0.8 | 3 | **13.3** | 🟡 P1 |
| 11 | RAG soru-cevap | 50 | 1 | 0.5 | 6 | **4.2** | 🟢 P2 |
| 12 | Hatırlatmalar | 40 | 0.5 | 0.8 | 2 | **8.0** | 🟢 P2 |
| 13 | Luca entegrasyon | 30 | 2 | 0.5 | 8 | **3.8** | 🟢 P2 |
| 14 | Enterprise paket | 10 | 2 | 0.5 | 4 | **2.5** | 🟢 P2 |

---

## 🗂️ Görsel Öncelik Matrisi

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                         ETKİ / EFOR MATRİSİ                                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   Yüksek Etki                                                                       │
│        ▲                                                                            │
│        │                                                                            │
│        │    ⭐ QUICK WINS                   🚀 MAJOR PROJECTS                       │
│        │    (Düşük efor, yüksek etki)      (Yüksek efor, yüksek etki)              │
│        │                                                                            │
│        │    • VKN/TC çıkarımı              • Desktop app                            │
│        │    • Lisans doğrulama             • Belge analizi                          │
│        │    • Onay mekanizması             • Telegram entegrasyonu                  │
│        │                                   • Öğrenme sistemi                        │
│        │                                                                            │
│   ─────┼────────────────────────────────────────────────────────────────────▶       │
│        │                                                                   Efor     │
│        │    💡 FILL-INS                    ❓ QUESTIONABLE                          │
│        │    (Düşük efor, düşük etki)       (Yüksek efor, düşük etki)               │
│        │                                                                            │
│        │    • Hatırlatmalar                • Federated learning                     │
│        │    • Basit analytics              • Multi-language                         │
│        │    • UI iyileştirmeler            • Native mobile app                      │
│        │                                                                            │
│   Düşük Etki                                                                        │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Öncelik Özeti

### 🔴 P0 - Sprint 1-2 (Kritik)
1. Belge analizi (PDF/resim)
2. VKN/TC çıkarımı
3. Mükellef eşleştirme
4. Onay ve dosyalama
5. Lisans doğrulama
6. Desktop app (Windows temel)

### 🟡 P1 - Sprint 3-4 (Önemli)
1. Telegram entegrasyonu
2. Öğrenme sistemi v1
3. Çoklu cihaz yönetimi
4. Admin panel detayları
5. macOS desteği

### 🟢 P2 - Q3+ (Nice to Have)
1. RAG soru-cevap
2. Hatırlatmalar
3. Muhasebe yazılımı entegrasyonları
4. Enterprise paket
5. Gelişmiş analytics

### ⚪ P3 - Backlog (Gelecekte)
1. Federated learning
2. Multi-language
3. Public API
4. Uluslararası genişleme

---

## 📋 Karar Kriterleri

Yeni özellik değerlendirmesi için:

| Kriter | Ağırlık | Açıklama |
|--------|---------|----------|
| Müşteri talebi | %30 | Kaç müşteri istedi? |
| Revenue etkisi | %25 | Gelire katkısı? |
| Stratejik uyum | %20 | Vizyona uygunluk? |
| Teknik fizibilite | %15 | Yapılabilirlik? |
| Rekabet avantajı | %10 | Farklılaştırıcı mı? |

---

*Bu matris her sprint planlamasında gözden geçirilecektir.*
