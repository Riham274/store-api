# Store API

A simple **RESTful API** built with **TypeScript**, **Node.js**, and **PostgreSQL**.  
It manages **users**, **products**, and **orders**, with authentication using **JWT**.

---

## 🚀 Setup Instructions

### 1️⃣ Install dependencies

npm install
2️⃣ Create the database
CREATE DATABASE store_db;
3️⃣ Run migrations
psql -U postgres -d store_db -f migrations/001-users-table.sql
psql -U postgres -d store_db -f migrations/002-products-table.sql
psql -U postgres -d store_db -f migrations/003-orders-table.sql
psql -U postgres -d store_db -f migrations/004-order-products-table.sql
4️⃣ Start the server
npm run build
npm start

⚙️ Environment Variables
POSTGRES_HOST=localhost
POSTGRES_DB=store_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123
PORT=3000
TOKEN_SECRET=jwt-secret
BCRYPT_PASSWORD=secret
SALT_ROUNDS=10

🗄️ Database Schema (Simplified)

users → id, firstname, lastname, password_digest

products → id, name, price, category

orders → id, user_id, status

order_products → id, order_id, product_id, quantity

✅ Notes

Authentication: JWT

Passwords hashed using bcrypt

Many-to-many relation between orders & products

🧪 Test
npm run test
