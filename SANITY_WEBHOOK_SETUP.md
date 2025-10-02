# Setting Up Sanity Webhooks for Instant Production Updates

## Overview
This guide explains how to configure Sanity CMS webhooks to automatically trigger revalidation of your Next.js production site when content is updated.

## Steps to Configure Webhooks

### 1. Access Your Sanity Project Dashboard
1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project: **oahukiqv**
3. Navigate to **API** → **Webhooks**

### 2. Create a New Webhook
Click **"Create webhook"** and configure:

**Basic Settings:**
- **Name:** `MAVA Site Production Revalidation`
- **URL:** `https://your-production-domain.com/api/revalidate?token=mava-revalidate-2024-secure-token`
- **Method:** `POST`

**Trigger Configuration:**
- **Trigger on:** Select all these options:
  - ✅ Create
  - ✅ Update  
  - ✅ Delete
- **Filter:** Leave empty to trigger on all document types
- **Include drafts:** ❌ No (unchecked)

**Headers (Optional but Recommended):**
```
Content-Type: application/json
User-Agent: Sanity-Webhook
```

### 3. Environment Variables
Ensure your production environment has these variables:

```env
SANITY_REVALIDATE_SECRET=mava-revalidate-2024-secure-token
NEXT_PUBLIC_SANITY_PROJECT_ID=oahukiqv
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Test the Webhook

#### Option A: Test via Sanity Studio
1. Make a small change to any content in your Sanity Studio
2. Publish the change
3. Check your production site after 10-30 seconds

#### Option B: Manual Test
Send a test request to your revalidation endpoint:
```bash
curl -X POST "https://your-domain.com/api/revalidate?token=mava-revalidate-2024-secure-token" \
  -H "Content-Type: application/json" \
  -d '{"_type": "heroSection"}'
```

## How It Works

1. **Content Update:** When you update content in Sanity CMS and publish
2. **Webhook Trigger:** Sanity automatically sends a POST request to your `/api/revalidate` endpoint
3. **Smart Revalidation:** The API route identifies the content type and revalidates only the affected pages:
   - `heroSection`, `brands` → Revalidates home page (`/`)
   - `whoWeAre`, `servicesSection` → Revalidates about page (`/about-us`)
   - `shapingLives`, `workshopSection` → Revalidates workshop page (`/workshops`)
   - And so on...
4. **Fresh Content:** Next.js regenerates the static pages with fresh content
5. **Immediate Updates:** Changes appear on your production site within seconds

## Troubleshooting

### Webhook Not Firing
- Check webhook URL is correct and accessible
- Verify the secret token matches your environment variable
- Check Sanity webhook logs for errors

### Changes Still Not Appearing
1. Check your deployment platform's logs for revalidation API calls
2. Verify environment variables are set in production
3. Ensure your production build includes the latest code
4. Test the revalidation endpoint manually

### Multiple Environments
For staging/development environments, create separate webhooks:
- **Staging:** `https://staging.your-domain.com/api/revalidate?token=staging-token`
- **Development:** Use local development server for testing

## Security Notes
- Keep your `SANITY_REVALIDATE_SECRET` secure and unique
- Consider using different secrets for different environments
- The webhook endpoint validates the token before processing requests
- Invalid requests return 401 Unauthorized

## Performance Benefits
- **Instant Updates:** Content changes appear immediately instead of waiting up to 60 seconds
- **Efficient Caching:** Only affected pages are revalidated, preserving performance
- **Selective Revalidation:** Different content types trigger different page updates
- **Reduced Server Load:** On-demand revalidation is more efficient than frequent rebuilds

This setup ensures your production site always shows the latest content from Sanity CMS while maintaining optimal performance through smart caching strategies.