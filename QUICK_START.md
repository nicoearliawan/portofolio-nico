# 🚀 Quick Start Guide

Panduan cepat untuk memulai menggunakan website portfolio ini.

## ⚡ 5 Menit Setup

### 1. Install Dependencies (1 menit)
```bash
cd portfolio
npm install
```

### 2. Run Development Server (30 detik)
```bash
npm run dev
```

Buka browser: `http://localhost:5173`

### 3. Update Data Anda (3 menit)

#### A. Hero Section
File: `src/components/Hero.jsx`
```jsx
// Ganti:
- Nama: "John Doe" → "Nama Anda"
- Foto: URL foto profil Anda
- Job Title: "Software Engineer" → Posisi Anda
- Status: "Open to Work" → Status Anda
```

#### B. Social Links
File: `src/components/SocialLinks.jsx`
```jsx
// Update semua URL:
- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-username
- Twitter: https://twitter.com/your-username
- dll.
```

#### C. Projects
File: `src/data/projects.js`
```js
// Ganti dengan project Anda:
{
  title: "Your Project Name",
  description: "Your description",
  image: "Your screenshot URL",
  tags: ["React", "Node.js"],
  github: "Your repo URL",
  demo: "Your demo URL"
}
```

### 4. Build & Deploy (30 detik)
```bash
# Build
npm run build

# Deploy ke Vercel (recommended)
npm install -g vercel
vercel
```

---

## 🎨 Kustomisasi Cepat

### Ganti Warna Tema
File: `tailwind.config.js`
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Ganti Font
File: `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Ganti Foto Profil
File: `src/components/Hero.jsx`
```jsx
<img src="https://your-photo-url.com/photo.jpg" alt="Profile" />
```

---

## 📱 Test Responsive

```bash
# Run dev server
npm run dev

# Test di:
- Desktop: http://localhost:5173
- Mobile: Buka Chrome DevTools → Toggle device toolbar
```

---

## 🚀 Deploy

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Build: `npm run build`
2. Drag & drop folder `dist` ke Netlify

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json:
"homepage": "https://username.github.io/portfolio"
"scripts": {
  "deploy": "gh-pages -d dist"
}
npm run deploy
```

---

## ✅ Checklist

Sebelum deploy, pastikan:

- [ ] Ganti nama dan foto profil
- [ ] Update semua social media links
- [ ] Ganti data projects dengan project asli
- [ ] Update experience dan education
- [ ] Test di mobile dan desktop
- [ ] Test dark/light mode
- [ ] Build berhasil: `npm run build`

---

## 🆘 Troubleshooting

### Port sudah digunakan
```bash
# Ganti port
npm run dev -- --port 3000
```

### Build error
```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Dark mode tidak berfungsi
```bash
# Clear localStorage
# Buka Console → localStorage.clear() → Refresh
```

---

## 📚 Dokumentasi Lengkap

- **README.md** - Overview dan setup
- **CUSTOMIZATION_GUIDE.md** - Panduan kustomisasi detail
- **DEPLOYMENT.md** - Panduan deployment lengkap
- **PROJECT_SUMMARY.md** - Summary fitur dan struktur

---

## 💡 Tips

1. **Gunakan placeholder images** dari Unsplash untuk testing
2. **Test di berbagai browser** (Chrome, Firefox, Safari)
3. **Compress images** sebelum upload (TinyPNG)
4. **Update meta tags** untuk SEO
5. **Add Google Analytics** (optional)

---

## 🎯 Next Steps

1. ✅ Customize data Anda
2. ✅ Test di local
3. ✅ Build project
4. ✅ Deploy ke hosting
5. ✅ Share dengan dunia! 🌍

---

**Butuh bantuan?** Baca dokumentasi lengkap atau open issue di GitHub!

Happy coding! 🚀
