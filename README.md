# 🚀 Full Stack Web Application (Flipr Assignment)

A production-ready full-stack web application built using **React + TailwindCSS** for the frontend and **FastAPI + MongoDB** for the backend.

The application includes a **Landing Page** and an **Admin Panel** for managing projects, clients, contact queries, and newsletter subscriptions.

---

## 📌 Features

### 🌐 Landing Page
- Hero section with **Free Consultation** form
- **Our Projects** section (fetched from backend)
- **Happy Clients** section (fetched from backend)
- Contact form (stores submissions in database)
- Newsletter subscription
- Responsive & clean UI

### 🔐 Admin Panel
- Add & view projects
- Add & view clients
- View contact form submissions
- View newsletter subscribers

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- TypeScript
- TailwindCSS
- Axios
- React Router DOM
- Deployed on **Vercel**

### Backend
- Python FastAPI
- MongoDB Atlas (Motor – async)
- Pydantic
- Uvicorn
- Cloudinary (image upload & crop)
- Deployed on **Render**

---

## 📂 Project Structure

### Backend
```text
backend/
├── app/
│   ├── main.py
│   ├── config.py
│   ├── database.py
│   ├── models/
│   ├── routes/
│   └── utils/
├── requirements.txt
└── .env (not committed)
Frontend
text
Copy code
frontend/
├── index.html
├── postcss.config.ts
├── tailwind.config.js
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
└── public/
🔗 Live URLs
Frontend (Vercel)
https://your-frontend.vercel.app

Backend (Render)
https://your-backend.onrender.com

⚙️ Environment Variables
Backend (.env)
env
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
DATABASE_NAME=flipr_db
CORS_ORIGINS=https://your-frontend.vercel.app
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
Frontend (.env)
env
Copy code
VITE_API_URL=https://your-backend.onrender.com
🔌 API Endpoints
Projects
GET /projects

POST /projects

Clients
GET /clients

POST /clients

Contact
GET /contact

POST /contact

Newsletter
GET /newsletter

POST /newsletter

🧪 Run Locally
Backend
bash
Copy code
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
