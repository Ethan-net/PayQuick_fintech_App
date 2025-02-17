# Quickpay Full Stack Fintech Application

## Overview

This is a **full-stack fintech web application** built using **MERN stack (MongoDB, Express.js, React, Node.js)**. The application provides users with secure financial transactions, account management, and analytics.

## Features

### **User Features:**

- User authentication (signup, login, email verification, password reset)
- Secure fund transfers between users
- Transaction history & account statements
- Real-time balance updates
- Profile & settings management
- phone number of user is the account number

### **Admin Features:**

- User account management
- Fraud detection & reporting
- Transaction monitoring
- System analytics & reporting

### **Security Implementations:**

- JWT-based authentication
- Encrypted user passwords with bcrypt
- CORS protection & API rate limiting

## Tech Stack

### **Frontend:**

- React.js (with Redux for state management)
- Tailwind CSS / Bootstrap for styling

### **Backend:**

- Node.js with Express.js (REST API)
- MongoDB (NoSQL Database)
- Mongoose ORM
- Nodemailer for email notifications

### **Deployment:**

- **Frontend:** Render (Static Site Hosting)
- **Backend:** Render (Node.js Web Service)
- **Database:** MongoDB Atlas

## File Structure

```
/QuickPay
│── /Backend
│   ├── /config        # Configuration files (DB, auth, etc.)
│   ├── /controllers   # Business logic
│   ├── /models        # Database schemas
│   ├── /routes        # API endpoints
│   ├── /middleware    # Authentication & error handling
|   ├── /utils         # Reusable Helper functions
│   ├── index.js       # Server entry point
│
│── /Frontend_Quickpay
│   ├── /src
│   │   ├── /components  # Reusable UI components
│   │   ├── /pages       # Page views
│   │   ├── /redux       # State management
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # React entry point
│
│── .env               # Environment variables
│── package.json       # Project dependencies
│── README.md          # Documentation
```

## API Endpoints

| Method | Endpoint                  | Description         |
| ------ | ------------------------- | ------------------- |
| POST   | /api/auth/signup          | Register a new user |
| POST   | /api/auth/login           | User login          |
| POST   | /api/auth/verify-email    | Email verification  |
| GET    | /api/users/profile        | Get user profile    |
| POST   | /api/transactions/send    | Send money          |
| GET    | /api/transactions/history | Transaction history |

## Installation & Setup

### **Backend Setup**

1. Clone the repository:
   ```sh
   git clone https://github.com/Ethan-net/Quickpay.git
   cd fintech-app/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```sh
   npm start
   ```

### **Frontend Setup**

1. Move to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

## Deployment Guide

### **Backend Deployment (Render)**

1. Push backend code to **GitHub**.
2. Create a **new web service** on [Render](https://render.com/).
3. Connect to your **GitHub repo**.
4. Set **Root Directory** to `/backend`.
5. Set **Start Command** to:
   ```sh
   node index.js
   ```
6. Add environment variables.
7. Deploy 🚀

### **Frontend Deployment (Render)**

1. Push frontend code to **GitHub**.
2. Create a **new static site** on Render.
3. Connect to **GitHub repo**.
4. Set **Root Directory** to `/Frontend_Quickpay`.
5. Set **Build Command** to:
   ```sh
   npm run build
   ```
6. Set **Publish Directory** to:
   ```sh
   frontend/build
   ```
7. Deploy 🚀

## Contributing

Feel free to contribute by forking the repository and submitting a pull request.

## License

This project is licensed under the MIT License.
