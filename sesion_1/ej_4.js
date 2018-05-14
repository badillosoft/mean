for (let i = 0; i < 10; i++) {
    console.log(`Posición: ${i} Cuadrado: ${i * i}`);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x of numeros) {
    console.log(`Elemento: ${x}`);
}

const datos = {
    a: 123,
    b: false,
    c: null,
    d: [1, 2, 3]
};

for (let k in datos) {
    let v = datos[k];
    console.log(`Clave: ${k} Valor: ${v}`);
}