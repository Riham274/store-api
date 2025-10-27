import express from "express";
import cors from "cors";
import { client } from "./database";
import { getUsers, createUser } from "./handlers/users";
import { getProducts, createProduct } from "./handlers/products";
import { getOrders, createOrder } from "./handlers/orders";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// User routes
app.get("/users", getUsers);
app.post("/users", createUser);

// Product routes
app.get("/products", getProducts);
app.post("/products", createProduct);

// Order routes
app.get("/orders", getOrders);
app.post("/orders", createOrder);

// Start server
client.connect()
  .then(() => {
    console.log("Connected to PostgreSQL");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("DB connection error:", err));
