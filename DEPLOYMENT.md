# 🚀 Deployment Guide

Panduan lengkap untuk deploy website portfolio Anda ke berbagai platform hosting.

## 📋 Pre-Deployment Checklist

Sebelum deploy, pastikan:

- [ ] Semua data dummy sudah diganti dengan data asli
- [ ] Foto profil dan gambar project sudah diupdate
- [ ] GitHub username di calendar sudah benar
- [ ] Semua link eksternal sudah ditest
- [ ] Meta tags SEO sudah diupdate
- [ ] Build berhasil tanpa error: `npm run build`
- [ ] Test di localhost: `npm run preview`

## 🌐 Vercel (Recommended)

Vercel adalah platform hosting terbaik untuk React apps dengan deployment otomatis.

### Method 1: Deploy via GitHub

1. **Push code ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/portfolio.git
   git push -u origin main
   ```

2. **Import di Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Sign in dengan GitHub
   - Click "New Project"
   - Import repository Anda
   - Vercel akan auto-detect Vite settings
   - Click "Deploy"

3. **Done!** 🎉
   - URL: `https://your-project.vercel.app`
   - Auto-deploy setiap push ke GitHub

### Method 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain di Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records di domain provider:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🎯 Netlify

Netlify juga excellent untuk static sites dengan CI/CD.

### Method 1: Deploy via GitHub

1. **Push code ke GitHub** (sama seperti Vercel)

2. **Import di Netlify**
   - Buka [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

### Method 2: Deploy via Drag & Drop

```bash
# Build project
npm run build

# Drag & drop folder 'dist' ke Netlify
```

### Method 3: Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Custom Domain di Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records

---

## 📦 GitHub Pages

Free hosting dari GitHub, cocok untuk portfolio.

### Setup

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://username.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```js
   export default {
     base: '/portfolio/', // nama repository
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

### Custom Domain di GitHub Pages

1. Add file `CNAME` di folder `public`:
   ```
   yourdomain.com
   ```

2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## ☁️ Cloudflare Pages

Fast dan free dengan CDN global.

### Deploy via GitHub

1. Push code ke GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a project
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
6. Deploy

---

## 🔥 Firebase Hosting

Google's hosting dengan SSL gratis.

### Setup

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize**
   ```bash
   firebase init hosting
   ```
   - Select: Use existing project atau create new
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub auto-deploy: Optional

4. **Build & Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🐳 Docker (Advanced)

Deploy menggunakan Docker container.

### Dockerfile

```dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build & Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 80:80 portfolio
```

---

## 🔧 Environment Variables

Jika menggunakan environment variables:

### Vercel
- Go to Project Settings → Environment Variables
- Add variables

### Netlify
- Go to Site settings → Environment variables
- Add variables

### .env.example
```env
VITE_API_URL=https://api.example.com
VITE_GITHUB_TOKEN=your_token_here
```

---

## 🎨 Post-Deployment

### 1. Test Website

- [ ] Test semua halaman
- [ ] Test responsive di mobile
- [ ] Test dark/light mode
- [ ] Test semua link
- [ ] Test command palette (Ctrl+K)
- [ ] Check loading speed

### 2. SEO Setup

- [ ] Submit sitemap ke Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Test Open Graph tags
- [ ] Test Twitter Card

### 3. Performance

- [ ] Run Lighthouse audit
- [ ] Optimize images
- [ ] Enable caching
- [ ] Add CDN (jika perlu)

### 4. Monitoring

- [ ] Setup uptime monitoring (UptimeRobot)
- [ ] Setup error tracking (Sentry)
- [ ] Setup analytics

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA)

Tambahkan redirect rules:

**Vercel** - `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Netlify** - `public/_redirects`:
```
/*    /index.html   200
```

### Images Not Loading

- Check image URLs
- Use absolute URLs
- Check CORS policy

### Slow Loading

- Compress images
- Use lazy loading
- Enable CDN
- Optimize bundle size

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Compress images (TinyPNG)
   - Use CDN (Cloudinary, Imgix)

2. **Code Splitting**
   - Lazy load components
   - Dynamic imports

3. **Caching**
   - Set cache headers
   - Use service workers

4. **CDN**
   - Use Cloudflare
   - Enable auto-minify

---

## 🔒 Security

- [ ] Enable HTTPS
- [ ] Add security headers
- [ ] Hide sensitive data
- [ ] Regular updates

---

## 📈 Analytics (Optional)

### Google Analytics

```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```jsx
// Add to App.jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

---

Selamat! Website portfolio Anda sudah online! 🎉
