# Dinamik Telegram Hatırlatıcıları

> **Doküman:** 02-KULLANICI-AKISLARI/09-dinamik-telegram-hatirlaticilar.md
> **Son Güncelleme:** 5 Şubat 2026
> **Yeni Özellik:** ✨

---

## 🎯 Amaç

1. Kullanıcılar kendi hatırlatmalarını dinamik olarak oluşturabilir
2. Sistem kullanıcı pattern'lerini öğrenir
3. Proaktif öneriler sunar

---

## 📊 Veri Modeli

```sql
-- PostgreSQL: reminders tablosu
CREATE TABLE reminders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    license_id UUID NOT NULL REFERENCES licenses(id),
    telegram_user_id UUID REFERENCES telegram_users(id),
    
    -- Hatırlatma içeriği
    title VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Zamanlama
    reminder_type VARCHAR(20) NOT NULL,  -- 'once', 'daily', 'weekly', 'monthly', 'custom'
    scheduled_at TIMESTAMP WITH TIME ZONE,  -- Tek seferlik için
    cron_expression VARCHAR(100),  -- Tekrarlayan için (ör: "0 9 * * 1-5")
    
    -- Durum
    is_active BOOLEAN DEFAULT TRUE,
    last_sent_at TIMESTAMP WITH TIME ZONE,
    next_run_at TIMESTAMP WITH TIME ZONE,
    
    -- Öğrenme için
    was_useful BOOLEAN,  -- Kullanıcı geri bildirimi
    tags VARCHAR(50)[],  -- ['vergi', 'beyanname', 'müşteri']
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_from VARCHAR(20) DEFAULT 'telegram',  -- 'telegram', 'desktop', 'ai_suggested'
    
    -- Metadata
    metadata JSONB DEFAULT '{}'
);

-- İndeksler
CREATE INDEX idx_reminders_license ON reminders(license_id);
CREATE INDEX idx_reminders_next_run ON reminders(next_run_at) WHERE is_active = TRUE;
CREATE INDEX idx_reminders_tags ON reminders USING GIN(tags);
```

---

## 💬 Telegram Komutları

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          TELEGRAM HATIRLATICI KOMUTLARI                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  📝 HATIRLATMA OLUŞTURMA                                                            │
│  ────────────────────────                                                           │
│                                                                                      │
│  /hatırlat <metin>                                                                  │
│  AI zaman ve tekrar bilgisini otomatik çıkarır                                      │
│                                                                                      │
│  Örnekler:                                                                           │
│  ────────                                                                           │
│                                                                                      │
│  👤 /hatırlat yarın saat 10'da KDV beyannamesi                                      │
│  🤖 ✅ Hatırlatma oluşturuldu:                                                      │
│     📅 6 Şubat 2026, 10:00                                                          │
│     📋 KDV beyannamesi                                                              │
│     🔁 Tek seferlik                                                                 │
│                                                                                      │
│  ─────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  👤 /hatırlat her ayın 20'sinde muhtasar beyanname                                  │
│  🤖 ✅ Hatırlatma oluşturuldu:                                                      │
│     📅 Her ayın 20'si, 09:00                                                        │
│     📋 Muhtasar beyanname                                                           │
│     🔁 Aylık tekrarlı                                                               │
│                                                                                      │
│  ─────────────────────────────────────────────────────────────────────────────────  │
│                                                                                      │
│  👤 /hatırlat her hafta pazartesi ABC Ltd toplantısı                                │
│  🤖 ✅ Hatırlatma oluşturuldu:                                                      │
│     📅 Her Pazartesi, 09:00                                                         │
│     📋 ABC Ltd toplantısı                                                           │
│     🔁 Haftalık tekrarlı                                                            │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════    │
│                                                                                      │
│  📋 HATIRLATMALARI LİSTELE                                                          │
│  ──────────────────────────                                                         │
│                                                                                      │
│  👤 /hatırlatmalar                                                                  │
│  🤖 📋 Aktif Hatırlatmalarınız:                                                     │
│                                                                                      │
│     1. KDV Beyannamesi                                                              │
│        📅 6 Şubat 2026, 10:00 (yarın)                                               │
│        🔁 Tek seferlik                                                              │
│        [Düzenle] [Sil]                                                              │
│                                                                                      │
│     2. Muhtasar Beyanname                                                           │
│        📅 20 Şubat 2026, 09:00                                                      │
│        🔁 Aylık                                                                     │
│        [Düzenle] [Sil]                                                              │
│                                                                                      │
│     3. ABC Ltd Toplantısı                                                           │
│        📅 10 Şubat 2026, 09:00 (Pazartesi)                                          │
│        🔁 Haftalık                                                                  │
│        [Düzenle] [Sil]                                                              │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════    │
│                                                                                      │
│  ❌ HATIRLATMA SİL                                                                  │
│  ──────────────────                                                                 │
│                                                                                      │
│  👤 /hatırlat_sil 1                                                                 │
│  🤖 ❌ "KDV Beyannamesi" hatırlatması silindi.                                      │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════    │
│                                                                                      │
│  ✏️ HATIRLATMA DÜZENLE                                                              │
│  ──────────────────────                                                             │
│                                                                                      │
│  👤 /hatırlat_düzenle 2 her ayın 15'inde                                            │
│  🤖 ✅ "Muhtasar Beyanname" güncellendi:                                            │
│     📅 Her ayın 15'i, 09:00                                                         │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🧠 AI Zaman Çıkarımı

