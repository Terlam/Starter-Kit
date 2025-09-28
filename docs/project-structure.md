# Project Structure Guide

This guide explains the organization and structure of your Starter Kit codebase, helping you understand where to find and add different types of files.

## 📁 Directory Structure Overview

```
Starter-Kit/
├── docs/                          # Documentation files
│   ├── README.md                  # Main documentation index
│   ├── environment-setup.md       # Environment configuration guide
│   ├── mvp-blocks-components.md   # Component usage guide
│   ├── mock-data-creation.md      # Mock data setup guide
│   ├── api-integration.md         # API integration guide
│   ├── project-structure.md       # This file
│   └── deployment.md             # Deployment guide
├── public/                        # Static assets
│   ├── data/                      # Mock data files
│   │   └── data.json             # Main mock data
│   ├── images/                    # Image assets
│   └── *.svg                     # Icon files
├── src/                          # Source code
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API routes
│   │   ├── dashboard/            # Dashboard page
│   │   ├── login/                # Login page
│   │   ├── signup/               # Signup page
│   │   ├── AImodel/              # AI model page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── Components/               # React components
│   │   ├── mvp-blocks/           # Pre-built MVP components
│   │   ├── mvpblocks/            # Alternative component organization
│   │   ├── layouts/              # Layout components
│   │   ├── ui/                   # UI components (Shadcn/UI)
│   │   ├── Gemini/               # Gemini AI components
│   │   └── Landingpagecomps/     # Landing page components
│   ├── hooks/                    # Custom React hooks
│   └── lib/                      # Utility libraries
│       ├── firebase.ts           # Firebase configuration
│       ├── firebaseClient.ts     # Firebase client setup
│       └── utils.ts              # General utilities
├── components.json               # Shadcn/UI configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
├── example.env                  # Environment variables template
└── README.md                   # Project README
```

## 🎯 Key Directories Explained

### `/src/app/` - Next.js App Router

The `app` directory uses Next.js 13+ App Router pattern:

```
src/app/
├── api/                    # API routes (server-side)
│   ├── generate/           # AI generation endpoint
│   └── google/             # Google OAuth integration
├── (pages)/                # Page components
│   ├── dashboard/          # Admin dashboard
│   ├── login/              # Authentication pages
│   ├── signup/
│   └── AImodel/            # AI model interface
├── globals.css             # Global CSS styles
├── layout.tsx              # Root layout component
└── page.tsx                # Home page component
```

**Key Points**:
- Each folder represents a route
- `layout.tsx` files define shared layouts
- `page.tsx` files define page components
- API routes go in the `api/` folder

### `/src/Components/` - React Components

Organized by functionality and reusability:

```
src/Components/
├── mvp-blocks/             # Pre-built MVP components
│   ├── login.tsx          # Login form component
│   ├── signup.tsx         # Signup form component
│   └── spline-hero.tsx    # Hero section component
├── layouts/                # Layout components
│   ├── navigation.tsx     # Navigation bar
│   ├── footer.tsx         # Footer component
│   ├── process.tsx        # Process section
│   └── meshy-cards.tsx    # Card layout component
├── ui/                     # Shadcn/UI components
│   ├── button.tsx         # Button component
│   ├── card.tsx           # Card component
│   ├── input.tsx          # Input component
│   └── ...                # Other UI components
├── Gemini/                 # AI-specific components
└── Landingpagecomps/       # Landing page specific components
```

**Organization Principles**:
- **mvp-blocks**: Ready-to-use components for common features
- **layouts**: Structural components for page organization
- **ui**: Reusable UI primitives (Shadcn/UI)
- **Feature folders**: Components specific to certain features

### `/src/lib/` - Utility Libraries

```
src/lib/
├── firebase.ts             # Firebase configuration
├── firebaseClient.ts       # Firebase client setup
└── utils.ts                # General utility functions
```

**Purpose**:
- **firebase.ts**: Main Firebase app configuration
- **firebaseClient.ts**: Firebase client-side setup for authentication
- **utils.ts**: Shared utility functions (e.g., `cn` for className merging)

### `/src/hooks/` - Custom React Hooks

