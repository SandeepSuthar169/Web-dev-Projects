import mongoose, { Schema } from "mongoose";
import { Books } from "./books.models";
import { AvailableReviewRating, ReviewRatingEnum } from "../utils/constants.js"

const reviewSchema = new Schema(
    {
        books: {
            type: mongoose.Types.ObjectId,
            ref: "Books",
            required: true
        },
        rating: {
            type: Number,
            enum: AvailableReviewRating,
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