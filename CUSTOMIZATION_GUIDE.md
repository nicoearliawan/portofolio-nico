# 📝 Panduan Kustomisasi Portfolio

Panduan lengkap untuk mengkustomisasi website portfolio Anda.

## 🎨 1. Informasi Personal

### Hero Section (`src/components/Hero.jsx`)

```jsx
// Ganti nama
<h1>Your Name</h1>

// Ganti foto profil
<img src="your-photo-url" alt="Profile" />

// Ganti job title
<p>Your Job Title</p>

// Ganti status badge
<Badge variant="success">Your Status</Badge>

// Ganti deskripsi
<p>Your description here...</p>
```

### Overview Section (`src/components/Overview.jsx`)

```jsx
const info = [
  {
    label: "Current Position",
    value: "Your Position at Your Company",
    link: "https://your-company.com",
  },
  {
    label: "Location",
    value: "Your City, Your Country",
  },
  // ... update semua field
];
```

### Social Links (`src/components/SocialLinks.jsx`)

```jsx
const socials = [
  {
    name: "GitHub",
    url: "https://github.com/your-username",
  },
  // ... update semua link
];
```

## 📊 2. Content Data

### Projects (`src/data/projects.js`)

```js
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "https://your-image-url.com/image.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    demo: "https://demo-url.com",
  },
  // Tambahkan project lainnya...
];
```

**Tips untuk gambar project:**
- Gunakan screenshot project Anda
- Ukuran recommended: 800x400px
- Upload ke Imgur, Cloudinary, atau hosting lain
- Atau gunakan Unsplash untuk placeholder

### Experience (`src/data/experience.js`)

```js
export const workExperience = [
  {
    id: 1,
    company: "Company Name",
    logo: "https://logo-url.com/logo.png",
    position: "Your Position",
    type: "Full-time", // Full-time, Part-time, Freelance
    location: "City, Country",
    startDate: "Jan 2023",
    endDate: "Present",
    description: "What you did here...",
  },
];
```

**Tips untuk logo:**
- Gunakan UI Avatars: `https://ui-avatars.com/api/?name=Company+Name&background=3b82f6&color=fff`
- Atau upload logo asli perusahaan

### Tech Stack (`src/data/techstack.js`)

```js
export const techStack = {
  languages: [
    { name: "JavaScript", icon: "javascript" },
    // Tambahkan bahasa lain...
  ],
  // ... kategori lainnya
};
```

**Daftar icon yang tersedia:**
- Cek: https://simpleicons.org/
- Format: nama lowercase tanpa spasi
- Contoh: `javascript`, `typescript`, `react`, `nodejs`

### Blog Posts (`src/data/blog.js`)

```js
export const blogPosts = [
  {
    id: 1,
    title: "Post Title",
    date: "2026-05-10",
    isNew: true,
    url: "/blog/post-slug",
    excerpt: "Short description...",
  },
];
```

## 🎨 3. Styling & Theme

### Warna (`tailwind.config.js`)

```js
theme: {
  extend: {
    colors: {
      // Tambahkan warna custom
      primary: '#3b82f6',
      secondary: '#8b5cf6',
    }
  }
}
```

### Font (`src/index.css`)

```css
/* Ganti dengan font pilihan Anda */
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap');
```

Lalu update di `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

## 🔧 4. Fitur Tambahan

### GitHub Calendar

Di `src/components/GitHubCalendar.jsx`:

```jsx
<GitHubCalendarLib
  username="your-github-username" // GANTI INI!
  colorScheme="dark"
  // ...
/>
```

### Command Palette

Tambahkan command baru di `src/components/ui/CommandPalette.jsx`:

```jsx
const commands = [
  { name: "Home", action: () => scrollToSection("home") },
  { name: "Your Section", action: () => scrollToSection("your-section") },
  // Tambahkan command lainnya...
];
```

### Navbar Links

Di `src/components/Navbar.jsx`:

```jsx
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Your Link", href: "#your-section" },
  // Tambahkan link lainnya...
];
```

## 📱 5. SEO & Meta Tags

### Update `index.html`

```html
<head>
  <title>Your Name - Your Title</title>
  <meta name="description" content="Your description" />
  <meta property="og:title" content="Your Name - Portfolio" />
  <meta property="og:description" content="Your description" />
  <meta property="og:image" content="https://your-image-url.com/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

## 🚀 6. Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project di Vercel
3. Deploy otomatis!

### Netlify

1. Build project: `npm run build`
2. Upload folder `dist` ke Netlify
3. Done!

### Custom Domain

1. Beli domain (Namecheap, GoDaddy, dll)
2. Tambahkan custom domain di hosting
3. Update DNS records

## ✅ Checklist Sebelum Deploy

- [ ] Ganti semua data dummy dengan data asli
- [ ] Update foto profil
- [ ] Tambahkan screenshot project real
- [ ] Update GitHub username di calendar
- [ ] Update semua social media links
- [ ] Test responsive di mobile
- [ ] Test dark/light mode
- [ ] Test command palette (Ctrl+K)
- [ ] Update meta tags untuk SEO
- [ ] Test semua link eksternal

## 💡 Tips

1. **Foto Profil**: Gunakan foto profesional dengan background solid
2. **Project Images**: Screenshot yang clean dan menarik
3. **Deskripsi**: Jelas, singkat, dan menarik
4. **Tech Stack**: Hanya tampilkan yang benar-benar dikuasai
5. **Blog**: Update secara berkala untuk SEO
6. **Performance**: Compress gambar sebelum upload
7. **Accessibility**: Test dengan screen reader

## 🆘 Troubleshooting

### GitHub Calendar tidak muncul
- Pastikan username GitHub benar
- Pastikan profile GitHub public
- Check console untuk error

### Dark mode tidak berfungsi
- Clear localStorage
- Check `localStorage.getItem('theme')`
- Refresh browser

### Gambar tidak muncul
- Check URL gambar valid
- Check CORS policy
- Gunakan CDN yang reliable

### Build error
```bash
# Clear cache dan reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

---

Butuh bantuan? Buka issue di GitHub repository!
