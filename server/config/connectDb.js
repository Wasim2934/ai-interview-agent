import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to database successfully")
    } catch (error) {
        console.log(`DataBase Error ${error}`)
        process.exit(1)
    }
}

export default connectDb