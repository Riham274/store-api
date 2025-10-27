import express, { Request, Response } from "express";
import { OrderProductStore } from "../models/orderProduct";
import verifyAuthToken from "../utils/authenticator";

const store = new OrderProductStore();

const addProduct = async (req: Request, res: Response) => {
  try {
    const order_id = Number(req.params.id);
    const { product_id, quantity } = req.body;
    const added = await store.addProduct({ order_id, product_id, quantity });
    res.json(added);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProductsByOrder = async (req: Request, res: Response) => {
  try {
    const order_id = Number(req.params.id);
    const products = await store.getProductsByOrder(order_id);
    res.json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const orderProductsRoutes = (app: express.Application) => {
  app.post("/orders/:id/products", verifyAuthToken, addProduct);
  app.get("/orders/:id/products", verifyAuthToken, getProductsByOrder);
};

export default orderProductsRoutes;
