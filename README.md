# 🚀 Express TypeScript Starter

Welcome to your **Express TypeScript Starter**!  
A modern, beginner-friendly REST API template built with **Express**, **TypeScript**, and **MongoDB**.  
Clean, scalable, and ready for your ideas!

---

## ✨ Why You'll Love This Project

- **TypeScript**: Write safer, smarter code.
- **Express**: Rapid API development.
- **MongoDB**: Flexible, cloud-ready database.
- **Modular Structure**: Easy to learn, easy to grow.
- **Centralized Error & Response Handling**: Consistent and clear.
- **Environment Variables**: Secure and configurable.
- **Production & Development Ready**: Start fast, scale easily.

---

## 🗂️ Project Structure Overview

```
.env
package.json
tsconfig.json
src/
  app.ts                # Main entry point
  config/               # App configuration
  loader/               # MongoDB connection
  common/               # Response & error handlers
  controller/           # Request controllers
  service/              # Business logic
  dao/                  # Data access objects
  models/               # Mongoose schemas
  interface/            # TypeScript interfaces & enums
  routes/               # API route definitions
```

---

## 🏁 Quick Start Guide

### 1️⃣ Clone the Repository

```sh
git clone <your-repo-url>
cd app-1
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Your Environment

Edit `.env` with your settings:
```env
PORT=5000
PASSWORD=your_password
MONGODB_URL=your_mongodb_url
```

### 4️⃣ Run in Development Mode

```sh
npm run dev
```

### 5️⃣ Build & Run for Production

```sh
npm run build
npm start
```

---

## 🌍 API Endpoints

| Route         | Description           |
|---------------|----------------------|
| `/greeting`   | Greeting endpoints   |
| `/customer`   | Customer operations  |
| `/user`       | User operations      |

**Tip:**  
If your routes are mounted at `/api`, use:  
```
http://localhost:5000/api/customer
```

---

## 🔄 How the App Works

1. **Request** → Route (`src/routes/`)
2. **Route** → Controller (`src/controller/`)
3. **Controller** → Service (`src/service/`)
4. **Service** → DAO (`src/dao/`)
5. **DAO** → Model (`src/models/`)
6. **Response** → Centralized handler

---

## 📚 Resources to Level Up

- [Express Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs/)

---

## 💡 Pro Tips

- Change port or DB URL in `.env`
- Add new routes in `src/routes/`
- Use TypeScript interfaces for safer code
- Check your terminal for errors and logs

---

## 🎉 Start Building!

This template is perfect for learning, prototyping, or launching your next API project.  
Explore, experiment, and make it yours!