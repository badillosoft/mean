const readline = require("readline");

function pedir_nombre() {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('¿Cómo te llamas? ', (respuesta) => {
            rl.close();
            reject(respuesta);
        });
    });
}

async function nombres() {
    try {
        const nombre1 = await pedir_nombre();
    } catch(err) {
        console.log("ERROR:", err);
    }
    const nombre2 = await pedir_nombre();
    const nombre3 = await pedir_nombre();

    console.log(nombre1, nombre2, nombre3);
}

nombres().then(() => {});