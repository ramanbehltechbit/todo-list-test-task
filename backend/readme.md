# Todo Backend API

A simple and clean **Todo Backend API** built using **Node.js**, **Express**, **TypeScript**, **Prisma**, and **Zod**. This project aims to provide a minimal yet structured backend following best practices like layered architecture, schema validation, and proper error handling.

---

##  Features
- Create todos
- Retrieve all todos
- Prisma ORM for database access
- Request validation using Zod
- Centralized error handling middleware
- Clean architecture (Controllers → Services → Repositories)

---

##  Project Structure
```
src/
├─ controllers/      → Handles route logic
├─ services/         → Business logic
├─ repositories/     → Data access layer
├─ routes/           → API endpoints
├─ schemas/          → Zod validation schemas
├─ middlewares/      → Error handler middleware
├─ config/           → Environment & app setup
├─ server.ts         → Application entry point
```

---

## 🛠️ Installation & Commands

### Install dependencies
```
npm install
```

### Initialize database (first migration)
```
npx prisma migrate dev --name init
```

### Generate Prisma Client
```
npx prisma generate
```

### Push schema to database (without migrations)
```
npx prisma db push
```

### Open Prisma Studio (GUI)
```
npx prisma studio
```

### Start development server
```
npm run dev
```

### Run tests
If you have a test suite configured (e.g., Jest):
```
npm run test
```

---

##  API Routes

### **POST /todos** – Create a new Todo
**Request:**
```json
{
  "text": "Learn TypeScript"
}
```

**Response:**
```json
{
  "id": 1,
  "text": "Learn TypeScript",
  "completed": false
}
```

---

### **GET /todos** – Get all Todos
**Response:**
```json
[
  {
    "id": 1,
    "text": "Learn TypeScript",
    "completed": false
  }
]
```

---

## Error Example
```json
{
  "message": "Validation Error",
  "errors": [
    {
      "path": "text",
      "message": "Text is required"
    }
  ]
}
```