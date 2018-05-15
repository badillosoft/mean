# Práctica I - Dominando los callbacks en javascript

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introudcción

Un `callback` o método de retrollamada (delegado), es una función que es pasada como parámetro de otra, para que esta sea ejecutada cuando la función principal lo determine. Este proceso es también conocido como delegamiento. Veamos un ejemplo rápido:

~~~js
function callback() {
    console.log("Han pasado 5 segundos (5000 milisegundos)");
}

setTimeout(callback, 5000);
~~~

En el código anterior la función `setTimeout()` recibe dos parámetros, el primero es una función que será llamada cuando haya pasado el tiempo especificado y el segundo es el tiempo en milisegundos que la función debe esperar para llamar a la función *callback*.

Recordemos que podemos insertar funciones anónimas o funciones flechas en su lugar:

~~~js
setTimeout(function () {
    console.log("Han pasado 5 segundos (5000 milisegundos)");
}, 5000);

setTimeout(() => {
    console.log("Han pasado 10 segundos (10000 milisegundos)");
}, 10000);
~~~

Casi todas las funciones en javascript esperan un *callback* generalmente como último argumento, por lo mismo a estas funciones se les llama funciones asíncronas, ya que cuando una función ejecuta su propio *callback* no detiene el flujo del programa y deja que las siguientes operaciones se realicen (con excepciones como `map`, `filter`, etc.).

Vamos a crear nuestro propia función que reciba un *callback* para entender el concepto más a fondo.

## Crear una función que reciba un callback

Imaginemos que tenemos una función que se encarga de buscar los números pares y cada que aparece un número *par* necesitamos ejecutar una función que tome el número *par* y haga lo que quiera con él.

~~~js
function buscar_pares(arreglo) {
    for (let n of arreglo) {
        if (n % 2 === 0) {
            // TODO: Ejecutar una función que haga lo que quiera con el número par `n`
        }
    }
}
~~~

Para resolver el problema, podemos solicitar como segundo parámetro un *callback* (una función) a la que vamos a mandar a llamar con el número *par* `n`.

~~~js
function buscar_pares(arreglo, callback) {
    for (let n of arreglo) {
        if (n % 2 === 0) {
            // TODO: Ejecutar una función que haga lo que quiera con el número par `n`
            callback(n);
        }
    }
}
~~~

Para consumir nuestra función basta mandar a llamar a `buscar_pares()` con un arreglo como primer parámetro y una función como segundo parámetro:

~~~js
function procesar_par(x) {
    console.log(`El número ${x} es par`);
}

const numeros = [1, 2, 3, 4, 5, 5, 6, 6, 8, 8, 7, 9];

buscar_pares(numeros, procesar_par);
~~~

También recordemos que podemos utilizar funciones anónimas o funciones flecha para simplificar el código:

~~~js
const numeros = [1, 2, 3, 4, 5, 5, 6, 6, 8, 8, 7, 9];

buscar_pares(numeros, function (x) {
    console.log(`El número ${x} es par`);
});

buscar_pares(numeros, (x) => {
    console.log(`El número ${x / 2} también es par?`);
});
~~~

## Ejercicios

* Crear una función llamada `in_range` que reciba como primer parámetro un arreglo, cómo segundo parámetro que reciba el valor inferior (`a`), cómo tercer parámetro que reciba el valor superior (`b`) y cómo cuarto parámetro que reciba un *callback* que se mande a llamar para los elementos en el arreglo que están dentro del rango inclusivo `a <= n <= b` donde `n` es el valor sobre el arreglo. La función debería verse como `function in_range(arreglo, a, b, callback)`. Entonces, debemos recorrer cada elemento (`n`) del arreglo, y si `a <= n <= b` debemos mandar a llamar a la función `callback` con `n` como primer y único parámetro. Haz las pruebas necesarias para comprobar que funcione.

* Crear una función llamada `bot` que reciba como primer parámetro una cadena de texto que contenga una palabra y como segundo parámetro un objeto en cuyas claves los valores sean funciones, por ejemplo:

~~~js
bot("saludar", {
    saludar: function() {
        console.log("Hola mundo");
    }
});
~~~

La función tiene que checar si el objeto recibido en el segundo parámetro contiene una función (investiga el uso de `typeof`) y de ser así debes mandar a ejecutar la función dada en esa clave (la clave equivale al primer parámetro de la función bot).