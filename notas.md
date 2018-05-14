# Notas del Curso MEAN Stack Developer

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Javascript

Es un lenguaje de programación optimizado para web.

### Variables

Una variable es un espacio en memoria nombrada (accesible) para retener información. `Javascript` soporta almacenar los siguientes tipos de datos:

* `Numbers`: Los números pueden ser enteros o decimales como `123`, `123.5678`, `Infinity`, `-Inifinity`

* `Strings`: Las cadenas pueden ser de tres tipos: `"·"`, `'·'` y ``. La comilla simple y doble funciona indistintamente y se pueden alternar. Pero la comilla especial tiene la propiedad de permitirnos inyectar valores a una cadena como en el siguiente ejemplo:

~~~js
const nombre = "Pepe";
const edad = 34;

const cadena = `${nombre} ${edad}`; // "Pepe 34"
~~~

* `Booleans`: un booleano sólo puede almacenar `true` o `false`. Se utilizan mucho como banderas en código y podemos mezclar el concepto de `truly` y `falsy`.

* `Nulleable`: un valor nulo puede ser `undefined` (un valor no instanciado ni asignado) o `null` (un valor explícitamente `null`). Por ejemplo:

~~~js
let a;
let b = null;

console.log(a); // undefined
console.log(b); // null
~~~

* `Arrays`: un arreglo a diferencia de otros lenguajes no necesita contener el mismo tipo de dato en sus objectos. Los arreglos mantienen a sus elementos indexados partiendo de `0` y posee método útiles como `push(·)`, `pop()`, `slice(·)`, `splice(·)`. Ejemplo:

~~~js
const X = [];

X.push(1, 2, 3); // [1, 2, 3]

X.pop(); // [1, 2]

X.unshift(5); // [5, 1, 2]

X.shift(); // [1, 2]

X.push(5, 7, 9, 8, 6, 4); // [1, 2, 5, 7, 9, 8, 6, 4]

const Y = X.slice(2, 5); // Y=[9, 8, 6] X=[1, 2, 5, 7, 9, 8, 6, 4]

X.splice(2, 5); // X=[1, 2, 5, 7, 4]
~~~

* `Anonymous Function`: una función anónima es una función sin nombre (sólo parámetros y cuerpo de la función). Ejemplo:

~~~js
const a = function (x, y) {
    return x + y;
};

a(10, 25); // 35
~~~

* `Arrow Functions`: son cómo las funciones anónimas con la diferencia del operador `this`. Ejemplo `const a = (x, y) => { return x + y };`, `const a = (x, y) => x + y;`

* `Objects`: un objecto es es un arquetipo que puede ser utilizado como un diccionario de datos (`clave: valor`) o cómo una clase anónima. Ejemplo:

~~~js
const telefono = {
    tipo: "Celular",
    numero: "5512345678",
    lada: "+521",
    otros: [
        //...
    ]
};

const Telefono = {
    //atributos
    //métodos
    //propiedades
    // se explica más adelante
};
~~~

#### Declaración de variables

Tenemos tres formas de declarar variables:

* `const`: crea una variable no reasignable, es decir, no puedo volver a utilizar el operador `=` sobre esa variable. Recomendado **siempre** a excepción que la variable se tenga que reasignar. Ejemplo:

~~~js
const a = 123;
const b = { x: 123, y: 456 };

a = -123; // ERROR
b = { z: -123 }; // ERROR

b.x = 456; // { x: 456, y: 456 }
~~~

* `let`: crea una variable local reasignable, la cuál podemos utilizar cómo una variable tradicional dentro del bloque que se definió. Útil y recomendado para todas las variables. Ejemplo:

~~~js
const a = function () {
    let b = 123;

    b = 456;
};

console.log(b); // ERROR
~~~

* `var`: crea una variable insegura global a todo el sistema y accesible en cualquier lugar, por ser tan insegura no se recomienda usar nunca `>: (`.

### Funciones

Las funciones son abstracciones de código para resolver tareas generalizadas mediante parámetros. Una función puede tomar cualquier cantidad de parámetros de entrada (incluso nada) y devolver sólo lo que quepa en una variable o nada (se devolverá `undefined` por defecto).

Existen cinco tipos de funciones en `Javascript`.

* `Named Function`: comienza por la palabra reservada `function` seguida del nombre de la función, entre paréntesis `(·)` los parámetros separados por coma o nada y finalmente un bloque instructor marcado por llaves `{ · }`. Ejemplo:

~~~js
function suma(a, b) {
    return a + b;
}

function min_max(a, b) {
    const min = a < b ? a : b;
    const max = a > b ? a : b;
    return [min, max];
}

function crearCliente() {
    return {
        nombre: "Pepe",
        edad: 34
    };
}
~~~

* `Anonymous Function`: comienza por la palabra reservada `function` seguido de paréntesis `(·)` los parámetros separados por coma o nada y finalmente un bloque instructor marcado por llaves `{ · }`. Las funciones anónimas se deben almacenar en una variable o no tendrían sentido. Ejemplo:

~~~js
const X = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Y = X.map(function (x) {
    return x * x;
});

function T(x) {
    return x * x;
}

const Y = X.map(T);
~~~

* `Arrow Function`: la función flecha introducida en `ECMASCRIPT-2015` o `ES6`, define una función anónima sin operado `this`. Ejemplo:

~~~js
const X = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Y = X.map((x) => {
    return x * x;
});

const Y = X.map((x) => x * x);

const Y = X.map(x => x * x);
~~~

* `Object-Embed Functions`: las funciones incrustadas son funciones anónimas nombradas dentro de un objeto, para lograr construir clases anónimas. Ejemplo:

~~~js
const persona = {
    nombre: "Pepe",
    correo: "pepe@gmail.com",
    edad: 21
};

const persona2 = {
    nombre: "Pepe",
    correo: "pepe@gmail.com",
    edad: 21,
    saludar: function () {
        return `${persona2.nombre} ${persona2.correo}`;
    }
}

persona2.saludar(); // "Pepe pepe@gmail.com"

const persona3 = {
    nombre: "Pepe",
    correo: "pepe@gmail.com",
    edad: 21,
    saludar() {
        return `${this.nombre} ${this.correo}`;
    }
}

persona3.saludar();
~~~

* `Dynamic Function`: una función dinámica es una función que se puede construir desde una cadena de texto y evaluarla en tiempo real. Ejemplo:

~~~js
const texto = "return a + b;";

const f = new Function("a", "b", texto);

f(1, 2); // 3;
~~~


