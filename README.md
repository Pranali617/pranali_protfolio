<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e4780bd0-bdad-4c3e-8977-16d1c6866a05

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GROQ_API_KEY` in [.env](.env) to your Groq API key (get it from https://console.groq.com/keys)
3. Run the app:
   `npm run dev`

## Deploy to Vercel

**Prerequisites:** Vercel account, Gmail app password

### 1. Set up Gmail App Password
1. Go to Google Account settings > Security
2. Enable 2-factor authentication
3. Generate an App Password for "Mail"
4. Use this app password as `SMTP_PASS` in your environment variables

### 2. Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Login to Vercel: `vercel login`
3. Deploy: `vercel`
4. Set environment variables in Vercel dashboard:
   - `GROQ_API_KEY` - Your Groq API key
   - `CONTACT_EMAIL` - Your email address
   - `SMTP_HOST` - smtp.gmail.com
   - `SMTP_PORT` - 587
   - `SMTP_USER` - Your Gmail address
   - `SMTP_PASS` - Your Gmail app password
   - `FROM_EMAIL` - Your Gmail address
   - `SMTP_SECURE` - false

### 3. Update your domain (optional)
- In Vercel dashboard, go to your project settings
- Add a custom domain if desired

Your portfolio will be live at `https://your-project-name.vercel.app` with working contact form and AI assistant!
