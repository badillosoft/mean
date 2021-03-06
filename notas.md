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

### Estructuras de control

#### Condicionales

La primer estructura importante es `if`. Ejemplo:

~~~js
const edad = 23;

if (edad < 18) {
    console.log("Menor de edad");
} else if (edad >= 18 && edad < 25) {
    console.log("Joven");
} else if (edad >= 25 && < 60) {
    console.log("Adulto");
} else {
    console.log("Master");
}
~~~

El segundo tipo de condicional es un selector de casos llamado `switch`. Ejemplo:

~~~js
const tipo = "celular";
const numero = "5512345678";

switch(tipo) {
    case "celular":
        console.log(`Cel. ${numero}`);
        break;
    case "oficina":
        console.log(`Ofic. ${numero}`);
    default:
        console.log(`Tel. ${numero}`);
        break;
}
~~~

#### Iteradores

Tenemos tres formas de `for`. La primer forma se considera como la forma tradicional o iterador secuencial. Ejemplo:

~~~js
for (let i = 0; i < 10; i++) {
    console.log(`Posición: ${i} Cuadrado: ${i * i}`);
}
~~~

La segunda forma de `for` se considera `for-of` o iterador sobre elementos de un arreglo. Ejemplo:

~~~js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x of numeros) {
    console.log(`Elemento: ${x}`);
}
~~~

La tercer forma de `for` se considera como `for-in` o iterador de claves, es útil para obtener las claves de un objeto o los índices de un arreglo. Ejemplo:

~~~js
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
~~~

~~~js
const persona = {
    nombre: "Ana",
    edad: 25
};

let contador = 0;

for (let k in persona) {
    if (k === "nombre" || k === "edad" || k === "correo") {
        contador++;
    }
}

if (contador < 3) {
    console.log("Faltan datos");
}
~~~

~~~js
const persona = {
    nombre: "Ana",
    edad: 25
};

const claves_req = ["nombre", "edad", "correo", "x"];

let contador = 0;

for (let k in persona) {
    if (claves_req.indexOf(k) >= 0) {
        contador++;
    }
}

if (contador < claves_req.length) {
    console.log("Faltan datos");
}
~~~

#### Ciclos

El ciclo `while` y `do-while` operan como en `C`. Ejemplo:

~~~js
let respuesta = "NO";
while (respuesta === "NO") {
    respuesta = checar_respuesta();
    // if (respuesta === "SI") {
    //     break;
    // }
}

let respuesta2;

do {
    respuesta2 = checar_respuesta();
    // if (respuesta2 === "SI") {
    //     break;
    // }
} while(respuesta === "NO");
~~~

### Operaciones sobre cadenas

Las cadenas pueden ser operadas de distintas formas y uno de los métodos más útiles es el método `split()` que parte una cadena basandose en un separador, ejemplo:

~~~js
const texto = "Hola mundo mundial";

const palabras = texto.split(" ");

console.log(palabras);
~~~

Observa que la partición (el `split`) se hace mediante el separador `" "`. En este segundo ejemplo se muestra como iterar las particiones:

~~~js
const texto = "- hola como estás?\n- bien\n- ok";

const lineas = texto.split("\n");

for (let linea of lineas) {
    console.log(`Linea: ${linea} Tamaño: ${linea.length}`);
}
~~~

### Promesas

Las promesas en javascript son una forma de normalizar el manejo de callbacks, para reducir la complejidad del código y poder formar fácilmente cadenas de código asíncrono.

Cuando una función llama a un callback, el programador puede facilmente perder la secuencia del código, es muy común tener errores de mandar a llamar una función antes de que la otra finalice, por ejemplo:

~~~js
coll.find({}).toArray((err, docs) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(doc);
});
client.close();
~~~

~~~js
setTimeout(() => {
    console.log("Ahora podemos llamar al otro callback");
}, 3000);

setTimeout(() => {
    console.log("Este callback debe ser llamado después del otro");
}, 2000);
~~~

~~~js
setTimeout(() => {
    console.log("Ahora podemos llamar al otro callback");

    setTimeout(() => {
        console.log("Este callback debe ser llamado después del otro");
    }, 2000);
}, 3000);
~~~

~~~js
fA("/home", (imagenes) => {
    fB(imagenes, "/backup", () => {
        console.log("Finalizado");
    });
});
~~~

~~~js
buscar_archivos("/home", archivo => {
    chechar_imagen(archivo, () => {
        guardar_imagen(archivo, ruta => {
            console.log("imagen guardada:", ruta);
        });
    });
});
~~~

Una promesa es un objeto que puede llamar a dos métodos: `then` y `catch`, los métodos reciben un callback para procesar la respuesta de la promesa:

