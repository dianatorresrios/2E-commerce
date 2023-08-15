// routes/productosRoutes.js
const { createProductController } = require("../controllers/productosController");

function setupProductosRoutes() {
    const productControllerMessage = createProductController();
    console.log(productControllerMessage);
    return "Rutas de productos configuradas";
}

module.exports = {
    setupProductosRoutes
};
