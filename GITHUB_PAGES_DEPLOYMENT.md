# Panduan Deployment ke GitHub Pages

## Deployment ke https://wiwinkhub.github.io/

Proyek ini sudah dikonfigurasi untuk deployment ke **https://wiwinkhub.github.io/** dengan setting berikut:

### Konfigurasi yang Sudah Disiapkan

✅ Base path: `/` (root directory)  
✅ Homepage: `https://wiwinkhub.github.io/`  
✅ SPA routing support (file 404.html)  
✅ Jekyll bypass (file .nojekyll)  
✅ Automated deployment dengan gh-pages  

## Cara Deploy

### Langkah 1: Persiapan Repository GitHub

1. Pastikan repository bernama `wiwinkhub.github.io` sudah ada
2. Connect repository lokal dengan GitHub:
```bash
git remote add origin https://github.com/wiwinkhub/wiwinkhub.github.io.git
```

3. Push kode ke GitHub:
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Langkah 2: Deploy ke GitHub Pages

Jalankan perintah deploy:
```bash
bun run deploy
```

Script ini akan otomatis:
- Build aplikasi untuk production
- Push folder `dist` ke branch `gh-pages`

### Langkah 3: Konfigurasi GitHub Pages

1. Buka https://github.com/wiwinkhub/wiwinkhub.github.io
2. Pergi ke **Settings** > **Pages**
3. Pilih source:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Klik **Save**
5. Tunggu beberapa menit, website akan live di https://wiwinkhub.github.io/

## Update Website

Setelah deployment pertama, untuk update website:

1. Lakukan perubahan pada kode
2. Test lokal dengan `bun run dev`
3. Deploy dengan `bun run deploy`

## Troubleshooting

### Website tidak muncul
- Cek Settings > Pages apakah branch `gh-pages` sudah dipilih
- Tunggu 2-5 menit setelah deploy pertama kali

### Error saat deploy
- Pastikan sudah login ke GitHub: `git config --global user.email "your-email@example.com"`
- Pastikan repository sudah terhubung: `git remote -v`

### Routing tidak bekerja (404 error)
- File `404.html` dan script di `index.html` sudah menangani ini
- Pastikan folder `public` ter-copy ke `dist` saat build

## Catatan Teknis

- Build output: folder `dist/`
- Base path: `/` (untuk root deployment)
- Untuk subpath deployment, set `VITE_BASE_PATH=/repo-name/` sebelum build