~~~js
// SIN PROMESAS (callbacks)
buscar_archivos("/home", archivo => {
    chechar_imagen(archivo, imagen => {
        guardar_imagen(imagen, ruta => {
            console.log("imagen guardada:", ruta);
        });
    });
});

// CON PROMESAS
buscar_archivo("/home").then(archivo => {
    return checar_imagen(archivo);
}).then(imagen => {
    return guardar_imagen(imagen);
}).then(ruta => {
    console.log("imagen guardada:", ruta);
});
~~~

~~~js
// SIN POMESAS
A(..., rA => {
    B(..., rB => {
        C(..., rC => {
            ....
        });
    });
});

// CON PROMESAS
A(...).then(rA => {
    return B(...);
}).then(rB => {
    return C(...);
}).then(rC => {
    ...
}).catch(err => {
    ...
});
~~~

#### Crear una Promesa

Para crear una promesa vamos a utilizar la clase `Promise` enviando un callback con la estructura `(resolve, reject) => {}`.

El método `resolve` automáticamente va a resolver la promesa de forma exitosa y los parámetros enviados a `resolve` serán la respuesta `then` de la promesa.

El método `reject` automáticamente va a finalizar la promesa indicando error y los parámatros enviados a `reject` serán la respuesta `catch` de la promesa.

Ejemplo: Supongamos que queremos pedirle el nombre al usuario y no sabemos cuánto se va a tardar en dárnoslo, en este caso podemos crear una función sin promesas como sigue:

~~~js
const readline = require("readline");

function pedir_nombre(callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('¿Cómo te llamas? ', (respuesta) => {
        rl.close();
        callback(respuesta);
    });
}

pedir_nombre((nombre) => {
    console.log(`Hola ${nombre}`);
});
~~~

Cuando utilizamos promesas ya no será necesario solicitar un callback como parámetro del método, en vez de eso, vamos a regresar una instancia de `Promise`:

~~~js
const readline = require("readline");

function pedir_nombre2() {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('¿Cómo te llamas? ', (respuesta) => {
            rl.close();
            resolve(respuesta);
        });
    });
}

pedir_nombre2().then(nombre => {
    console.log(`Hi ${nombre}`);
});
~~~

~~~js
pedir_nombre(nombre1 => {
    pedir_nombre(nombre2 => {
        pedir_nombre(nombre3 => {
            console.log(nombre1, nombre2, nombre3);
        });
    });
});

pedir_nombre().then(nombre1 => {
    return pedir_nombre().then(nombre2 => {
        return pedir_nombre().then(nombre3 => {
            console.log(nombre1, nombre2, nombre3);
        });
    });
});

Promise.all([pedir_nombre(), pedir_nombre(), pedir_nombre()]).then((nombres) => {
    console.log(nombres[0], nombres[1], nombres[2]);
});

async function nombres() {
    const nombre1 = await pedir_nombre();
    const nombre2 = await pedir_nombre();
    const nombre3 = await pedir_nombre();

    console.log(nombre1, nombre2, nombre3);
}

await nombres();
~~~

## Express

`Express` es un módulo para `NodeJS` que nos permite montar un servidor bajo los protocolos `http` y `https`. La idea principal es crear un *router* que nos permita controlar rutas estáticas y dinámicas bajo los métodos `GET`, `POST`, `PUT` y `DELETE` principalmente.

### Instalación

Para instalar *express* necesitamos ejecutar `npm i express` de manera local o `npm i -g express` de manera global y en este último caso enlazar el módulo a nuestro proyecto local mediante `npm link express`. Cuando instalamos un módulo global los archivos residen en una carpta común a todo el sistema operativo por lo que podemos utilizar los mismos archivos en cada proyecto enlazando mediante `npm link`. Cuando los módulos son locales, cada proyecto descargará sus propios archivos.

### Montar un servidor

Para montar un servidor usaremos la forma tradicional haciendo uso del módulo `http` que es parte de *node*. Vamos a crear una instancia de *express* definir las rutas, montar el servidor y probarlo en el navegador bajo el puerto especificado.

> `server.js`

~~~js
// importar los módulos necesarios
const http = require("http");
const express = require("express");

// crear la instancia de *express*
const app = express();

// agregar una ruta de tipo GET en el path /api/cliente/saludar
app.get("/api/cliente/saludar", (req, res) => {
    res.send({
        mensaje: "Hola mundo",
        fecha: new Date()
    });
});

// montar el servidor
http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});
~~~

### Recuperar los datos de petición `query` en el controlador

Cuando definimos `app.get()` en el callback recibimos un objeto `req` que contiene la información de la petición, por ejemplo, podemos regresar como respuesta la misma petición en su objeto query:

~~~js
app.get("/api/cliente/saludar", (req, res) => {
    res.send(req.query);
});
~~~

Observa que el objeto `query` de la petición `req` transforma los datos query de la url en un objeto JSON con las claves y valores:

