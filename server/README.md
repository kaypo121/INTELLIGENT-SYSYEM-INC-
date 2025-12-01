# INTELLIGENT SYSTEMS Backend API 🚀

Complete backend API for the INTELLIGENT SYSTEMS INC website.

## 📋 Features

- ✅ Contact Form API
- ✅ Job Applications API with Resume Upload
- ✅ Newsletter Subscription Management
- ✅ Email Notifications (Nodemailer)
- ✅ Analytics Tracking
- ✅ PostgreSQL Database Integration (Sequelize ORM)
- ✅ Input Validation
- ✅ Rate Limiting
- ✅ CORS Protection
- ✅ Security Headers (Helmet)
- ✅ File Upload (Multer)
- ✅ Error Handling

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL (Sequelize ORM)
- **Email**: Nodemailer
- **Validation**: Express-Validator
- **Security**: Helmet, CORS, Rate Limiting
- **File Upload**: Multer

## 📦 Installation

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Setup

Create a `.env` file in the `server` directory:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL=postgres://postgres:password@localhost:5432/intelligent_systems

# Email (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=intelligentsystems26@gmail.com
EMAIL_PASSWORD=your-app-specific-password
EMAIL_FROM=intelligentsystems26@gmail.com

# Frontend
FRONTEND_URL=http://localhost:5173
```

### 3. Gmail App Password Setup

1. Go to Google Account Settings
2. Enable 2-Factor Authentication
3. Go to Security → App Passwords
4. Generate new app password for "Mail"
5. Copy the 16-character password to `.env`

### 4. PostgreSQL Setup

**Option A: Local PostgreSQL**
```bash
# Install PostgreSQL from postgresql.org
# Create database
createdb intelligent_systems
```

**Option B: Cloud PostgreSQL (Recommended)**
- **Supabase** (Free): https://supabase.com
- **Railway** (Free): https://railway.app
- **Neon** (Free): https://neon.tech

1. Create account
2. Create database
3. Get connection string
4. Update `DATABASE_URL` in `.env`

**Quick Setup Helper:**
```bash
node setup-postgres.js
```

## 🚀 Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

Server will run on: `http://localhost:5000`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```
Returns server status

### Contact Form
```
POST /api/contact
```
**Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "company": "Tech Corp",
  "email": "john@example.com",
  "phone": "+1234567890",
  "country": "USA",
  "inquiryType": "demo",
  "industry": "technology",
  "message": "Interested in your AI solutions",
  "subscribe": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": "...",
    "email": "john@example.com"
  }
}
```

### Job Applications
```
POST /api/careers/apply
```
**Body (multipart/form-data):**
- `jobTitle`: string (required)
- `firstName`: string (required)
- `lastName`: string (required)
- `email`: string (required)
- `phone`: string
- `resume`: file (PDF, DOC, DOCX - max 5MB)
- `coverLetter`: string
- `linkedIn`: string
- `portfolio`: string

### Newsletter
```
POST /api/newsletter/subscribe
```
**Body:**
```json
{
  "email": "user@example.com",
  "source": "resources-page"
}
```

```
POST /api/newsletter/unsubscribe
```
**Body:**
```json
{
  "email": "user@example.com"
}
```

### Analytics
```
POST /api/analytics/track
```
**Body:**
```json
{
  "event": "download",
  "data": {
    "filename": "whitepaper.pdf"
  }
}
```

```
GET /api/analytics/stats
```
Returns analytics statistics

## 📁 Project Structure

```
server/
├── models/
│   ├── Contact.js          # Contact form schema
│   ├── JobApplication.js   # Job application schema
│   └── Newsletter.js       # Newsletter subscription schema
├── routes/
│   ├── contact.js          # Contact form routes
│   ├── careers.js          # Job application routes
│   ├── newsletter.js       # Newsletter routes
│   └── analytics.js        # Analytics routes
├── utils/
│   ├── database.js         # PostgreSQL connection (Sequelize)
│   └── email.js            # Email sending utility
├── uploads/
│   └── resumes/            # Uploaded resume files
├── server.js               # Main server file
├── package.json
├── .env.example
└── README.md
```

## 🔒 Security Features

### Rate Limiting
- 100 requests per 15 minutes per IP
- Prevents abuse and DDoS attacks

### Input Validation
- All inputs validated with express-validator
- Prevents SQL injection and XSS

### File Upload Security
- File type validation (PDF, DOC, DOCX only)
- File size limit (5MB)
- Unique filenames to prevent overwrites

### CORS
- Configured to only allow frontend URL
- Credentials support enabled

### Helmet
- Security headers automatically set
- Protects against common vulnerabilities

## 📧 Email Templates

### Contact Form Confirmation
Sent to user after form submission

### Contact Form Notification
Sent to company email with submission details

### Job Application Confirmation
Sent to applicant after applying

### Job Application Notification
Sent to HR with application details

### Newsletter Welcome
Sent to new subscribers

## 🗄️ Database Models

### Contact
- firstName, lastName, company
- email, phone, country
- inquiryType, industry
- message, subscribe
- status, createdAt

### JobApplication
- jobTitle
- firstName, lastName, email, phone
- resumeUrl, coverLetter
- linkedIn, portfolio
- status, createdAt

### Newsletter
- email (unique)
- source, subscribed
- subscribedAt, unsubscribedAt

## 🔧 Frontend Integration

### Update Frontend API Calls

Create `src/utils/api.js`:

```javascript
const API_URL = 'http://localhost:5000/api';

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return response.json();
};

