# 📁 Folder Structure

Penjelasan lengkap struktur folder dan file dalam project ini.

```
portfolio/
├── public/                      # Static assets
│   ├── _redirects              # Netlify redirect rules
│   ├── favicon.svg             # Website favicon
│   └── icons.svg               # SVG icons (optional)
│
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Badge.jsx      # Badge component untuk tags
│   │   │   ├── Card.jsx       # Card wrapper component
│   │   │   └── CommandPalette.jsx  # Command palette modal
│   │   │
│   │   ├── Navbar.jsx         # Navigation bar dengan dark mode
│   │   ├── Hero.jsx           # Hero section dengan profile
│   │   ├── Overview.jsx       # Info card dengan detail kontak
│   │   ├── SocialLinks.jsx    # Social media links
│   │   ├── About.jsx          # About/bio section
│   │   ├── GitHubCalendar.jsx # GitHub contributions (placeholder)
│   │   ├── TechStack.jsx      # Tech stack showcase
│   │   ├── Experience.jsx     # Work & education timeline
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Blog.jsx           # Blog posts list
│   │   └── Footer.jsx         # Footer dengan scroll to top
│   │
│   ├── pages/                 # Page components untuk routing
│   │   ├── BlogPage.jsx       # Blog page
│   │   ├── ResumePage.jsx     # Resume page
│   │   └── StorePage.jsx      # Store page
│   │
│   ├── data/                  # Static data files
│   │   ├── projects.js        # Projects data
│   │   ├── experience.js      # Work experience & education
│   │   ├── techstack.js       # Tech stack data
│   │   └── blog.js            # Blog posts data
│   │
│   ├── assets/                # Images, fonts, etc.
│   │   └── (your assets here)
│   │
│   ├── App.jsx                # Main app component dengan routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles & Tailwind imports
│
├── node_modules/              # Dependencies (auto-generated)
│
├── dist/                      # Build output (auto-generated)
│
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Dependencies & scripts
├── package-lock.json          # Lock file
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
├── vercel.json                # Vercel deployment config
│
├── README.md                  # Project overview & setup
├── QUICK_START.md             # Quick start guide
├── CUSTOMIZATION_GUIDE.md     # Customization guide
├── DEPLOYMENT.md              # Deployment guide
├── CONTRIBUTING.md            # Contributing guidelines
├── CHANGELOG.md               # Version history
├── PROJECT_SUMMARY.md         # Project summary
├── FOLDER_STRUCTURE.md        # This file
├── LICENSE                    # MIT License
└── .env.example               # Environment variables template
```

---

## 📂 Detailed Explanation

### `/public` - Static Assets
File-file yang tidak diproses oleh bundler dan langsung di-copy ke output.

- **_redirects**: Redirect rules untuk Netlify (SPA routing)
- **favicon.svg**: Icon yang muncul di browser tab
- **icons.svg**: SVG sprite untuk icons (optional)

### `/src` - Source Code

#### `/src/components` - React Components
Semua komponen React yang membentuk UI.

**Main Components:**
- **Navbar.jsx**: Navigation bar dengan:
  - Logo/brand
  - Navigation links
  - Dark/light mode toggle
  - Command palette trigger
  - Mobile hamburger menu

- **Hero.jsx**: Hero section dengan:
  - Profile photo
  - Name dengan animation
  - Job title
  - Status badges
  - Pronounce name button

- **Overview.jsx**: Info card dengan:
  - Current position
  - Location
  - Contact info (phone, email)
  - Website
  - Pronouns

- **SocialLinks.jsx**: Social media links dengan:
  - Icons dari lucide-react
  - Hover animations
  - External links

- **About.jsx**: About section dengan:
  - Bio paragraphs
  - Project highlights
  - Links ke projects

- **GitHubCalendar.jsx**: GitHub contributions dengan:
  - Placeholder untuk calendar
  - Instructions untuk setup

- **TechStack.jsx**: Tech stack showcase dengan:
  - Grid layout
  - Categories (Languages, Frameworks, etc.)
  - Icons dari SimpleIcons CDN
  - Hover effects

- **Experience.jsx**: Timeline dengan:
  - Work experience
  - Education
  - Timeline visual
  - Company logos

- **Projects.jsx**: Projects showcase dengan:
  - Grid layout
  - Project cards
  - Show more/less functionality
  - Links ke GitHub & demo

- **Blog.jsx**: Blog section dengan:
  - Latest posts
  - Date formatting
  - "New" badges
  - Link to all posts

- **Footer.jsx**: Footer dengan:
  - Logo & branding
  - Links (GitHub, RSS, llms.txt)
  - Scroll to top button
  - Copyright

#### `/src/components/ui` - Reusable UI Components

- **Badge.jsx**: Badge component untuk:
  - Tech stack tags
  - Status badges
  - "New" indicators
  - Variants: default, primary, success, new

