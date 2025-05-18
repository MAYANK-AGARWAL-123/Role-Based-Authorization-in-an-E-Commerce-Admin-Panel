Role-Based Authorization in an E-Commerce Admin Panel

This project implements a Role-Based Authorization system for an E-Commerce Admin Panel. It controls access to various admin features based on user roles such as Admin, Manager, or Staff, ensuring that users can only perform actions permitted by their assigned roles.

The system is built using React for the frontend and Node.js with Express for the backend, with secure authentication and authorization mechanisms.

Table of Contents
Features

Technology Stack

System Architecture

Installation

Usage

API Endpoints

Role Management

Security

Deployment

Contributing

License

Features

User authentication with JWT tokens.

Role-based access control (RBAC) to restrict API routes and frontend UI components.

Admin panel with multiple user roles:

Admin: Full access.

Manager: Limited access to product and order management.

Staff: Restricted access (e.g., view-only).

Dynamic sidebar and menu rendering based on roles.

Secure password handling with bcrypt.

Error handling and input validation.

Technology Stack

Frontend: React.js, Redux (optional), React Router

Backend: Node.js, Express.js

Database: MongoDB (with Mongoose ODM)

Authentication: JWT (JSON Web Tokens)

Password Hashing: bcrypt

API Testing: Postman or similar tools

System Architecture

The application follows a client-server architecture:

Frontend: React app manages UI and user experience.

Backend: Express API handles business logic, user management, and role enforcement.

Database: MongoDB stores user, roles, and product/order data securely.

Installation

Clone the repository

git clone https://github.com/MAYANK-AGARWAL-123/Role-Based-Authorization-in-an-E-Commerce-Admin-Panel.git

cd Role-Based-Authorization-in-an-E-Commerce-Admin-Panel

Backend setup

cd backend

npm install

Frontend setup

cd ../frontend

npm install

Configure environment variables

Create .env files in both backend and frontend with variables like:

Backend .env

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

Frontend .env

REACT_APP_API_URL=http://localhost:5000/api

Run backend

cd ../backend

npm run dev

Run frontend

cd ../frontend

npm start

Usage

Register or login users with roles assigned.

Navigate the admin panel to see how menus and actions change dynamically based on your role.

Try to access restricted pages or APIs with unauthorized roles to test protection.

API Endpoints (Sample)

POST /api/auth/register — Register new user with role.

POST /api/auth/login — Authenticate and get JWT token.

GET /api/users — Get all users (Admin only).

GET /api/products — List products (Manager and Admin).

POST /api/products — Create product (Manager and Admin).

PUT /api/products/:id — Update product (Manager and Admin).

DELETE /api/products/:id — Delete product (Admin only).

Role Management

Roles are defined and assigned at user creation or by Admin users. The backend middleware verifies the user role from the JWT token and restricts access accordingly.

Security

Passwords are hashed using bcrypt.

JWT tokens used for stateless authentication.

Middleware ensures users only access allowed routes.

Input validations on both client and server sides.

Deployment'

Frontend can be deployed on platforms like Vercel, Netlify.

Backend can be deployed on Heroku, Render, Railway, or any Node.js hosting.

Use MongoDB Atlas for managed database hosting.

Ensure environment variables are set securely.

Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
