# 🔐 Complete Credentials Setup Guide

## ✅ Current Status

I've created the `.env` file in `server/.env` with your email already configured!

**What's Already Done:**
- ✅ `.env` file created
- ✅ Email address set: intelligentsystems26@gmail.com
- ✅ Server port configured: 5000
- ✅ Frontend URL configured: http://localhost:5173

**What You Need to Do:**
1. ⚠️ Setup Gmail App Password (5 minutes)
2. ⚠️ Setup MongoDB Database (5 minutes)

---

## 📧 Step 1: Gmail App Password Setup (REQUIRED)

### Why Needed?
Your backend needs to send emails for:
- Contact form confirmations
- Job application confirmations
- Newsletter welcome emails

### Setup Instructions:

#### Option A: Using Your Gmail (intelligentsystems26@gmail.com)

**1. Go to Google Account Security**
```
https://myaccount.google.com/security
```

**2. Enable 2-Step Verification**
- Click "2-Step Verification"
- Follow the setup wizard
- Use your phone number for verification

**3. Generate App Password**
- Go back to Security page
- Click "2-Step Verification"
- Scroll down to "App passwords"
- Click "App passwords"

**4. Create New App Password**
- Select app: "Mail"
- Select device: "Other (Custom name)"
- Enter name: "INTELLIGENT SYSTEMS Website"
- Click "Generate"

**5. Copy the 16-Character Password**
```
Example: abcd efgh ijkl mnop
```

**6. Update .env File**
Open `server/.env` and replace:
```env
EMAIL_PASSWORD=REPLACE_WITH_APP_PASSWORD
```
With:
```env
EMAIL_PASSWORD=abcdefghijklmnop
```
(Remove spaces from the password)

#### Option B: Using a Different Gmail Account

If you want to use a different email:

1. Follow steps above with your email
2. Update `server/.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_FROM=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

---

## 🗄️ Step 2: MongoDB Database Setup

### Option A: MongoDB Atlas (Cloud - RECOMMENDED) ⭐

**Why Recommended?**
- ✅ Free forever (512MB)
- ✅ No installation needed
- ✅ Works from anywhere
- ✅ Automatic backups
- ✅ Easy to use

**Setup Steps:**

**1. Create MongoDB Atlas Account**
```
https://www.mongodb.com/cloud/atlas/register
```
- Sign up with Google (use intelligentsystems26@gmail.com)
- Or create new account

**2. Create a Cluster**
- Click "Build a Database"
- Choose "FREE" tier (M0)
- Select region closest to you
- Click "Create Cluster"
- Wait 3-5 minutes for cluster creation

**3. Create Database User**
- Click "Database Access" (left sidebar)
- Click "Add New Database User"
- Authentication Method: Password
- Username: `intelligentsystems`
- Password: Click "Autogenerate Secure Password" (SAVE THIS!)
- Database User Privileges: "Read and write to any database"
- Click "Add User"

**4. Whitelist Your IP Address**
- Click "Network Access" (left sidebar)
- Click "Add IP Address"
- Click "Allow Access from Anywhere" (for development)
- Click "Confirm"

**5. Get Connection String**
- Click "Database" (left sidebar)
- Click "Connect" on your cluster
- Click "Connect your application"
- Copy the connection string:
```
mongodb+srv://intelligentsystems:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

**6. Update .env File**
Open `server/.env` and replace:
```env
MONGODB_URI=mongodb://localhost:27017/intelligent-systems
```
With:
```env
MONGODB_URI=mongodb+srv://intelligentsystems:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/intelligent-systems?retryWrites=true&w=majority
```
Replace:
- `YOUR_PASSWORD` with the password you saved
- `cluster0.xxxxx` with your actual cluster address

---

### Option B: Local MongoDB (Advanced)

**Only if you want to run MongoDB on your computer**

**1. Download MongoDB**
```
https://www.mongodb.com/try/download/community
```

**2. Install MongoDB**
- Run installer
- Choose "Complete" installation
- Install as Windows Service
- Install MongoDB Compass (GUI tool)

**3. Start MongoDB**
```bash
# MongoDB should start automatically as a service
# Or run manually:
mongod
```

**4. Keep Default .env Setting**
```env
MONGODB_URI=mongodb://localhost:27017/intelligent-systems
```

---

## 🚀 Step 3: Install Backend Dependencies

```bash
cd server
npm install
```

This will install:
- express (web server)
- mongoose (database)
- nodemailer (email)
- multer (file upload)
- And more...

---

## ✅ Step 4: Test Your Setup

### Start the Backend Server

```bash
cd server
npm run dev
```

