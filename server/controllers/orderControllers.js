import pizzaModel from "../models/mongodb_schema.js";
import PizzasList from "../PizzasList.js";

const getAllOrders = async (req, res) => {
    const orders = await pizzaModel.find({});
    res.status(200).json(orders)
};

const getOrder = async (req, res) => {
    const orderID = req.params.id;
    const order = await pizzaModel.findById(orderID);
    res.status(200).json(order);
};

const postOrder = async (req, res) => {
    const order = await pizzaModel.create(req.body);
    res.status(201).json(order)
};

const getAllPizzas = (req, res) => {
    // const { query: { name, price } } = req;
    // console.log(`A pizza se chama ${name} e custa ${price} reais`)
    res.json(PizzasList)
};

const deleteOrder = async (req, res) => {
    const orderID = req.params.id;
    const order = await pizzaModel.findByIdAndDelete(orderID)
    res.status(200).json(order);
}

export { getAllOrders, getOrder, postOrder, getAllPizzas, deleteOrder };