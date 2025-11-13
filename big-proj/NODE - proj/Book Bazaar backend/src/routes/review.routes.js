import { Router } from "express";
import { 
    addReview, 
    getBookReview,
    deleteReview
} from "../controllers/review.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.post("/:BookId/addReview", verifyJWT, addReview)
router.get("/:BookId/bookReview", getBookReview)
router.post("/:reviewId/deleteReview", deleteReview)

export default router