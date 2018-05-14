const nombres = ["Paco", "Beto", "Juan", "Ana", "Daniela", "Paquita", "Chabela", "Pancho"];
const apellidos = ["X", "G", "R", "W", "M", "Z"];

function nombreAleatorio() {
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];
    const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
    return nombre + " " + apellido;
}

for (let i = 0; i < 100; i++) {
    db.clientes.insertOne({
        nombre: nombreAleatorio(),
        edad: Math.floor(Math.random() * 60 + 18)
    });
}