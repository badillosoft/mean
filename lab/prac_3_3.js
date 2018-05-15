const fs = require("fs");

const files = fs.readdirSync("/Users/kmmx");

for (let nombre of files) {
    let ruta = `/Users/kmmx/${nombre}`;

    let stats = fs.statSync(ruta);

    if (stats.isFile()) {
        if (nombre.match(/png$/)) {
            console.log(`IMAGEN: ${ruta}`);
        }
    }

    if (stats.isDirectory()) {
        console.log(`${ruta} es carpeta`);
    }
}