import mongoose, { Schema } from "mongoose";

const apiKeySchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        key: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        lastUserd: {
            type: Date,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

export const apiKey = mongoose.model("apiKey", apiKeySchema)