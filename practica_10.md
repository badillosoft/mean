# Práctica X - Filtros

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Los filtros nos permiten tomar de un arreglo, todos aquellos elementos que pasen el filtro y serán asignados a un nuevo arreglo que será devuelto, si ningún elemento pasa el filtro, el arreglo devuelto estará vacío. Ejemplo:

Por ejemplo, si tenemos un arreglo de números y queremos transformarlos de tal forma que queramos los números pares:
  
~~~js
const original = [1, 2, 2, 3, 3, 5, 4, 6];

const filtrado = original.filter(x => x % 2 === 0);

console.log(original); // [1, 2, 2, 3, 3, 5, 4, 6]
console.log(filtrado); // [2, 2, 4, 6]
~~~

## Filtro de listas de objetos

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
    }
];
~~~

Si quisieramos filtrar la lista de personas para obtener las personas con género mujer:

~~~js
const mujeres = personas.filter(p => p.genero === "mujer");

console.log(mujeres);
// [
//     {
//         nombre: "Ana",
//         edad: 23,
//         genero: "mujer"
//     },
//     {
//         nombre: "Carla",
//         edad: 13,
//         genero: "mujer",
//         esMayor: false
//     },
// ]
~~~

Si quiesieramos filtrar la lista de personas para obtener aquellos que son mayores de edad:

~~~js
const mayores = personas.filter(p => p.edad >= 18);

console.log(mayores);
// [
//     {
//         nombre: "Ana",
//         edad: 23,
//         genero: "mujer",
//         esMayor: true
//     },
//     {
//         nombre: "Daniel",
//         edad: 19,
//         genero: "hombre",
//         esMayor: true
//     },
// ]
~~~

Tambien podemos hacer filtros de todo tipo, por ejemplo, filtrar las filas de una matriz que contienen elementos en el rango inclusivo `[6, 8]`:

~~~js
const mat = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
    [ 10, 11, 12 ]
];

const sub = mat.filter(row => {
    return row.filter(x => x >= 6 && x <= 8).length >= 0;
});

console.log(sub);
// [
//     [ 7, 8, 9 ],
//     [ 10, 11, 12 ]
// ]
~~~

## Ejercicios

* Crear un servicio de filtrado que defina la ruta `POST /api/filter/personas/hombres` que reciba un json con datos de personas como el siguiente:

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
        }
    ]
}
~~~

y devuelva aquellos que son hombres:

~~~json
{
    "personas": [
        {
            "nombre": "Beto",
            "edad": 16,
            "genero": "hombre"
        },
        {
            "nombre": "Daniel",
            "edad": 19,
            "genero": "hombre"
        }
    ]
}
~~~

* Haz lo mismo pero ahora para mujeres en `POST /api/filter/personas/mujeres`.

* Haz lo mismo para aquellos mayores de edad `POST /api/filter/personas/mayores`.

* Haz lo mismo para aquellos menores de edad `POST /api/filter/personas/menores`.