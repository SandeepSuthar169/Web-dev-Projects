import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        price: {
            type: Number,
            required: true,
            min: 0
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        books: {
            type: Schema.type.ObjectId,
            ref: "Books",
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        state: {
            type: String
        }
    }
)

export const Order = mongoose.model("Order", orderSchema)