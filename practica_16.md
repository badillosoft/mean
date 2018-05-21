# Práctica XVI - Servicios Asíncronos

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Los servicios son clases que definen métodos con tareas útiles como consumir un servicio web, guardar datos en el almacenamiento local, realizar cálculos y reportes, etc.

Para definir un servicio en angular vamos a utilizar el comando:

> `ng generate service Imdb`

Lo cuál va a crear el archivo `imdb.service.ts` que contiene la clase inyectable `ImdbService`. Está clase está decorada con `@Injectable` que le permite ser utilizada en cualquier componente que la inyecte.

## Métodos asíncronos

Vamos a utilizar las características más avanzadas de *Typescript* para consumir *promesas* de forma asíncrona. En este caso vamos a consumir el método `fetch()` para consumir el `omdbapi`.

Primero definamos en nuestro servicio un método llamado `getMovie` que reciba el `apikey` y el `imdbID` y mediante `fetch()` obtenga los datos de la pelicula:

~~~ts
export class ImdbService {

  constructor() { }

  async getMovie(apikey: String, imdbID: String) {
    // TODO: hacer el fetch
  }

}
~~~

Observa que declaramos la función `getMovie()` como una función asíncrona.

Lo siguiente será realizar el `fetch` pero de forma asíncrona:

~~~ts
export class ImdbService {

  async getMovie(apikey: String, imdbID: String): any {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&i=${imdbId}`);

    if (response.status !== 200) {
      console.log("Hubo un error al consumir 'omdbapi'");
      const text = await response.text();
      throw new Error(text);
    }

    const data = await response.json();

    console.log(data);

    return data;
  }

}
~~~

Observa cuidadosamente el código, primero llamamos a `fetch()` el cuál devuelve una promesa que a su vez entrega un `response`. El `response` es esperado mediante `await` y esto hace parecer el código más síncrono, es decir lineal. Lo siguiente es preguntar si el estatus es diferente a `200 OK` y de no ser así generamos intencionalemente un error con `throw new Error("mi error")`, pero recuperamos previamente el mensaje de error de la respuesta.

Finalmente y si no se generó error obtenemos los datos del servidor como `json` y los esperamos.

Cuando definimos una función asíncrona, esta devolverá una promesa, pero podrá ser trata con `await` de igual forma.

## Consumir un servicio (Inyección de Dependencias)

Cuando un componente quiere consumir un servicio y mandar a llamar sus métodos, basta con inyectar el servicio en el contructor de la siguiente forma:

~~~ts
export class ImdbComponent implements OnInit {

  // ...

  constructor(private imdbService: ImdbService) { }

  // ...
~~~

Ahora `ImdbComponent` ya es capaz de consumir el servicio nombrado como `this.imdbService`.

Podemos sustituir nuestro antiguo fetch por el del servicio y de forma asíncrona:

~~~ts
export class ImdbComponent implements OnInit {

  // ...

  constructor(private imdbService: ImdbService) { }

  async ngOnInit() {
    this.data = await this.imdbService.getMovie("52f65397", this.imdbId);
  }
~~~

Observa que el método `ngOnInit()` ha sido marcado con `async` para poder utilizar `await` en nuestro consumo, si no usaramos funciones asíncronas tendríamos que hacer:

~~~ts
export class ImdbComponent implements OnInit {

  // ...

  constructor(private imdbService: ImdbService) { }

  async ngOnInit() {
    this.imdbService.getMovie("52f65397", this.imdbId).then(data => {
      this.data = data;
    });
  }
~~~

Lo cual implica utilizar callbacks.

## Ejercicios

* Agrega un método llamado `async searchMovies(apikey: String, title: String)` a `ImdbService`.

* Dentro del método `searchMovies()` haz un `fetch` a la ruta `http://www.omdbapi.com/?apikey=${apikey}&s=${title}`) que devuelve un arreglo con las películas encontradas (realiza un log).

* En `ImdbPaginaComponent` agrega un `input-search` como:

~~~html
<input type="search" #Search>
~~~

* Agrega también un botón para hacer la busqueda y conecta su clic a la función `buscar()` al que se le envie el valor de la busqueda como:

~~~html
<input type="search" #Search>
<button (click)="buscar(Search.value)" >buscar</button>
~~~

* Inyecta el servicio `ImdbService` en `ImdbPaginaComponent` mediante el contructor.

* Define la variable `movies: Array<any> = [];`.

* Define el método `async buscar(titulo: String)` en `ImdbPaginaComponent` y consume el servicio `searchMovies()` (envía el valor del título a buscar).

~~~ts
export class ImdbPaginaComponent implements OnInit {

  movies: Array<any> = [];

  constructor(private imdbService: ImdbService) { }

  async buscar(titulo: String) {
    this.movies = await this.imdbService.searchMovies("52f65397", titulo);
  }

}
~~~

* Agrega a la interfaz la visualización de películas generadas por la directiva estructural `*ngFor`:

~~~html
<app-imdb *ngFor="let movie of this.movies" [imdbId]="movie.imdbID"></app-imdb>
~~~

Observa que enlazamos el atributo `imdbId` con el `movie.imdbID`.