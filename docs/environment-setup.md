# Environment Setup Guide

This guide will walk you through setting up your environment variables and understanding why they're crucial for your Starter Kit application.

## 🎯 Why Environment Variables Matter

Environment variables are essential for:

- **Security**: Keep sensitive data like API keys out of your source code
- **Flexibility**: Different configurations for development, staging, and production
- **Team Collaboration**: Each developer can have their own API keys and settings
- **Deployment**: Easy configuration management across different environments

## 📋 Required Environment Variables

Your Starter Kit requires the following environment variables:

### Firebase Configuration
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_SENDER_ID=your_sender_id
NEXT_PUBLIC_APP_ID=your_app_id
NEXT_PUBLIC_MEASUREMENT_ID=your_measurement_id
```

### Google Gemini AI
```env
GEMNI_API_KEY=your_gemini_api_key
```

## 🚀 Step-by-Step Setup

### 1. Copy the Example File

```bash
cp example.env .env.local
```

**Note**: We use `.env.local` instead of `.env` because:
- `.env.local` is automatically ignored by Git
- It takes precedence over `.env` files
- It's the recommended practice for Next.js applications

### 2. Firebase Setup

#### Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name
4. Follow the setup wizard

#### Get Your Firebase Configuration

1. In your Firebase project, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click **Web** icon (`</>`) to add a web app
4. Register your app with a nickname
5. Copy the configuration values from the `firebaseConfig` object

#### Configure Firebase Authentication

1. In Firebase Console, go to **Authentication**
2. Click **Get started**
3. Go to **Sign-in method** tab
4. Enable **Google** sign-in provider
5. Add your domain to authorized domains

### 3. Google Gemini AI Setup

#### Get Your Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Click "Get API key"
3. Create a new API key
4. Copy the key to your `.env.local` file

## 🔧 Configuration Details

### Firebase Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key for web apps | `AIzaSyC...` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Domain for Firebase Auth | `myapp-123.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Unique Firebase project identifier | `myapp-123` |
| `NEXT_PUBLIC_STORAGE_BUCKET` | Cloud Storage bucket name | `myapp-123.appspot.com` |
| `NEXT_PUBLIC_SENDER_ID` | Firebase Cloud Messaging sender ID | `123456789` |
| `NEXT_PUBLIC_APP_ID` | Firebase app identifier | `1:123:web:abc123` |
| `NEXT_PUBLIC_MEASUREMENT_ID` | Google Analytics measurement ID | `G-XXXXXXXXXX` |

### Why `NEXT_PUBLIC_` Prefix?

The `NEXT_PUBLIC_` prefix makes these variables available in the browser. This is necessary for:
- Firebase client-side initialization
- Authentication flows
- Real-time features

**Security Note**: Variables with `NEXT_PUBLIC_` are exposed to the browser. Only use this prefix for variables that are safe to be public.

## ✅ Verification

### Test Your Setup

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Check the console** for any Firebase initialization errors

3. **Test authentication** by visiting `/login` and trying Google sign-in

4. **Test AI integration** by using the Gemini API endpoint

### Common Issues and Solutions

#### Firebase Configuration Error
```
Error: Firebase: No Firebase App '[DEFAULT]' has been created
```
**Solution**: Check that all Firebase environment variables are set correctly.

#### Authentication Domain Error
```
Error: This domain is not authorized
```
**Solution**: Add your domain to Firebase Auth authorized domains.

#### Gemini API Error
```
Error: Missing GEMINI_API_KEY
```
**Solution**: Verify your `GEMNI_API_KEY` is set correctly (note the typo in the variable name).

## 🔒 Security Best Practices

### 1. Never Commit Environment Files
Add these to your `.gitignore`:
```
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### 2. Use Different Keys for Different Environments
- Development: Use test Firebase project
- Production: Use production Firebase project
- Staging: Use staging Firebase project

### 3. Rotate Keys Regularly
- Update API keys periodically
- Revoke old keys when no longer needed

### 4. Monitor Usage
- Check Firebase usage in the console
- Monitor Gemini API usage and costs

## 🌍 Environment-Specific Configuration

### Development
```env
# .env.local (for local development)
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myapp-dev
GEMNI_API_KEY=your_dev_gemini_key
```

### Production
```env
# Set these in your hosting platform (Vercel, Netlify, etc.)
NEXT_PUBLIC_FIREBASE_PROJECT_ID=myapp-prod
GEMNI_API_KEY=your_prod_gemini_key
```

## 📚 Related Documentation

- [MVP Blocks Components](./mvp-blocks-components.md) - Components that use these configurations
- [API Integration](./api-integration.md) - How the APIs are used in the application
- [Deployment Guide](./deployment.md) - Setting up environment variables for production

## 🆘 Troubleshooting

### Still Having Issues?

1. **Double-check your `.env.local` file** - Make sure there are no extra spaces or quotes
2. **Restart your development server** after making changes
3. **Check the browser console** for detailed error messages
4. **Verify Firebase project settings** match your environment variables

### Getting Help

If you're still stuck:
1. Check the [Firebase Documentation](https://firebase.google.com/docs/web/setup)
2. Review [Google AI Studio Documentation](https://ai.google.dev/docs)
3. Open an issue in the repository with your error details

---

**Next Steps**: Once your environment is set up, check out [MVP Blocks Components](./mvp-blocks-components.md) to start building your application!
