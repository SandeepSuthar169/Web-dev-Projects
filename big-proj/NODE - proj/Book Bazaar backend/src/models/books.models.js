import mongoose, { Schema } from "mongoose";
import { BooksStatusEnum, AvaailableBooksStatus} from "../utils/constants.js"

const booksSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
        },
        autharName: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        stock: {
            type: Number,
            required: true,
            min: 0
        },
        status: {
            type: String,
            enum: AvaailableBooksStatus,
            default: BooksStatusEnum.AVAILABLE
        },
        publishDate: {
            type: Date,
            required: true,
        },
        Publisher: {
            type: String,
            required: false
        },
        ISBN: {
            type: Number,
            required: true,
            unique: true,

        },
        totalReviews: {
            type: Number,
            default: 0
        },
        averageRating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        }

    },
    {
        timestamps: true
    }
)

export const Books = mongoose.model("Books", booksSchema)