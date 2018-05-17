const mongoose = require("mongoose");

const ClienteSchema = mongoose.Schema({
    _id: String,
    nombre: String,
    correo: String,
    contraseña: String,
    token: String
});

const Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports = Cliente;