Kullanıcının doğal dil girdisinden zaman bilgisi çıkarma:

```typescript
// intelligence/services/time-parser.ts

interface ParsedTime {
  type: 'once' | 'daily' | 'weekly' | 'monthly' | 'custom';
  scheduledAt?: Date;  // Tek seferlik için
  cronExpression?: string;  // Tekrarlı için
  humanReadable: string;
}

// Örnek çıkarımlar:
const examples = [
  {
    input: "yarın saat 10'da",
    output: {
      type: 'once',
      scheduledAt: new Date('2026-02-06T10:00:00'),
      humanReadable: '6 Şubat 2026, 10:00'
    }
  },
  {
    input: "her ayın 20'sinde",
    output: {
      type: 'monthly',
      cronExpression: '0 9 20 * *',
      humanReadable: 'Her ayın 20\'si, 09:00'
    }
  },
  {
    input: "her hafta pazartesi",
    output: {
      type: 'weekly',
      cronExpression: '0 9 * * 1',
      humanReadable: 'Her Pazartesi, 09:00'
    }
  },
  {
    input: "her gün sabah 9'da",
    output: {
      type: 'daily',
      cronExpression: '0 9 * * *',
      humanReadable: 'Her gün, 09:00'
    }
  },
  {
    input: "3 gün sonra",
    output: {
      type: 'once',
      scheduledAt: new Date('2026-02-08T09:00:00'),
      humanReadable: '8 Şubat 2026, 09:00'
    }
  }
];
```

---

## 🔔 Hatırlatma Gönderimi

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          HATIRLATMA GÖNDERİMİ                                        │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  CRON JOB (Her dakika çalışır)                                                      │
│  ─────────────────────────────                                                      │
│                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────┐  │
│  │                        GATEWAY - REMINDER SERVICE                              │  │
│  ├───────────────────────────────────────────────────────────────────────────────┤  │
│  │                                                                                │  │
│  │  // Her dakika çalışan job                                                    │  │
│  │  cron.schedule('* * * * *', async () => {                                     │  │
│  │    const now = new Date();                                                    │  │
│  │                                                                                │  │
│  │    // Gönderilecek hatırlatmaları al                                          │  │
│  │    const reminders = await db.query(`                                         │  │
│  │      SELECT r.*, t.telegram_id, l.telegram_bot_token                         │  │
│  │      FROM reminders r                                                         │  │
│  │      JOIN telegram_users t ON r.telegram_user_id = t.id                      │  │
│  │      JOIN licenses l ON r.license_id = l.id                                  │  │
│  │      WHERE r.is_active = TRUE                                                 │  │
│  │      AND r.next_run_at <= $1                                                  │  │
│  │    `, [now]);                                                                 │  │
│  │                                                                                │  │
│  │    for (const reminder of reminders) {                                        │  │
│  │      await sendTelegramMessage(reminder);                                     │  │
│  │      await updateNextRun(reminder);                                           │  │
│  │    }                                                                          │  │
│  │  });                                                                          │  │
│  │                                                                                │  │
│  └───────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                      │
│        │                                                                             │
│        │ Telegram mesaj gönder                                                      │
│        ▼                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────────────┐  │
│  │                         TELEGRAM MESAJI                                        │  │
│  ├───────────────────────────────────────────────────────────────────────────────┤  │
│  │                                                                                │  │
│  │  ⏰ Hatırlatma                                                                 │  │
│  │                                                                                │  │
│  │  📋 KDV Beyannamesi                                                           │  │
│  │                                                                                │  │
│  │  ───────────────────────                                                      │  │
│  │                                                                                │  │
│  │  Bu hatırlatma faydalı oldu mu?                                               │  │
│  │  [👍 Evet]  [👎 Hayır]  [⏸️ Ertele 1 saat]                                    │  │
│  │                                                                                │  │
│  └───────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🧠 Telegram Öğrenme Sistemi

