# Erişilebilirlik Standartları

> **Doküman:** 06-UX-UI-TASARIM/06-erisilebilirlik.md
> **Son Güncelleme:** 5 Şubat 2026
> **Standart:** WCAG 2.1 AA

---

## 🎯 Hedefler

| Hedef | Seviye |
|-------|--------|
| WCAG 2.1 AA | Zorunlu |
| Lighthouse Accessibility | 90+ |

---

## 👁️ Algılanabilirlik

### Renk Kontrastı
- Normal metin: 4.5:1 minimum
- Büyük metin (18px+): 3:1 minimum
- UI bileşenleri: 3:1 minimum

### Metin Alternatifleri
```html
<!-- Görsel -->
<img src="invoice.pdf" alt="ABC Ltd satış faturası">

<!-- İkon buton -->
<button aria-label="Kapat"><XIcon /></button>

<!-- Dekoratif -->
<img src="pattern.svg" alt="">
```

---

## ⌨️ Çalıştırılabilirlik

### Klavye Navigasyonu
| Tuş | Aksiyon |
|-----|---------|
| Tab | Sonraki element |
| Shift+Tab | Önceki element |
| Enter/Space | Aktivasyon |
| Escape | Modal kapatma |
| Arrow keys | Liste seçimi |

### Focus Göstergesi
```css
:focus-visible {
  outline: 2px solid #4F46E5;
  outline-offset: 2px;
}
```

### Skip Link
```html
<a href="#main" class="skip-link">Ana içeriğe geç</a>
```

---

## 📖 Anlaşılabilirlik

### Dil Tanımı
```html
<html lang="tr">
```

### Hata Mesajları
```html
<div role="alert" aria-live="polite">
  ✗ Email formatı geçersiz. Örnek: isim@firma.com
</div>
```

---

## 🔧 Sağlamlık

### Semantic HTML
```html
<button>Kaydet</button>  <!-- ✅ -->
<div onclick="">Kaydet</div>  <!-- ❌ -->
```

### ARIA Kullanımı
```html
<!-- Modal -->
<div role="dialog" aria-modal="true" aria-labelledby="title">

<!-- Dinamik içerik -->
<div aria-live="polite">Kaydedildi</div>

<!-- Loading -->
<div aria-busy="true">Yükleniyor...</div>
```

---

## ✅ Kontrol Listesi

- [ ] Tüm görsellerde alt text
- [ ] Renk kontrastı 4.5:1+
- [ ] Klavye erişimi tam
- [ ] Focus göstergesi görünür
- [ ] Skip link mevcut
- [ ] ARIA doğru kullanımda

---

## 🔧 Test Araçları

| Araç | Kullanım |
|------|----------|
| axe DevTools | Otomatik audit |
| WAVE | Görsel overlay |
| Lighthouse | Score ölçümü |
| NVDA | Screen reader test |

---

*WCAG 2.1 AA uyumu tüm Domizan uygulamalarında zorunludur.*
