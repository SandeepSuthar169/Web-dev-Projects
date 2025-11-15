import express from "express"
import {
    createOrde
} from "../controllers/order.comtrollers.js"

const router = express()

router.post("/createOrder/:bookId", createOrde)

export default router