# Kullanıcı Hikayeleri ve Kabul Kriterleri

> **Doküman:** 05-STRATEJI-URUN/06-kullanici-hikayeleri.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 📋 User Story Formatı

```
Bir [KULLANICI ROLÜ] olarak,
[EYLEM/İSTEK] istiyorum,
Böylece [FAYDA/DEĞER] elde edebilirim.
```

---

## 🔐 Epic 1: Lisans ve Aktivasyon

### US-001: İlk Aktivasyon

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir (yeni kullanıcı) |
| **İstek** | Lisans anahtarımı girerek uygulamayı aktifleştirmek |
| **Fayda** | Uygulamayı kullanmaya başlayabilirim |
| **Öncelik** | P0 (Kritik) |
| **Puan** | 5 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Geçerli lisans ile aktivasyon
  Verildiğinde kullanıcı lisans giriş ekranında
  Ve geçerli bir lisans anahtarı girildiğinde
  Zaman "Aktifleştir" butonuna tıklandığında
  O zaman cihaz otomatik olarak fingerprint oluşturmalı
  Ve lisans sunucuya doğrulanmalı
  Ve kullanıcı ana ekrana yönlendirilmeli

Senaryo: Geçersiz lisans ile aktivasyon
  Verildiğinde kullanıcı lisans giriş ekranında
  Ve geçersiz bir lisans anahtarı girildiğinde
  Zaman "Aktifleştir" butonuna tıklandığında
  O zaman "Geçersiz lisans anahtarı" hatası gösterilmeli
```

---

### US-002: İkinci Cihaz Ekleme

| Özellik | Değer |
|---------|-------|
| **Rol** | Mevcut kullanıcı |
| **İstek** | Aynı lisansı farklı bir bilgisayarda kullanmak |
| **Fayda** | Hem ofiste hem evde çalışabilirim |
| **Öncelik** | P1 |
| **Puan** | 8 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Yeni cihaz onay bekliyor
  Verildiğinde kullanıcı yeni bir cihazda lisansı girdiğinde
  Ve cihaz kotası dolmamışsa
  O zaman "Cihazınız admin onayı bekliyor" mesajı gösterilmeli
  Ve admin panele bildirim gitmeli

Senaryo: Admin cihazı onaylar
  Verildiğinde admin panelde bekleyen cihaz görüntüleniyor
  Zaman admin "Onayla" butonuna tıkladığında
  O zaman cihaz durumu "approved" olmalı
  Ve kullanıcıya bildirim gitmeli
```

---

## 📄 Epic 2: Belge Yönetimi

### US-010: Otomatik Belge Algılama

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir |
| **İstek** | Klasöre attığım belgelerin otomatik algılanmasını |
| **Fayda** | Manuel yükleme yapmak zorunda kalmam |
| **Öncelik** | P0 |
| **Puan** | 5 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Yeni PDF algılama
  Verildiğinde "Gelen Belgeler" klasörü izleniyor
  Zaman yeni bir PDF dosyası klasöre eklendiğinde
  O zaman 5 saniye içinde dosya kuyruğa eklenmeli
  Ve kullanıcıya "Yeni belge algılandı" bildirimi gösterilmeli

Senaryo: Desteklenmeyen format
  Verildiğinde "Gelen Belgeler" klasörü izleniyor
  Zaman desteklenmeyen bir dosya (örn: .docx) eklendiğinde
  O zaman dosya göz ardı edilmeli
  Ve log kaydı oluşturulmalı
```

---

### US-011: Belge Analizi

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir |
| **İstek** | Belgenin tipinin ve içeriğinin otomatik analiz edilmesini |
| **Fayda** | Elle incelemek zorunda kalmam |
| **Öncelik** | P0 |
| **Puan** | 13 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Fatura analizi
  Verildiğinde bir fatura PDF'i analiz kuyruğunda
  Zaman analiz başlatıldığında
  O zaman 10 saniye içinde sonuç dönmeli
  Ve belge tipi "fatura" olarak tespit edilmeli
  Ve VKN/TC kimlik numarası çıkarılmalı
  Ve tarih ve tutar bilgisi çıkarılmalı

Senaryo: Belirsiz belge
  Verildiğinde okunması zor bir belge analiz edildiğinde
  Zaman AI güven skoru %70'in altındaysa
  O zaman "Manuel inceleme önerilir" uyarısı gösterilmeli
```

---

### US-012: Mükellef Eşleştirme

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir |
| **İstek** | Belgenin otomatik olarak doğru mükelleffe eşleştirilmesini |
| **Fayda** | Yanlış dosyalama riskini azaltırım |
| **Öncelik** | P0 |
| **Puan** | 8 |

**Kabul Kriterleri:**
```gherkin
Senaryo: VKN ile eşleştirme
  Verildiğinde belgeden VKN çıkarıldı
  Ve bu VKN kayıtlı mükelleflerden birine aitse
  O zaman mükellef otomatik eşleştirilmeli
  Ve güven skoru gösterilmeli

Senaryo: Yeni mükellef önerisi
  Verildiğinde belgeden VKN çıkarıldı
  Ve bu VKN sistemde kayıtlı değilse
  O zaman "Yeni mükellef oluşturulsun mu?" önerisi gösterilmeli
  Ve firma adı otomatik doldurulmalı
```

---

