import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DataBase connect Successfully");
    } catch (error) {
        console.log("Mongo DataBase connection faild");
        process.exit(1)
    }

}

export default db