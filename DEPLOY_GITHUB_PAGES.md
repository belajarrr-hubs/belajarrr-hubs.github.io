# GitHub Pages Deployment Guide

Proyek ini sudah dikonfigurasi untuk deployment otomatis ke GitHub Pages di **direktori root** (`https://belajarrr-hubs.github.io/`).

## Konfigurasi Vite

Vite sudah dikonfigurasi dengan base path yang dinamis menggunakan environment variable `VITE_BASE_PATH`:

```typescript
base: process.env.VITE_BASE_PATH || '/',
```

### Cara Kerja:
- **Development di Replit**: Base path = `/` (default)
- **GitHub Pages (User/Org)**: Base path = `/` - **AKTIF untuk repo ini**
- **GitHub Pages (Project)**: Base path = `/nama-repo/` (manual trigger saja)

## Setup GitHub Pages untuk https://belajarrr-hubs.github.io/

### 1. Push Repository ke GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/belajarrr-hubs/belajarrr-hubs.github.io.git
git push -u origin main
```

**PENTING**: Repository HARUS bernama `belajarrr-hubs.github.io` untuk user/org pages.

### 2. Aktifkan GitHub Pages
1. Buka repository di GitHub: https://github.com/belajarrr-hubs/belajarrr-hubs.github.io
2. Go to **Settings** → **Pages**
3. Di **Source**, pilih **GitHub Actions**

### 3. Deployment Otomatis

#### Deploy untuk User/Org Pages (AKTIF)
**File**: `.github/workflows/deploy-root.yml`
- ✅ **Otomatis deploy saat push ke branch `main`**
- Base path: `/` (root directory)
- URL hasil: **https://belajarrr-hubs.github.io/**

#### Deploy untuk Project Pages (Manual Only)
**File**: `.github/workflows/deploy.yml`
- Deploy manual via GitHub Actions tab
- Base path: `/nama-repo/`
- Hanya untuk test jika ingin deploy ke project pages

### 4. Cara Deploy

**Otomatis**: Cukup push ke branch `main`:
```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Actions akan otomatis build dan deploy ke https://belajarrr-hubs.github.io/

## Local Testing untuk GitHub Pages

Untuk test build dengan base path tertentu:

```bash
# Test dengan base path /nama-repo/
VITE_BASE_PATH=/nama-repo/ npm run build
npm run preview

# Test dengan base path / (root)
VITE_BASE_PATH=/ npm run build
npm run preview
```

## React Router (Jika Digunakan)

Jika project menggunakan React Router dengan `BrowserRouter`, tambahkan `basename`:

```typescript
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH || '/'}>
      {/* Routes */}
    </BrowserRouter>
  );
}
```

## Troubleshooting

### Assets tidak load (404)
- Pastikan `VITE_BASE_PATH` sesuai dengan structure GitHub Pages Anda
- Check file `dist/index.html` setelah build, path assets harus include base path

### Blank page setelah deploy
- Check console di browser untuk error
- Pastikan base path di vite.config.ts sesuai dengan GitHub Pages URL
- Untuk project pages, base path harus `/nama-repo/`

### Custom Domain
Jika menggunakan custom domain:
1. Set `VITE_BASE_PATH=/` di workflow
2. Tambahkan file `CNAME` di folder `public/` dengan domain Anda
3. Configure DNS sesuai [GitHub documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Verifikasi

Setelah deploy berhasil:
1. Check Actions tab untuk status build
2. Buka URL GitHub Pages Anda
3. Test semua routes dan assets loading dengan benar

## Environment Variables

Untuk menambahkan environment variables di GitHub Actions:
1. Repository → Settings → Secrets and variables → Actions
2. Tambahkan sebagai **Variables** (bukan Secrets jika tidak sensitif)
3. Update workflow file untuk pass variable ke build:

```yaml
- name: Build
  env:
    VITE_BASE_PATH: /${{ github.event.repository.name }}/
    VITE_YOUR_VAR: ${{ vars.YOUR_VAR }}
  run: npm run build
```

**Catatan**: Environment variables di Vite harus diawali dengan `VITE_` untuk dapat diakses di frontend.
