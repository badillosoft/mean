const mongoose = require("mongoose");

const HamburguesaSchema = mongoose.Schema({
    _id: String,
    nombre: String,
    descripcion: String,
    precio: Number,
    imagen: String
});

const Hamburguesa = mongoose.model("Hamburguesa", HamburguesaSchema);

module.exports = {
    HamburguesaSchema,
    Hamburguesa
};