### US-013: Onay ve Dosyalama

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir |
| **İstek** | Analiz sonucunu onaylayıp belgeyi dosyalamak |
| **Fayda** | Son kontrolü ben yaparım ama hızlı olurum |
| **Öncelik** | P0 |
| **Puan** | 5 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Onay ve dosyalama
  Verildiğinde analiz sonucu kullanıcıya gösterildi
  Zaman kullanıcı "Onayla" butonuna tıkladığında
  O zaman belge önerilen klasöre taşınmalı
  Ve dosya adı standart formata çevrilmeli
  Ve işlem loglanmalı

Senaryo: Düzeltme ve öğrenme
  Verildiğinde analiz sonucu kullanıcıya gösterildi
  Ve kullanıcı mükellef eşleştirmesini değiştirdiğinde
  Zaman "Onayla" butonuna tıklandığında
  O zaman düzeltme pattern olarak kaydedilmeli
  Ve gelecek analizlerde dikkate alınmalı
```

---

## 💬 Epic 3: Telegram Entegrasyonu

### US-020: Günlük Brif Alma

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir |
| **İstek** | Telegram'dan günlük özet almak |
| **Fayda** | Ofis dışındayken bile durumu bilirim |
| **Öncelik** | P1 |
| **Puan** | 5 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Manuel brif komutu
  Verildiğinde kullanıcı Telegram botuna bağlı
  Zaman "/brif" komutunu gönderdiğinde
  O zaman günlük özet mesajı 3 saniye içinde gelmeli
  Ve işlenen belge sayısı gösterilmeli
  Ve bekleyen belgeler (varsa) gösterilmeli

Senaryo: Otomatik sabah brifi
  Verildiğinde saat 09:00 olduğunda
  O zaman tüm aktif kullanıcılara günlük brif gönderilmeli
```

---

### US-021: RAG ile Soru Sorma

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir |
| **İstek** | Belgelerim hakkında doğal dilde soru sormak |
| **Fayda** | Excel'lerde aramak yerine sorarak bulabilirim |
| **Öncelik** | P2 |
| **Puan** | 13 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Tutar sorgusu
  Verildiğinde kullanıcı "/sor ABC Ltd son 3 ayda ne kadar fatura kesti?" yazdığında
  O zaman ilgili belgeler bulunmalı
  Ve toplam tutar hesaplanmalı
  Ve kaynak belgeler listelenmeli
```

---

### US-022: Hatırlatma Oluşturma

| Özellik | Değer |
|---------|-------|
| **Rol** | Mali müşavir |
| **İstek** | Telegram'dan hatırlatma oluşturmak |
| **Fayda** | Önemli tarihleri kaçırmam |
| **Öncelik** | P2 |
| **Puan** | 8 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Doğal dil ile hatırlatma
  Verildiğinde kullanıcı "/hatırlat yarın saat 10'da KDV beyannamesi" yazdığında
  O zaman tarih ve saat AI ile parse edilmeli
  Ve hatırlatma oluşturulmalı
  Ve onay mesajı gösterilmeli

Senaryo: Hatırlatma gönderimi
  Verildiğinde zamanlanmış bir hatırlatma varsa
  Zaman belirlenen saat geldiğinde
  O zaman kullanıcıya Telegram mesajı gönderilmeli
```

---

## 🛡️ Epic 4: Admin Panel

### US-030: Lead Yönetimi

| Özellik | Değer |
|---------|-------|
| **Rol** | Admin |
| **İstek** | Landing page'den gelen lead'leri görmek ve yönetmek |
| **Fayda** | Satış sürecini takip edebilirim |
| **Öncelik** | P0 |
| **Puan** | 8 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Lead listesi görüntüleme
  Verildiğinde admin panele giriş yapıldığında
  O zaman lead listesi tarihe göre sıralı gösterilmeli
  Ve her lead için isim, email, telefon, durum gösterilmeli

Senaryo: Lead durumu güncelleme
  Verildiğinde bir lead seçildiğinde
  Zaman durum "Contacted" olarak değiştirildiğinde
  O zaman değişiklik kaydedilmeli
  Ve aktivite loguna eklenmeli
```

---

### US-031: Lisans Oluşturma

| Özellik | Değer |
|---------|-------|
| **Rol** | Admin |
| **İstek** | Yeni müşteri için lisans oluşturmak |
| **Fayda** | Satış sonrası hızlıca onboarding yapabilirim |
| **Öncelik** | P0 |
| **Puan** | 13 |

**Kabul Kriterleri:**
```gherkin
Senaryo: Lisans oluşturma
  Verildiğinde admin lisans oluşturma formunu doldurduğunda
  Ve müşteri bilgileri, paket tipi, API key girildiğinde
  Zaman "Oluştur" butonuna tıklandığında
  O zaman lisans anahtarı otomatik oluşturulmalı
  Ve Telegram webhook kurulmalı (varsa)
  Ve müşteriye email gönderilmeli
```

---

## 📊 Backlog Özeti

| Epic | User Story Sayısı | Toplam Puan |
|------|-------------------|-------------|
| Lisans ve Aktivasyon | 5 | 23 |
| Belge Yönetimi | 8 | 47 |
| Telegram Entegrasyonu | 5 | 34 |
| Admin Panel | 6 | 39 |
| **TOPLAM** | **24** | **143** |

---

## 🏃 Sprint Planı (Öneri)

| Sprint | User Stories | Puan |
|--------|--------------|------|
| Sprint 1 | US-001, US-010, US-011 | 23 |
| Sprint 2 | US-012, US-013, US-030 | 21 |
| Sprint 3 | US-002, US-031, US-020 | 26 |
| Sprint 4 | US-021, US-022 | 21 |

---

*Bu user story'ler ürün backlog'unun temelidir ve önceliklendirilecektir.*
