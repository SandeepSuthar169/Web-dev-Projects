import mongoose from "mongoose";
import db from "./db/index.js";
import app from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8080

db()
    .then(() => {
        app.listen(PORT, () => console.log(`Server listen on Port:, ${PORT}`))
}).catch((error) => {
    console.error(`Server listen error: ${error}`);
    process.exit(1)
    
})