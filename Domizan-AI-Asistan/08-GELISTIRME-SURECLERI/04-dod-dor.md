# Definition of Done (DoD) ve Definition of Ready (DoR)

> **Doküman:** 08-GELISTIRME-SURECLERI/04-dod-dor.md
> **Son Güncelleme:** 5 Şubat 2026

---

## ✅ Definition of Done (DoD)

Bir iş kalemi "Done" sayılması için:

### Kod Kalitesi
- [ ] Kod yazıldı ve çalışıyor
- [ ] Linter hatası yok
- [ ] TypeScript hataları yok (varsa)
- [ ] Kodlama standartlarına uygun

### Test
- [ ] Unit testler yazıldı
- [ ] Testler geçiyor
- [ ] Coverage threshold karşılanıyor (>70%)

### Review
- [ ] PR açıldı
- [ ] En az 1 approval alındı
- [ ] Review yorumları çözüldü

### Dokümantasyon
- [ ] Gerekli kod yorumları eklendi
- [ ] API değişiklikleri dokümante edildi (varsa)
- [ ] README güncellendi (gerekirse)

### Deployment
- [ ] Staging'e deploy edildi
- [ ] Staging'de test edildi
- [ ] Merge to develop/main yapıldı

---

## 📋 Definition of Ready (DoR)

Bir iş kalemi sprint'e alınmadan önce:

### Netlik
- [ ] Kullanıcı hikayesi açık yazılmış
- [ ] Kabul kriterleri tanımlanmış
- [ ] Edge case'ler belirlenmiş

### Tahmin
- [ ] Story points verilmiş
- [ ] Sprint'e sığacak boyutta

### Bağımlılıklar
- [ ] Dış bağımlılıklar belirlendi
- [ ] Blokerlerin çözüm planı var

### Tasarım
- [ ] UI mockup/wireframe hazır (gerekirse)
- [ ] Teknik yaklaşım belirlendi

---

## 📊 Checklist Uygulaması

### Sprint Planning
1. DoR kontrol edilir
2. Ready olmayan itemlar sprint'e alınmaz
3. Eksiklikler product backlog'a not edilir

### PR Review
1. DoD checklist PR template'e eklenir
2. Reviewer tüm maddeleri kontrol eder
3. Eksik madde varsa approve verilmez

---

*DoD ve DoR kalite standartlarını garanti eder.*
