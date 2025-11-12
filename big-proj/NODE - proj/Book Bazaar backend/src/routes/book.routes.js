import { Router } from "express"
import { addBook } from "../controllers/books.controllers.js"

const router = Router()


router.post("/BookAdd", addBook)

export default router