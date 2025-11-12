import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"
import  booksRoute  from "./routes/book.routes.js"


const app = express()

app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ['Content-Type', "Authorization"]
})),
app.use(express.json())
app.use((cookieparser()))
app.use(express.urlencoded(
    {
        extended: true
    }
))

app.use("/api/v1/Books", booksRoute)

export default app
