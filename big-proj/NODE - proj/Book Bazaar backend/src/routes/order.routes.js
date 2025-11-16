import express from "express"
import {
    createOrde,
    getUserOrder,
    updateOrder
} from "../controllers/order.comtrollers.js"

const router = express()

router.post("/createOrder/:bookId", createOrde)
router.get("/userOrder/:bookId/:orderId",  getUserOrder)
router.post("/updateOrder/:bookId/:orderId",  updateOrder)

export default router