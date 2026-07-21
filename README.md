# Inventory Management API

A RESTful Inventory Management API built with **Node.js**, **Express.js**, and **MongoDB**. The application provides secure authentication, supplier and product management, request validation, API documentation, and follows a modular backend architecture.

---

## Overview

The Inventory Management API is a backend application designed to simplify inventory operations by managing products, suppliers, and user authentication through RESTful endpoints.

The project demonstrates modern backend development practices including secure authentication, MongoDB integration, middleware, validation, API documentation, and clean project organization.

This project was **designed, developed, tested, and documented independently**, demonstrating my ability to build scalable backend applications from the ground up.

---

## Features

- User authentication and authorization
- JWT-based authentication
- GitHub OAuth login with Passport.js
- Product management (CRUD)
- Supplier management (CRUD)
- MongoDB database integration
- Request validation
- Custom middleware
- Global error handling
- Swagger API documentation
- Environment variable configuration
- RESTful API architecture

---

## Technologies Used

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication & Security

- JSON Web Token (JWT)
- Passport.js
- GitHub OAuth
- bcryptjs

### API Documentation

- Swagger UI
- swagger-autogen

### Validation & Middleware

- express-validator
- cookie-parser
- cors
- dotenv

### Development Tools

- Git
- GitHub
- pnpm
- Nodemon

---

## Project Structure

```text
Inventory Management API
│
├── config/
│   └── passport.js
│
├── controllers/
│   ├── auth-controller.js
│   ├── product-controller.js
│   └── supplier-controller.js
│
├── db-connection/
│   └── mongodb-connection.js
│
├── middleware/
│   ├── auth.js
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── validator.js
│
├── models/
│   ├── product-model.js
│   ├── supplier-model.js
│   └── user.js
│
├── routes/
│   ├── git-auth-routes.js
│   ├── product-routes.js
│   ├── supplier-routes.js
│   └── user.js
│
├── Schema/
│   └── schema.js
│
├── swagger.js
├── swagger.json
├── server.js
├── package.json
└── README.md
```

---

## Learning Objectives

This project strengthened my understanding of:

- Designing RESTful APIs
- Building scalable backend applications with Express.js
- Structuring backend applications using a modular architecture
- Working with MongoDB and Mongoose
- Implementing JWT authentication
- Integrating third-party authentication using GitHub OAuth
- Protecting API routes with middleware
- Request validation and sanitization
- Creating reusable middleware
- Handling application errors gracefully
- Managing environment variables securely
- Generating interactive API documentation using Swagger
- Building maintainable backend applications
- Using Git and GitHub for version control

---

## Concepts Practiced

- REST API Development
- Backend Architecture
- MVC-inspired Project Structure
- CRUD Operations
- Authentication
- Authorization
- JWT
- OAuth
- Passport.js
- MongoDB
- Mongoose
- Express Middleware
- Request Validation
- Error Handling
- API Documentation
- Environment Configuration
- Secure Coding Practices
- Version Control

---

## Skills Demonstrated

- Backend Development
- RESTful API Design
- Database Design
- MongoDB Integration
- Authentication & Authorization
- Express.js
- Node.js
- Middleware Development
- API Documentation
- JavaScript (ES6+)
- Secure API Development
- Git & GitHub

---

## My Role

**Role:** Sole Developer

I independently designed, developed, tested, and documented the complete backend application.

### Responsibilities

- Designed the backend architecture
- Built RESTful API endpoints
- Developed product and supplier management modules
- Integrated MongoDB using Mongoose
- Implemented JWT authentication
- Configured GitHub OAuth using Passport.js
- Developed reusable middleware
- Added request validation and centralized error handling
- Generated Swagger API documentation
- Managed project configuration and environment variables
- Tested API functionality
- Managed version control with Git and GitHub

---

## Installation

Clone the repository

```bash
git clone https://github.com/ericayanru-dev/inventory-management-api.git
```

Install dependencies

```bash
pnpm install
```

Configure your `.env` file.

Start the development server

```bash
pnpm run dev
```

Or run in production

```bash
pnpm start
```

The API will be available at

```
http://localhost:3000
```

Swagger documentation

```
http://localhost:3000/api-docs
```

---

## Future Improvements

- Role-based access control
- Inventory stock alerts
- Search and filtering
- Pagination
- Audit logging
- Image uploads for products
- Unit and integration testing
- Docker support
- CI/CD pipeline
- Cloud deployment

---

## Author

**Eric Ayanru**

Aspiring Software Engineer | Full-Stack Developer | Future AI Engineer

GitHub: https://github.com/ericayanru-dev
