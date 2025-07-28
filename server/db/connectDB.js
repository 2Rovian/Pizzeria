import mongoose from "mongoose";

const connectDB = async (MongooseURI) => {
    try {
        await mongoose.connect(MongooseURI)
        console.log("MongoDB connected ...")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;