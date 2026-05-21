# Vercel Deployment Guide

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel

## Deployment Steps

### 1. Connect Repository
1. Go to https://vercel.com/new
2. Select your GitHub repository
3. Click "Import"

### 2. Configure Project
- **Framework Preset**: Vite
- **Root Directory**: `./portfolio` (if in monorepo, otherwise leave default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Environment Variables
No environment variables are required for basic deployment. The app uses static assets only.

### 4. Deploy
Click "Deploy" and wait for the build to complete.

## Troubleshooting

### Issue: Routes not working (404 errors)
**Solution**: The `vercel.json` file is already configured with rewrites to handle client-side routing.

### Issue: PDF/Images not loading
**Solution**: 
- PDFs and images are bundled during build
- They are served as static assets from the `dist` folder
- No additional configuration needed

### Issue: Keyboard shortcuts not working
**Solution**:
- Ctrl+K (or Cmd+K on Mac) should work on the home page
- Make sure JavaScript is enabled in browser
- Try refreshing the page

### Issue: Download buttons not working
**Solution**:
- Download functionality uses browser's native download API
- Some browsers may block downloads from certain origins
- Fallback: Opens file in new tab if download fails

## Performance Optimization

The project is already optimized for Vercel:
- ✅ Vite build optimization
- ✅ Code splitting enabled
- ✅ Asset hashing for cache busting
- ✅ Tailwind CSS purging
- ✅ React 19 with automatic batching

## Monitoring

After deployment:
1. Check Vercel Analytics dashboard
2. Monitor build logs for any warnings
3. Test all features on production URL

## Rollback

If issues occur:
1. Go to Vercel dashboard
2. Select your project
3. Go to "Deployments"
4. Click "Rollback" on a previous successful deployment

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
