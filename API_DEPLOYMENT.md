# Environment Variables Required for Deployment

To deploy the Orao Technologies serverless functions on Vercel, you need to set the following environment variables:

## Email Configuration

### GMAIL_USER
- **Description**: Gmail address used for sending emails from contact and SIWES forms
- **Example**: `oraotechnologiesltd@gmail.com`
- **Required**: Yes

### GMAIL_APP_PASSWORD
- **Description**: Gmail App Password for SMTP authentication (not your regular Gmail password)
- **How to generate**: 
  1. Go to Google Account settings
  2. Navigate to Security → 2-Step Verification
  3. Go to App passwords
  4. Generate a new app password for "Mail"
- **Required**: Yes

## Setting Environment Variables on Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Navigate to Settings → Environment Variables
4. Add the following variables:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-generated-app-password
```

## Testing Locally with Vercel CLI

If you want to test locally with Vercel CLI:

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel env pull .env.local` to download environment variables
3. Run `vercel dev` to start local development server

## Endpoints Available After Deployment

- `POST /api/contact` - Contact form submission
- `POST /api/siwes` - SIWES application submission  
- `GET /api/health` - Health check endpoint

All endpoints include CORS headers and proper error handling.