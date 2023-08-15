// routes/pedidosRoutes.js
const { createOrderController } = require("../controllers/pedidosController");

function setupPedidosRoutes() {
    const orderControllerMessage = createOrderController();
    console.log(orderControllerMessage);
    return "Rutas de pedidos configuradas";
}

module.exports = {
    setupPedidosRoutes
};
