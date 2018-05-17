# Práctica VIII - Servicios de ubicación

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

En está práctica vamos a construir un servicio para realizar operaciones complejas sobre ubicaciones (simulando ubicaciones geográficas latitud y longitud).

## Punto contenido en un radio

Para determinar si un punto `(x, y)` está contenido en un círculo centrado en el punto `(a, b)` con radio `r`, deberemos determinar la distancia entre el punto `(x, y)` y el punto `(a, b)` mediante las diferencias de coordenas, supongamos que `dx = x - a` y `dy = y - b`, entonces, la distancia euclidiana entre los puntos será `d = raiz(dx ^ 2 + dy ^ 2)` donde `raiz()` obtiene la raiz cuadrada (`Math.sqrt`).

Por lo tanto, si queremos determinar si el punto `(x, y)` está dentro del círculo centrado en `(a, b)` con radio `r` deberemos determinar si la distancia `d` entre los puntos es menor o igual a `r` (`d <= r`).

## Ejercicios

* Crea un servicio que provea la ruta `GET /api/geo/in` que reciba en su `query` los parámetros `a`, `b`, `x`, `y` y `r` y devuelva el json `{"contenido": true, "origen": { x: a, y: b }, "objetivo": { x: x, y: y } }`.

* Agrega al servicio la ruta `POST /api/geo/all` que reciba en su `body` un json con una lista de puntos y el objetivo (el punto `(a, b)` y su radio) como se muestra:

~~~json
{
    "origen": {
        "x": 5,
        "y": 3
    },
    "radio": 10,
    "puntos": [
        { 
            "x": 12,
            "y": 13
        },
        { 
            "x": -12,
            "y": -13
        },
        { 
            "x": 10,
            "y": 3
        },
        { 
            "x": -3,
            "y": -10
        }
    ]
}
~~~

El servicio debe determinal cuales puntos si están en el círculo centrado en el origen con el radio dado y devolver un json con las claves: `dentro` que contanga una lista con todos los puntos dentro del círculo y `fuera` que contanga los puntos que no están dentro.