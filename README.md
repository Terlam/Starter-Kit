# 🚀 MVP Starter Kit

Build your MVP in a day with this pre-configured Next.js + MVP Blocks starter kit.  
This repo is designed for hackathons and rapid prototyping — especially for the Black CS Success Summit Hackathon.

We’ve set up all the boring stuff so you can focus on your project.

---

## ✨ What’s Inside

- **Next.js** – React framework for web apps
- **TypeScript** – safer JavaScript
- **Shadcn/UI** – modern UI component library
- **Framer Motion** – animations made easy
- **Prebuilt landing page template with flashy UI**
- **API Data** – Example data in [`src/app/dashboard/data.json`](src/app/dashboard/data.json) for easy prototyping

---

## 🛠️ Getting Started

### 1. Clone the Repo

Open your terminal and run:

```sh
git clone https://github.com/YOUR_ORG/Starter-kit.git
cd mvp-starter-kit
```

### 2. Install Node.js (if you don’t have it)

- Go to [nodejs.org](https://nodejs.org/)
- Download and install the LTS version for your system

### 3. Install Next.js and Dependencies

In your project folder, run:

```sh
npm install
# or
yarn install
```

This will install Next.js and all required packages.

### 4. Run the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your app.

---

## 🧑‍💻 Working With Dummy Data

We’ve included a sample data file at [`src/app/dashboard/data.json`](src/app/dashboard/data.json).  
This is used to display dummy data in the dashboard and other components.

**How it works:**
- The dashboard page automatically loads data from this file.
- You can edit `data.json` to change what appears in tables and charts.

**Example:**

```json
[
  {
    "id": 1,
    "header": "Black Excellence in Tech",
    "type": "Community Impact",
    "status": "Active",
    "target": "10,000",
    "limit": "15,000",
    "reviewer": "Dr. Mark Dean",
    "description": "Supporting Black technologists in building the future of innovation",
    "progress": 85,
    "category": "Education",
    "priority": "High"
  }
]
```

---

## 🏁 Next.js Basics (For Beginners)

### What is Next.js?

Next.js lets you build modern websites using simple building blocks called "components."  
You don’t need to be a coding expert—just follow these steps:

### How to Create a New Page

1. Go to the `src/app` folder.
2. Create a new folder (for example, `about`).
3. Inside, create a file called `page.tsx`.
4. Add this code:

```tsx
export default function AboutPage() {
  return <div>About Us</div>;
}
```

5. Visit [http://localhost:3000/about](http://localhost:3000/about) in your browser.

### How to Use the Dummy Data

- The dashboard automatically pulls from `data.json`.
- To add new data, just edit the file and save.

### How to Customize the UI

- All UI components are in [`src/Components/ui`](src/Components/ui).
- You can change colors, text, and layout by editing these files.

---

## 📚 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Shadcn UI Docs](https://ui.shadcn.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 🏆 Credits

&copy; {currentYear} Built for the Black CS Success Summit Hackathon 🚀

---
## Deploying on Vercel
[Google Slide demonstrating it](https://docs.google.com/presentation/d/1CqtNVXFvsKRtkE7Bi5KmnTfgCEeaGEss3ALGEOFnmuk/edit?usp=sharing)
---
**Need help?**  
Just open an issue or ask in your team chat!
