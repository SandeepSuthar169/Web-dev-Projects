import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
    {

    }
)

export const Payment = mongoose.model("Payment", paymentSchema)