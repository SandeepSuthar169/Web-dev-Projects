import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        avatar: {
            type: {
                url: String,
                localpath: String
            },
            default: {
                url: `https://placehold.co/600x400`,
                localpath: ""
            },
            username: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                trim: true
            },
            email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                trim: true
            },
            password: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                trim: true
            },
            phone: {
                type: Number,
                required: true,
                unique: true,
                trim: true
            },
            isEmailVerified: {
                type: Boolean,
                required: true,
                default: false
            },
            refreshToken: {
                type: String,
            },
            forgotPasswordToekn: {
                type: String,
            },
            forgotPasswordExpiry: {
                type: Date,
            },
            emailVerificationToken: {
                type: String,
            },
            emailVerificationExpiry: {
                type: Date,
            },
        },
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)
