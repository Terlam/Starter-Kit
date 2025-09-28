# Mock Data Creation Guide

This guide covers how to create, manage, and use mock data for development and testing in your Starter Kit application.

## 🎯 Why Mock Data Matters

Mock data is essential for:

- **Development**: Test your components without connecting to real APIs
- **Design**: Show realistic content during UI development
- **Testing**: Ensure consistent test scenarios
- **Demonstration**: Showcase your application with sample data
- **Offline Development**: Work without internet connectivity

## 📁 Current Mock Data Structure

Your Starter Kit includes a basic mock data structure in `public/data/data.json`:

```json
{
  "users": [
    {
      "info": "//This is mock data. Add more data as needed for testing.",
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@example.com"
    }
  ],
  "posts": [
    {
      "id": 101,
      "title": "Sample Post",
      "content": "This is example content."
    }
  ]
}
```

## 🛠 Creating Comprehensive Mock Data

### 1. Enhanced User Data

Let's expand the user data to be more realistic:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "avatar": "/images/avatar.jpg",
      "role": "admin",
      "status": "active",
      "createdAt": "2024-01-15T10:30:00Z",
      "lastLogin": "2024-01-20T14:22:00Z",
      "profile": {
        "bio": "Full-stack developer passionate about React and Node.js",
        "location": "San Francisco, CA",
        "website": "https://alicejohnson.dev",
        "social": {
          "twitter": "@alicejohnson",
          "linkedin": "alice-johnson-dev",
          "github": "alicejohnson"
        }
      },
      "stats": {
        "posts": 45,
        "followers": 1234,
        "following": 567
      }
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "avatar": "/images/avatar2.jpg",
      "role": "user",
      "status": "active",
      "createdAt": "2024-01-18T09:15:00Z",
      "lastLogin": "2024-01-20T16:45:00Z",
      "profile": {
        "bio": "UI/UX Designer with 5 years of experience",
        "location": "New York, NY",
        "website": "https://bobsmithdesign.com",
        "social": {
          "twitter": "@bobsmithdesign",
          "dribbble": "bobsmith",
          "behance": "bobsmith"
        }
      },
      "stats": {
        "posts": 23,
        "followers": 890,
        "following": 234
      }
    },
    {
      "id": 3,
      "name": "Carol Davis",
      "email": "carol.davis@example.com",
      "avatar": "/images/avatar3.jpg",
      "role": "moderator",
      "status": "inactive",
      "createdAt": "2024-01-10T14:20:00Z",
      "lastLogin": "2024-01-18T11:30:00Z",
      "profile": {
        "bio": "Product Manager at a tech startup",
        "location": "Austin, TX",
        "website": null,
        "social": {
          "linkedin": "carol-davis-pm"
        }
      },
      "stats": {
        "posts": 12,
        "followers": 456,
        "following": 123
      }
    }
  ]
}
```

### 2. Enhanced Posts Data

```json
{
  "posts": [
    {
      "id": 101,
      "title": "Getting Started with Next.js 15",
      "content": "Next.js 15 introduces some exciting new features including improved performance and better developer experience. In this post, we'll explore the key changes and how to migrate your existing applications.",
      "excerpt": "Explore the new features in Next.js 15 and learn how to upgrade your applications.",
      "authorId": 1,
      "authorName": "Alice Johnson",
      "authorAvatar": "/images/avatar.jpg",
      "category": "tutorial",
      "tags": ["nextjs", "react", "javascript", "web-development"],
      "status": "published",
      "featured": true,
      "createdAt": "2024-01-20T10:00:00Z",
      "updatedAt": "2024-01-20T10:00:00Z",
      "publishedAt": "2024-01-20T10:00:00Z",
      "stats": {
        "views": 1250,
        "likes": 89,
        "comments": 23,
        "shares": 12
      },
      "image": "/images/nextjs-banner.jpg"
    },
    {
      "id": 102,
      "title": "Design Systems in 2024",
      "content": "Design systems have evolved significantly over the past few years. This comprehensive guide covers the latest trends, tools, and best practices for building scalable design systems.",
      "excerpt": "Learn about the latest trends and tools for building effective design systems.",
      "authorId": 2,
      "authorName": "Bob Smith",
      "authorAvatar": "/images/avatar2.jpg",
      "category": "design",
      "tags": ["design-systems", "ui-ux", "figma", "design-tools"],
      "status": "published",
      "featured": false,
      "createdAt": "2024-01-19T14:30:00Z",
      "updatedAt": "2024-01-19T14:30:00Z",
      "publishedAt": "2024-01-19T14:30:00Z",
      "stats": {
        "views": 890,
        "likes": 67,
        "comments": 15,
        "shares": 8
      },
      "image": "/images/design-systems.jpg"
    },
    {
      "id": 103,
      "title": "Product Management Best Practices",
      "content": "Effective product management requires a combination of technical knowledge, business acumen, and strong communication skills. Here are the key practices that separate good PMs from great ones.",
      "excerpt": "Essential practices for successful product management in tech companies.",
      "authorId": 3,
      "authorName": "Carol Davis",
      "authorAvatar": "/images/avatar3.jpg",
      "category": "business",
      "tags": ["product-management", "leadership", "strategy", "business"],
      "status": "draft",
      "featured": false,
      "createdAt": "2024-01-18T16:45:00Z",
      "updatedAt": "2024-01-18T16:45:00Z",
      "publishedAt": null,
      "stats": {
        "views": 0,
        "likes": 0,
        "comments": 0,
        "shares": 0
      },
      "image": null
    }
  ]
}
```

### 3. Additional Data Types

Add more data structures as needed for your application:

```json
{
  "categories": [
    {
      "id": 1,
      "name": "Technology",
      "slug": "technology",
      "description": "Latest tech news, tutorials, and insights",
      "color": "#2B6CB0",
      "postCount": 45
    },
    {
      "id": 2,
      "name": "Design",
      "slug": "design",
      "description": "UI/UX design, tools, and inspiration",
      "color": "#38A169",
      "postCount": 23
    },
    {
      "id": 3,
      "name": "Business",
      "slug": "business",
      "description": "Entrepreneurship, strategy, and growth",
      "color": "#D69E2E",
      "postCount": 12
    }
  ],
  "comments": [
    {
      "id": 1001,
      "postId": 101,
      "authorId": 2,
      "authorName": "Bob Smith",
      "authorAvatar": "/images/avatar2.jpg",
      "content": "Great post! The new features in Next.js 15 look really promising.",
      "createdAt": "2024-01-20T11:30:00Z",
      "likes": 5,
      "replies": [
        {
          "id": 1002,
          "commentId": 1001,
          "authorId": 1,
          "authorName": "Alice Johnson",
          "authorAvatar": "/images/avatar.jpg",
          "content": "Thanks Bob! I'm excited to see how the community adopts these features.",
          "createdAt": "2024-01-20T12:00:00Z",
          "likes": 2
        }
      ]
    }
  ],
  "analytics": {
    "totalUsers": 1247,
    "activeUsers": 892,
    "totalPosts": 80,
    "totalViews": 45600,
    "totalComments": 234,
    "growth": {
      "users": "+12.5%",
      "posts": "+8.3%",
      "views": "+15.2%"
    }
  }
}
```

## 🔧 Working with Mock Data

### 1. Loading Data in Components

Create utility functions to load mock data:

```typescript
// src/lib/mockData.ts
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive';
  createdAt: string;
  lastLogin: string;
  profile: {
    bio: string;
    location: string;
    website?: string;
    social: Record<string, string>;
  };
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
}

