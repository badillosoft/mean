const texto = "- hola como estás?\n- bien\n- ok";

const lineas = texto.split("\n");

for (let linea of lineas) {
    console.log(`Linea: ${linea} Tamaño: ${linea.length}`);
}