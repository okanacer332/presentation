# Sıfırdan Kurulum Rehberi

> **Doküman:** 03-KURULUM/01-sifirdan-kurulum.md
> **Son Güncelleme:** 5 Şubat 2026

---

## 🎯 Amaç

Domizan AI Asistan projesini sıfırdan kurulum. BMAD metodolojisi dahil.

---

## 📋 Ön Gereksinimler

| Araç | Minimum Versiyon | Kontrol |
|------|------------------|---------|
| Node.js | 18.x+ | `node --version` |
| Python | 3.11+ | `python --version` |
| pnpm | 8.x+ | `pnpm --version` |
| Docker | 24.x+ | `docker --version` |
| Git | 2.x+ | `git --version` |

---

## 📁 Proje Yapısı (Hedef)

```
domizan-ai-assistant/
├── packages/
│   ├── gateway/              # License Gateway (Node.js)
│   ├── intelligence/         # AI Backend (Python)
│   ├── desktop/              # Desktop App (Electron)
│   ├── admin/                # Admin Panel (Vite + React) [YENİ]
│   └── landing/              # Landing Page [KORUNACAK]
│
├── skills/                   # OpenClaw Skills
│   └── domizan-telegram/
│
├── Domizan-AI-Asistan/       # Dokümantasyon
│
├── _bmad-output/             # BMAD outputs
│   └── bmad-features/
│
├── docker-compose.dev.yml
├── docker-compose.yml
├── pnpm-workspace.yaml
└── package.json
```

---

## 🚀 Kurulum Adımları

### Adım 1: Repository Klonlama

```powershell
# Mevcut repo zaten var, yeni branch oluştur
cd c:\Users\acero\Documents\GitHub\domizan-assistant

# v4 için yeni branch
git checkout -b v4-fresh-start

# Uzak branch'e push
git push -u origin v4-fresh-start
```

---

### Adım 2: BMAD Kurulumu

BMAD (Build, Measure, Analyze, Decide) metodolojisi için klasör yapısı:

```powershell
# BMAD output klasörü
mkdir _bmad-output
mkdir _bmad-output/bmad-features

# BMAD config dosyası
@"
{
  "methodology": "BMAD",
  "version": "1.0",
  "phases": {
    "build": "Feature geliştirme",
    "measure": "Test ve metrik toplama", 
    "analyze": "Sonuç analizi",
    "decide": "İterasyon kararı"
  },
  "featureDirectory": "./_bmad-output/bmad-features"
}
"@ | Out-File -FilePath "_bmad-output/bmad.config.json" -Encoding UTF8
```

#### BMAD Feature Şablonu

```powershell
# Feature şablonu oluştur
@"
# Feature: [FEATURE_NAME]

## Build Phase
- [ ] Spesifikasyon yazıldı
- [ ] Kod implementasyonu
- [ ] Unit testler

## Measure Phase
- [ ] Test coverage
- [ ] Performance metrikleri
- [ ] User feedback

## Analyze Phase
- [ ] Sonuçlar değerlendirildi
- [ ] Problemler tanımlandı

## Decide Phase
- [ ] Next iteration planlandı
- [ ] Backlog güncellendi
"@ | Out-File -FilePath "_bmad-output/FEATURE_TEMPLATE.md" -Encoding UTF8
```

---

### Adım 3: Monorepo Kurulumu

```powershell
# Root package.json güncelle
@"
{
  "name": "domizan-ai-assistant",
  "version": "4.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev": "pnpm --parallel -r run dev",
    "build": "pnpm -r run build",
    "test": "pnpm -r run test",
    "lint": "pnpm -r run lint",
    
    "dev:gateway": "pnpm --filter gateway dev",
    "dev:admin": "pnpm --filter admin dev",
    "dev:desktop": "pnpm --filter desktop dev",
    "dev:landing": "pnpm --filter landing dev",
    
    "docker:up": "docker-compose -f docker-compose.dev.yml up -d",
    "docker:down": "docker-compose -f docker-compose.dev.yml down",
    "docker:logs": "docker-compose -f docker-compose.dev.yml logs -f"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.3.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "pnpm": ">=8.0.0"
  }
}
"@ | Out-File -FilePath "package.json" -Encoding UTF8
```

```powershell
# pnpm workspace config
@"
packages:
  - 'packages/*'
"@ | Out-File -FilePath "pnpm-workspace.yaml" -Encoding UTF8
```

---

### Adım 4: Docker Ortamı

```powershell
# docker-compose.dev.yml oluştur
@"
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    container_name: domizan-postgres
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: domizan
      POSTGRES_PASSWORD: domizan_dev_password
      POSTGRES_DB: domizan
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U domizan"]
      interval: 5s
      timeout: 5s
      retries: 5

  mongodb:
    image: mongo:7
    container_name: domizan-mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    healthcheck:
      test: echo 'db.runCommand("ping").ok' | mongosh localhost:27017/test --quiet
      interval: 5s
      timeout: 5s
      retries: 5

  chromadb:
    image: chromadb/chroma:latest
    container_name: domizan-chromadb
    ports:
      - "8000:8000"
    volumes:
      - chromadb_data:/chroma/chroma
    environment:
      - ANONYMIZED_TELEMETRY=false

  redis:
    image: redis:7-alpine
    container_name: domizan-redis
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  postgres_data:
  mongodb_data:
  chromadb_data:
  redis_data:
"@ | Out-File -FilePath "docker-compose.dev.yml" -Encoding UTF8
```

