import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

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
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

apiKeySchema.pre("save", function(next){
    if(!this.key){
        this.key = crypto.randomBytes(20).toString("hex")
    }
    next()
})

export const apiKey = mongoose.model("apiKey", apiKeySchema)