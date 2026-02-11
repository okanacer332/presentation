# Test Senaryoları

> **Doküman:** 09-KA-TEST/02-test-senaryolari.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 📋 TC-001: Lisans Aktivasyonu

### Ön Koşullar
- Geçerli lisans anahtarı mevcut
- Desktop app kurulu

### Adımlar
1. Desktop uygulamasını aç
2. Lisans anahtarını gir: `DOMIZAN-PRO5-XXXX`
3. "Aktifleştir" butonuna tıkla
4. Aktivasyon sonucunu bekle

### Beklenen Sonuç
- ✅ "Aktivasyon başarılı" mesajı
- ✅ Dashboard açılır
- ✅ Lisans bilgisi ayarlarda görünür

---

## 📋 TC-002: Belge Analizi (Başarılı)

### Ön Koşullar
- Lisans aktif
- Gelen belgeler klasörü ayarlı

### Adımlar
1. Sample PDF dosyasını klasöre kopyala
2. 5 saniye bekle (folder watcher)
3. Bekleyen belgeler listesini kontrol et
4. Belge kartını incele

### Beklenen Sonuç
- ✅ Belge listede görünür
- ✅ Belge tipi doğru tespit edilmiş
- ✅ VKN çıkarılmış
- ✅ Mükellef önerisi yapılmış

---

## 📋 TC-003: Belge Onaylama

### Ön Koşullar
- TC-002 tamamlanmış
- Bekleyen belge var

### Adımlar
1. Belge kartında "Onayla" tıkla
2. Onay dialogunu onayla

### Beklenen Sonuç
- ✅ Belge bekleyen listeden kalkar
- ✅ İşlenen listede görünür
- ✅ Dosya doğru klasöre taşınmış
- ✅ Toast notification gösterilir

---

## 📋 TC-004: Belge Düzeltme

### Ön Koşullar
- Bekleyen belge var

### Adımlar
1. "Düzelt" butonuna tıkla
2. Mükellef seçimini değiştir
3. "Kaydet" tıkla

### Beklenen Sonuç
- ✅ Düzeltme uygulanır
- ✅ Öğrenme sistemi güncellenir
- ✅ Belge doğru klasöre taşınır

---

## 📋 TC-005: Telegram /brif Komutu

### Ön Koşullar
- Telegram botu bağlı
- İşlenmiş belgeler var

### Adımlar
1. Telegram'da /brif gönder
2. Yanıtı kontrol et

### Beklenen Sonuç
- ✅ Günlük özet mesajı alınır
- ✅ Belge sayıları doğru
- ✅ Format okunabilir

---

## 📋 TC-006: Admin Lead Oluşturma

### Ön Koşullar
- Admin panele giriş yapılmış

### Adımlar
1. Leads sayfasına git
2. "Yeni Lead" tıkla
3. Formu doldur
4. Kaydet

### Beklenen Sonuç
- ✅ Lead listede görünür
- ✅ Durum "new"
- ✅ Timestamp doğru

---

## 📋 TC-007: Çoklu Cihaz İsteği

### Ön Koşullar
- Lisans aktif (1. cihazda)
- Max cihaz > 1

### Adımlar
1. 2. cihazda uygulamayı aç
2. Aynı lisansı gir
3. Aktivasyon talebi gönder

### Beklenen Sonuç
- ✅ "Onay bekliyor" durumu
- ✅ Admin panelde bildirim
- ✅ Cihaz bekleyen listede

---

## 📋 TC-008: Hatalı Lisans

### Ön Koşullar
- Desktop app kurulu

### Adımlar
1. Geçersiz lisans anahtarı gir
2. Aktifleştir

### Beklenen Sonuç
- ✅ Hata mesajı gösterilir
- ✅ Dashboard açılmaz
- ✅ Tekrar deneme mümkün

---

## 📊 Test Coverage Özeti

| Modül | Test Sayısı | Otomasyona |
|-------|-------------|------------|
| Lisans | 4 | 3 |
| Belge Analiz | 5 | 4 |
| Telegram | 3 | 1 |
| Admin Panel | 6 | 5 |
| **Toplam** | **18** | **13** |

---

*Test senaryoları her sprint'te güncellenir.*
