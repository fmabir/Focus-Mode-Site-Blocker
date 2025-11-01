# Chrome Web Store Publishing Guide for Focus Mode Extension

## Prerequisites

### 1. Create Extension Icons
You need to create icon files (Chrome Web Store requires them):
- **icon16.png** - 16x16 pixels
- **icon48.png** - 48x48 pixels  
- **icon128.png** - 128x128 pixels

**Tools to create icons:**
- Use Canva, Figma, or any image editor
- Design a simple icon representing "Focus Mode" (maybe a lock, eye, or focus symbol)
- Export as PNG with transparent background
- Save them in the `focus-mode-extension` folder

Once you have the icons, update `manifest.json` to include:
```json
"icons": {
  "16": "icon16.png",
  "48": "icon48.png",
  "128": "icon128.png"
}
```

### 2. Add Description to Manifest
The manifest already has a description field, which is good.

### 3. Test Your Extension Thoroughly
- ✅ Test starting/stopping sessions
- ✅ Test blocking websites
- ✅ Test timer countdown
- ✅ Test options page
- ✅ Test blocked page
- ✅ Test on different websites
- ✅ Verify no console errors

## Step-by-Step Publishing Process

### Step 1: Create a Chrome Web Store Developer Account

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Sign in with your Google account
3. Pay the **one-time $5 registration fee** (required for publishing)
   - This is a one-time fee per developer account
   - You can publish unlimited extensions after paying

### Step 2: Prepare Your Extension Package

1. **Remove any unnecessary files** (like this guide, test files, etc.)

2. **Create a ZIP file** of your extension:
   - Select all files in `focus-mode-extension` folder:
     - manifest.json
     - background.js
     - popup.html
     - popup.js
     - options.html
     - options.js
     - blocked.html
     - blocked.js
     - style.css
     - icon16.png, icon48.png, icon128.png (once created)
   - Right-click → "Send to" → "Compressed (zipped) folder"
   - Name it something like `focus-mode-extension-v1.0.zip`

3. **IMPORTANT**: Make sure the ZIP contains files directly (not a folder inside)
   - The structure should be: `manifest.json` at root level when unzipped
   - NOT: `focus-mode-extension/manifest.json`

### Step 3: Upload to Chrome Web Store

1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Click **"New Item"** button
3. Click **"Choose File"** and select your ZIP file
4. Click **"Upload"**
5. Wait for upload and validation (Chrome will check for errors)

### Step 4: Fill Out Store Listing

You'll need to provide:

#### **1. Store Listing Tab:**

- **Name**: "Focus Mode" (already set)
- **Summary** (132 characters max):
  ```
  Block distracting websites and stay focused with timed sessions. Beautiful UI with motivational quotes.
  ```

- **Description** (detailed, up to 132,000 characters):
  ```
  Focus Mode helps you stay productive by blocking distracting websites during your work sessions.

  Features:
  ✨ Block distracting websites - Add any website to your block list
  ⏱️ Timer-based sessions - Set custom session durations
  🎯 Beautiful interface - Modern, polished UI design
  💪 Motivational quotes - Get inspired when visiting blocked sites
  📊 Easy management - Simple interface to add/remove blocked sites
  ⏰ Automatic blocking - Sites are blocked automatically during active sessions
  🚫 Session control - Start and stop focus sessions anytime

  How to use:
  1. Click the extension icon to open the popup
  2. Click "Options" to add websites to your block list
  3. Enter a session duration (in minutes) and click "Start Focus Session"
  4. During the session, any blocked websites will be redirected to a motivational page
  5. Click "End Session" anytime to stop blocking

  Perfect for students, professionals, and anyone looking to improve their focus and productivity.

  Developed by Abir
  ```

- **Category**: Choose "Productivity"
- **Language**: English (United States)

#### **2. Privacy Tab:**
- **Single purpose**: Yes
- **Host permissions**: Explain what you use:
  ```
  This extension uses host permissions to:
  - Check if websites match your block list
  - Redirect blocked websites to the focus page
  
  No data is collected, stored on external servers, or shared with third parties.
  All data (blocked sites list) is stored locally on your device using Chrome's storage API.
  ```

#### **3. Promotional Images (Optional but Recommended):**

Create promotional images:
- **Small promotional tile**: 440x280 pixels (optional)
- **Marquee promotional tile**: 920x680 pixels (optional)
- **Screenshots**: 1280x800 or 640x400 pixels
  - Take 3-5 screenshots of:
    - Popup interface
    - Options page
    - Blocked page with quote
    - Timer in action

#### **4. Additional Information:**
- **Website**: (optional, if you have one)
- **Support email**: Your email address
- **Privacy policy URL**: (optional for simple extensions)

### Step 5: Submit for Review

1. Review all information
2. Check the **"Visibility"** option:
   - **Unlisted**: Only people with the link can install
   - **Public**: Visible in Chrome Web Store search (recommended after testing)

3. Click **"Submit for review"**

### Step 6: Wait for Review

- **Typical review time**: 1-3 business days
- Chrome will email you when:
  - ✅ Extension is approved and published
  - ❌ Extension is rejected (with reasons - fix and resubmit)

### Step 7: After Approval

Once approved:
- Your extension will be live in the Chrome Web Store
- Share your extension link with users
- Monitor reviews and ratings
- Update as needed (upload new ZIP, increment version number)

## Important Notes

### Version Numbers
- Always increment version number when updating (e.g., 1.0 → 1.1)
- Update in `manifest.json` before uploading new ZIP

### Updates
- To update your extension: Go to dashboard → Select extension → Click "Package" → Upload new ZIP
- Users will automatically get updates

### Best Practices
- ✅ Test thoroughly before submitting
- ✅ Provide clear, accurate description
- ✅ Respond to user reviews
- ✅ Update regularly with improvements
- ✅ Respect user privacy (you're already doing this)

## Quick Checklist Before Publishing

- [ ] Create and add icon files (16, 48, 128px)
- [ ] Test all functionality thoroughly
- [ ] Create ZIP file with all extension files
- [ ] Pay $5 developer registration fee
- [ ] Write compelling store description
- [ ] Take screenshots for store listing
- [ ] Prepare privacy policy explanation
- [ ] Submit for review
- [ ] Monitor email for review status

## Resources

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/)
- [Store Listing Guidelines](https://developer.chrome.com/docs/webstore/user_data/)

## Support

If you encounter issues during publishing:
- Check Chrome Web Store developer documentation
- Review common rejection reasons
- Ensure manifest.json is valid
- Test extension in Chrome before submitting

Good luck with your publication! 🚀