### Neler Öğrenilir?

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          TELEGRAM ÖĞRENME SİSTEMİ                                    │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  1. ZAMAN PATERNLERİ                                                                │
│  ────────────────────                                                               │
│                                                                                      │
│  Öğrenilen:                                                                          │
│  • Bu kullanıcı genellikle sabah 9-10 arası hatırlatma ister                        │
│  • Beyanname hatırlatmaları genellikle 3 gün önceden isteniyor                      │
│  • Haftalık toplantılar Pazartesi günleri tercih ediliyor                           │
│                                                                                      │
│  Uygulama:                                                                           │
│  • Yeni hatırlatmalarda varsayılan saat 09:00 olarak önerilir                       │
│  • "Beyanname" kelimesi geçince "3 gün önce hatırlat?" önerisi                      │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════    │
│                                                                                      │
│  2. İÇERİK PATERNLERİ                                                               │
│  ─────────────────────                                                              │
│                                                                                      │
│  Öğrenilen:                                                                          │
│  • "KDV" → vergi, beyanname                                                         │
│  • "toplantı" + müşteri adı → müşteri görüşmesi                                     │
│  • "ödeme" → alacak, finansal                                                       │
│                                                                                      │
│  Uygulama:                                                                           │
│  • Otomatik etiketleme                                                              │
│  • İlgili belgelerle ilişkilendirme                                                 │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════    │
│                                                                                      │
│  3. GERİ BİLDİRİM ÖĞRENMESİ                                                         │
│  ───────────────────────────                                                        │
│                                                                                      │
│  Toplanan veriler:                                                                   │
│  • 👍 Faydalı bulunan hatırlatmalar                                                 │
│  • 👎 Faydalı bulunmayan hatırlatmalar                                              │
│  • ⏸️ Ertelenen hatırlatmalar ve süreleri                                           │
│  • Silinen hatırlatmalar                                                            │
│                                                                                      │
│  Çıkarımlar:                                                                         │
│  • Bu tip hatırlatmalar genellikle faydasız → daha az öner                          │
│  • Bu saat dilimi çok erteleniyor → daha geç saat öner                              │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════    │
│                                                                                      │
│  4. PROAKTİF ÖNERİLER                                                               │
│  ─────────────────────                                                              │
│                                                                                      │
│  Sistemin proaktif olarak sunduğu öneriler:                                         │
│                                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                │  │
│  │  💡 Öneri                                                                      │  │
│  │                                                                                │  │
│  │  Geçen ay bu tarihte "Muhtasar Beyanname" hatırlatması                        │  │
│  │  oluşturmuştunuz. Bu ay da oluşturmak ister misiniz?                          │  │
│  │                                                                                │  │
│  │  [✅ Evet, oluştur]  [❌ Hayır]  [🔕 Bir daha sorma]                           │  │
│  │                                                                                │  │
│  └───────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 MongoDB Öğrenme Koleksiyonu

```javascript
// MongoDB: telegram_learning collection
{
  "_id": ObjectId("..."),
  "license_id": "uuid-license",
  "telegram_user_id": "uuid-user",
  
  // Zaman tercihleri
  "time_preferences": {
    "preferred_hours": [9, 10, 14],  // En çok kullanılan saatler
    "preferred_days": ["monday", "friday"],
    "avg_advance_days": 3  // Ortalama kaç gün önceden hatırlatma ister
  },
  
  // İçerik patternleri
  "content_patterns": [
    {
      "keywords": ["kdv", "katma değer"],
      "category": "vergi",
      "frequency": 12,  // Kaç kez kullanıldı
      "typical_schedule": "monthly",
      "typical_day": 20
    },
    {
      "keywords": ["toplantı", "görüşme"],
      "category": "müşteri",
      "frequency": 24,
      "typical_schedule": "weekly"
    }
  ],
  
  // Geri bildirim istatistikleri
  "feedback_stats": {
    "total_sent": 150,
    "useful": 120,  // 👍
    "not_useful": 10,  // 👎
    "snoozed": 20,  // ⏸️
    "useful_rate": 0.8
  },
  
  // Erteleme patternleri
  "snooze_patterns": {
    "morning_reminders": {
      "avg_snooze_minutes": 60,
      "snooze_rate": 0.3
    },
    "afternoon_reminders": {
      "avg_snooze_minutes": 30,
      "snooze_rate": 0.1
    }
  },
  
  "updated_at": ISODate("2026-02-05T12:00:00Z")
}
```

---

## 🔮 İleriye Dönük Faydalar

| Fayda | Açıklama |
|-------|----------|
| **Kişiselleştirilmiş UX** | Her kullanıcının tercihine göre özelleşen deneyim |
| **Proaktif Asistan** | Kullanıcı sormadan önce önerilerde bulunma |
| **Verimlilik Artışı** | Daha az manuel ayar, daha doğru hatırlatmalar |
| **Churn Azaltma** | Faydalı hatırlatmalar = memnun müşteri |
| **Upsell Fırsatı** | "Premium AI öneriler" olarak paketlenebilir |
| **Veri İçgörüsü** | Tüm müşterilerden öğrenilen genel pattern'ler |

---

## 🔄 Federatif Öğrenme Potansiyeli

Tüm müşterilerden anonim olarak öğrenme:

```
Müşteri A: Beyanname → 20. gün
Müşteri B: Beyanname → 19. gün
Müşteri C: Beyanname → 20. gün
─────────────────────────────────
Genel pattern: Beyanname hatırlatmaları
ayın 19-20'sinde yapılmalı
```

Bu veri, yeni müşterilere daha iyi varsayılan öneriler sunmak için kullanılabilir.
