// controllers/productosController.js
const { createProduct } = require("../models/Producto");

function createProductController() {
    const productMessage = createProduct();
    console.log(productMessage);
    return "Controlador de productos ejecutado";
}

module.exports = {
    createProductController
};
