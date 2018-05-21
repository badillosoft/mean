# Práctica XIII - Páginas y componentes en Angular

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

En las notas vimos cómo crear y configurar un proyecto de angular mediante los comandos `ng new MiApp`, `ng generate module app-routing --flat module=app` y `ng generate componente PAGINA`.

Es momento de ver las diferencias entre una página y un componente.

## Páginas

Las páginas en realidad son componentes en sí mismo y su objetivo es unir varios componentes para determinar el comportamiento de una pantalla que visualiza el usuario. Las páginas poseen rutas de acceso directas en la dirección url del sistema.

Para crear una página usaremos `ng generate component MiPagina`, esto generará una carpeta dentro de `src/app` con el nombre `mi-pagina` y sus respectivos archivos: el `ts` (el componente o controlador), el `html` (la interfaz o página) y el `css` (el archivo de estilos).

Agrega el sistema de rutas con:

> `ng generate module app-routing --flat --module=app`

El cuál debería lucir así tras establecer la ruta `mi-pagina` para visualizar el componente `MiPagina`:

> `src/app/app-routing.module.ts`

~~~ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MiPaginaComponent } from './mi-pagina/mi-pagina.component';

const routes: Routes = [
  {
    path: "mi-pagina",
    component: MiPaginaComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
~~~

Y agrega el `<router-outlet></router-outlet>` a `app.component.html`

> `src/app/app.component.html`

~~~html
<router-outlet></router-outlet>
~~~

Ejecuta `ng serve` y visita `http://localhost:4200/mi-pagina`.

Ahora el componente `MiPagina` será mostrado en la ruta correspondiente.

## Componentes

A diferencia de las páginas los componentes suelen ser altamente reutilizables e integrarse dentro de otros componentes, especialmente dentro de páginas. Vamos a generar un componente sencillo que muestre la hora:

> `ng generate component reloj`

Vamos ahora a ajustar la interfaz:

> `src/app/reloj/reloj.component.html`

~~~html
<div class="reloj">
  <h1>Reloj</h1>
  <h2>{{ horas }}:{{ minutos }}:{{ segundos }}</h2>
</div>
~~~

Podemos observar que creamos una clase de diseño llamada `reloj` para ajustar el diseño del reloj mediante `css`. También podemos observar que estamos haciendo un enlace de datos a las variables `horas`, `minutos` y `segundos`.

Vamos ahora a poner algunos valores iniciales para probar el componente:

> `src/app/reloj/reloj.component.ts`

~~~ts
@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  horas: Number = 12;
  minutos: Number = 59;
  segundos: Number = 59;

  // ...

}
~~~

Para probar el reloj vamos a insertarlo dentro del componente `MiPagina`. Observa que en el decorador `@Component` el componente tiene un selector llamado `app-reloj`, el cuál podemos usar para insertar el componente dentro de otro haciendo uso de la etiqueta html `<app-reloj></app-reloj>`. Modifiquemos entonces la interfaz de `MiPagina` para insertar el reloj:

> `src/app/mi-pagina/mi-pagina.component.html`

~~~html
<app-reloj></app-reloj>
~~~

Observa ahora en `http://localhost:4200/mi-pagina` que se muestra el reloj con sus horas, minutos y segundos.

## Obtener la hora del sistema

Mediante `new Date()` podemos obtener la hora actual del sistema, lo cuál nos permitirá obtener las horas, minutos y segundos actuales del sistema. Utilizando la función `setInterval(callback, time)` podemos hacer que un `callback` sea repetido cada `time` tiempo dado en milisegundos, por ejemplo:

~~~ts
setInterval(() => {
    const actual = new Date();
    this.horas = actual.getHours();
    this.minutos = actual.getMinutes();
    this.segundos = actual.getSeconds();
}, 1000);
~~~

Lo cuál haría que cada segundo el componente mande a actualizar los datos de las variables `horas`, `minutos` y `segundos` a las actuales del sistema. El lugar adecuado para estar actualizando los datos será el método `ngOnInit()` el cuál se manda a llamar automáticamente cuando se carga el componente.

> `src/app/reloj/reloj.component.ts`

~~~ts
// ...
export class RelojComponent implements OnInit {

  horas: Number = 12;
  minutos: Number = 59;
  segundos: Number = 59;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const actual = new Date();
      this.horas = actual.getHours();
      this.minutos = actual.getMinutes();
      this.segundos = actual.getSeconds();
    }, 1000);
  }

}
~~~

## Ejercicios

La función `const id = setInterval()` devuelve un `id` con el número de intervalo registrado en el sistema, utilizando la función `clearInterval(id)` podemos finalizar el intervalo y dejar de repetir el `callback`, en este caso dejar de dar la hora automáticamente.

* Agrega dos botones de tipo `<button>Mi botón</button>` a la interfaz del reloj, uno con la leyenda `Inicar` y otro con la leyenda `Detener`.

* Enlaza el evento click del botón a las funciones `iniciar()` y `detener()` respectivamente (hint: usa `<button (click)="iniciar()">`).

* Define los métodos `iniciar()` y `detener()` dentro del componente `RelojComponent`.

* Agrega la variable `id` al componente (hint: `id: any = null`).

*  Define en el método `iniciar()` checha si `this.id` no es `null` y de ser así manda a llamar al método `detener()` (borra el intervalo anterior en caso de que le den `iniciar()` dos o más veces seguidas).

* En el mismo método `iniciar()` asigna `this.id` al `setInterval()` definido antes en `ngOnInit()` (quitalo de `ngOnInit`).

* En el método `detener()` checa si `this.id` no es `null` y de ser así borra el intervalo mediante `clearInterval(this.id)`, luego asigna `this.id` a `null`.

* Prueba que los botones funcionen correctamente.