import express from "express"
import {
    createOrde,
    getUserOrder,
    getOrderOrderDetails
} from "../controllers/order.comtrollers.js"

const router = express()

router.post("/createOrder/:bookId", createOrde)
router.get("/userOrder/:bookId/:orderId",  getUserOrder)

export default router