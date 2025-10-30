# Panduan Deployment ke GitHub Pages

## Konfigurasi Base Path

Proyek ini sudah dikonfigurasi untuk deployment ke GitHub Pages dengan opsi fleksibel:

### Untuk Custom Domain atau username.github.io
Gunakan konfigurasi default (base path = `/`):
```bash
bun run deploy
```

### Untuk Repository Biasa (username.github.io/repo-name/)
Set environment variable sebelum build:
```bash
VITE_BASE_PATH=/nama-repo/ bun run deploy
```

## Cara Deploy

### Metode 1: Menggunakan gh-pages (Otomatis)

1. Pastikan repository GitHub sudah terhubung
2. Jalankan perintah deploy:
```bash
bun run deploy
```

Script ini akan:
- Build aplikasi (`predeploy` script)
- Push folder `dist` ke branch `gh-pages` secara otomatis

### Metode 2: Manual Upload

1. Build aplikasi:
```bash
bun run build
```

2. Upload isi folder `dist` ke GitHub Pages

## Konfigurasi GitHub Pages

1. Buka repository di GitHub
2. Pergi ke **Settings** > **Pages**
3. Pilih source:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Klik **Save**

Website akan tersedia di: `https://username.github.io/repo-name/` (atau custom domain Anda)

## Catatan Penting

- File `vite.config.ts` menggunakan `base: '/'` sebagai default
- Untuk mengubah base path, gunakan environment variable `VITE_BASE_PATH`
- Pastikan base path diakhiri dengan `/` (slash)