**Expected Output:**
```
🚀 INTELLIGENT SYSTEMS API running on port 5000
📍 Environment: development
🌐 Frontend URL: http://localhost:5173
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
📊 Database: intelligent-systems
✅ Email server is ready to send messages
```

### Test Health Check

Open browser or use curl:
```
http://localhost:5000/api/health
```

Should return:
```json
{
  "status": "OK",
  "message": "INTELLIGENT SYSTEMS API is running",
  "timestamp": "2025-12-01T..."
}
```

---

## 🧪 Step 5: Test Email Sending

### Test Contact Form

Use Postman or curl:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "company": "Test Company",
    "email": "your-test-email@gmail.com",
    "country": "USA",
    "inquiryType": "demo",
    "industry": "technology",
    "message": "This is a test message"
  }'
```

**Check:**
1. ✅ Response says "success": true
2. ✅ Email received at your-test-email@gmail.com
3. ✅ Email received at intelligentsystems26@gmail.com
4. ✅ Data saved in MongoDB

---

## 🔗 Step 6: Connect Frontend to Backend

The frontend is already running on http://localhost:5173

Now we need to update the forms to use the backend API.

### Update Contact Form

I'll update the ContactPage to use the real API:

**File**: `src/components/pages/ContactPage.tsx`

Add this function before the return statement:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert('Thank you for contacting us! We will get back to you within 24 hours.');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        inquiryType: '',
        industry: '',
        message: '',
        subscribe: false
      });
    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit form. Please make sure the backend server is running.');
  }
};
```

---

## 📋 Checklist

### Gmail Setup
- [ ] Go to Google Account Security
- [ ] Enable 2-Step Verification
- [ ] Generate App Password
- [ ] Copy 16-character password
- [ ] Update `EMAIL_PASSWORD` in `server/.env`

### MongoDB Setup
- [ ] Create MongoDB Atlas account
- [ ] Create free cluster
- [ ] Create database user
- [ ] Whitelist IP address
- [ ] Get connection string
- [ ] Update `MONGODB_URI` in `server/.env`

### Backend Setup
- [ ] Run `cd server && npm install`
- [ ] Start server with `npm run dev`
- [ ] Verify server starts without errors
- [ ] Test health check endpoint
- [ ] Test contact form submission
- [ ] Verify emails are sent
- [ ] Verify data saved in MongoDB

### Frontend Integration
- [ ] Update ContactPage with API call
- [ ] Update CareersPage with API call
- [ ] Update ResourcesPage newsletter with API call
- [ ] Test all forms end-to-end

---

## 🐛 Troubleshooting

### "Email sending error"
**Problem**: Gmail app password not set or incorrect

**Solution**:
1. Verify 2FA is enabled on Gmail
2. Generate new app password
3. Copy password without spaces
4. Update `.env` file
5. Restart server

### "MongoDB connection error"
**Problem**: Connection string incorrect or IP not whitelisted

**Solution**:
1. Check connection string in `.env`
2. Verify password is correct (no special characters issues)
3. Check IP whitelist in MongoDB Atlas
4. Try "Allow Access from Anywhere"
5. Restart server

### "CORS error" in browser
**Problem**: Frontend can't connect to backend

**Solution**:
1. Verify backend is running on port 5000
2. Verify frontend is running on port 5173
3. Check `FRONTEND_URL` in `.env`
4. Restart both servers

### "Port 5000 already in use"
**Problem**: Another app is using port 5000

**Solution**:
1. Change `PORT=5001` in `.env`
2. Update frontend API calls to use port 5001
3. Restart server

---

## 📞 Need Help?

### Quick Support
1. Check server console for error messages
2. Check browser console for errors
3. Verify `.env` file has no typos
4. Make sure both servers are running

### Email Support
- intelligentsystems26@gmail.com

---

## 🎉 Success!

Once everything is set up, you'll have:

✅ **Backend API** running on http://localhost:5000
✅ **Frontend** running on http://localhost:5173
✅ **Database** storing all submissions
✅ **Emails** being sent automatically
✅ **File uploads** working for resumes
✅ **Analytics** tracking user interactions

**Your website will be fully functional!** 🚀

---

## 📝 Quick Reference

### Start Both Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Environment Variables Summary

```env
# Email (REQUIRED)
EMAIL_USER=intelligentsystems26@gmail.com
EMAIL_PASSWORD=your-16-char-app-password

# Database (REQUIRED)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/intelligent-systems

# Other (Already Set)
PORT=5000
FRONTEND_URL=http://localhost:5173
```

---

**Let's get your credentials set up!** 🔐

**Start with Gmail App Password - it only takes 5 minutes!**
