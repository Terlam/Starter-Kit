# API Integration Guide

This guide covers how to integrate with external APIs and services in your Starter Kit application, including the existing Firebase authentication and Google Gemini AI integrations.

## 🎯 Overview

Your Starter Kit includes several API integrations:

- **Firebase Authentication** - Google OAuth sign-in
- **Google Gemini AI** - AI content generation
- **Custom API Routes** - Next.js API endpoints

## 🔥 Firebase Authentication API

### Current Implementation

The Firebase authentication is implemented in `src/app/api/google/google.ts`:

```typescript
import { GoogleAuthProvider, User, signInWithPopup, AuthError, UserCredential } from "firebase/auth";
import { auth } from "../../../lib/firebaseClient";

export async function signInWithGooglePopup(): Promise<{ user: User, idToken: string } | null> {
  const provider = new GoogleAuthProvider();
  
  try {
    const result: UserCredential = await signInWithPopup(auth, provider);
    const user: User = result.user;
    const idToken = await user.getIdToken();
    
    return { user, idToken };
  } catch (error: unknown) {
    const authError = error as AuthError & { customData?: { email?: string } };
    console.error("Error signing in with Google (Popup):", authError.code, authError.message);
    alert(`Error signing in: ${authError.message}`);
    return null;
  }
}
```

### Usage in Components

The authentication is used in your MVP blocks:

```tsx
// src/Components/mvp-blocks/login.tsx
import { signInWithGooglePopup } from "@/app/api/google/google";

const handleGoogleLogin = async () => {
  try {
    const signedInUser = await signInWithGooglePopup();
    if (signedInUser) {
      alert("success");
      // Handle successful login
    }
  } catch (error) {
    console.error(error);
    alert("Google login failed");
  }
};
```

### Extending Authentication

#### Add Email/Password Authentication

