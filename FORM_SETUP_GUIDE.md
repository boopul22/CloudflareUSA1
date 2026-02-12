# 📋 Complete Form Submission Setup Guide

> **Purpose**: This guide helps you add a dual-submission contact form to any website. The form sends leads to both your **Email (via FormSubmit.co)** and **Google Sheets** simultaneously.

---

## 🎯 What This Setup Does

| Feature | Description |
|---------|-------------|
| ✉️ **Email Notifications** | Instant email when someone submits the form |
| 📊 **Google Sheets Tracking** | All leads automatically saved to a spreadsheet |
| 🛡️ **Spam Protection** | Honeypot field to block bots |
| ⚡ **No Backend Required** | 100% serverless, works on any static site |
| 💰 **Completely Free** | Both services have generous free tiers |

---

## 📧 Part 1: Setup FormSubmit.co (Email Notifications)

> **Full docs:** [https://formsubmit.co/documentation](https://formsubmit.co/documentation)

### Step 1: Activate Your FormSubmit Endpoint

FormSubmit.co requires a **one-time email activation** before it will deliver submissions. Use the built-in activation page:

1. Open `public/activate-formsubmit.html` in your browser (or visit it on your deployed site)
2. Click **"Activate Now"** — this sends a test submission to FormSubmit.co
3. Check the inbox of `autoclaimfiling@gmail.com` for a confirmation email from FormSubmit.co
4. **Click the activation link** in that email to finalize setup

> **Important:** The endpoint will NOT work until you complete this activation step.

### Step 2: Set Your Environment Variable

Add the AJAX endpoint to your `.env.local`:
```
VITE_FORMSUBMIT_URL=https://formsubmit.co/ajax/autoclaimfiling@gmail.com
VITE_FORMSUBMIT_CC=immaculatemedia2018@gmail.com
```

You can also use the random hash FormSubmit provides for email privacy:
```
VITE_FORMSUBMIT_URL=https://formsubmit.co/ajax/YOUR_RANDOM_HASH
```

### Step 3: FormSubmit Features Used

The contact form uses these FormSubmit.co features (configured as hidden fields in the AJAX request):

| Field | Value | Purpose |
|-------|-------|---------|
| `_subject` | Dynamic (lead name + state) | Custom email subject line |
| `_template` | `table` | Clean table-formatted email layout |
| `_replyto` | User's email | Reply directly to the lead |
| `_autoresponse` | Custom message | Automatic confirmation sent to user |
| `_honey` | Empty (hidden) | Honeypot spam protection |
| `_cc` | `immaculatemedia2018@gmail.com` | CC notifications to additional email |
| `_captcha` | `false` | Disabled reCAPTCHA for seamless AJAX flow |

> **📝 Write your endpoint here:**
> ```
> https://formsubmit.co/ajax/_____________________
> ```

---

## 📊 Part 2: Setup Google Sheets (Lead Tracking)

### Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Website Leads"
4. Add these headers in Row 1:

| A | B | C | D | E |
|---|---|---|---|---|
| Timestamp | Name | Phone | Email | Message |

### Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste this entire script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add timestamp and form data
    sheet.appendRow([
      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
      data.name || '',
      data.phone || '',
      data.email || '',
      data.message || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Form submission endpoint is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### Step 3: Deploy the Script

1. Click **Deploy → New deployment**
2. Click the gear icon ⚙️ → Select **Web app**
3. Configure:
   - **Description**: Form Handler
   - **Execute as**: Me
   - **Who has access**: **Anyone** (Important!)
4. Click **Deploy**
5. **Authorize** when prompted (click through the warnings)
6. Copy the **Web app URL**

> **📝 Write your Google Apps Script URL here:**
> ```
> https://script.google.com/macros/s/_____________________/exec
> ```

---

## 💻 Part 3: The Form Code

### Option A: React/Next.js Component

```tsx
import React, { useState } from 'react';

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // ⚠️ REPLACE THESE WITH YOUR ENDPOINTS
  const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/YOUR_EMAIL_OR_HASH';
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
  const EMAIL_SUBJECT = 'New Lead - Your Site Name';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        message: formState.message
      };

      // Send to both Email and Google Sheets in parallel
      const [emailResponse, sheetsResponse] = await Promise.allSettled([
        // Email notification via FormSubmit.co
        fetch(FORMSUBMIT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _subject: EMAIL_SUBJECT,
            _template: 'table'
          })
        }),
        // Google Sheets lead tracking
        fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
      ]);

      // Check if at least email was sent successfully
      const emailSuccess = emailResponse.status === 'fulfilled' && emailResponse.value.ok;

      if (emailSuccess) {
        setSubmitStatus('success');
        setFormState({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div style={{ padding: '16px', background: '#d4edda', color: '#155724', borderRadius: '8px', marginBottom: '16px' }}>
          ✅ Thank you! We've received your request and will contact you shortly.
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div style={{ padding: '16px', background: '#f8d7da', color: '#721c24', borderRadius: '8px', marginBottom: '16px' }}>
          ❌ Something went wrong. Please try again.
        </div>
      )}

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formState.name}
        onChange={handleChange}
        required
      />
      
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formState.phone}
        onChange={handleChange}
        required
      />
      
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formState.email}
        onChange={handleChange}
        required
      />
      
      <textarea
        name="message"
        placeholder="Your Message"
        value={formState.message}
        onChange={handleChange}
        rows={4}
      />

      {/* Honeypot for Spam Protection */}
      <input type="text" name="_honey" style={{ display: 'none' }} />
      <input type="hidden" name="_captcha" value="false" />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
```

---

### Option B: Plain HTML + JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <title>Contact Form</title>
  <style>
    .form-container {
      max-width: 500px;
      margin: 40px auto;
      padding: 30px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    input, textarea {
      width: 100%;
      padding: 12px;
      margin-bottom: 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: 14px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover { background: #0056b3; }
    button:disabled { background: #ccc; cursor: not-allowed; }
    .success { padding: 16px; background: #d4edda; color: #155724; border-radius: 8px; margin-bottom: 16px; }
    .error { padding: 16px; background: #f8d7da; color: #721c24; border-radius: 8px; margin-bottom: 16px; }
    .hidden { display: none; }
  </style>
</head>
<body>

<div class="form-container">
  <h2>Contact Us</h2>
  
  <div id="successMessage" class="success hidden">
    ✅ Thank you! We've received your request and will contact you shortly.
  </div>
  
  <div id="errorMessage" class="error hidden">
    ❌ Something went wrong. Please try again.
  </div>

  <form id="contactForm">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="tel" name="phone" placeholder="Phone Number" required />
    <input type="email" name="email" placeholder="Email Address" required />
    <textarea name="message" placeholder="Your Message" rows="4"></textarea>
    
    <!-- Honeypot for Spam Protection -->
    <input type="text" name="_honey" style="display: none" />
    
    <button type="submit" id="submitBtn">Submit</button>
  </form>
</div>

<script>
// ⚠️ REPLACE THESE WITH YOUR ENDPOINTS
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/YOUR_EMAIL_OR_HASH';
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const EMAIL_SUBJECT = 'New Lead - Your Site Name';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('successMessage');
  const errorMsg = document.getElementById('errorMessage');
  
  // Hide previous messages
  successMsg.classList.add('hidden');
  errorMsg.classList.add('hidden');
  
  // Disable button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  
  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    message: form.message.value
  };
  
  try {
    const [emailResponse, sheetsResponse] = await Promise.allSettled([
      // Email notification
      fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: EMAIL_SUBJECT,
          _template: 'table'
        })
      }),
      // Google Sheets
      fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
    ]);
    
    const emailSuccess = emailResponse.status === 'fulfilled' && emailResponse.value.ok;
    
    if (emailSuccess) {
      successMsg.classList.remove('hidden');
      form.reset();
    } else {
      errorMsg.classList.remove('hidden');
    }
  } catch (error) {
    errorMsg.classList.remove('hidden');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';
  }
});
</script>

</body>
</html>
```

---

## ✅ Part 4: Configuration Checklist

Before going live, make sure you've completed:

- [ ] **Activated FormSubmit.co endpoint** via `public/activate-formsubmit.html` (one-time)
- [ ] Clicked the activation link in the confirmation email from FormSubmit.co
- [ ] Set `VITE_FORMSUBMIT_URL` in `.env.local`
- [ ] Created Google Sheet with correct headers
- [ ] Created and deployed Google Apps Script
- [ ] Set `VITE_GOOGLE_SHEET_URL` in `.env.local`
- [ ] Tested form submission (check **both** email AND spreadsheet)

---

## 🔧 Troubleshooting

### Form submits but no email received?
- Check spam/junk folder
- Verify FormSubmit.co email is activated
- Make sure you're using the correct endpoint

### Form submits but Google Sheet is empty?
- Make sure the script is deployed as "Anyone" can access
- Check that column headers match the field names
- Open Apps Script → Executions to see error logs

### CORS errors in console?
- For Google Sheets, `mode: 'no-cors'` is required
- This is normal - the data still goes through

---

## 📝 Quick Reference - Your Endpoints

| Service | Env Variable | Your URL |
|---------|-------------|----------|
| FormSubmit.co | `VITE_FORMSUBMIT_URL` | `https://formsubmit.co/ajax/autoclaimfiling@gmail.com` |
| FormSubmit CC | `VITE_FORMSUBMIT_CC` | `immaculatemedia2018@gmail.com` |
| Google Sheets | `VITE_GOOGLE_SHEET_URL` | `https://script.google.com/macros/s/_______________/exec` |
| Activation Page | — | `public/activate-formsubmit.html` |
| FormSubmit Docs | — | `https://formsubmit.co/documentation` |

---

## 💡 Tips

1. **Test First**: Always test with a dummy submission before going live
2. **Check Spam**: FormSubmit emails might go to spam initially
3. **Monitor Sheets**: Google Sheets updates in real-time - great for monitoring
4. **Mobile Friendly**: Both code options work on mobile devices
5. **No Limits**: FormSubmit has 50 submissions/month free, Google Sheets is unlimited

---

**Created for quick deployment on any website. Happy lead generation! 🚀**
