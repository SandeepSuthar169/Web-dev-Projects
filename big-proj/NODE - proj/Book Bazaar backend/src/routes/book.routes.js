import { Router } from "express"
import { addBook, getBookInfo, updateBook, deleteBook } from "../controllers/books.controllers.js"

const router = Router()


router.post("/BookAdd", addBook)
router.get("/:id", getBookInfo)
router.post("/:id/status", updateBook)
router.post("/:id/delete", deleteBook)

export default router