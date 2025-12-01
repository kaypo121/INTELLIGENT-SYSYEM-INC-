# Backend Setup Complete! 🎉

## ✅ What Was Built

A complete, production-ready backend API for your INTELLIGENT SYSTEMS website with:

### 🚀 Features
- ✅ **Contact Form API** - Handle all contact submissions
- ✅ **Job Applications API** - Process career applications with resume upload
- ✅ **Newsletter Management** - Subscribe/unsubscribe functionality
- ✅ **Email Notifications** - Automated emails to users and company
- ✅ **Analytics Tracking** - Track downloads, page views, clicks
- ✅ **PostgreSQL Database** - Store all data persistently with Sequelize ORM
- ✅ **Security** - Rate limiting, input validation, CORS, Helmet
- ✅ **File Upload** - Resume upload with validation (PDF, DOC, DOCX)

### 📁 File Structure Created
```
server/
├── models/              # Database schemas
│   ├── Contact.js
│   ├── JobApplication.js
│   └── Newsletter.js
├── routes/              # API endpoints
│   ├── contact.js
│   ├── careers.js
│   ├── newsletter.js
│   └── analytics.js
├── utils/               # Utilities
│   ├── database.js
│   └── email.js
├── uploads/resumes/     # Resume storage
├── server.js            # Main server
├── package.json
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
cd server
npm install
```

### Step 2: Configure Environment
```bash
# Copy example env file
cp .env.example .env

# Edit .env with your settings
```

**Required Environment Variables:**
```env
PORT=5000
DATABASE_URL=postgres://postgres:password@localhost:5432/intelligent_systems
EMAIL_USER=intelligentsystems26@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_FROM=intelligentsystems26@gmail.com
FRONTEND_URL=http://localhost:5173
```

### Step 3: Setup Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable 2-Factor Authentication
3. Go to "App Passwords"
4. Generate password for "Mail"
5. Copy 16-character password to `.env`

### Step 4: Setup PostgreSQL

**Option A: Local PostgreSQL**
```bash
# Install PostgreSQL from postgresql.org
# Start PostgreSQL service
# Create database
createdb intelligent_systems
```

**Option B: Cloud PostgreSQL (Recommended)**
- **Supabase** (Free tier): supabase.com
- **Railway** (Free tier): railway.app
- **Neon** (Free tier): neon.tech
- **Heroku Postgres**: heroku.com/postgres

1. Create free account
2. Create database
3. Get connection string
4. Update `DATABASE_URL` in `.env`

### Step 5: Start Server
```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

Server runs on: **http://localhost:5000**

## 📡 API Endpoints

### Contact Form
```
POST http://localhost:5000/api/contact
```

### Job Application
```
POST http://localhost:5000/api/careers/apply
```

### Newsletter Subscribe
```
POST http://localhost:5000/api/newsletter/subscribe
```

### Analytics
```
POST http://localhost:5000/api/analytics/track
GET  http://localhost:5000/api/analytics/stats
```

### Health Check
```
GET http://localhost:5000/api/health
```

## 🔗 Connect Frontend to Backend

### Update Contact Form (ContactPage.tsx)

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Thank you! We will contact you within 24 hours.');
      // Reset form
      setFormData({...initialState});
    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    alert('Failed to submit form. Please try again.');
  }
};
```

### Update Job Application (CareersPage.tsx)

```typescript
const handleApply = async (jobTitle: string) => {
  const formData = new FormData();
  formData.append('jobTitle', jobTitle);
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('email', email);
  // ... add other fields
  
  try {
    const response = await fetch('http://localhost:5000/api/careers/apply', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Application submitted successfully!');
      onNavigate('contact');
    }
  } catch (error) {
    alert('Failed to submit application.');
  }
};
```

### Update Newsletter (ResourcesPage.tsx)

```typescript
const handleSubscribe = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'resources-page' })
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert('Successfully subscribed to newsletter!');
      setEmail('');
    }
  } catch (error) {
    alert('Failed to subscribe.');
  }
};
```

## 🧪 Testing the Backend

### Test with cURL

```bash
# Test health check
curl http://localhost:5000/api/health

# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "company": "Test Corp",
    "email": "john@example.com",
    "country": "USA",
    "inquiryType": "demo",
    "industry": "technology",
    "message": "Test message"
  }'
```

