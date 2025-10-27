import { Request, Response } from "express";
import { client } from "../database";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await client.query("SELECT * FROM orders");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    const productRes = await client.query("SELECT price FROM products WHERE id=$1", [product_id]);
    if (productRes.rows.length === 0) return res.status(404).json({ error: "Product not found" });
    const total_price = productRes.rows[0].price * quantity;

    const result = await client.query(
      "INSERT INTO orders (user_id, product_id, quantity, total_price) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, product_id, quantity, total_price]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
