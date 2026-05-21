# Contributing to Portfolio

Terima kasih atas minat Anda untuk berkontribusi! 🎉

## 🚀 Getting Started

1. **Fork repository**
2. **Clone fork Anda**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create branch baru**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📝 Commit Guidelines

Gunakan conventional commits:

- `feat:` - Fitur baru
- `fix:` - Bug fix
- `docs:` - Dokumentasi
- `style:` - Formatting, styling
- `refactor:` - Code refactoring
- `test:` - Testing
- `chore:` - Maintenance

Contoh:
```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve mobile menu issue"
git commit -m "docs: update README"
```

## 🎨 Code Style

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Add comments for complex logic
- Follow React best practices

## 🧪 Testing

Sebelum submit PR:

- [ ] Test di browser (Chrome, Firefox, Safari)
- [ ] Test responsive di mobile
- [ ] Test dark/light mode
- [ ] No console errors
- [ ] Build berhasil: `npm run build`

## 📤 Pull Request

1. **Push ke fork Anda**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Buka GitHub
   - Click "New Pull Request"
   - Pilih branch Anda
   - Isi deskripsi yang jelas

3. **PR Template**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation
   - [ ] Refactoring
   
   ## Testing
   - [ ] Tested in Chrome
   - [ ] Tested in Firefox
   - [ ] Tested on mobile
   - [ ] Build successful
   
   ## Screenshots (if applicable)
   Add screenshots here
   ```

## 🐛 Bug Reports

Gunakan GitHub Issues dengan template:

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
Add screenshots if applicable

## Environment
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 120]
- Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

```markdown
## Feature Description
Clear description of the feature

## Use Case
Why is this feature needed?

## Proposed Solution
How should it work?

## Alternatives
Other solutions considered
```

## 📋 Project Structure

```
src/
├── components/     # React components
├── data/          # Static data
├── pages/         # Page components
└── assets/        # Images, fonts, etc.
```

## 🎯 Areas for Contribution

- [ ] Add more animations
- [ ] Improve accessibility
- [ ] Add unit tests
- [ ] Improve documentation
- [ ] Add new components
- [ ] Performance optimization
- [ ] SEO improvements
- [ ] Add i18n support

## ❓ Questions?

Feel free to open an issue or reach out!

---

Thank you for contributing! 🙏
