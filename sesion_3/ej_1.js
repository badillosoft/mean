const readline = require("readline");

function pedir_nombre(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('¿Cómo te llamas? ', (respuesta) => {
        rl.close();
        callback(respuesta);
    });
}

pedir_nombre((nombre) => {
    console.log(`Hola ${nombre}`);
});