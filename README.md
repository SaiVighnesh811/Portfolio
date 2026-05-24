# Portfolio - Sai Vighnesh Pasupuleti ⚡️

A modern, responsive, and data-driven portfolio website built with React and Node.js. This portfolio showcases my projects, skills, and professional journey.

## ✨ Features
- **Personalized Branding:** Custom theme and name on browser tab.
- **Projects Section:** Showcases key projects like Chat Translator, Restaurant Automation, and Anti-Cheating System.
- **Achievements & Certifications:** Verified NPTEL certifications with direct Google Drive view links.
- **Dynamic Content:** Integrated with MongoDB for project detail management.
- **Responsive Design:** Optimized for all screen sizes.
- **Resume Access:** Quick view/download links for professional resume.

## 🛠️ Built With
- **Frontend:** React.js, SCSS, Framer Motion (react-reveal)
- **Backend:** Node.js, Express (for data handling)
- **Database:** MongoDB Atlas (Portfolio database)
- **APIs:** Flask, Socket.io (used in featured projects)

## 📦 Local Deployment

Follow these steps to get your portfolio up and running on your local machine:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SaiVighnesh811/Portfolio.git
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Setup Environment Variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGO_URI="your_mongodb_connection_string"
   ```
4. **Sync Project Data with MongoDB:**
   Run the following script to save your project details to your database:
   ```bash
   node saveToMongo.js
   ```
5. **Start Development Server:**
   ```bash
   npm start
   ```
   The site will open at `http://localhost:3000`.

## 🚀 Hosting & Deployment

To make your portfolio live for the world to see, you can use these common methods:

### Option 1: GitHub Pages (Recommended)
1. **Configure Package.json:**
   Ensure the `homepage` field in `package.json` reflects your GitHub repository URL:
   `"homepage": "https://SaiVighnesh811.github.io/Portfolio"`
2. **Install gh-pages:**
   (Already included in dependencies)
3. **Deploy:**
   Run the following command:
   ```bash
   npm run deploy
   ```
   This will build the project and push it to the `gh-pages` branch.

### Option 2: Netlify / Vercel
1. Connect your GitHub account to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Select the `Portfolio` repository.
3. Use the following build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`
4. Add your `MONGO_URI` in the dashboard's "Environment Variables" section.

---
Created by [Sai Vighnesh Pasupuleti](https://github.com/SaiVighnesh811)