export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  authorId: number;
  authorName: string;
  authorAvatar: string;
  category: string;
  tags: string[];
  status: 'published' | 'draft';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  stats: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
  };
  image?: string;
}

export async function loadMockData(): Promise<{
  users: User[];
  posts: Post[];
  categories: any[];
  comments: any[];
  analytics: any;
}> {
  try {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading mock data:', error);
    return {
      users: [],
      posts: [],
      categories: [],
      comments: [],
      analytics: {}
    };
  }
}

export async function getUsers(): Promise<User[]> {
  const data = await loadMockData();
  return data.users;
}

export async function getPosts(): Promise<Post[]> {
  const data = await loadMockData();
  return data.posts;
}

export async function getUserById(id: number): Promise<User | null> {
  const users = await getUsers();
  return users.find(user => user.id === id) || null;
}

export async function getPostsByUser(userId: number): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter(post => post.authorId === userId);
}
```

### 2. Using Mock Data in React Components

```tsx
// src/components/UserList.tsx
'use client';
import { useState, useEffect } from 'react';
import { getUsers, User } from '@/lib/mockData';

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error('Error loading users:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <div key={user.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <img
              src={user.avatar || '/images/default-avatar.jpg'}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                user.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {user.status}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-700">{user.profile.bio}</p>
            <div className="flex justify-between mt-4 text-sm">
              <span>{user.stats.posts} posts</span>
              <span>{user.stats.followers} followers</span>
              <span>{user.stats.following} following</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 3. Creating Data Generators

For larger datasets, create data generators:

```typescript
// src/lib/dataGenerators.ts
import { faker } from '@faker-js/faker';

export function generateMockUsers(count: number): User[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    role: faker.helpers.arrayElement(['admin', 'user', 'moderator']),
    status: faker.helpers.arrayElement(['active', 'inactive']),
    createdAt: faker.date.past().toISOString(),
    lastLogin: faker.date.recent().toISOString(),
    profile: {
      bio: faker.person.bio(),
      location: `${faker.location.city()}, ${faker.location.state()}`,
      website: faker.internet.url(),
      social: {
        twitter: `@${faker.internet.userName()}`,
        linkedin: faker.internet.userName(),
        github: faker.internet.userName()
      }
    },
    stats: {
      posts: faker.number.int({ min: 0, max: 100 }),
      followers: faker.number.int({ min: 0, max: 5000 }),
      following: faker.number.int({ min: 0, max: 1000 })
    }
  }));
}

export function generateMockPosts(count: number, users: User[]): Post[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    excerpt: faker.lorem.sentence(),
    authorId: faker.helpers.arrayElement(users).id,
    authorName: faker.person.fullName(),
    authorAvatar: faker.image.avatar(),
    category: faker.helpers.arrayElement(['technology', 'design', 'business']),
    tags: faker.helpers.arrayElements(['react', 'nextjs', 'typescript', 'design', 'business'], { min: 1, max: 4 }),
    status: faker.helpers.arrayElement(['published', 'draft']),
    featured: faker.datatype.boolean(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    publishedAt: faker.helpers.maybe(() => faker.date.recent().toISOString(), { probability: 0.8 }),
    stats: {
      views: faker.number.int({ min: 0, max: 10000 }),
      likes: faker.number.int({ min: 0, max: 500 }),
      comments: faker.number.int({ min: 0, max: 100 }),
      shares: faker.number.int({ min: 0, max: 50 })
    },
    image: faker.helpers.maybe(() => faker.image.url(), { probability: 0.7 })
  }));
}
```

## 📊 Dashboard Mock Data

For the admin dashboard, create specific mock data:

```json
{
  "dashboard": {
    "stats": [
      {
        "title": "Total Users",
        "value": "12,345",
        "change": "+12%",
        "changeType": "positive",
        "icon": "Users",
        "color": "text-blue-500",
        "bgColor": "bg-blue-500/10"
      },
      {
        "title": "Revenue",
        "value": "$45,678",
        "change": "+8.2%",
        "changeType": "positive",
        "icon": "DollarSign",
        "color": "text-green-500",
        "bgColor": "bg-green-500/10"
      },
      {
        "title": "Active Sessions",
        "value": "2,456",
        "change": "+15%",
        "changeType": "positive",
        "icon": "Activity",
        "color": "text-purple-500",
        "bgColor": "bg-purple-500/10"
      },
      {
        "title": "Page Views",
        "value": "34,567",
        "change": "-2.4%",
        "changeType": "negative",
        "icon": "Eye",
        "color": "text-orange-500",
        "bgColor": "bg-orange-500/10"
      }
    ],
    "recentActivity": [
      {
        "id": 1,
        "type": "user_signup",
        "message": "New user registered",
        "user": "john.doe@example.com",
        "timestamp": "2024-01-20T16:30:00Z"
      },
      {
        "id": 2,
        "type": "post_created",
        "message": "New post published",
        "user": "Alice Johnson",
        "title": "Getting Started with Next.js 15",
        "timestamp": "2024-01-20T15:45:00Z"
      }
    ],
    "revenueData": [
      { "month": "Jan", "revenue": 12000 },
      { "month": "Feb", "revenue": 15000 },
      { "month": "Mar", "revenue": 18000 },
      { "month": "Apr", "revenue": 22000 },
      { "month": "May", "revenue": 25000 },
      { "month": "Jun", "revenue": 28000 }
    ]
  }
}
```

## 🚀 Best Practices

### 1. Data Organization
- Keep related data together
- Use consistent naming conventions
- Include metadata (timestamps, IDs, etc.)

### 2. Realistic Data
- Use realistic names, emails, and content
- Include edge cases (empty fields, long text, etc.)
- Vary data types and formats

### 3. Performance
- Load data asynchronously
- Implement proper loading states
- Cache frequently used data

### 4. Maintenance
- Document your data structure
- Version your mock data
- Keep it updated with your schema changes

## 🔗 Related Documentation

- [MVP Blocks Components](./mvp-blocks-components.md) - Components that display this data
- [API Integration](./api-integration.md) - How to replace mock data with real APIs
- [Environment Setup](./environment-setup.md) - Configuration for data loading

## 🆘 Troubleshooting

### Common Issues

#### Data Not Loading
- Check the file path is correct (`/data/data.json`)
- Verify JSON syntax is valid
- Ensure the file is in the `public` directory

#### Type Errors
- Update TypeScript interfaces to match your data
- Use proper type assertions
- Check for optional vs required fields

#### Performance Issues
- Implement pagination for large datasets
- Use React.memo for expensive components
- Consider lazy loading for heavy data

---

**Next Steps**: Learn how to [integrate real APIs](./api-integration.md) to replace your mock data!