- **Card.jsx**: Card wrapper dengan:
  - Consistent styling
  - Border & rounded corners
  - Optional hover effect
  - Padding & spacing

- **CommandPalette.jsx**: Command palette dengan:
  - Modal overlay
  - Search input
  - Command list
  - Keyboard shortcuts (Ctrl+K, Esc)
  - Smooth animations

#### `/src/pages` - Page Components

- **BlogPage.jsx**: Full blog page
- **ResumePage.jsx**: Resume/CV page
- **StorePage.jsx**: Store/products page

#### `/src/data` - Static Data

- **projects.js**: Array of project objects
  ```js
  {
    id, title, description, image,
    tags, github, demo
  }
  ```

- **experience.js**: Work & education data
  ```js
  workExperience: {
    id, company, logo, position, type,
    location, startDate, endDate, description
  }
  education: {
    id, institution, logo, degree, field,
    location, startDate, endDate, description
  }
  ```

- **techstack.js**: Tech stack organized by category
  ```js
  {
    languages: [],
    frameworks: [],
    databases: [],
    tools: [],
    design: [],
    ai: []
  }
  ```

- **blog.js**: Blog posts data
  ```js
  {
    id, title, date, isNew, url, excerpt
  }
  ```

#### Root Files

- **App.jsx**: Main component dengan:
  - React Router setup
  - Routes configuration
  - Command palette state

- **main.jsx**: Entry point
  - React root mounting
  - StrictMode wrapper

- **index.css**: Global styles
  - Tailwind imports
  - Custom CSS
  - Font imports
  - Scrollbar styling

### Configuration Files

- **tailwind.config.js**: Tailwind configuration
  - Content paths
  - Dark mode: 'class'
  - Theme extensions
  - Custom colors & fonts

- **postcss.config.js**: PostCSS configuration
  - Tailwind CSS plugin
  - Autoprefixer plugin

- **vite.config.js**: Vite configuration
  - React plugin
  - Build settings

- **vercel.json**: Vercel deployment
  - SPA redirect rules

- **package.json**: Project metadata
  - Dependencies
  - Scripts
  - Project info

---

## 🎯 File Naming Conventions

### Components
- **PascalCase**: `Navbar.jsx`, `Hero.jsx`
- **Descriptive names**: Clear purpose
- **`.jsx` extension**: For React components

### Data Files
- **camelCase**: `projects.js`, `techstack.js`
- **`.js` extension**: For data files
- **Export named or default**: Consistent exports

### Styles
- **kebab-case**: `index.css`
- **`.css` extension**: For stylesheets

---

## 📝 Import Patterns

### Components
```jsx
import Navbar from "./components/Navbar";
import { Badge } from "./components/ui/Badge";
```

### Data
```jsx
import { projects } from "../data/projects";
import { workExperience, education } from "../data/experience";
```

### Styles
```jsx
import "./index.css";
```

### External Libraries
```jsx
import { motion } from "framer-motion";
import { Github } from "lucide-react";
```

---

## 🔄 Data Flow

```
Data Files (src/data/)
    ↓
Components (src/components/)
    ↓
Pages (src/pages/)
    ↓
App.jsx (routing)
    ↓
main.jsx (render)
    ↓
index.html (mount point)
```

---

## 🎨 Styling Architecture

```
index.css (global)
    ↓
Tailwind utilities (inline)
    ↓
Component-specific styles (inline)
```

---

## 🚀 Build Process

```
Source Files (src/)
    ↓
Vite (bundler)
    ↓
Tailwind CSS (processing)
    ↓
PostCSS (autoprefixer)
    ↓
Optimized Bundle (dist/)
```

---

## 📦 Output Structure (dist/)

```
dist/
├── index.html              # Processed HTML
├── assets/
│   ├── index-[hash].css   # Bundled & minified CSS
│   └── index-[hash].js    # Bundled & minified JS
└── (other static assets)
```

---

## 💡 Best Practices

### Component Organization
- One component per file
- Group related components in folders
- Reusable components in `/ui`

### Data Management
- Separate data from components
- Use consistent data structures
- Easy to update and maintain

### Styling
- Use Tailwind utilities first
- Custom CSS only when needed
- Consistent spacing & colors

### File Structure
- Logical grouping
- Easy to navigate
- Scalable architecture

---

## 🔍 Finding Files

### Need to update...

**Personal info?**
→ `src/components/Hero.jsx`
→ `src/components/Overview.jsx`

**Projects?**
→ `src/data/projects.js`

**Experience?**
→ `src/data/experience.js`

**Tech stack?**
→ `src/data/techstack.js`

**Blog posts?**
→ `src/data/blog.js`

**Styling?**
→ `tailwind.config.js`
→ `src/index.css`

**Routing?**
→ `src/App.jsx`

---

Struktur folder ini dirancang untuk:
- ✅ Easy to understand
- ✅ Easy to maintain
- ✅ Easy to scale
- ✅ Easy to customize

Happy coding! 🚀
