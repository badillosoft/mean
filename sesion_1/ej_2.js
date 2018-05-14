const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(function (x) {
    return x % 2 === 0;
});

const impares = numeros.filter(function (x) {
    return x % 2 === 1;
});

console.log(numeros);

console.log(pares);

console.log(impares);