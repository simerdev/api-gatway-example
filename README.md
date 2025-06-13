# Zomato-inspired Microservices using NestJS

This project demonstrates a simple microservices architecture using **NestJS** for a Zomato-style system with an **API Gateway**, a **Restaurant Service**, and a **Menu Service**. Built using **Domain-Driven Design** principles and MongoDB as the database.

---

## 🧱 Services Overview

### 1. API Gateway (`api-gateway`)
- Acts as a single entry point for all external requests.
- Explicitly routes requests to either `restaurant-service` or `menu-service`.
- Handles all communication via `HttpService`.
- Includes correlation ID support and Winston logger for traceable logs.

### 2. Restaurant Service (`restaurant-service`)
- Manages restaurant-related operations.
- Exposes endpoints:
  - `GET /restaurants`
  - `POST /restaurants`

### 3. Menu Service (`menu-service`)
- Manages menu items linked to restaurants.
- Exposes endpoints:
  - `GET /menus`
  - `POST /menus`

---

## 🚀 Running the Project

### Step 1: Clone the Repo

```bash
git clone https://github.com/simerdev/api-gatway-example.git
cd zomato-microservices
```

### Step 2: Clone the Repo

```bash
cd api-gateway && npm install
cd ../restaurant-service && npm install
cd ../menu-service && npm install
```

### Step 3: Start All Services

```bash
cd restaurant-service && npm run start:dev
cd ../menu-service && npm run start:dev
cd ../api-gateway && npm run start:dev
```

---

Technolgies Used

NestJS
MongoDB (via Mongoose)
Winston Logger
Axios (HttpService)
Domain-Driven Design (DDD)
