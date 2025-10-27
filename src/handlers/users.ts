import { Request, Response } from "express";
import { client } from "../database";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/authenticator";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await client.query("SELECT id, name, email FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const result = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashed]
    );
    const token = generateToken(result.rows[0].id);
    res.json({ user: result.rows[0], token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
