# Deployment Guide

This guide covers how to deploy your Starter Kit application to various hosting platforms and production environments.

## 🎯 Overview

Your Starter Kit is a Next.js application that can be deployed to multiple platforms. This guide covers the most popular deployment options:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **Docker** (Self-hosted)

## 🚀 Vercel Deployment (Recommended)

Vercel is the creator of Next.js and provides the best integration.

### Step 1: Prepare Your Repository

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Verify Environment Variables**:
   - Ensure all required environment variables are documented
   - Test locally with production-like settings

### Step 2: Deploy to Vercel

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository

2. **Configure Build Settings**:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install",
     "framework": "nextjs"
   }
   ```

3. **Set Environment Variables**:
   In the Vercel dashboard, add these environment variables:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_SENDER_ID=your_sender_id
   NEXT_PUBLIC_APP_ID=your_app_id
   NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id
   GEMNI_API_KEY=your_gemini_api_key
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be available at `https://your-project.vercel.app`

### Step 3: Configure Firebase for Production

#### Firebase CORS Configuration

When deploying to Vercel (or any hosting platform), you need to configure Firebase to work with your production domain to avoid CORS errors.

1. **Update Firebase Auth Authorized Domains**:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Select your project
   - Navigate to **Authentication** → **Settings** → **Authorized domains**
   - Add your Vercel domain: `your-project.vercel.app`
   - Add your custom domain if you have one: `your-custom-domain.com`
   - Add `localhost` for local development (if not already present)

2. **Configure Google OAuth Redirect URIs**:
   - In Firebase Console → **Authentication** → **Sign-in method**
   - Click on **Google** provider
   - In **Authorized redirect URIs**, add:
     ```
     https://your-project.vercel.app/api/auth/callback/google
     https://your-custom-domain.com/api/auth/callback/google
     ```

3. **Update Firebase Storage Rules** (if using Firebase Storage):
   ```javascript
   // storage.rules
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       // Allow read access to all users for public content
       match /public/{allPaths=**} {
         allow read: if true;
       }
       
       // Allow authenticated users to upload to their own folder
       match /users/{userId}/{allPaths=**} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       
       // Allow read access to profile images
       match /profile-images/{allPaths=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

4. **Configure Firestore Security Rules**:
   ```javascript
   // firestore.rules
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users can only access their own user document
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       
       // Public posts can be read by anyone, written by authenticated users
       match /posts/{postId} {
         allow read: if true;
         allow create: if request.auth != null;
         allow update, delete: if request.auth != null && 
           (resource.data.authorId == request.auth.uid || 
            request.auth.token.admin == true);
       }
       
       // Comments can be read by anyone, written by authenticated users
       match /posts/{postId}/comments/{commentId} {
         allow read: if true;
         allow create: if request.auth != null;
         allow update, delete: if request.auth != null && 
           (resource.data.authorId == request.auth.uid || 
            request.auth.token.admin == true);
       }
     }
   }
   ```

5. **Environment-Specific Firebase Configuration**:
   
   Create different Firebase projects for different environments:
   - **Development**: `your-project-dev`
   - **Staging**: `your-project-staging`  
   - **Production**: `your-project-prod`

   Update your environment variables accordingly:
   ```env
   # Development
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-dev
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-dev.firebaseapp.com
   
   # Production
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-prod
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-prod.firebaseapp.com
   ```

6. **Firebase Hosting Configuration** (if using Firebase Hosting alongside Vercel):
   
   Create `firebase.json`:
   ```json
   {
     "hosting": {
       "public": "out",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ],
       "headers": [
         {
           "source": "**/*.@(js|css)",
           "headers": [
             {
               "key": "Cache-Control",
               "value": "max-age=31536000"
             }
           ]
         }
       ]
     },
     "firestore": {
       "rules": "firestore.rules",
       "indexes": "firestore.indexes.json"
     },
     "storage": {
       "rules": "storage.rules"
     }
   }
   ```

#### Troubleshooting Firebase CORS Issues

If you encounter CORS errors after deployment:

1. **Check Authorized Domains**:
   - Ensure your production domain is added to Firebase Auth authorized domains
   - Verify the domain format is correct (no trailing slashes, correct protocol)

2. **Verify API Keys**:
   - Make sure you're using the correct Firebase config for your environment
   - Check that API keys match your Firebase project

3. **Check Network Tab**:
   - Open browser dev tools → Network tab
   - Look for failed requests to Firebase services
   - Check error messages for specific CORS issues

4. **Common CORS Error Messages**:
   ```
   Access to fetch at 'https://identitytoolkit.googleapis.com/...' 
   from origin 'https://your-app.vercel.app' has been blocked by CORS policy
   ```
   
   **Solution**: Add your domain to Firebase Auth authorized domains

5. **Test Firebase Connection**:
   ```typescript
   // Add this to test Firebase connectivity
   // src/lib/firebase-test.ts
   import { initializeApp } from 'firebase/app';
   import { getAuth, connectAuthEmulator } from 'firebase/auth';
   
   const testFirebaseConnection = async () => {
     try {
       const auth = getAuth();
       console.log('Firebase Auth initialized successfully');
       console.log('Current user:', auth.currentUser);
     } catch (error) {
       console.error('Firebase connection error:', error);
     }
   };
   
   export default testFirebaseConnection;
   ```

### Step 4: Configure Custom Domain (Optional)

1. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Firebase Auth**:
   - Add your custom domain to Firebase Auth authorized domains
   - Update OAuth redirect URIs with your custom domain

### Vercel Configuration File

Create `vercel.json` for advanced configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, PUT, DELETE, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "Content-Type, Authorization"
        }
      ]
    }
  ]
}
```

