# Code Review Checklist

> **Doküman:** 08-GELISTIRME-SURECLERI/05-code-review-checklist.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🔍 Review Alanları

### 1. Fonksiyonellik
- [ ] Kod istenen işlevi yapıyor mu?
- [ ] Edge case'ler handle ediliyor mu?
- [ ] Hata durumları düzgün yönetiliyor mu?

### 2. Kod Kalitesi
- [ ] Anlaşılır ve okunabilir mi?
- [ ] Naming convention'lara uygun mu?
- [ ] DRY prensibi uygulanıyor mu?
- [ ] Gereksiz karmaşıklık var mı?

### 3. Performans
- [ ] Gereksiz işlem/döngü var mı?
- [ ] N+1 query problemi var mı?
- [ ] Memory leak riski var mı?
- [ ] Async işlemler doğru kullanılıyor mu?

### 4. Güvenlik
- [ ] Input validation yapılıyor mu?
- [ ] SQL Injection riski var mı?
- [ ] XSS koruması var mı?
- [ ] Sensitive data loglara yazılıyor mu?
- [ ] Yetki kontrolleri yapılıyor mu?

### 5. Test
- [ ] Yeterli test coverage var mı?
- [ ] Test senaryoları mantıklı mı?
- [ ] Edge case'ler test ediliyor mu?

### 6. Dokümantasyon
- [ ] Karmaşık logic açıklanmış mı?
- [ ] Public API dokümante mi?
- [ ] TODO'lar takip edilebilir mi?

---

## 💬 Review Yorumları

### Yapıcı Olun
```
✅ "Bu döngüyü Array.map() ile daha okunabilir hale getirebiliriz"
❌ "Bu kod çok kötü"
```

### Önerilerle Gelin
```
✅ "Burada try-catch ile hataları yakalarsak daha güvenli olur"
❌ "Hata handling yok"
```

### Soru Sorun
```
✅ "Bu yaklaşımı seçmenizdeki düşünce neydi?"
❌ "Neden böyle yaptın?"
```

---

## ⏱️ SLA

| PR Boyutu | Review Süresi |
|-----------|---------------|
| Small (<100 line) | < 4 saat |
| Medium (100-500) | < 1 gün |
| Large (>500) | < 2 gün |

---

*İyi review, daha iyi kod demektir.*
