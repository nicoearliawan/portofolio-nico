# 🏆 Certificates Guide

Panduan lengkap untuk mengelola section Certificates di portfolio Anda.

## 📋 Quick Start

### 1. Tambah Certificate Baru

**File**: `src/data/certificates.js`

```js
{
  id: 1,
  title: "Certificate Name",
  issuer: "Organization/Platform",
  date: "2026-05-12",
  credentialId: "CERT-123456",
  credentialUrl: "https://verify-url.com",
  image: "https://image-url.com/cert.jpg",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
}
```

### 2. Field Explanations

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | number | ✅ Yes | Unique identifier | `1` |
| `title` | string | ✅ Yes | Certificate name | `"AWS Certified Solutions Architect"` |
| `issuer` | string | ✅ Yes | Issuing organization | `"Amazon Web Services"` |
| `date` | string | ✅ Yes | Issue date (YYYY-MM-DD) | `"2026-04-15"` |
| `credentialId` | string | ⚠️ Optional | Certificate ID | `"AWS-SAA-123456"` |
| `credentialUrl` | string | ⚠️ Optional | Verification link | `"https://verify.com"` |
| `image` | string | ✅ Yes | Certificate image URL | `"https://..."` |
| `skills` | array | ✅ Yes | Related skills/topics | `["AWS", "Cloud"]` |

## 🎨 Image Guidelines

### Recommended Specs
- **Size**: 400x300px (4:3 ratio)
- **Format**: JPG or PNG
- **File size**: < 200KB (compressed)
- **Quality**: High resolution, clear text

### Image Sources

#### 1. Actual Certificate
```
✅ Screenshot of your certificate
✅ Crop to show main content
✅ Remove personal info if needed
```

#### 2. Course/Platform Logo
```
✅ Official logo from platform
✅ High resolution
✅ Transparent background (PNG)
```

#### 3. Related Image
```
✅ Technology/topic related
✅ Professional looking
✅ From Unsplash/Pexels
```

### Upload Options

**Free Image Hosting**:
1. **Imgur** - https://imgur.com
   - Free, no account needed
   - Direct image links
   - Fast CDN

2. **Cloudinary** - https://cloudinary.com
   - Free tier: 25GB
   - Image optimization
   - Transformations

3. **GitHub** - Your repository
   - Store in `public/certificates/`
   - Use relative paths
   - Version controlled

**Example**:
```js
// Using Imgur
image: "https://i.imgur.com/abc123.jpg"

// Using Cloudinary
image: "https://res.cloudinary.com/your-cloud/image/upload/cert.jpg"

// Using GitHub (in public folder)
image: "/certificates/aws-cert.jpg"
```

## 📝 Real Examples

### Example 1: AWS Certification
```js
{
  id: 1,
  title: "AWS Certified Solutions Architect - Associate",
  issuer: "Amazon Web Services",
  date: "2026-04-15",
  credentialId: "AWS-SAA-C03-123456",
  credentialUrl: "https://aws.amazon.com/verification/123456",
  image: "https://i.imgur.com/aws-cert.jpg",
  skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda"],
}
```

### Example 2: Coursera Certificate
```js
{
  id: 2,
  title: "Meta Front-End Developer Professional Certificate",
  issuer: "Meta (Coursera)",
  date: "2026-03-20",
  credentialId: "COURSERA-CERT-789012",
  credentialUrl: "https://coursera.org/verify/789012",
  image: "https://i.imgur.com/meta-cert.jpg",
  skills: ["React", "JavaScript", "HTML", "CSS", "Git"],
}
```

### Example 3: Udemy Course
```js
{
  id: 3,
  title: "Complete Web Development Bootcamp",
  issuer: "Udemy",
  date: "2026-02-10",
  credentialId: "UC-12345678",
  credentialUrl: "https://udemy.com/certificate/UC-12345678",
  image: "https://i.imgur.com/udemy-cert.jpg",
  skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
}
```

### Example 4: Google Certificate
```js
{
  id: 4,
  title: "Google Data Analytics Professional Certificate",
  issuer: "Google (Coursera)",
  date: "2026-01-15",
  credentialId: "GOOGLE-DA-345678",
  credentialUrl: "https://coursera.org/verify/345678",
  image: "https://i.imgur.com/google-cert.jpg",
  skills: ["Data Analysis", "SQL", "Tableau", "R Programming"],
}
```

### Example 5: University Certificate
```js
{
  id: 5,
  title: "Machine Learning Specialization",
  issuer: "Stanford University (Coursera)",
  date: "2025-12-20",
  credentialId: "STANFORD-ML-901234",
  credentialUrl: "https://coursera.org/verify/901234",
  image: "https://i.imgur.com/stanford-cert.jpg",
  skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
}
```

