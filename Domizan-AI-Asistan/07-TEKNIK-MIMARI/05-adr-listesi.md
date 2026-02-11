# Architecture Decision Records (ADR)

> **Doküman:** 07-TEKNIK-MIMARI/05-adr-listesi.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 📋 ADR Listesi

| # | Başlık | Durum | Tarih |
|---|--------|-------|-------|
| 001 | Dual Backend Mimarisi | ✅ Kabul | 2026-02 |
| 002 | Electron Framework | ✅ Kabul | 2026-01 |
| 003 | PostgreSQL + MongoDB Hybrid | ✅ Kabul | 2026-02 |
| 004 | Google Gemini API | ✅ Kabul | 2026-01 |
| 005 | ChromaDB Vektör DB | ✅ Kabul | 2026-02 |

---

## ADR-001: Dual Backend Mimarisi

### Bağlam
Sistemde hem yönetim hem de AI işlemleri yapılması gerekiyor.

### Karar
Gateway ve Intelligence olarak iki ayrı backend servis kullanılacak.

### Alternatifler
1. **Monolitik backend** - Reddedildi (ölçekleme zorluğu)
2. **Serverless functions** - Reddedildi (cold start, maliyet)
3. **Dual backend** ✓ - Kabul edildi

### Sonuçlar
+ Bağımsız ölçekleme
+ Ayrı deployment
+ Fault isolation
- Inter-service iletişim karmaşıklığı
- Network latency

---

## ADR-002: Electron Framework

### Bağlam
Cross-platform desktop uygulaması gerekiyor.

### Karar
Electron framework kullanılacak.

### Alternatifler
1. **Tauri** - Reddedildi (olgunluk, ekosistem)
2. **Qt** - Reddedildi (JS ekosistemi kullanmak istiyoruz)
3. **Electron** ✓ - Kabul edildi

### Sonuçlar
+ JavaScript/TypeScript kullanabilme
+ Geniş community
+ Kolay Node.js entegrasyonu
- Yüksek memory kullanımı
- Bundle boyutu

---

## ADR-003: PostgreSQL + MongoDB Hybrid

### Bağlam
İlişkisel ve esnek veri modeli ihtiyaçları var.

### Karar
Lisans/Lead için PostgreSQL, belgeler için MongoDB kullanılacak.

### Alternatifler
1. **Sadece PostgreSQL** - Reddedildi (JSON esnekliği yok)
2. **Sadece MongoDB** - Reddedildi (ACID transactions)
3. **Hybrid** ✓ - Kabul edildi

### Sonuçlar
+ Her veritabanı güçlü olduğu alanda
+ Esneklik
- İki DB yönetimi
- Transactional tutarlılık zorluğu

---

## ADR-004: Google Gemini API

### Bağlam
Belge analizi için LLM gerekiyor.

### Karar
Google Gemini API kullanılacak.

### Alternatifler
1. **OpenAI GPT-4** - Reddedildi (maliyet)
2. **Local LLM** - Reddedildi (performans, kaynak)
3. **Gemini** ✓ - Kabul edildi

### Sonuçlar
+ Rekabetçi fiyat
+ Görsel anlama yeteneği
+ Türkçe desteği
- Vendor lock-in riski
- API değişiklik riski

---

## ADR-005: ChromaDB Vektör DB

### Bağlam
RAG ve semantik arama için vektör veritabanı gerekiyor.

### Karar
ChromaDB kullanılacak.

### Alternatifler
1. **Pinecone** - Reddedildi (maliyet)
2. **Weaviate** - Reddedildi (karmaşıklık)
3. **ChromaDB** ✓ - Kabul edildi

### Sonuçlar
+ Açık kaynak
+ Kolay entegrasyon
+ Yerel çalışabilir
- Enterprise özellikleri sınırlı
- Ölçeklenebilirlik limitleri

---

## 📝 ADR Şablonu

```markdown
# ADR-XXX: [Başlık]

## Durum
[Önerilen | Kabul | Reddedildi | Superseded]

## Bağlam
[Neden bu karar gerekli?]

## Karar
[Ne kararlaştırıldı?]

## Alternatifler
1. **Alternatif A** - [Neden reddedildi/kabul edildi]
2. **Alternatif B** - [Neden reddedildi/kabul edildi]

## Sonuçlar
+ Pozitif etki
+ Başka pozitif etki
- Negatif etki
- Başka negatif etki

## Tarih
[YYYY-MM-DD]
```

---

*ADR'ler mimari kararların "neden" ini belgeler.*
