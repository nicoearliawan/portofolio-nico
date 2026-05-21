# 🎨 Modern Portfolio Website

Website portofolio personal modern yang dibangun dengan **React.js** dan **Tailwind CSS**. Design minimalis, fully responsive, dan dilengkapi dengan dark/light mode.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

- 🎨 **Modern & Minimalist Design** - Clean dan professional
- 🌓 **Dark/Light Mode** - Toggle dengan localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🔍 **Command Palette** - Quick navigation dengan Ctrl+K
- 📊 **GitHub Contributions** - Showcase your activity
- 🎯 **Tech Stack Showcase** - Display your skills dengan icons
- 💼 **Experience Timeline** - Work history & education
- 🚀 **Projects Gallery** - Showcase your best work
- 📝 **Blog Section** - Share your thoughts
- ⬆️ **Scroll to Top** - Smooth scroll button
- 🎭 **Multiple Pages** - Blog, Resume, Store pages

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Tech Stack

### Core
- **React 19** - UI Library
- **Vite 8** - Build tool & dev server
- **React Router 7** - Client-side routing

### Styling
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### UI & Animations
- **Framer Motion 12** - Animation library
- **Lucide React** - Beautiful icons
- **Google Fonts** - Inter font family

### Development
- **ESLint** - Code linting
- **Vite Plugin React** - Fast refresh

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Overview.jsx
│   │   ├── SocialLinks.jsx
│   │   ├── About.jsx
│   │   ├── GitHubCalendar.jsx
│   │   ├── TechStack.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   └── Footer.jsx
│   ├── pages/            # Page components
│   │   ├── BlogPage.jsx
│   │   ├── ResumePage.jsx
│   │   └── StorePage.jsx
│   ├── data/             # Static data
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── techstack.js
│   │   └── blog.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── docs/                 # Documentation
└── package.json
```

## 🎨 Customization

### 1. Personal Information

**Hero Section** (`src/components/Hero.jsx`):
```jsx
// Update your name, photo, and job title
<h1>Your Name</h1>
<img src="your-photo-url" alt="Profile" />
<p>Your Job Title</p>
```

**Overview** (`src/components/Overview.jsx`):
```jsx
// Update contact information
const info = [
  { label: "Current Position", value: "Your Position" },
  { label: "Location", value: "Your City, Country" },
  // ...
];
```

**Social Links** (`src/components/SocialLinks.jsx`):
```jsx
// Update your social media URLs
const socials = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  // ...
];
```

### 2. Content Data

**Projects** (`src/data/projects.js`):
```js
export const projects = [
  {
    title: "Your Project",
    description: "Description",
    image: "screenshot-url",
    tags: ["React", "Node.js"],
    github: "repo-url",
    demo: "demo-url"
  }
];
```

**Experience** (`src/data/experience.js`):
```js
export const workExperience = [
  {
    company: "Company Name",
    position: "Your Position",
    startDate: "Jan 2023",
    endDate: "Present",
    // ...
  }
];
```

**Tech Stack** (`src/data/techstack.js`):
```js
export const techStack = {
  languages: [
    { name: "JavaScript", icon: "javascript" },
    // ...
  ]
};
```

### 3. Styling

**Colors** (`tailwind.config.js`):
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

**Fonts** (`src/index.css`):
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

```bash
# Build
npm run build

# Deploy
# Drag & drop the 'dist' folder to Netlify
```

### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/portfolio"
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

## 📚 Documentation

- **[Quick Start Guide](QUICK_START.md)** - Get started in 5 minutes
- **[Customization Guide](CUSTOMIZATION_GUIDE.md)** - Detailed customization instructions
- **[Deployment Guide](DEPLOYMENT.md)** - Deploy to various platforms
- **[Folder Structure](FOLDER_STRUCTURE.md)** - Understand the project structure
- **[Contributing](CONTRIBUTING.md)** - Contribution guidelines
- **[Changelog](CHANGELOG.md)** - Version history

## ⌨️ Keyboard Shortcuts

- `Ctrl+K` / `Cmd+K` - Open command palette
- `Esc` - Close command palette

## 🎯 Features Breakdown

### Navbar
- Sticky navigation with backdrop blur
- Dark/light mode toggle
- Command palette trigger
- Responsive hamburger menu
- Smooth scroll to sections

### Hero Section
- Animated profile photo
- Name with fade-in animation
- Job title and status badges
- Text-to-speech name pronunciation

### Overview Card
- Current position with company link
- Location information
- Contact details with blur effect
- Personal website link
- Pronouns

### Social Links
- Icon-based social media links
- Hover animations
- External link handling

### About Section
- Professional bio
- Project highlights with links
- Personal story

### GitHub Calendar
- Contribution heatmap (placeholder)
- Instructions for setup
- Year statistics

### Tech Stack
- Categorized skills display
- Icon-based visualization
- Hover effects
- SimpleIcons integration

### Experience Timeline
- Vertical timeline design
- Work experience section
- Education section
- Company logos
- Date ranges and descriptions

### Projects Gallery
- Grid layout
- Project cards with images
- Tech stack tags
- GitHub and demo links
- Show more/less functionality

### Blog Section
- Latest posts display
- "New" badge for recent posts
- Date formatting
- Link to full blog page

### Footer
- Branding and logo
- Source code link
- RSS feed link
- Scroll to top button
- Copyright information

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark Mode Not Working

```bash
# Clear localStorage in browser console
localStorage.clear()
# Then refresh the page
```

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3000
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Tech stack icons by [Simple Icons](https://simpleicons.org/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Images from [Unsplash](https://unsplash.com/)

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

**Built with ❤️ using React and Tailwind CSS**

⭐ Star this repo if you find it helpful!

## 🎉 What's Next?

- [ ] Customize with your information
- [ ] Add your projects and experience
- [ ] Update social media links
- [ ] Deploy to your favorite platform
- [ ] Share with the world!

Happy coding! 🚀
