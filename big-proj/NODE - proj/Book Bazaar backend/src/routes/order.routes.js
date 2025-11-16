import express from "express"
import {
    createOrde,
    deleteOrder,
    getUserOrder,
    updateOrder
} from "../controllers/order.comtrollers.js"

const router = express()

router.post("/createOrder/:bookId", createOrde)
router.get("/userOrder/:bookId/:orderId",  getUserOrder)
router.post("/updateOrder/:bookId/:orderId",  updateOrder)
router.post("/deleteOrder/:orderId",  deleteOrder)

export default router