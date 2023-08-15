// routes/usuariosRoutes.js
const { createUserController } = require("../controllers/usuariosController");

function setupUsuariosRoutes() {
    const userControllerMessage = createUserController();
    console.log(userControllerMessage);
    return "Rutas de usuarios configuradas";
}

module.exports = {
    setupUsuariosRoutes
};
