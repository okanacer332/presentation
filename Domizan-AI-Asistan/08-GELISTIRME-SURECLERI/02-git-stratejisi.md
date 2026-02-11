# Git Stratejisi ve Branching

> **Doküman:** 08-GELISTIRME-SURECLERI/02-git-stratejisi.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🌳 Branch Yapısı (Git Flow)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                              GIT BRANCH YAPISI                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│   main ─────●────────────────●───────────────────●────────────────▶  (production)   │
│             │                │                   │                                   │
│             │ merge          │ merge             │ merge                             │
│             │                │                   │                                   │
│   develop ──●───●────●───────●───●───────●───────●───●────────────▶  (staging)      │
│                 │    │           │       │           │                               │
│                 │    │           │       │           └─ feature/telegram-rag        │
│                 │    │           │       │                                           │
│                 │    │           │       └─ feature/multi-device                    │
│                 │    │           │                                                   │
│                 │    │           └─ hotfix/license-fix ─▶ main + develop            │
│                 │    │                                                               │
│                 │    └─ feature/desktop-app                                          │
│                 │                                                                    │
│                 └─ feature/admin-panel                                              │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📋 Branch Türleri

| Tip | Prefix | Base | Merge To | Örnek |
|-----|--------|------|----------|-------|
| Feature | `feature/` | develop | develop | `feature/telegram-integration` |
| Bugfix | `bugfix/` | develop | develop | `bugfix/login-error` |
| Hotfix | `hotfix/` | main | main + develop | `hotfix/security-patch` |
| Release | `release/` | develop | main + develop | `release/v1.2.0` |

---

## 📝 Commit Mesajları (Conventional Commits)

### Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Kullanım |
|------|----------|
| `feat` | Yeni özellik |
| `fix` | Bug düzeltme |
| `docs` | Dokümantasyon |
| `style` | Formatting (kod değişikliği yok) |
| `refactor` | Kod yeniden düzenleme |
| `test` | Test ekleme/düzeltme |
| `chore` | Build, tooling |

### Örnekler

```
feat(desktop): add document preview modal

fix(gateway): resolve license validation timeout

docs(readme): update installation instructions

refactor(intelligence): extract OCR module

test(api): add integration tests for lead endpoints

chore(deps): upgrade electron to v28
```

---

## 🔄 Pull Request Süreci

### PR Açma

1. Feature branch oluştur: `git checkout -b feature/my-feature`
2. Kod yaz ve commit et
3. Push: `git push origin feature/my-feature`
4. GitHub'da PR aç (develop'a)

### PR Template

```markdown
## Açıklama
[Ne değişti, neden?]

## Değişiklik Türü
- [ ] Yeni özellik
- [ ] Bug fix
- [ ] Refactoring
- [ ] Dokümantasyon

## Test
- [ ] Unit testler eklendi
- [ ] Manuel test yapıldı

## Checklist
- [ ] Kod standartlarına uygun
- [ ] Self-review yapıldı
- [ ] Dokümantasyon güncellendi
```

### Review Gereksinimleri

| Değişiklik | Min Reviewer | Approval |
|------------|--------------|----------|
| Feature | 1 | 1 approval |
| Hotfix | 1 | 1 approval (fast-track) |
| Release | 2 | 2 approvals |

---

## 🏷️ Versiyonlama (SemVer)

```
MAJOR.MINOR.PATCH

v1.2.3
 │ │ │
 │ │ └─ PATCH: Bug fixes
 │ └───── MINOR: New features (backward compatible)
 └──────── MAJOR: Breaking changes
```

### Örnekler

| Değişiklik | Versiyon |
|------------|----------|
| Bug fix | 1.2.3 → 1.2.4 |
| Yeni özellik | 1.2.4 → 1.3.0 |
| Breaking change | 1.3.0 → 2.0.0 |

---

## 🚀 Release Süreci

```
1. develop'dan release branch: release/v1.3.0
2. Son testler ve bug fixler
3. main'e merge + tag
4. develop'a merge
5. GitHub Release oluştur
```

---

*Tutarlı Git kullanımı takım uyumunu artırır.*
