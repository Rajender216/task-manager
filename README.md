# 📝 Task Manager (MERN)

A simple MERN-based Task Manager project to add, update, delete, and manage task status with a search feature.

---

## 📁 Project Structure

```

TASK-MANAGER/
│
├─ backend/          # Node + Express API
│  ├─ config/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ index.js
│  └─ .env
│
├─ frontend/         # React + Vite client
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ layout/
│  │  ├─ pages/
│  │  ├─ App.jsx
│  │  ├─ main.jsx
│  │  └─ index.css
│  └─ .env
│
└─ README.md

```

---

## ✅ Prerequisites

Make sure you have installed:

- **Node.js** (v16+)
- **MongoDB** (local or cloud)

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
```

Create `.env` inside `backend`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run server
```

Server runs at:

```
http://localhost:3000
```

---

## 💻 Frontend Setup

```bash
cd frontend
npm install
```

(Optional) Create `.env` for API URL:

```
VITE_BACKEND_URL=http://localhost:3000
```

Run frontend:

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🚀 Available Features

- Add tasks
- View and update task details
- Change task status
- Delete tasks
- Search tasks

---

## 📌 Scripts

### Backend

```
npm run server
```

### Frontend

```
npm run dev
```

---
