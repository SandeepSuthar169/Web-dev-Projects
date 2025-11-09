import mongoose, { Schema } from "mongoose";
import { paymentMethodEnum, AvailablepaymentMethod } from "../utils/constants.js"


const paymentSchema = new Schema( 
    {
        books: {
            type: Schema.Types.ObjectId,
            ref: "Books",
            required: true
        },
        paymentMethod: {
            type: String,
            enum: AvailablepaymentMethod,
            default: paymentMethodEnum.CURRENCY
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        paymentDate: {
            type: Date,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Payment = mongoose.model("Payment", paymentSchema)