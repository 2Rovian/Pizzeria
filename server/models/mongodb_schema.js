import mongoose from "mongoose"
const { Schema } = mongoose;

const pizzaSchema = new Schema({
    name: { type: String, required: true, trim: true },
    price: Number,
    ingredients: Array,
},
    {
        timestamps: true,
    }
)

const pizzaModel = mongoose.model("Pizza", pizzaSchema);

export default pizzaModel;