# Kodlama Standartları

> **Doküman:** 08-GELISTIRME-SURECLERI/01-kodlama-standartlari.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 📋 Genel Kurallar

| Kural | Açıklama |
|-------|----------|
| Dil | JavaScript/TypeScript |
| Linter | ESLint |
| Formatter | Prettier |
| Commit | Conventional Commits |

---

## 📝 Naming Conventions

### Dosya İsimleri

| Tip | Format | Örnek |
|-----|--------|-------|
| Component | PascalCase | `DocumentCard.jsx` |
| Hook | camelCase + use | `useDocuments.js` |
| Utility | camelCase | `formatDate.js` |
| Constant | UPPER_SNAKE | `API_ENDPOINTS.js` |
| Test | *.test.js | `DocumentCard.test.js` |

### Değişken İsimleri

```javascript
// ✅ Doğru
const documentCount = 10;
const isLoading = true;
const hasError = false;
const handleSubmit = () => {};
const MAX_RETRY_COUNT = 3;

// ❌ Yanlış
const docCnt = 10;
const loading = true;  // boolean prefix yok
const err = false;
const submit = () => {};  // handler prefix yok
const maxRetry = 3;  // constant UPPER_SNAKE değil
```

### Fonksiyon İsimleri

| Tip | Prefix | Örnek |
|-----|--------|-------|
| Handler | handle | `handleClick` |
| Boolean getter | is/has/can | `isValid`, `hasError` |
| Fetcher | fetch/get | `fetchDocuments` |
| Mutator | update/set | `updateStatus` |
| Creator | create | `createDocument` |

---

## 🔧 ESLint Kuralları

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn",
    "prefer-const": "error",
    "eqeqeq": "error",
    "curly": "error",
    "no-var": "error"
  }
}
```

---

## 🎨 Prettier Ayarları

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

---

## 📦 Dosya Yapısı

```
src/
├── components/
│   ├── common/          # Paylaşılan componentler
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   └── index.js
│   │   └── Modal/
│   └── features/        # Özellik bazlı componentler
│       ├── documents/
│       └── mukellef/
├── hooks/               # Custom hooks
├── services/            # API servisleri
├── utils/               # Utility fonksiyonları
├── constants/           # Sabitler
└── styles/              # Global stiller
```

---

## 💡 Best Practices

### Error Handling

```javascript
// ✅ Doğru
try {
  const data = await fetchDocuments();
  return data;
} catch (error) {
  logger.error('Document fetch failed', { error });
  throw new AppError('FETCH_FAILED', error.message);
}

// ❌ Yanlış
try {
  const data = await fetchDocuments();
  return data;
} catch (e) {
  console.log(e);  // console.log kullanma
}
```

### Async/Await

```javascript
// ✅ Doğru
async function processDocuments(docs) {
  const results = await Promise.all(docs.map(doc => analyze(doc)));
  return results;
}

// ❌ Yanlış
function processDocuments(docs) {
  return new Promise((resolve) => {
    // callback hell
  });
}
```

### Comments

```javascript
// ✅ Doğru - Neden yapıldığını açıkla
// Gemini API rate limit nedeniyle retry gerekli
const result = await retryWithBackoff(apiCall);

// ❌ Yanlış - Kodu tekrarlama
// Döngü başlat
for (let i = 0; i < 10; i++) {
```

---

## 🧪 Test Standartları

| Kural | Değer |
|-------|-------|
| Minimum coverage | %70 |
| Test framework | Jest |
| Component test | React Testing Library |
| E2E | Playwright |

---

*Bu standartlar tüm Domizan projelerinde geçerlidir.*
