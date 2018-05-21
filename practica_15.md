# Práctica XV - Directivas

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

En está práctica vamos a entender como funcionan las directivas estructurales `*ngIf` y `*ngFor`, para más profundidad en el tema, puedes consultar: https://angular.io/guide/structural-directives

Las directivas son colocadas como atributos de los elementos html para modificar su comportamiento, por ejemplo, la directiva `*ngIf="expresion"` muestra el elemento si la expresión se cumple (la expresión puede ser una comparación o algo que genere un booleano). Por ejemplo, si queremos mostrar un panel con algún mensaje si hay error:

~~~html
<div class="error" *ngIf="error">
  <p>Error: {{ error }}</p>
<div>
~~~

Por otro lado la directiva `*ngFor="let item of collection"` permite repetir un elemento varias veces para cada `item` en `collection`, donde `collection` es un arreglo (puedes probar `let key in object` para iterar claves en un objeto). Veamos un ejemplo que repite la etiqueta `<tr>` para formar una tabla:

~~~html
<table>
  <tr>
    <th *ngFor="let column of ['a', 'b', 'c']">{{ column | uppercase }}</th>
  </tr>
  <tr *ngFor="let row of [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 5 }]">
    <ng-container *ngFor="let column of ['a', 'b', 'c']">
      <td>{{ row[column] }}</td>
    </ng-container>
  </tr>
</table>
~~~

Revisemos cuidadosamente el código anterior, primero repetimos la etiqueta `<th>` para la colección `['a', 'b', 'c']`, dentro de la etiqueta `<th>` ahora tenemos un acceso a la variable definida `let column` y mostramos la columna aplicando el `pipe: uppercase`.

Seguido nos encontramos con la repetición `<tr>` para varios objetos con la estructura `{ a: 1, b: 2, c: 3 }`, a los cuales suelen llamarles `dataframes` por su estructura de colocal los datos en un arreglo de objetos donde en cada clave almacenamos el valor de la columna que se corresponde a la clave (una forma sencilla y legible de almacenar los datos de una tabla).

Dentro de `<tr>` nos encontramos una etiqueta llamada `<ng-contanier>`, esta etiqueta especial genera contenido sin anidación, piensa que se repiten los elementos que contiene sin anidación, por ejemplo:

~~~html
<div class="caja">
  <div *ngFor="let x of [1, 2, 3]">
    <p>{{ x }}</p>
  </div>
</div>
~~~

Genera:

~~~html
<div class="caja">
  <div>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>
</div>
~~~

Sin embargo al utilizar `<ng-container>` es como si no existiera:

~~~html
<div class="caja">
  <ng-container *ngFor="let x of [1, 2, 3]">
    <p>{{ x }}</p>
  </ng-contanier>
</div>
~~~

Genera:

~~~html
<div class="caja">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</div>
~~~

## Entrada de datos

Cuando reutilizamos un componenete, podemos enviarle datos de entrada mediante los atributos de su etiqueta, para esto deberemos marcar con un decorador `@Input()` que tal parámetro se recibe como entrada del componente. Por ejemplo, supongamos que tenemos el componente `RelojComponent` y queremos que las horas, minutos y segundos estén dados como entrada del componente, entonces hacemos:

> `src/app/reloj/reloj.component.ts`

~~~ts
@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  @Input() horas: Number = 0;
  @Input() minutos: Number = 0;
  @Input() segundos: Number = 0;

  // ...

}
~~~

Observa que ahora que las variables `horas`, `minutos` y `segundos` han sido marcadas como entradas del componente, sin embargo, en términos prácticos no afecta en nada el código anterior.

La ventaja está en poder ajustar los valores iniciales cuándo se reutiliza el componente `RelojComponent` dentro de otros componentes, por ejemplo, ahora en `MiPaginaComponent` podemos hacer en la interfaz:

> `src/app/mi-pagina/mi-pagina.component.html`

~~~html
<app-reloj horas="17" minutos="5" segundos="1" ></app-reloj>
~~~

Y ajustar con esto los valores iniciales del componente como si fueran atributos. De esta forma, si no se define ninguna entrada se tomarán los valores iniciales, pero si se define alguna entrada en la contrucción del componente, está tendrá prioridad.

## Ejercicios

* Crea un componente de pagina llamada `ImdbPagina`.

* Crea el componente `Imdb`.

* Establece la ruta `path: "imdb"` con para el componente `componente: ImdbPagina` en `src/app/app-routing.module.ts` en `routes: Routes`.

* Ingresa a http://www.omdbapi.com/ y genera un `api key` (se envía al correo) para poder obtener información de peliculas. Por ejemplo, visita http://www.omdbapi.com/?apikey=52f65397&i=tt3896198 usando mi `api key: 52f65397`

* En el componente `Imdb` crea un parámetro de entrada usando `@Input() imdb` que reciba el valor `imdbID` de la película, por ejemplo, `imdbID: tt3896198` se refiere a la película `Guardians of the Galaxy Vol. 2`.

* Cuando el componente haya cargado en el método `ngOnInit()` haz una llamada `fetch()` para consumir el `omdbapi` con el `imdbID` asignado al componente. 

* Crea una variable llamada `data` con algunos datos ficticios que despúes recuperes del `api`, ejemplo:

~~~ts
export class ImdbComponent implements OnInit {

  @Input() imdbId: String = "tt3896198";

  data: any = {
    "Title": "Título",
    "Year": "2018",
    "Rated": "PG-13",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "James Gunn",
    "Poster": "http://placehold.it/300x450"
  };

  // ...
}
~~~

* Muestra los datos de la variable `data` bien organizados en la interfaz, ejemplo:

~~~html
<div class="imdb">
  <h1>{{ data.Title }} ({{ data.Year }})</h1>

  <p>Director: {{ data.Director }}</p>
  <p>Género: {{ data.Genre }} | Clasificación: {{ data.Rated }}</p>
  <p>Duración: {{ data.Runtime }}</p>

  <img src="{{ data.Poster }}" alt="poster">
</div>
~~~

* Actualiza los datos de la variable `data` con los datos obtenidos por `fetch()`.

* Checa los resultados.