~~~txt
http://localhost:3000/api/cliente/saludar?nombre=pepe&raza=humano&x=123&a[]=1&a[]=2
~~~

> `req.query`

~~~json
{
  "nombre": "pepe",
  "raza": "humano",
  "x": "123",
  "a": [
    "1",
    "2"
  ]
}
~~~

### Crear rutas dinámicas

Una ruta puede contener variables de texto dentro de su definición lo que provocará tener rutas dinámicas, es decir, rutas más complejas que nos permitar llamar a un mismo controlador de distintas formas.

~~~txt
GET /api/cliente/pepe/saludar
GET /api/cliente/ana/saludar
~~~

En este ejemplo `/pepe/` es variable ya que es muy similar la estructura a `/ana/`. Para marcar una ruta con uno o varios fragmentos variables hacemos:

~~~js
app.get("/api/cliente/:nombre/saludar", (req, res) => {
    res.send(req.params);
});
~~~

~~~js
app.get("/api/cliente/:nombre/saludar", (req, res) => {
    const nombre = req.params.nombre; // req.params["nombre"] 
    res.send({
        mensaje: `Hola ${nombre}`
    });
});
~~~

### Procesar datos body de un formulario y datos JSON

Las peticiones `POST`, `PUT` y `DELETE` pueden llevar metadatos junto a la url pero no sobre la url, por eso se consideran métodos especiales. Lo más común es enviar los datos desde un formulario HTTP, pero también podríamos enviar los datos en formato JSON.

Lo primero que necesitamos es soportar los datos body mediante el módulo `body-parser` (`npm i body-parser`):

~~~js
// importar los módulos necesarios
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

// crear la instancia de *express*
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
~~~

Ahora ya podemos controlar rutas especiales (`POST`, `PUT`, `DELETE`) y acceder a los datos que vienen desde el body:

~~~js
app.put("/api/cliente/:nombre", (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
        body: req.body
    });
});
~~~

### Crear una carpeta de recursos estáticos

Para poder enviar archivos estáticos de una carpeta en específico podemos utilizar `app.use(express.static('public'));` o `app.use("/static", express.static('public'));` si se desea cambiar la ruta de montado.

## Angular

Es un framework/plataforma que nos permite crear aplicaciones basadas en `Componentes`.

### Intalación

Utiliza `npm i -g @angular/cli` para instalar el cliente `ng`. Si no puedes intenta `sudo chmod -R 777 /usr/local/lib`.

Prueba que el cliente `ng` funcione mediante `ng -v`.

### Configuración del proyecto

Para configurar el proyecto vamos a abrir una terminal y crear un proyecto sobre la carpeta que estemos parados. Vamos a escribir en la terminal `ng new MiApp` y va a crear la carpeta `MiApp` la cuál contendrá el proyecto de angular.

Vamos a movernos dentro de la carpeta `MiApp` en la terminal (`cd MiApp`).

Para comprobar que el proyecto funcione (y en casos posteriores para lanzar la app en pruebas) vamos a utilizar `ng serve` (`ng serve --port 4200`).

Mientras el servidor este prendido los cambios en la aplicación se reflejarán automáticamente ya que volverá a recompilar. La página se actualizará sola.

### Sistemas de rutas (ruteador)

Para poder integrar varios componentes vamos a ejecutar el comando: `ng generate module app-routing --flat --module=app`.

Luego vamos a crear un archivo llamado `app.routes.ts` dentro de la carpeta `src/app`.

El archivo `app-routing.module.ts` debería verse como el siguiente:

~~~ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
~~~

### Crear componentes

Para crear un componente vamos a utilizar `ng generate component PaginaA` genera el componente para la página `A`.

Automáticamente nos va a crear la carpeta `src/app/pagina-a` y dentro de esta capeta estarán todos archivos del componente `PaginaA`.

### Enlazar los componentes a las rutas

Para que un componente pueda ser navegado, vamos a modificar el archivo `app.component.html` de tal forma que quede como el siguiente:

~~~html
<router-outlet></router-outlet>
~~~

Ahora el componente `App` funciona como un ruteador. Podemos establecer las rutas regresando a `app-routing.ts`.

Ahora `app-routing.ts` lucirá como:

~~~ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PaginaAComponent } from './pagina-a/pagina-a.component';
import { PaginaBComponent } from './pagina-b/pagina-b.component';

const routes : Routes = [
  {
    path: "pagina-a",
    component: PaginaAComponent
  },
  {
    path: "pagina-b",
    component: PaginaBComponent
  },
];

// ...
~~~

### Estado interno del Componente

Cada componente define una clase como `PaginaAComponent` que luce como la siguiente:

> `src/app/pagina-a/pagina-a.component.ts`

~~~ts
export class PaginaAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
~~~