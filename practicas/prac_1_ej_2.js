let contador = 1;

const funciones = {
    saludar: function () {
        console.log("Hola");
    },
    mostrar_hora: () => {
        console.log(new Date());
    },
    mostrar_contador: () => {
        console.log(contador);
        contador++;
    }
};

function bot(texto, objeto) {
    if (typeof objeto[texto] === "function") {
        objeto[texto]();
    } else {
        console.log(`La clave [${texto}] no es función`);
    }
}

bot("saludar", funciones);
bot("mostrar_hora", funciones);
bot("mostrar_contador", funciones);
bot("mostrar_contador", funciones);
bot("saludar", funciones);