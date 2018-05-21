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

## Ejercicios

* Crea un componente de pagina llamada `ImdbPagina`.

* Crea el componente `Imdb`.

* Establece la ruta `path: "imdb"` con para el componente `componente: ImdbPagina` en `src/app/app-routing.module.ts` en `routes: Routes`.

* Ingresa a http://www.omdbapi.com/ y genera un `api key` (se envía al correo) para poder obtener información de peliculas.