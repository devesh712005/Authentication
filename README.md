# 🚀 AuthShield – Production-Ready Authentication System

AuthShield is a secure and scalable authentication system built using the MERN stack.  
It implements JWT-based authentication, OTP verification, Redis session management, and email workflows.

---

## 🌐 Live Demo : https://authshield-devesh.vercel.app  

---

## 🧠 Architecture Diagram

👉 View full system architecture:  
https://app.eraser.io/workspace/nni9iCBB6gFF0MBKNo1w?origin=share

---

## 🔥 Features

- JWT Authentication (Access + Refresh Tokens)
- Email OTP-based Login
- Redis for Session & OTP Management
- Token Refresh Mechanism
- Secure Logout (Cookie-based)
- Email Verification (Signup Flow)
- Rate Limiting (Brute-force protection)
- Input Validation (Zod + Mongo-sanitize)
- Password Hashing (bcrypt)

---

## 🏗️ Tech Stack

- Backend: Node.js, Express.js  
- Frontend: React (Vite)  
- Database: MongoDB  
- Cache: Redis  
- Authentication: JWT  
- Email: Nodemailer  

---

## 🔐 Authentication Flow

### 1. Registration
- User submits name, email, password  
- Input validated using Zod  
- Password hashed using bcrypt  
- Verification token stored in Redis  
- Email sent for verification  
- User created in MongoDB  

### 2. Login (OTP-Based)
- User enters email & password  
- Backend validates credentials  
- OTP generated & stored in Redis (5 min expiry)  
- OTP sent via email  

### 3. OTP Verification
- Backend verifies OTP  
- Generates access + refresh tokens  
- Stores session in Redis  
- Sends tokens via HTTP-only cookies  

### 4. Protected Routes
- Middleware verifies access token  
- User data fetched securely  

### 5. Token Refresh
- Refresh token verified  
- New access token generated  

### 6. Logout
- Clears cookies: accessToken, refreshToken  

---