## 🌐 Netlify Deployment

### Step 1: Build Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  directory = "netlify/functions"
```

### Step 2: Deploy

1. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Configure build settings

2. **Set Environment Variables**:
   In Netlify dashboard → Site settings → Environment variables

3. **Deploy**:
   - Trigger deployment
   - Your app will be available at `https://your-project.netlify.app`

## 🚂 Railway Deployment

### Step 1: Railway Configuration

Create `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Step 2: Deploy

1. **Connect to Railway**:
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Configure environment variables

2. **Deploy**:
   - Railway will automatically detect Next.js
   - Your app will be available at `https://your-project.railway.app`

## 🐳 Docker Deployment

### Step 1: Create Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
```

### Step 2: Create Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_FIREBASE_API_KEY=${NEXT_PUBLIC_FIREBASE_API_KEY}
      - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}
      - NEXT_PUBLIC_FIREBASE_PROJECT_ID=${NEXT_PUBLIC_FIREBASE_PROJECT_ID}
      - NEXT_PUBLIC_STORAGE_BUCKET=${NEXT_PUBLIC_STORAGE_BUCKET}
      - NEXT_PUBLIC_SENDER_ID=${NEXT_PUBLIC_SENDER_ID}
      - NEXT_PUBLIC_APP_ID=${NEXT_PUBLIC_APP_ID}
      - NEXT_PUBLIC_MEASUREMENT_ID=${NEXT_PUBLIC_MEASUREMENT_ID}
      - GEMNI_API_KEY=${GEMNI_API_KEY}
    env_file:
      - .env.production
```

### Step 3: Deploy with Docker

```bash
# Build the image
docker build -t starter-kit .

# Run the container
docker run -p 3000:3000 starter-kit

# Or use docker-compose
docker-compose up -d
```

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production` for production-specific settings:

```env
# Production Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_production_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_production_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_production_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_production_project.appspot.com
NEXT_PUBLIC_SENDER_ID=your_production_sender_id
NEXT_PUBLIC_APP_ID=your_production_app_id
NEXT_PUBLIC_MEASUREMENT_ID=your_production_measurement_id

# Production AI Configuration
GEMNI_API_KEY=your_production_gemini_api_key

# Production App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_ENV=production
```

### Next.js Configuration for Production

Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports if needed
  output: 'standalone',
  
  // Optimize images
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

## 🔒 Security Considerations

### 1. Environment Variables
- Never commit production secrets to Git
- Use different API keys for different environments
- Rotate keys regularly
- Use secure key management services

### 2. Firebase Security Rules
```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public read access for posts
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 3. API Security
```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Add security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

## 📊 Monitoring & Analytics

### 1. Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Error Monitoring
```bash
npm install @sentry/nextjs
```

```typescript
// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

## 🚀 Performance Optimization

### 1. Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 2. Code Splitting
```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### 3. Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
```

```typescript
// next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🔗 Related Documentation

- [Environment Setup](./environment-setup.md) - Environment variable configuration
- [Project Structure](./project-structure.md) - Understanding the codebase
- [API Integration](./api-integration.md) - API endpoint configuration

## 🆘 Troubleshooting

### Common Deployment Issues

#### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review build logs for specific errors

#### Environment Variable Issues
- Ensure all required variables are set
- Check variable names match exactly
- Verify no extra spaces or quotes

#### Firebase Configuration Issues
- Update authorized domains in Firebase Console
- Verify API keys are correct
- Check Firebase project settings

#### Performance Issues
- Enable Next.js optimizations
- Use proper image formats and sizes
- Implement caching strategies

### Getting Help

1. Check the deployment platform's documentation
2. Review build logs for specific errors
3. Verify environment configuration
4. Test locally with production settings

---

**Congratulations!** Your Starter Kit is now deployed and ready for production use! 🎉
