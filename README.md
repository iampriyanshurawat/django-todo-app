# 🧩 Django + React Todo Application (DRF + React)

This branch (`drf-react`) contains a full-stack Todo application built using:

- Django + Django Rest Framework (DRF) for the backend API  
- React (Vite) for the frontend user interface  

The backend is used strictly as an API, while the frontend handles all UI and interactions.

---

## 🚀 Features

### Backend (Django + DRF)
- REST API for task management
- Create, read, update, delete (CRUD) todos
- Task fields:
  - Title
  - Description
  - Due date
  - Completion status
- Django Admin panel
- SQLite database (development)

### Frontend (React)
- Built using React + Vite
- View all tasks
- Filter tasks:
  - All
  - Today
  - Upcoming
  - Completed
- Add new tasks via modal
- Mark tasks as completed
- Delete tasks
- Clean and minimal UI

---

## 🗂️ Project Structure

```text
ToDo_List/
├── accounts/
├── tasks/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── manage.py
├── requirements.txt
├── db.sqlite3
├── .gitignore
└── README.md
```
---

## ⚙️ Tech Stack

### Backend
- Python
- Django
- Django Rest Framework

### Frontend
- React
- Vite
- Axios
- CSS

---

## 🛠️ Setup Instructions

### Clone the repository
git clone <repository-url>
cd ToDo_List
git checkout drf-react

---

### Backend Setup (Django)

python -m venv virtual_enviroment
virtual_enviroment\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Backend runs at:
http://127.0.0.1:8000/

---

### Frontend Setup (React)

cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173/

---

## 🔐 Default Admin Credentials

- **Username:** admin  
- **Password:** admin  

---

## 🔗 API Endpoints

GET     /api/todos/        → List all todos  
POST    /api/todos/        → Create a todo  
PATCH   /api/todos/{id}/   → Update a todo  
DELETE  /api/todos/{id}/   → Delete a todo  

---


## 🌿 Branch Information

- main → Django REST API only  
- drf-react → Django REST API + React frontend  

This branch represents the full-stack integration.

---

## 👤 Author

Priyanshu Rawat

Learning full-stack development with Django and React, focusing on clean architecture and real-world workflows.
