import mongoose, { Schema } from "mongoose";
import { 
    AvailableOrderPaymentStatus, 
    OrderPaymentStatusEnum, 
    OrderStateEnum, 
    AvailableOrderState  
} from "../utils/constants.js"


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
            type: Schema.Types.ObjectId,
            ref: "Books",
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        paymentStatus: {
            type: String,
            enum: AvailableOrderPaymentStatus,
            default: OrderPaymentStatusEnum.PENDING
        },
        state: {
            type: String,
            enum: AvailableOrderState,
            default: OrderStateEnum.PENDING
        },

    },
    {
        timestamps: true
    }
)

export const Order = mongoose.model("Order", orderSchema)