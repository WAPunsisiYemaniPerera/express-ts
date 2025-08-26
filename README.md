# Express TypeScript Starter

Welcome to the **Express TypeScript Starter** project!  
This is a beginner-friendly REST API template using **Express**, **TypeScript**, and **MongoDB**.  
It’s organized for easy learning, scalability, and clean code.

---

## 🚀 Features

- **TypeScript** for type safety
- **Express** for fast API development
- **MongoDB** integration (via Mongoose)
- Modular structure: routes, controllers, services, DAOs
- Centralized error and response handling
- Environment variable support (`.env`)
- Ready for production and development

---

## 📁 Project Structure

```
.env
package.json
tsconfig.json
src/
  app.ts                # Main entry point
  config/               # App configuration
  loader/               # MongoDB loader
  common/               # Response & error handlers
  controller/           # Request controllers
  service/              # Business logic
  dao/                  # Data access objects
  models/               # Mongoose schemas
  interface/            # TypeScript interfaces & enums
  routes/               # API route definitions
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd app-1
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure environment variables

Edit `.env` with your settings:
```env
PORT=5000
PASSWORD=hello
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```

### 4. Run the app (development)

```sh
npm run dev
```

### 5. Build and run (production)

```sh
npm run build
npm start
```

---

## 🌐 API Endpoints

| Route                   | Description                |
|-------------------------|---------------------------|
| `/greeting`             | Greeting endpoints        |
| `/customer`             | Customer operations       |
| `/user`                 | User operations           |

**Example:**  
If you mount routes at `/api`, access like:  
```
http://localhost:5000/api/customer
```

---

## 🧩 How It Works

1. **Request** → Route (`src/routes/`)
2. **Route** → Controller (`src/controller/`)
3. **Controller** → Service (`src/service/`)
4. **Service** → DAO (`src/dao/`)
5. **DAO** → Model (`src/models/`)
6. **Response** → Sent via centralized handler

---

## 📚 Learn More

- [Express Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs/)

---

## 💡 Tips

- Change the port or DB URL in `.env`
- Add new routes in `src/routes/`
- Use TypeScript interfaces for safer code
- Check terminal for errors and logs

---

## 🏆 Start Building!

This template is perfect for learning, prototyping, or launching your next API project.  
Feel free to explore, modify, and ask questions!

---