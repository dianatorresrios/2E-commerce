// controllers/pedidosController.js
const { createOrder } = require("../models/Pedido");
const { createProduct } = require("../models/Producto");
const { createUser } = require("../models/Usuario");

function createOrderController() {
    const orderMessage = createOrder();
    const productMessage = createProduct();
    const userMessage = createUser();
    console.log(orderMessage, productMessage, userMessage);
    return "Controlador de pedidos ejecutado";
}

module.exports = {
    createOrderController
};