## 🎯 Skills Tags Best Practices

### Good Examples ✅
```js
skills: ["React", "Node.js", "MongoDB"]
skills: ["AWS", "Cloud Architecture", "DevOps"]
skills: ["Data Analysis", "SQL", "Python"]
```

### Bad Examples ❌
```js
skills: ["I learned React and how to build applications"] // Too long
skills: ["Everything about web development"] // Too vague
skills: ["React", "React Hooks", "React Router", "React Context", "Redux"] // Too many
```

### Guidelines
- ✅ Keep it short (1-3 words)
- ✅ Use 3-5 skills per certificate
- ✅ Use official technology names
- ✅ Be specific but concise
- ❌ Avoid full sentences
- ❌ Avoid too many tags

## 🔗 Verification URLs

### Popular Platforms

**Coursera**:
```
https://coursera.org/verify/[CERTIFICATE_ID]
```

**Udemy**:
```
https://udemy.com/certificate/UC-[CERTIFICATE_ID]
```

**LinkedIn Learning**:
```
https://linkedin.com/learning/certificates/[CERTIFICATE_ID]
```

**AWS**:
```
https://aws.amazon.com/verification
```

**Google Cloud**:
```
https://google.accredible.com/[CERTIFICATE_ID]
```

**Microsoft**:
```
https://learn.microsoft.com/users/[USERNAME]/credentials/[CERT_ID]
```

## 📅 Date Format

Always use: `YYYY-MM-DD`

```js
✅ "2026-05-12"
✅ "2026-01-01"
❌ "12/05/2026"
❌ "May 12, 2026"
❌ "12-05-2026"
```

The date will be automatically formatted for display as: "May 12, 2026"

## 🎨 Customization

### Change Certificate Card Style

**File**: `src/components/Certificates.jsx`

```jsx
// Current: Card with image on left
<div className="flex flex-col sm:flex-row gap-4">
  <div className="w-full sm:w-32 h-24">
    <img src={cert.image} />
  </div>
  <div className="flex-1">
    {/* Content */}
  </div>
</div>

// Alternative: Image on top
<div className="flex flex-col gap-4">
  <img src={cert.image} className="w-full h-48" />
  <div>
    {/* Content */}
  </div>
</div>
```

### Change Grid Layout

**File**: `src/pages/CertificatesPage.jsx`

```jsx
// Current: 2 columns
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Alternative: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Alternative: Single column
<div className="flex flex-col gap-6">
```

## 🚀 Tips & Tricks

### 1. Organize by Date
```js
// Sort newest first
export const certificates = [
  { date: "2026-05-12", ... }, // Newest
  { date: "2026-04-15", ... },
  { date: "2026-03-20", ... },
  { date: "2026-02-10", ... }, // Oldest
];
```

### 2. Group by Category
```js
export const certifications = {
  cloud: [
    { title: "AWS Certified...", ... },
    { title: "Azure Fundamentals...", ... },
  ],
  development: [
    { title: "React Developer...", ... },
    { title: "Node.js Expert...", ... },
  ],
};
```

### 3. Add Expiry Dates
```js
{
  id: 1,
  title: "Certificate Name",
  date: "2026-01-01",
  expiryDate: "2029-01-01", // Add this
  // ...
}
```

### 4. Add Certificate Status
```js
{
  id: 1,
  title: "Certificate Name",
  status: "active", // or "expired", "pending"
  // ...
}
```

## ✅ Checklist

Before adding a certificate:
- [ ] Have certificate image ready
- [ ] Image is compressed (< 200KB)
- [ ] Have credential ID
- [ ] Have verification URL
- [ ] Listed 3-5 relevant skills
- [ ] Date in YYYY-MM-DD format
- [ ] Unique ID number

## 🆘 Troubleshooting

### Image Not Loading
```js
// Check URL is correct
image: "https://i.imgur.com/abc123.jpg" ✅
image: "imgur.com/abc123" ❌

// Check image is publicly accessible
// Open URL in incognito browser
```

### Verification Link Not Working
```js
// Use full URL with https://
credentialUrl: "https://coursera.org/verify/123" ✅
credentialUrl: "coursera.org/verify/123" ❌
```

### Skills Not Showing
```js
// Must be array of strings
skills: ["React", "Node.js"] ✅
skills: "React, Node.js" ❌
```

## 📚 Resources

### Free Certificate Images
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Image Compression
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim**: https://imageoptim.com

### Icon Resources
- **Lucide Icons**: https://lucide.dev
- **Simple Icons**: https://simpleicons.org

---

**Need help?** Check the main documentation or open an issue!

Happy showcasing your achievements! 🏆