```
src/hooks/
└── use-mobile.ts           # Mobile detection hook
```

**Purpose**: Reusable stateful logic that can be shared across components.

## 🔧 Configuration Files

### `/components.json` - Shadcn/UI Configuration

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/Components",
    "utils": "@/lib/utils"
  }
}
```

### `/next.config.ts` - Next.js Configuration

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### `/tsconfig.json` - TypeScript Configuration

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 📦 Package Dependencies

### Core Framework
- **Next.js 15**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: Pre-built component library
- **Radix UI**: Headless UI primitives
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Authentication & Backend
- **Firebase**: Authentication and backend services
- **Google Generative AI**: AI content generation

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Turbopack**: Fast bundling (Next.js)

## 🎨 Styling Architecture

### Tailwind CSS Setup

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    /* ... more CSS variables */
  }
}
```

### Component Styling Patterns

```tsx
// Utility classes
<div className="flex items-center justify-center bg-[#0D1117] text-white">

// CSS variables
<div className="bg-background text-foreground">

// Custom styles
<div className="bg-[var(--custom-color)]">
```

## 🔄 Data Flow Architecture

### Authentication Flow
```
User Action → Firebase Auth → API Routes → Components → UI Update
```

### API Integration Flow
```
Component → API Client → Next.js API Route → External Service → Response
```

### State Management
- **Local State**: React useState/useReducer
- **Server State**: Next.js API routes
- **Authentication State**: Firebase Auth context

## 🚀 Development Workflow

### Adding New Features

1. **Create API Route** (if needed):
   ```typescript
   // src/app/api/feature/route.ts
   export async function GET() { /* ... */ }
   export async function POST() { /* ... */ }
   ```

2. **Create Component**:
   ```typescript
   // src/Components/feature/component.tsx
   'use client';
   export default function Component() { /* ... */ }
   ```

3. **Create Page**:
   ```typescript
   // src/app/feature/page.tsx
   import Component from '@/Components/feature/component';
   export default function FeaturePage() { /* ... */ }
   ```

4. **Add Navigation** (if needed):
   ```typescript
   // Update src/Components/layouts/navigation.tsx
   <Link href="/feature">Feature</Link>
   ```

### File Naming Conventions

- **Components**: PascalCase (`UserProfile.tsx`)
- **Pages**: lowercase (`dashboard/page.tsx`)
- **API Routes**: lowercase (`api/users/route.ts`)
- **Utilities**: camelCase (`userService.ts`)
- **Types**: PascalCase (`User.types.ts`)

## 🔧 Build & Development

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Environment Setup

```bash
# Copy environment template
cp example.env .env.local

# Install dependencies
npm install
```

## 📚 Best Practices

### 1. File Organization
- Keep related files together
- Use consistent naming conventions
- Separate concerns (UI, logic, data)
- Follow Next.js App Router patterns

### 2. Component Structure
- Use TypeScript for type safety
- Implement proper error boundaries
- Follow React best practices
- Use custom hooks for reusable logic

### 3. API Design
- RESTful API endpoints
- Proper error handling
- Input validation
- Authentication middleware

### 4. Styling
- Use Tailwind CSS utilities
- Implement responsive design
- Follow design system patterns
- Use CSS variables for theming

## 🔗 Related Documentation

- [Environment Setup](./environment-setup.md) - Configuration files
- [MVP Blocks Components](./mvp-blocks-components.md) - Component usage
- [API Integration](./api-integration.md) - API route patterns
- [Mock Data Creation](./mock-data-creation.md) - Data structure patterns

## 🆘 Troubleshooting

### Common Issues

#### Import Errors
- Check file paths are correct
- Verify TypeScript configuration
- Ensure proper file extensions

#### Build Errors
- Check for TypeScript errors
- Verify all dependencies are installed
- Review Next.js configuration

#### Runtime Errors
- Check browser console
- Verify environment variables
- Review API endpoint configurations

### Getting Help

1. Check the relevant documentation guide
2. Review the error messages carefully
3. Verify your file structure matches the examples
4. Open an issue in the repository

---

**Next Steps**: Ready to deploy? Check out the [Deployment Guide](./deployment.md)!