```powershell
# Docker başlat
docker-compose -f docker-compose.dev.yml up -d

# Kontrol et
docker-compose -f docker-compose.dev.yml ps
```

**Beklenen Çıktı:**
```
NAME                 COMMAND                  STATUS    PORTS
domizan-chromadb     "uvicorn chromadb.app"   Up        0.0.0.0:8000->8000/tcp
domizan-mongodb      "docker-entrypoint.s…"   Up        0.0.0.0:27017->27017/tcp
domizan-postgres     "docker-entrypoint.s…"   Up        0.0.0.0:5432->5432/tcp
domizan-redis        "docker-entrypoint.s…"   Up        0.0.0.0:6379->6379/tcp
```

---

### Adım 5: Gateway Kurulumu

```powershell
# Gateway klasörü
mkdir packages/gateway
cd packages/gateway

# package.json
@"
{
  "name": "gateway",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "vitest",
    "lint": "eslint src/"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "pg": "^8.11.3",
    "ioredis": "^5.3.2",
    "grammy": "^1.20.0",
    "zod": "^3.22.4",
    "pino": "^8.17.2",
    "pino-pretty": "^10.3.1"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/cors": "^2.8.17",
    "@types/pg": "^8.10.9",
    "tsx": "^4.7.0",
    "typescript": "^5.3.0",
    "vitest": "^1.2.0",
    "eslint": "^8.56.0"
  }
}
"@ | Out-File -FilePath "package.json" -Encoding UTF8

# TypeScript config
@"
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
"@ | Out-File -FilePath "tsconfig.json" -Encoding UTF8

# Klasör yapısı
mkdir src
mkdir src/config
mkdir src/middleware
mkdir src/routes
mkdir src/services
mkdir src/models
mkdir src/database
mkdir tests

# Entry point
@"
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { healthRouter } from './routes/health';
import { config } from './config';
import { logger } from './config/logger';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/v1/health', healthRouter);

// Start server
app.listen(config.port, () => {
  logger.info(\`Gateway running on port \${config.port}\`);
});
"@ | Out-File -FilePath "src/index.ts" -Encoding UTF8

# Install dependencies
pnpm install

cd ../..
```

---

### Adım 6: Admin Panel Kurulumu (Vite + React)

```powershell
# Admin panel oluştur
cd packages
npx -y create-vite@latest admin --template react-ts
cd admin

# TailwindCSS ekle
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Gerekli dependencies
pnpm add react-hook-form @hookform/resolvers zod
pnpm add @tanstack/react-query @tanstack/react-table
pnpm add react-router-dom
pnpm add recharts lucide-react
pnpm add zustand

# package.json'daki port'u güncelle (5174)
# vite.config.ts'te server.port: 5174 ekle

cd ../..
```

---

### Adım 7: Environment Variables

```powershell
# .env.example oluştur
@"
# Gateway
GATEWAY_PORT=3001
DATABASE_URL=postgresql://domizan:domizan_dev_password@localhost:5432/domizan
REDIS_URL=redis://localhost:6379
INTELLIGENCE_URL=http://localhost:3002
INTERNAL_API_KEY=dev-internal-key-change-in-production

# Intelligence
INTELLIGENCE_PORT=3002
MONGODB_URL=mongodb://localhost:27017/domizan
CHROMADB_URL=http://localhost:8000
GEMINI_API_KEY=your-gemini-api-key

# Telegram
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_WEBHOOK_URL=https://your-domain.com/v1/webhook/telegram

# Admin
ADMIN_JWT_SECRET=your-jwt-secret-change-in-production
"@ | Out-File -FilePath ".env.example" -Encoding UTF8

# .env oluştur (geliştirme için)
Copy-Item ".env.example" ".env"
```

---

### Adım 8: İlk Çalıştırma

```powershell
# Tüm dependencies yükle
pnpm install

# Docker servislerini başlat
docker-compose -f docker-compose.dev.yml up -d

# Gateway'i başlat (terminal 1)
pnpm dev:gateway

# Admin'i başlat (terminal 2)
pnpm dev:admin

# Landing'i başlat (terminal 3)
pnpm dev:landing
```

---

## ✅ Kurulum Doğrulama

| Servis | URL | Beklenen |
|--------|-----|----------|
| PostgreSQL | `localhost:5432` | Connected |
| MongoDB | `localhost:27017` | Connected |
| ChromaDB | `http://localhost:8000/api/v1/heartbeat` | `{"nanosecond heartbeat":...}` |
| Redis | `localhost:6379` | PONG |
| Gateway | `http://localhost:3001/v1/health` | `{"status":"ok"}` |
| Admin | `http://localhost:5174` | React app |
| Landing | `http://localhost:5173` | Landing page |

---

## 📋 Sonraki Adımlar

1. [Docker Ortamı](./02-docker-ortami.md) - Detaylı Docker yapılandırması
2. [Development Mode](./03-development-mode.md) - Geliştirme ipuçları
3. [Production Deploy](./04-production-deploy.md) - Canlıya alma
