// index.js
const { connectToDatabase } = require("./config/dbConfig");
const { configureAPI } = require("./config/apiConfig");
const { setupProductosRoutes } = require("./routes/productosRoutes");
const { setupUsuariosRoutes } = require("./routes/usuariosRoutes");
const { setupPedidosRoutes } = require("./routes/pedidosRoutes");

function main() {
    const dbMessage = connectToDatabase();
    const apiMessage = configureAPI();
    const productosRoutesMessage = setupProductosRoutes();
    const usuariosRoutesMessage = setupUsuariosRoutes();
    const pedidosRoutesMessage = setupPedidosRoutes();

    console.log(dbMessage, apiMessage, productosRoutesMessage, usuariosRoutesMessage, pedidosRoutesMessage);
}

main();
