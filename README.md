# 🔐 Authentication API (Node.js + Express + MongoDB)

A secure and scalable **REST API for user authentication** built using **Node.js, Express, and MongoDB**.
This project follows best practices for **security, environment configuration, and clean architecture**.

---

## 🚀 Features

- User Registration & Login
- Password Hashing using **bcrypt**
- Authentication using **JWT (JSON Web Token)**
- Access Token Refresh using Middleware
- Secure Logout Functionality
- Environment Variable Management with **dotenv**
- Protection against **NoSQL Injection** using **mongo-sanitize**
- Request Validation using **Zod**
- MongoDB Integration using **Mongoose**
- Auto-restart during development using **nodemon**

---

## 🛠️ Tech Stack (Backend)

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **bcrypt**
- **jsonwebtoken**
- **dotenv**
- **mongo-sanitize**
- **nodemon**
- **zod**

---

## 🎨 Frontend Setup (React + Vite)

The frontend is built separately using **React** and **Vite**.

### 📦 Install Dependencies

```bash
npm install react-router-dom axios
```

### ⚡ Create React App using Vite

```bash
npm create vite@latest
```

Then follow the prompts:

- Project name
- Select **React**
- Select **JavaScript** or **TypeScript**

### ▶ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 Frontend Responsibilities

- User Login & Registration UI
- API communication using **Axios**
- Routing using **React Router DOM**
- Secure token handling (Access & Refresh tokens)

---

## 📌 Notes

- Backend and frontend are maintained as **separate applications**
- API follows RESTful principles
- Authentication is protected using middleware

---

## 👨‍💻 Author

**Devesh Singh Chauhan**
