# Práctica IX - Mapeos

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Los mapeos nos permiten transformar un arreglo de datos elemento por elemento, de tal forma que si recibimos un arreglo original y lo mapeamos, obtendremos un arreglo del mismo tamaño que el original, pero con cada valor transformado.

Por ejemplo, si tenemos un arreglo de números y queremos transformarlos de tal forma que queramos el cuadrado de cada elemento podemos hacer:

~~~js
const original = [1, 2, 2, 3, 3, 5, 4, 6];

const transformado = original.map(x => x * x);

console.log(original); // [1, 2, 2, 3, 3, 5, 4, 6]
console.log(transformado); // [1, 4, 4, 9, 9, 25, 16, 36]
~~~

## Mapeo de listas de objetos de datos

Una lista de objetos es una lista que contiene objetos de datos en cada posición, por ejemplo, una lista de personas:

~~~js
const personas = [
    {
        nombre: "Ana",
        edad: 23,
        genero: "mujer"
    },
    {
        nombre: "Beto",
        edad: 16,
        genero: "hombre"
    },
    {
        nombre: "Carla",
        edad: 13,
        genero: "mujer"
    },
    {
        nombre: "Daniel",
        edad: 19,
        genero: "hombre"
    },
];
~~~

Si quisieramos transformar la lista de personas para obtener los nombres de las personas, entonces hacemos:

~~~js
const nombres = personas.map(p => p.nombre);

console.log(nombres); // ["Ana", "Beto", "Carla", "Daniel"]
~~~

Si quiesieramos transformar la lista de personas para agregar una clave extra a cada persona llamada `esMayor` que contenga un booleano que indique si la persona es mayor de edad hacemos:

~~~js
personas.map(p => {
    p.esMayor = p.edad >= 18;
});

console.log(personas);
// [
//     {
//         nombre: "Ana",
//         edad: 23,
//         genero: "mujer",
//         esMayor: true
//     },
//     {
//         nombre: "Beto",
//         edad: 16,
//         genero: "hombre",
//         esMayor: false
//     },
//     {
//         nombre: "Carla",
//         edad: 13,
//         genero: "mujer",
//         esMayor: false
//     },
//     {
//         nombre: "Daniel",
//         edad: 19,
//         genero: "hombre",
//         esMayor: true
//     },
// ]
~~~

Tambien podemos hacer transformaciones de todo tipo, por ejemplo, calcular la suma de cada fila en una matriz:

~~~js
const mat = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 10, 11, 12 ]
];

const sumas = mat.map(row => {
    let suma = 0;
    for (let x of row) {
        suma += x;
    }
    return suma;
});

console.log(sumas); // [6, 15, 24, 33]
~~~

## Ejercicios

* Crea un servicio que provee la ruta `POST /api/map/personas` que reciba un json de personas como el siguiente:

~~~json
{
    "personas": [
        {
            "nombre": "Ana",
            "edad": 23,
            "genero": "mujer"
        },
        {
            "nombre": "Beto",
            "edad": 16,
            "genero": "hombre"
        },
        {
            "nombre": "Carla",
            "edad": 13,
            "genero": "mujer"
        },
        {
            "nombre": "Daniel",
            "edad": 19,
            "genero": "hombre"
        },
    ]
}
~~~

El servicio debe devolver un json con los datos de cada persona transformada como sigue: toma a cada persona en el mapeo y construye un string que concatene los datos de la persona, por ejemplo: `{ "nombre": "Ana", "edad": 23, "genero": "mujer" }` deberá transformarse en `MUJER: Ana/23`, el resultado deberá ser parecido al siguiente:

~~~json
{
    "personas": [
        "MUJER: ana/23",
        "HOMBRE: Beto/16",
        "MUJER: Carla/13",
        "HOMBRE: Daniel/19",
    ]
}
~~~