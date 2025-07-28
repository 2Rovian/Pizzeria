import { Router } from "express";

import {
    deleteOrder,
    getAllOrders, getAllPizzas,
    getOrder, postOrder
} from "../controllers/orderControllers.js";
const router = Router()

router.get("/api/orders", getAllOrders)

router.get("/api/orders/:id", getOrder)

router.post("/api/orders", postOrder)

router.delete("/api/orders/:id", deleteOrder)

router.get("/api/pizzas", getAllPizzas)


export default router;