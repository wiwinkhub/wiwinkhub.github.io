# Instruksi Deploy ke GitHub Pages - LANGKAH DEMI LANGKAH

## ⚠️ PENTING: Baca Semua Langkah Sebelum Mulai

Website akan online di: **https://wiwinkhub.github.io/**

---

## Langkah 1: Setup Repository di GitHub

### A. Buat Repository (jika belum ada)
1. Buka https://github.com/new
2. **Repository name**: HARUS `wiwinkhub.github.io` (sesuai username GitHub Anda)
3. **Visibility**: Public
4. **JANGAN centang** "Add a README file"
5. Klik **Create repository**

### B. Connect Repository Lokal ke GitHub

Jalankan perintah ini di terminal Replit:

```bash
# Cek apakah sudah ada remote
git remote -v

# Jika belum ada atau salah, hapus dulu (jika ada)
git remote remove origin

# Tambahkan remote yang benar
git remote add origin https://github.com/wiwinkhub/wiwinkhub.github.io.git

# Verifikasi
git remote -v
```

**Output yang benar:**
```
origin  https://github.com/wiwinkhub/wiwinkhub.github.io.git (fetch)
origin  https://github.com/wiwinkhub/wiwinkhub.github.io.git (push)
```

---

## Langkah 2: Push Kode ke GitHub

```bash
# Set user git (jika belum)
git config user.email "your-email@gmail.com"
git config user.name "Your Name"

# Add semua file
git add .

# Commit
git commit -m "Setup untuk GitHub Pages deployment"

# Push ke GitHub (MAIN branch)
git push -u origin main
```

**Jika error "Permission denied":**
- Anda perlu setup GitHub Personal Access Token
- Atau gunakan GitHub CLI: `gh auth login`

---

## Langkah 3: Deploy ke GitHub Pages

Setelah kode sudah di GitHub (langkah 2 selesai), jalankan:

```bash
bun run deploy
```

**Perintah ini akan:**
1. Build aplikasi (folder `dist`)
2. Push folder `dist` ke branch `gh-pages`

**Output sukses:**
```
Published
```

---

## Langkah 4: Aktifkan GitHub Pages

1. Buka https://github.com/wiwinkhub/wiwinkhub.github.io/settings/pages
2. Pada **Source**:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Klik **Save**
4. Tunggu 2-5 menit

**Setelah deploy, Anda akan lihat:**
> ✓ Your site is live at https://wiwinkhub.github.io/

---

## Langkah 5: Cek Website

1. Buka https://wiwinkhub.github.io/
2. **Jika masih blank:**
   - Tunggu 2-3 menit lagi
   - Tekan Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac) untuk hard refresh
   - Clear cache browser
3. **Tekan F12** untuk buka console, screenshot jika ada error merah

---

## Update Website (Setelah Deploy Pertama)

Setiap kali ada perubahan:

```bash
# 1. Test lokal dulu
bun run dev

# 2. Jika sudah OK, deploy
bun run deploy
```

Tunggu 1-2 menit, website akan update otomatis.

---

## Troubleshooting

### Error: "Failed to get remote"
- Repository belum dibuat di GitHub
- Atau nama repository salah
- Solusi: Cek https://github.com/wiwinkhub/wiwinkhub.github.io apakah ada

### Error: "Permission denied"
- Belum login ke GitHub
- Solusi: `gh auth login` atau setup Personal Access Token

### Website masih blank setelah 5 menit
1. Buka https://wiwinkhub.github.io/
2. Tekan F12 untuk console
3. Screenshot error yang muncul (jika ada)
4. Cek Settings > Pages apakah branch `gh-pages` sudah dipilih

### Website 404 Not Found
- Nama repository harus PERSIS: `wiwinkhub.github.io`
- Jika beda, website akan di `username.github.io/repo-name/`

---

## Verifikasi Deployment

Cek apakah deployment berhasil:

1. **Cek branch gh-pages ada:**
   ```bash
   git ls-remote --heads origin
   ```
   Harus ada: `refs/heads/gh-pages`

2. **Cek GitHub Pages status:**
   https://github.com/wiwinkhub/wiwinkhub.github.io/deployments

3. **Cek build output lokal:**
   ```bash
   ls dist/
   ```
   Harus ada: `index.html`, `.nojekyll`, `404.html`, `assets/`

---

## Bantuan

Jika masih bermasalah:
1. Screenshot console error (F12)
2. Screenshot GitHub Pages settings
3. Beritahu saya error message yang muncul
