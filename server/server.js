import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import connectDB from "./db/connectDB.js"
import ordersRoute from "./routes/ordersRoute.js";

dotenv.config();
const PORT = process.env.PORT;
const MongooseURI = process.env.MONGODB_CONNECTION_STRING;

const app = express();
app.use(cors());
app.use(express.json());
app.use(ordersRoute)


connectDB(MongooseURI)
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)
});