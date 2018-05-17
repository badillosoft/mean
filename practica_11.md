# Práctica XI - Middleware y tokens

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Al definir una ruta en *express* podemos definir más de un controlador para generalizar funcionalidad. Esto quiere decir que se pueden enviar varios controladores a una misma ruta y serán llamados en cadena si el controlador anterior manda a llamar a la función `next()`.

Vamos a ver un ejemplo, supongamos que para poder llamar al controlaror principal de nuestra ruta, tenemos que verificar que nos evien un parámetro *query* con un *token* cuyo valor sea `abc123`, es decir, el primer controlador se encargará de verificar que se reciba un token correcto antes de mandar a llamar al segundo controlador:

~~~js
app.get("/api/usuario", (req, res, next) => {
    if (req.query.token === "abc123") {
        next();
        return;
    }
    res.status(401).send("No autorizado");
}, (req, res) => {
    res.send({
        nombre: "pepe",
        edad: 21
    });
});
~~~

Analicemos cuidadosamente el código anterior. En él se define la ruta `GET /api/usuario`, luego en un primer controlador recibimos `(req, res, next)` observa que ahora incluímos un tercer parámetro llamado `next` que será la función encargada de mandar a llamar al siguiente controlador en caso que se quiera. Dentro del primer controlador recuperamos el parámetro `token` de `req.query.token` y preguntamos si es igual a `abc123`, en caso de que el token sea correcto mandaremos a llamar al segundo controlador que nos devuelve los datos del usuario. Pero en caso de que `if (req.query.token === "abc123")` no se cumpla, entonces mandaremos una respuesta bajo el estus `401 Unauthorized` con el mensaje `No autorizado`.

Entonces si se manda a llamar la ruta y el token no es correcto por ejemplo:

~~~txt
GET /api/usuario
GET /api/usuario?token=abc124
~~~

En ambas rutas anteriores obtendremos el mensaje `No autorizado`, pero si se manda a llamar la ruta:

~~~txt
GET /api/usuario?token=abc123
~~~

Obtendremos los datos del usuario:

~~~json
{
    "nombre": "pepe",
    "edad": 21
}
~~~

## Definir un Middleware

Un `middleware` es una función que controla la ruta y procesa la ruta antes de que pase al siguiente controlador, por ejemplo, vamos a guardar nuestro controlador que verifica el token en una función para reutilizarlo bajo todas las rutas `/api/usuario`.

~~~js
const middleware_token = (req, res, next) => {
    if (req.query.token === "abc123") {
        next();
        return;
    }
    res.status(401).send("No autorizado");
};

app.use("/api/usuario", middleware_token);

app.get("/api/usuario", (req, res) => {
    res.send({
        nombre: "pepe",
        edad: 21
    });
});

app.get("/api/usuario/saludar", (req, res) => {
    res.send({
        mensaje: "Hola soy pp"
    });
});
~~~

Observa que ahora todas las rutas que comiencen con `/api/usuario` serán controladas previamente por `middleware_token` y verificaran que se reciba el token correcto.

## Ejercicios

* Crea una variable `let token = "abc123";` en el nivel principal justo después de los `imports`.

* Modifica `middleware_token` para que en la comparación compare el token recibido en el query contra el token maestro: `if (req.query.token === token)`

* Crea un servicio llamado `POST /auth/token` que reciba el nuevo token y haz `token = req.body.token`.

* Haz pruebas para checar que cada que se cambia el token las rutas dejan de funcionar con el anterior.