import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected...`);
    } catch (error) {
        console.error("ERROR3: ",error);
        process.exit(1)
    }
}

export default connectDB