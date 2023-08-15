// controllers/usuariosController.js
const { createUser } = require("../models/Usuario");

function createUserController() {
    const userMessage = createUser();
    console.log(userMessage);
    return "Controlador de usuarios ejecutado";
}

module.exports = {
    createUserController
};
