import mongoose, { Schema } from "mongoose";
import { Books } from "./books.models.js";
import { AvailableReviewRating, ReviewRatingEnum } from "../utils/constants.js"

const reviewSchema = new Schema(
    {
        book: {
            type: mongoose.Types.ObjectId,
            ref: "Book",
            required: true
        },
        rating: {
            type: Number,
            enum: Object.values(ReviewRatingEnum),  
            default: ReviewRatingEnum.NOT_DEFINED
        },
        comment: {
            type: String,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Review = mongoose.model("Review", reviewSchema)