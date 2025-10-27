# Store API – Requirements

## Overview

This project is a RESTful API built with **TypeScript**, **Node.js**, and **PostgreSQL**.  
It provides endpoints for managing **users**, **products**, and **orders**.  
The project also implements authentication using **JWT tokens**.

---

## 📦 Environment Variables

The following variables must be set in the `.env` file before running the project:

## Ports

- **Server:** 3000
- **Database:** 5432

## Setup

1. Install dependencies → `npm install`
2. Create database → `CREATE DATABASE store_db;`
3. Run SQL files in `migrations/`
4. Start server → `npm run build && npm start`

## Endpoints

- `POST /users`, `GET /users/:id`, `POST /users/authenticate`
- `POST /products`, `GET /products/:id`
- `POST /orders`, `GET /orders/:id`
- `POST /orders/:id/products`, `GET /orders/:id/products`

## Database Tables

- **users**: id, firstname, lastname, password_digest
- **products**: id, name, price, category
- **orders**: id, user_id, status
- **order_products**: id, order_id, product_id, quantity