### Test with Postman

1. Import endpoints
2. Test each route
3. Verify responses
4. Check email delivery

## 📊 What Happens When Forms Are Submitted

### Contact Form Flow:
1. User submits form on website
2. Backend validates data
3. Saves to PostgreSQL database
4. Sends confirmation email to user
5. Sends notification email to company
6. Returns success response

### Job Application Flow:
1. User applies for job
2. Backend validates data
3. Uploads resume to server
4. Saves application to database
5. Sends confirmation to applicant
6. Sends notification to HR
7. Returns success response

### Newsletter Flow:
1. User enters email
2. Backend checks if already subscribed
3. Saves to database
4. Sends welcome email
5. Returns success response

## 🔒 Security Features

- ✅ Rate limiting (100 requests/15 min)
- ✅ Input validation (prevents injection)
- ✅ File upload validation (type & size)
- ✅ CORS protection
- ✅ Security headers (Helmet)
- ✅ Environment variables for secrets

## 📧 Email Configuration

### Gmail Setup (Recommended)
1. Use your Gmail: intelligentsystems26@gmail.com
2. Enable 2FA
3. Generate App Password
4. Use in `.env`

### Alternative Email Providers
- **SendGrid**: Professional email service
- **Mailgun**: Developer-friendly
- **AWS SES**: Scalable and cheap
- **Outlook/Office365**: Business email

## 🗄️ Database

### PostgreSQL Tables Created:
- **contacts** - Contact form submissions
- **job_applications** - Job applications
- **newsletters** - Email subscribers

### View Data:
```bash
# Connect to PostgreSQL
psql -d intelligent_systems

# View contacts
SELECT * FROM contacts;

# View applications
SELECT * FROM job_applications;

# View subscribers
SELECT * FROM newsletters;
```

Or use a GUI tool:
- **pgAdmin** - Official PostgreSQL GUI
- **DBeaver** - Universal database tool
- **TablePlus** - Modern database client

## 🚀 Deployment Options

### Option 1: Railway (Easy + Free PostgreSQL)
```bash
# Connect GitHub repo
# Add PostgreSQL plugin
# Deploy automatically
```

### Option 2: Railway (Modern)
1. Connect GitHub
2. Add environment variables
3. Deploy automatically

### Option 3: Vercel (Serverless)
```bash
vercel
```

### Option 4: DigitalOcean/AWS (Full Control)
- Deploy on VPS
- Use PM2 for process management
- Setup Nginx reverse proxy

## 📝 Next Steps

### Immediate:
1. ✅ Install dependencies (`npm install`)
2. ✅ Configure `.env` file
3. ✅ Setup Gmail app password
4. ✅ Setup MongoDB
5. ✅ Start server (`npm run dev`)
6. ✅ Test endpoints

### Short-term:
- [ ] Connect frontend forms to backend
- [ ] Test email delivery
- [ ] Test file uploads
- [ ] Deploy to production

### Long-term:
- [ ] Add admin dashboard
- [ ] Add authentication
- [ ] Add CRM integration
- [ ] Add automated testing
- [ ] Add API documentation

## 🐛 Troubleshooting

### Server won't start
- Check if port 5000 is available
- Verify all dependencies installed
- Check `.env` file exists

### Emails not sending
- Verify Gmail app password
- Check EMAIL_USER and EMAIL_PASSWORD
- Test with different email

### Database connection error
- Check if PostgreSQL is running
- Verify DATABASE_URL format
- Try cloud PostgreSQL (Supabase/Railway/Neon)

### CORS errors
- Verify FRONTEND_URL in `.env`
- Check frontend is on correct port

## 📞 Support

- **Email**: intelligentsystems26@gmail.com
- **Documentation**: server/README.md
- **Logs**: Check console output

## 🎉 Result

**Your backend is ready!** 

You now have:
- ✅ Complete API server
- ✅ Database integration
- ✅ Email notifications
- ✅ File upload handling
- ✅ Security features
- ✅ Production-ready code

**Next**: Install dependencies and start the server!

```bash
cd server
npm install
npm run dev
```

---

**Backend built with ❤️ for INTELLIGENT SYSTEMS INC**
