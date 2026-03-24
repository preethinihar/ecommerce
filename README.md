# ecommerce
# Ecommerce Full Stack Application

## 🚀 Overview

This is a full-stack ecommerce web application built using React (frontend) and Spring Boot (backend). It supports authentication, role-based access control, and product management.

---

## 🛠 Tech Stack

* Frontend: React, Axios
* Backend: Spring Boot, Spring Security, JPA
* Database: H2 (in-memory)
* Authentication: Basic Auth + OAuth2 (SSO ready)

---

## 🔐 Features

### Authentication

* Login using Spring Security
* OAuth2 SSO integration (Google ready)

### Role-Based Access Control (RBAC)

* Admin:

  * Add / Update / Delete products
* User:

  * View products only

### Product Management

* View all products
* Add/Delete products (Admin only)

### User Profile

* View profile
* Update profile

---

## ▶️ How to Run

### Backend

```bash
cd backend
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🔑 Test Credentials

| Role  | Username | Password |
| ----- | -------- | -------- |
| Admin | admin    | password |
| User  | user     | password |

---

## 📌 Notes

* OAuth2 SSO configured for extension
* Clean UI with React
* REST APIs secured with Spring Security
