# Vite + React + shadcn/ui + TypeScript

Modern web application built with Vite, React, TypeScript, and shadcn/ui components.

## 🚀 Development

### Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Server akan berjalan di `http://localhost:5000`

## 📦 What technologies are used for this project?

This project is built with:

- **Vite** - Build tool & development server
- **TypeScript** - Type safety
- **React 18** - UI framework
- **shadcn/ui** - Component library (Radix UI + Tailwind CSS)
- **Tailwind CSS** - Styling
- **React Hook Form + Zod** - Form validation
- **TanStack Query** - Data fetching & state management
- **Lucide React** - Icons
- **React Router DOM** - Routing

## 🌐 GitHub Pages Deployment

Project ini sudah dikonfigurasi untuk deployment otomatis ke **https://belajarrr-hubs.github.io/**

### 📖 Panduan Lengkap
**Lihat [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md) untuk instruksi detail.**

### Quick Deploy
1. Push repository ke GitHub sebagai `belajarrr-hubs.github.io`
2. Buka Settings → Pages → Source: **GitHub Actions**
3. Push ke branch `main` untuk auto-deploy ke **direktori root (`/`)**

### URL Deployment
✅ **Live URL**: https://belajarrr-hubs.github.io/

## 🏗️ Building for Production

```bash
# Build untuk production
npm run build

# Preview production build
npm run preview
```

Output build ada di folder `dist/`.

## 📁 Project Structure

```
├── src/
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── main.tsx      # Entry point
├── public/           # Static assets
├── .github/
│   └── workflows/    # GitHub Actions workflows
├── vite.config.ts    # Vite configuration
└── tailwind.config.ts # Tailwind configuration
```

## 🔧 Environment Variables

Untuk menambahkan environment variables:

1. Create file `.env` untuk development lokal
2. Awali semua variable dengan `VITE_` prefix
3. Access dengan `import.meta.env.VITE_YOUR_VAR`

Contoh `.env`:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

## 📝 License

MIT