export const submitJobApplication = async (formData) => {
  const response = await fetch(`${API_URL}/careers/apply`, {
    method: 'POST',
    body: formData // multipart/form-data
  });
  return response.json();
};

export const subscribeNewsletter = async (email) => {
  const response = await fetch(`${API_URL}/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  return response.json();
};
```

### Update Contact Form Component

```javascript
import { submitContactForm } from '../utils/api';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await submitContactForm(formData);
    if (result.success) {
      alert('Thank you! We will contact you soon.');
      // Reset form
    }
  } catch (error) {
    alert('Error submitting form. Please try again.');
  }
};
```

## 📊 Admin Endpoints (Add Authentication Later)

```
GET /api/contact              # Get all contacts
GET /api/careers/applications # Get all applications
GET /api/newsletter/subscribers # Get all subscribers
GET /api/analytics/stats      # Get analytics
```

## 🚀 Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
heroku login
heroku create intelligent-systems-api

# Set environment variables
heroku config:set DATABASE_URL=your-postgres-uri
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASSWORD=your-password

# Deploy
git push heroku main
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel
vercel login
vercel
```

### Deploy to Railway

1. Connect GitHub repo
2. Add environment variables
3. Deploy automatically

## 🧪 Testing

### Test with Postman

1. Import API endpoints
2. Test each route
3. Verify email sending
4. Check database entries

### Test with cURL

```bash
# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "company": "Test Co",
    "email": "test@example.com",
    "country": "USA",
    "inquiryType": "demo",
    "industry": "technology",
    "message": "Test message"
  }'
```

## 📝 TODO / Future Enhancements

- [ ] Add JWT authentication for admin routes
- [ ] Add admin dashboard
- [ ] Add email templates with HTML/CSS
- [ ] Add file storage to cloud (AWS S3, Cloudinary)
- [ ] Add automated testing (Jest, Supertest)
- [ ] Add API documentation (Swagger)
- [ ] Add logging (Winston, Morgan)
- [ ] Add caching (Redis)
- [ ] Add webhooks for integrations
- [ ] Add CRM integration (Salesforce, HubSpot)

## 🐛 Troubleshooting

### Email not sending
- Check Gmail app password
- Verify EMAIL_USER and EMAIL_PASSWORD in .env
- Check if 2FA is enabled on Gmail
- Try with different email provider

### Database connection error
- Check if PostgreSQL is running
- Verify DATABASE_URL in .env
- Check connection string format
- Try cloud PostgreSQL (Supabase/Railway) if local fails

### File upload error
- Check uploads/resumes/ directory exists
- Verify file size < 5MB
- Check file type (PDF, DOC, DOCX only)
- Check disk space

### CORS error
- Verify FRONTEND_URL in .env
- Check if frontend is running on correct port
- Clear browser cache

## 📞 Support

For issues or questions:
- Email: intelligentsystems26@gmail.com
- Check server logs for errors
- Review .env configuration

## 📄 License

Copyright © 2025 INTELLIGENT SYSTEMS INC

---

**Backend API is ready to power your website!** 🚀
