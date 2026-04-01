# NeoNex Mindx Project Summary

## Project Overview

NeoNex Mindx is a comprehensive EdTech platform designed for AI and Data Science education. The platform offers various training programs with a focus on practical skills, hands-on projects, and job placement support.

## Key Features

### 1. Complete Training Programs
- Data Analytics
- Business Analytics
- Data Science
- Data Science & AI
- Data Engineering
- AI/ML Engineering

### 2. Individual Modules
- Python
- SQL
- Data Visualization (Power BI/Tableau)
- Machine Learning

### 3. Student Support
- Unlimited module retakes
- 100% job assistance
- Capstone & real-time industry projects
- Lifetime LMS access
- Weekly job openings
- Soft skills training & resume building

### 4. Interactive Elements
- Enquiry forms with database storage
- Email notifications
- Responsive design for all devices

## Technical Architecture

### Frontend
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion for animations

### Backend
- Node.js
- Prisma ORM
- SQLite database (local development)
- Nodemailer for email functionality

### Deployment
- Docker containerization
- GitHub Pages compatible
- Standalone Next.js build

## Customizations Made

1. Brand name: NeoNex Mindx (formerly Future Minds / NeoNex MindX)
2. Email configuration updated to use pcneeraj123@gmail.com
3. Student count updated from 5000+ to 1000+
4. Success stories statistics updated:
   - Graduates and Non-Graduates: 1000+
   - Success Rate: 92%
   - Rating: 4.5/5
   - Companies: 30+
5. Weekend batch timing information added
6. Internship opportunity notice added to courses page

## Database Schema

The platform uses a simple schema with one main entity:

### Enquiry
- id (String, cuid)
- name (String)
- email (String)
- phone (String)
- course (String, default: "General")
- batch (String, optional)
- createdAt (DateTime, default: now)

## Environment Variables

The application requires the following environment variables:

```
DATABASE_URL="file:./dev.db"
GMAIL_USER="your-email@gmail.com"
GMAIL_PASS="your-app-password"
```

## Deployment Readiness

The project is fully prepared for deployment with:
- Proper documentation (README.md, DEPLOYMENT.md, PROJECT_SUMMARY.md)
- GitHub Actions workflow for automated deployment
- Docker support
- Correct .gitignore configuration
- Example environment file (.env.example)

## Contact Information

For questions or support, contact pcneeraj123@gmail.com
