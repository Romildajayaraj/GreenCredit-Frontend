# 🌱 Green Credit Environment

<p align="center">
  <b>A Smart Environmental Tracking & Green Credit Management Platform</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-blue?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-Styled-38B2AC?logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?logo=netlify" alt="Netlify">
</p>

<p align="center">
  <a href="https://greencreditenvitracking.netlify.app">
    🌐 Live Demo
  </a>
  &nbsp;&nbsp; | &nbsp;&nbsp;
  <a href="https://github.com/Romildajayaraj/GreenCredit-Backend">
    ⚙️ Backend Repository
  </a>
</p>

---

## 🌍 About The Project

**Green Credit Environment** is a full-stack environmental management platform designed to encourage and track eco-friendly activities.

The platform allows users to participate in environmental activities, upload proof of their activities, earn green credits, view their progress, report pollution-related issues, explore environmental schemes, communicate with other users, and compete through a leaderboard.

An administrative dashboard is also provided to monitor users, environmental activities, complaints, and platform data.

---

## 🚀 Live Application

### 🌐 Frontend

**Live Website:**  
https://greencreditenvitracking.netlify.app

### ⚙️ Backend API

**Live API:**  
https://greencredit-backend.onrender.com

---

# ✨ Key Features

## 👤 User Features

| Feature | Description |
|---|---|
| 📝 Registration | Create a new user account |
| 🔐 Login | Secure JWT-based authentication |
| 📊 Dashboard | View personal environmental activity and credits |
| 👤 Profile | Manage personal profile information |
| 🌱 Green Credits | Track earned environmental credits |
| 📤 Activity Upload | Upload proof of environmental activities |
| 📁 My Uploads | View previously submitted activities |
| 🏆 Leaderboard | Compare green credit scores |
| 🌿 Schemes | Explore environmental schemes |
| 🚨 Complaints | Report pollution and environmental issues |
| 📍 Location | Select complaint locations using maps |
| 🖼️ Image Upload | Upload images as environmental evidence |
| 📰 Community Feed | View and interact with community activities |
| 💬 Chat | Communicate with other users |
| 🛡️ Protected Routes | Restrict access to authenticated pages |

---

# 🛡️ Admin Features

### Admin Dashboard

Administrators can:

- 🔐 Securely login to the admin panel
- 👥 Monitor registered users
- 🌱 Manage environmental activities
- 📊 Monitor green credit activities
- 🚨 View and manage pollution complaints
- 📈 Monitor platform data
- 🛠️ Manage environmental platform operations

---

# 🛠️ Technology Stack

## 🎨 Frontend

| Technology | Purpose |
|---|---|
| ⚛️ React.js | User interface |
| ⚡ Vite | Development & build tool |
| 🟨 JavaScript | Application logic |
| 🧭 React Router | Application routing |
| 📡 Axios | API communication |
| 🎨 Tailwind CSS | UI styling |
| ✨ Framer Motion | Animations |
| 🎯 React Icons | Icons |
| 🚨 SweetAlert2 | Alerts & notifications |
| 🗺️ React Leaflet | Interactive maps |
| 💬 Socket.IO Client | Real-time communication |

---

# 📂 Project Structure

```text
GreenCredit-Frontend/
│
├── public/
│   └── _redirects
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ...
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── Chat.jsx
│   │   ├── Complaints.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Feed.jsx
│   │   ├── Home.jsx
│   │   ├── Leaderboard.jsx
│   │   ├── Login.jsx
│   │   ├── MyProfile.jsx
│   │   ├── MyUploads.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│   │   ├── Schemes.jsx
│   │   └── Upload.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── app.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

---