```typescript
// src/app/api/auth/email.ts
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail 
} from "firebase/auth";
import { auth } from "@/lib/firebaseClient";

export async function signUpWithEmail(email: string, password: string) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
}

export async function logout() {
  try {
    await signOut(auth);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

#### Add User Profile Management

```typescript
// src/app/api/user/profile.ts
import { updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebaseClient";

export async function updateUserProfile(displayName: string, photoURL?: string) {
  if (!auth.currentUser) {
    return { success: false, error: "No user logged in" };
  }

  try {
    await updateProfile(auth.currentUser, {
      displayName,
      photoURL
    });
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

## 🤖 Google Gemini AI API

### Current Implementation

The Gemini AI integration is in `src/app/api/generate/route.ts`:

```typescript
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    const apiKey = process.env.GEMNI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), { status: 500 });
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
```

### Using the AI API

#### Client-Side Usage

```typescript
// src/lib/ai.ts
export async function generateContent(prompt: string): Promise<string> {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate content');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}
```

#### React Component Example

```tsx
// src/components/AIContentGenerator.tsx
'use client';
import { useState } from 'react';
import { generateContent } from '@/lib/ai';

export default function AIContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    try {
      const content = await generateContent(prompt);
      setGeneratedContent(content);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Failed to generate content');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">AI Content Generator</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            Enter your prompt:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-3 border rounded-lg"
            rows={3}
            placeholder="Describe what you want to generate..."
          />
        </div>
        
        <button
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        >
          {isLoading ? 'Generating...' : 'Generate Content'}
        </button>
        
        {generatedContent && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Generated Content:</h3>
            <div className="p-4 bg-gray-100 rounded-lg whitespace-pre-wrap">
              {generatedContent}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

### Extending AI Functionality

#### Add Different AI Models

```typescript
// src/app/api/generate/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt, model = "gemini-1.5-flash", maxTokens = 1000 } = await req.json();
    
    const apiKey = process.env.GEMNI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), { status: 500 });
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const generativeModel = genAI.getGenerativeModel({ 
      model,
      generationConfig: {
        maxOutputTokens: maxTokens,
        temperature: 0.7,
        topP: 0.8,
        topK: 10,
      }
    });
    
    const result = await generativeModel.generateContent(prompt);
    const text = result.response.text();
    
    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
```

#### Add Image Generation

```typescript
// src/app/api/generate-image/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    
    const apiKey = process.env.GEMNI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), { status: 500 });
    }
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Note: Gemini doesn't generate images, but you can integrate with other services
    // This is a placeholder for image generation logic
    
    return new Response(JSON.stringify({ 
      message: "Image generation not available with Gemini. Consider integrating with DALL-E or Midjourney API." 
    }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
```

## 🌐 Custom API Routes

### Creating New API Endpoints

#### User Management API

```typescript
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebaseClient";
import { getAuth } from "firebase-admin/auth";

export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get users (implement your user fetching logic)
    const users = await getUsers(); // Your function to get users
    
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, role } = await req.json();
    
    // Create user logic here
    const newUser = await createUser({ name, email, role });
    
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

#### Posts API

```typescript
// src/app/api/posts/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");
    
    // Fetch posts with pagination and filtering
    const posts = await getPosts({ page, limit, category });
    
    return NextResponse.json({ posts, pagination: { page, limit } });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, category, tags } = await req.json();
    
    // Verify authentication
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Create post
    const newPost = await createPost({ title, content, category, tags });
    
    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
```

### API Middleware

#### Authentication Middleware

```typescript
// src/lib/middleware.ts
import { NextRequest } from "next/server";
import { getAuth } from "firebase-admin/auth";

export async function verifyAuth(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new Error("No token provided");
    }
    
    const decodedToken = await getAuth().verifyIdToken(token);
    return { user: decodedToken, error: null };
  } catch (error) {
    return { user: null, error: "Invalid token" };
  }
}
```

#### Rate Limiting

```typescript
// src/lib/rateLimit.ts
import { NextRequest } from "next/server";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(identifier: string, limit: number = 100, windowMs: number = 60000) {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  const userLimit = rateLimitMap.get(identifier);
  
  if (!userLimit || userLimit.resetTime < now) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }
  
  if (userLimit.count >= limit) {
    return { success: false, remaining: 0 };
  }
  
  userLimit.count++;
  return { success: true, remaining: limit - userLimit.count };
}
```

## 🔧 API Client Utilities

### Create a Reusable API Client

```typescript
// src/lib/apiClient.ts
class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
```

### Usage Example

```typescript
// src/lib/services/userService.ts
import { apiClient } from './apiClient';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export class UserService {
  async getUsers(): Promise<User[]> {
    const response = await apiClient.get<{ users: User[] }>('/users');
    return response.users;
  }

  async getUser(id: string): Promise<User> {
    return apiClient.get<User>(`/users/${id}`);
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const response = await apiClient.post<{ user: User }>('/users', userData);
    return response.user;
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const response = await apiClient.put<{ user: User }>(`/users/${id}`, userData);
    return response.user;
  }

  async deleteUser(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  }
}

export const userService = new UserService();
```

## 🚀 Best Practices

### 1. Error Handling
- Always handle API errors gracefully
- Provide meaningful error messages
- Log errors for debugging
- Implement retry logic for transient failures

### 2. Security
- Validate all input data
- Implement proper authentication
- Use HTTPS in production
- Sanitize user inputs

### 3. Performance
- Implement caching where appropriate
- Use pagination for large datasets
- Optimize API responses
- Consider using React Query or SWR for data fetching

### 4. Testing
- Write unit tests for API functions
- Test error scenarios
- Mock external API calls
- Use integration tests for API endpoints

## 🔗 Related Documentation

- [Environment Setup](./environment-setup.md) - API keys and configuration
- [MVP Blocks Components](./mvp-blocks-components.md) - Components that use these APIs
- [Mock Data Creation](./mock-data-creation.md) - Replace with real API data

## 🆘 Troubleshooting

### Common Issues

#### Authentication Errors
- Check Firebase configuration
- Verify API keys are set correctly
- Ensure tokens are being passed properly

#### API Rate Limits
- Implement proper rate limiting
- Add retry logic with exponential backoff
- Monitor API usage

#### CORS Issues
- Configure CORS headers properly
- Check allowed origins
- Verify preflight requests

### Getting Help

1. Check the browser console for error messages
2. Verify your environment variables
3. Test API endpoints directly
4. Review Firebase and Gemini documentation

---

**Next Steps**: Check out the [Project Structure](./project-structure.md) guide to understand how all these pieces fit together!
