🚀 AuthShield – Production-Ready Authentication System

AuthShield is a secure and scalable authentication system built using the MERN stack.
It implements JWT-based authentication, OTP verification, Redis session management, and email-based workflows.

🌐 Live Demo: https://authshield-devesh.vercel.app

🧠 Architecture Diagram

👉 View full system architecture:
🔗 https://app.eraser.io/workspace/nnj9iCBB6gFF0MBKNo1w

This diagram represents a production-level authentication system with OTP login, Redis session handling, and JWT token lifecycle.

🔥 Features
🔐 JWT Authentication (Access + Refresh Tokens)
📩 Email OTP-based Login
⚡ Redis for Session & OTP Management
🔄 Token Refresh Mechanism
🧹 Secure Logout (Cookie-based)
📧 Email Verification (Signup Flow)
🚫 Rate Limiting (Brute-force protection)
🧼 Input Validation (Zod + Mongo-sanitize)
🔑 Password Hashing (bcrypt)
🏗️ Tech Stack
Backend: Node.js, Express.js
Frontend: React (Vite)
Database: MongoDB
Cache: Redis
Authentication: JWT
Email Service: Nodemailer
🔐 Authentication Flow
📝 Registration
User submits name, email, password
Input validated using Zod
Password hashed using bcrypt
Verification token stored in Redis
Email sent for verification
User created in MongoDB after verification
🔑 Login (OTP-Based)
User enters email & password
Backend validates credentials
OTP generated and stored in Redis (5 min expiry)
OTP sent via email
✅ OTP Verification
User submits OTP
Backend verifies OTP from Redis
On success:
Generate access token (short-lived)
Generate refresh token (long-lived)
Store session in Redis
Send tokens via HTTP-only cookies
🔒 Protected Routes
Middleware verifies access token
User data fetched securely
🔄 Token Refresh
Refresh token verified
New access token generated
🚪 Logout
Clears cookies:
accessToken
refreshToken
