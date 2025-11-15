import mongoose, { Schema } from "mongoose";

const OrderItemsSchema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref: "Book",
            required: true
        },
        quantity: {
            type: Number,
            default: 1,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export const OrderItems = mongoose.model("OrderItems", OrderItemsSchema)