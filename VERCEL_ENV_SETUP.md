# Environment Variables for Vercel Deployment

Add these environment variables in your Vercel project settings:

## Required Variables:

1. **ADMIN_API_KEY**
   - Value: `v4sm-secure-admin-key-2026-change-this`
   - Description: Secret key for admin API authentication
   - **IMPORTANT**: Change this to a strong, random string before deploying!

2. **GOOGLE_SCRIPT_URL**
   - Value: `https://script.google.com/macros/s/AKfycbzUV_owZMDcC2nTCC8J55Ax7mnI6f4pFY8IkKDVMv9ukuYpShCHpYd1cuHIalfZRE70/exec`
   - Description: Your Google Apps Script deployment URL

## How to Add in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable above
4. Redeploy your site

## Generate a Secure API Key:

You can generate a secure random key using:
- Online: https://randomkeygen.com/
- Terminal: `openssl rand -base64 32`
- Node.js: `require('crypto').randomBytes(32).toString('hex')`

**IMPORTANT**: Update the API key in both:
- Vercel environment variables
- Login page code (v4sm-admin/page.jsx, line 18)
