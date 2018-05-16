const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

const client = mongoose.connection;

client.once("open", () => {
    console.log("Conectado a MongoDB");

    const ClienteSchema = mongoose.Schema({
        nombre: String,
        correo: String,
        edad: Number
    });

    ClienteSchema.methods.saludar = function () {
        console.log(`Hola soy ${this.nombre} tengo ${this.edad} años`);
    };

    const Cliente = mongoose.model("Cliente", ClienteSchema);

    const pepe = new Cliente({
        nombre: "José",
        correo: "jose@sony.com"
    });

    pepe.edad = 60;

    pepe.saludar();

    pepe.save().then(result => {
        console.log("usuario guardado");
        // client.close();
    });

    Cliente.find().then(clientes => {
        console.log(clientes);
    });
});