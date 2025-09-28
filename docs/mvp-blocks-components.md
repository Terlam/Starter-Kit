# MVP Blocks Components Guide

This guide covers the pre-built UI components available in the MVP Blocks section of your Starter Kit. These components are designed to help you quickly build common features for your MVP.

## 🎯 Overview

MVP Blocks are ready-to-use components that implement common patterns in modern web applications. They're located in `src/Components/mvp-blocks/` and include:

- **Authentication Components** - Login and signup flows
- **Hero Sections** - Landing page components with animations
- **Layout Components** - Navigation and structural elements

## 📁 Available Components

### 1. Authentication Components

#### Login Component (`login.tsx`)

**Location**: `src/Components/mvp-blocks/login.tsx`

**Features**:
- Google OAuth integration
- Modern dark theme design
- Responsive layout
- Error handling with user feedback

**Usage**:
```tsx
import LoginPage from '@/Components/mvp-blocks/login';

export default function Login() {
  return <LoginPage />;
}
```

**Integration Requirements**:
- Requires Firebase configuration (see [Environment Setup](./environment-setup.md))
- Uses Google OAuth provider
- Automatically handles authentication state

#### Signup Component (`signup.tsx`)

**Location**: `src/Components/mvp-blocks/signup.tsx`

**Features**:
- Google OAuth signup flow
- Consistent styling with login component
- Minimal user friction design
- Automatic user creation

**Usage**:
```tsx
import SignupPage from '@/Components/mvp-blocks/signup';

export default function Signup() {
  return <SignupPage />;
}
```

### 2. Hero Section Components

#### Spline Hero Component (`spline-hero.tsx`)

**Location**: `src/Components/mvp-blocks/spline-hero.tsx`

**Features**:
- Animated hero section with Framer Motion
- Responsive design
- Call-to-action buttons
- Background gradients and effects
- Dashboard preview image

**Usage**:
```tsx
import SplineHero from '@/Components/mvp-blocks/spline-hero';

export default function HomePage() {
  return (
    <div>
      <SplineHero />
      {/* Your other page content */}
    </div>
  );
}
```

**Customization Options**:
- Modify the headline text
- Update the description
- Change the CTA button text and links
- Adjust background colors and gradients

## 🛠 Implementation Guide

### Adding Authentication to Your App

#### Step 1: Create Authentication Pages

Create the following pages in your `src/app/` directory:

```tsx
// src/app/login/page.tsx
import LoginPage from '@/Components/mvp-blocks/login';

export default function Login() {
  return <LoginPage />;
}
```

```tsx
// src/app/signup/page.tsx
import SignupPage from '@/Components/mvp-blocks/signup';

export default function Signup() {
  return <SignupPage />;
}
```

#### Step 2: Add Navigation Links

Update your navigation component to include login/signup links:

```tsx
// src/Components/layouts/navigation.tsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </nav>
  );
}
```

#### Step 3: Handle Authentication State

Create a context or use a state management solution to handle user authentication:

```tsx
// src/contexts/AuthContext.tsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/lib/firebaseClient';
import { onAuthStateChanged } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

### Using the Hero Component

#### Step 1: Add to Your Landing Page

```tsx
// src/app/page.tsx
import SplineHero from '@/Components/mvp-blocks/spline-hero';

export default function HomePage() {
  return (
    <main>
      <SplineHero />
      {/* Add other sections as needed */}
    </main>
  );
}
```

#### Step 2: Customize the Content

Edit the hero component to match your brand:

```tsx
// Customize in src/Components/mvp-blocks/spline-hero.tsx
<h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
  Your Custom Headline{' '}
  <span className="text-[#2B6CB0]">Here</span>
</h1>
<p className="mx-auto mb-10 max-w-2xl text-lg text-[#A0AEC0] md:text-xl">
  Your custom description goes here.
</p>
```

## 🎨 Styling and Customization

### Theme Colors

The components use a consistent dark theme with these colors:
- Background: `#0D1117`
- Text: `#FFFFFF`
- Accent: `#2B6CB0`
- Muted text: `#A0AEC0`
- Success: `#38A169`

