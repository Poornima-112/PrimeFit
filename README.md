# 🌟 PrimeFit Gym Website 🌟

## Overview
PrimeFit Gym Website is a full-stack web application designed to engage a fitness community through events and an easy-to-use admin interface. The website includes CRUD operations for seamless management of users, events, and other aspects of the gym. This project was inspired by a tutorial from [Vinod Bahadur Thapa](https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA), but I adapted it to fit the specific requirements of a fitness center.

---

## 📅 Project Timeline
**Duration**: 3 weeks

---

## 💻 Tech Stack

### **Frontend**:
- **Vite**: High-performance tool for fast frontend development with hot-reloading.
- **React**: Highly interactive and dynamic user interface that adapts seamlessly across devices.
- **React Router**: Client-side routing for smooth navigation between user and admin sections, ensuring role-based page access.

### **Backend**:
- **Node.js**: Powered the backend server, handling API requests efficiently and providing scalability.
- **Express**: Simplified server-side routing and middleware management, ensuring clean API design.
  
### **Database**:
- **MongoDB**: NoSQL database used to store user information, fitness events, and other data, enabling scalable, high-performance data management.

### **Authentication**:
- **JWT (JSON Web Tokens)**: Implemented token-based access control, securing authentication and allowing differentiation between user and admin roles.
- **BcryptJS**: Used to hash user passwords securely, providing protection for stored data.

### **Validation & Middleware**:
- **Zod**: Schema validation library to ensure robust input validation and data integrity.
- **CORS**: Configured to manage secure cross-origin requests between frontend and backend.
- **Dotenv**: Used to manage environment variables securely for API keys, database credentials, and other sensitive information.

### **Data Modeling**:
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB, simplifying interaction with the database using schemas.

### **API Testing**:
- **Postman**: Utilized to test API endpoints, ensuring functionality and debugging responses during development.

---

## 🎯 Key Features
- **Admin Interface**: Robust admin panel with CRUD operations for managing users, events, and gym-related content.
- **User Engagement**: Events page that allows users to sign up for fitness-related events.
- **Role-Based Access Control**: JWT-based authentication with distinct access levels for users and administrators.
- **Responsive Design**: Optimized for both desktop and mobile devices, providing a seamless experience across platforms.
- **Security**: Secure storage and handling of user credentials using BcryptJS, with role-based access control using JWT.

---

## ⚙️ Installation & Setup

### **Requirements**:
- Node.js
- MongoDB
- Vite (frontend development)
- Postman (for testing)

### **Setup Instructions**:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/primefit-gym-website.git
    cd primefit-gym-website
    ```

2. **Install dependencies for both frontend and backend**:
    ```bash
    # Navigate to backend folder
    cd server
    npm install

    # Navigate to frontend folder
    cd ../client
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `server` directory.
    - Add the following:
      ```
      MONGO_URI=your_mongodb_uri
      JWT_SECRET=your_jwt_secret
      ```

4. **Start the backend server**:
    ```bash
    cd server
    npm start
    ```

5. **Start the frontend development server**:
    ```bash
    cd client
    npm run dev
    ```

6. **Access the application**:
    - Navigate to `http://localhost:3000` in your browser to view the frontend.
    - API requests will be made to `http://localhost:5000` (or any other backend port you've set).

---

## 📂 Project Structure

```
primefit-gym-website/
├── server/               # Backend (Node.js, Express, MongoDB)
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   ├── middleware/       # JWT auth, input validation
│   └── app.js            # Express server setup
│
└── client/               # Frontend (Vite, React)
    ├── src/              # React components, hooks, etc.
    ├── public/           # Public assets
    └── index.html        # Entry point for Vite
```

---

## 🔧 Testing the API

1. **Using Postman**:
    - Import the Postman collection provided in this repository (`postman_collection.json`) to test the API endpoints.
    - Test user registration, login, event creation, and role-based access control.

2. **Sample Endpoints**:
    - **Register a user**: `POST /api/auth/register`
    - **Login**: `POST /api/auth/login`
    - **Create event** (Admin only): `POST /api/events`

---

## 🔐 Authentication

This project uses **JWT** (JSON Web Tokens) for authentication, with role-based access controls:
- Regular users can view and sign up for events.
- Admin users can create, update, and delete events and manage user roles.

JWT tokens are issued upon successful login and must be included in the `Authorization` header (as a Bearer token) for authenticated routes.

---

## 🌟 Lessons Learned

- Implementing **secure authentication** using JWT and **password hashing** with BcryptJS was a valuable learning experience.
- Using **Postman** to debug and test API endpoints helped refine the backend structure and handle edge cases effectively.
- Gained deep insight into managing environment variables securely with **dotenv** and validating inputs with **Zod**.

---

## 🏅 Acknowledgments

A big thank you to **Vinod Bahadur Thapa** for the inspiring tutorial. While following it, I learned the importance of customizing and adapting a project to specific use cases, which helped shape this fitness-focused web application.

---

## 📈 Future Improvements
- Add **event booking** features with payment integration.
- Implement **progress tracking** for users.
- Create a **mobile app** version of the website using React Native.

---
Demo  - https://drive.google.com/file/d/1-yoLxKkQa02m1L-qoF9isLblNQbad5Re/view?usp=sharing
