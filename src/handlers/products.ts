import { Request, Response } from "express";
import { client } from "../database";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await client.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const result = await client.query(
      "INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *",
      [name, price, description]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