### Customizing Styles

#### Method 1: Modify Component Styles Directly

Edit the component files to change colors, spacing, or layout:

```tsx
// Change the background color
<div className="flex min-h-screen items-center justify-center bg-[#0D1117]">
  {/* Change to your preferred background color */}
  <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a]">
```

#### Method 2: Use CSS Variables

Create custom CSS variables for easier theming:

```css
/* src/app/globals.css */
:root {
  --background-primary: #0D1117;
  --background-secondary: #161B22;
  --text-primary: #FFFFFF;
  --text-secondary: #A0AEC0;
  --accent-primary: #2B6CB0;
  --accent-success: #38A169;
}
```

Then use them in your components:

```tsx
<div className="bg-[var(--background-primary)] text-[var(--text-primary)]">
```

## 🔧 Advanced Customization

### Adding New Authentication Providers

To add additional authentication methods (email/password, etc.):

1. **Update Firebase Configuration**:
   ```typescript
   // src/app/api/google/google.ts
   import { 
     GoogleAuthProvider,
     EmailAuthProvider,
     signInWithEmailAndPassword 
   } from "firebase/auth";
   ```

2. **Extend the Login Component**:
   ```tsx
   // Add email/password form to login.tsx
   const handleEmailLogin = async (email: string, password: string) => {
     try {
       await signInWithEmailAndPassword(auth, email, password);
     } catch (error) {
       console.error(error);
     }
   };
   ```

### Creating Custom MVP Blocks

Follow this pattern to create your own MVP blocks:

```tsx
// src/Components/mvp-blocks/custom-component.tsx
'use client';

import { useState } from 'react';

export default function CustomComponent() {
  const [state, setState] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D1117]">
      {/* Your component content */}
    </div>
  );
}
```

## 📚 Component Dependencies

### Required Packages

The MVP blocks depend on these packages (already included):

```json
{
  "firebase": "^12.1.0",
  "framer-motion": "^12.23.18",
  "next": "^15.5.0",
  "react": "^18.3.1",
  "lucide-react": "^0.541.0"
}
```

### Import Paths

Use these import paths for the components:

```tsx
// Authentication components
import LoginPage from '@/Components/mvp-blocks/login';
import SignupPage from '@/Components/mvp-blocks/signup';

// Hero components
import SplineHero from '@/Components/mvp-blocks/spline-hero';

// Layout components
import Navigation from '@/Components/layouts/navigation';
```

## 🚀 Best Practices

### 1. Component Composition
- Keep components focused on single responsibilities
- Use composition over inheritance
- Make components reusable and configurable

### 2. Error Handling
- Always handle authentication errors gracefully
- Provide meaningful error messages to users
- Log errors for debugging

### 3. Performance
- Use `'use client'` directive only when necessary
- Implement proper loading states
- Optimize images and assets

### 4. Accessibility
- Add proper ARIA labels
- Ensure keyboard navigation works
- Use semantic HTML elements

## 🔗 Related Documentation

- [Environment Setup](./environment-setup.md) - Required for authentication components
- [API Integration](./api-integration.md) - How the components interact with APIs
- [Mock Data Creation](./mock-data-creation.md) - Test data for development
- [Project Structure](./project-structure.md) - Understanding the codebase organization

## 🆘 Troubleshooting

### Common Issues

#### Authentication Not Working
- Check Firebase configuration in environment variables
- Verify Google OAuth is enabled in Firebase Console
- Ensure your domain is added to authorized domains

#### Components Not Rendering
- Check import paths are correct
- Verify all dependencies are installed
- Look for TypeScript errors in the console

#### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check for CSS conflicts
- Verify custom styles are being applied

### Getting Help

1. Check the browser console for error messages
2. Verify your environment setup
3. Review the component code for any customizations
4. Open an issue in the repository with specific error details

---

**Next Steps**: Set up [Mock Data](./mock-data-creation.md) to test your components with realistic data!
