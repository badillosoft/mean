const fs = require("fs");

function buscar_imagenes(directorio) {
    const files = fs.readdirSync(directorio);

    for (let nombre of files) {
        let ruta = `${directorio}/${nombre}`;

        try {
            let stats = fs.statSync(ruta);

            if (stats.isFile()) {
                if (nombre.match(/png$/)) {
                    console.log(ruta);
                }
            }

            if (stats.isDirectory()) {
                // HACEMOS LA RECURSIVIDAD, ES DECIR,
                // VOLVEMOS A LLAMAR AL MISMO MÉTODO PERO AHORA EN LA SUBCARPETA
                buscar_imagenes(ruta);
            }
        } catch(err) {
            //
        }
    }
}

buscar_imagenes("/Users/kmmx");