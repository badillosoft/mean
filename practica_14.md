# Práctica XIV - Pipes

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## Introducción

Los `pipes` o *transformadores en tubería* son comandos de transformación que podemos utilizar dentro de los enlaces de tipo mostacho `{{ · }}` para convertir un valor en otro basado en un patrón o lógica. Por ejemplo, el valor `2` podríamos convertirlo en `PAR` y el valor `3` en `IMPAR` utilizando `{{ n | par_impar | uppercase }}`.

En la página: https://angular.io/api?type=pipe podemos encontrar diversos `pipes` predefinidos como utilizarlos, los más importantes son:

* AsyncPipe
* CurrencyPipe
* DatePipe
* DecimalPipe
* I18nPluralPipe
* I18nSelectPipe
* JsonPipe
* LowerCasePipe
* PercentPipe
* SlicePipe
* TitleCasePipe
* UpperCasePipe

En está práctica vamos a ver como crear nuestros propios `pipes` para hacer transformaciones personalizadas.

## Crear un `pipe`

Podemos crear un `pipe` mediante el comando:

> `ng generate pipe reloj`

El cuál creará el archivo `src/app/reloj.pipe.ts` que contiene la clase `RelojPipe` que implementa la interfaz `PipeTransform` con el método ` transform(value: any, args?: any): any`.

El método transform recibe el valor de entrada a transformar, por ejemplo, si queremos transformar `2` en `02` usaríamos `{{ 2 | reloj }}` para añadir el cero faltante, entonces, vamos a ajustar el método `transform()` para agregarle un cero a los dígitos del reloj cuándo sea necesario:

> `src/app/reloj.pipe.ts`

~~~ts
@Pipe({
  name: 'reloj'
})
export class RelojPipe implements PipeTransform {

  transform(value: Number): String {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

}
~~~

Observa que somos más estrictos con los tipos de datos e impedimos que `value` reciba otra cosa diferente a `Number`, esto va a hacer que el `pipe` sólo pueda recibir como entrada una variable de tipo `Number`.

También observa que el decorador `@Pipe` estable que el nombre del `pipe` será conocido como `reloj`, es decir, lo usaremos como `{{ input | reloj }}` donde `input` será de tipo `Number` y el resultado de la transformación será un `String` que le agregue un `0` a los valores menores a `10` (los de un sólo dígito).

Ahora podemos aplicar el `pipe` a las variables `horas`, `minutos` y `segundos` en la interfaz del componente reloj, el cuál debería lucir como:

> `src/app/reloj/reloj.component.html`

~~~html
<div class="reloj">
  <h1>Reloj</h1>
  <h2>{{ horas | reloj }}:{{ minutos | reloj }}:{{ segundos | reloj }}</h2>
  <button (click)="iniciar()" >iniciar</button>
  <button (click)="detener()" >detener</button>
</div>
~~~

Observa que ahora antes de mostrar las horas, minutos y segundos, dichos valores serán transformados para agregar un `0` en caso de ser necesario para conservar la salida siempre a dos dígitos.

## Pipes con argumentos

Podemos crear `pipes` más complejos para transformar la entrada en distintas variaciones de un mismo formato, por ejemplo, piense que quiere transformar los números `[horas, minutos, segundos]` como `[13, 5, 2]` en una hora en formato `24 horas` de tal forma que quede `13:05:02` o en formato `am/pm` de tal forma que quede `01:05:02 pm`.

Esto es posible definiendo un `pipe` variable donde la variación del `pipe` varia en su tipo de formato (`24 horas` o `am/pm`). Podemos crear el `pipe` que reciba en como parámetro de transformación el tipo de transformación. Supongamos que definimos el `pipe` llamado `reloj24xm` de tal forma que podamos llamar al `pipe` como `[horas, minutos, segundo] | reloj24xm:"xm"` o por defecto `[horas, minutos, segundo] | reloj24xm` y también lo podemos llamar como `[horas, minutos, segundo] | reloj24xm:"24"`.

Observa que ahora la entrada del `pipe` es `[horas, minutos, segundos]`, es decir, su tipo de dato será `[Number, Number, Number]` o `Array<Number>` en general. También observa que podemos llamar al `pipe` enviando un argumento asociado con `:`, por ejemplo `reloj24xm:"24"` pasaría el parámetro `"24"` a los argumentos del `pipe`.

Entonces, para definir este `pipe` haremos `ng generate pipe reloj24xm` y el código debería quedar como:

> `src/app/reloj24xm.pipe.ts`

~~~ts
@Pipe({
  name: 'reloj24xm'
})
export class Reloj24xmPipe implements PipeTransform {

  fix0(value: Number): String {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  transform(value: [Number, Number, Number], type: String = "xm"): String {
    const [horas, minutos, segungos] = value;

    if (type === "24") {
      return `${this.fix0(horas)}:${this.fix0(minutos)}:${this.fix0(segungos)}`;
    }

    let horas_med : Number = horas > 12 ? horas.valueOf() - 12 : horas;

    let xm = horas >= 12 ? "pm" : "am";

    if (horas === 0 || horas === 24) {
      horas_med = 12;
      xm = "am";
    }

    return `${this.fix0(horas_med)}:${this.fix0(minutos)}:${this.fix0(segungos)} ${xm}`;
  }

}
~~~

Observa los detalles cuidadosamente, por ejemplo, comenzamos por definir una función llamada `fix0()` que recibe un número y devuelve una cadena con el número arreglado si le falta un `0`. Luego implementamos el método `transform()` de la interfaz `PipeTransform`, el cual recibe el valor de transformación, que ahora será un arreglo con `3` números (contiene las horas, los minutos y segundos) y también recibe como argumento del `pipe` el tipo de formato (este se recibe con `:` en el `pipe`, ej. `reloj24xm:"xm"`), por defecto el formato es `"xm"` por lo que si no se manda ningún argumento al `pipe` este tomará el valor por defecto.

Descomponemos la variable `value` en `3` variables (horas, minutos y segundos) mediante `const [horas, minutos, segungos] = value;`.

Si el tipo de formato (la variable `type`) es a `24 horas` simplemente devolvemos la concatenación de las horas, minutos y segundos arregladas previamente mediante la variable `fix0()`.

En caso contrario resolvemos como deberían ser las horas en el meridiano de `1-11 horas` son de las las `1-11 am`, las `12 horas` son `12 pm`, de `13-23 horas` son de las `1-11 pm` y las `0 horas` o las `24 horas` son las `12 am`.

Finalmente podemos utilizar el `pipe` en la interfaz modificando:

> `src/app/reloj/reloj.component.html`

~~~html
<div class="reloj">
  <h1>Reloj</h1>
  <h2>{{ [horas, minutos, segundos] | reloj24xm:"24" }}</h2>
  <button (click)="iniciar()" >iniciar</button>
  <button (click)="detener()" >detener</button>
</div>
~~~

## Ejercicios

* Crea en el componente del reloj (`RelojComponent`) una variable llamada formato de tipo cadena con valor inicial `"xm"` (hint. `formato: String = "xm"`).

* Crea un input de tipo `checkbox` (ver https://www.w3schools.com/html/html_form_input_types.asp) y crea una referencia `#` al mismo llamada `Checkbox` (hit. `<input type="checkbox" #Checkbox>`).

* Crea un método llamado `cambiarFormato()` que reciba un booleano llamado `f24` y si es `true` que ponga a la variable `formato` a `"24"`, sino `formato` deberá ser `"xm"` (hint. `this.formato = f24 ? "24" : "xm"`).

* Enlaza el evento `change` del input-checkbox con el método `cambiarFormato()` y envía el valor `checked` del input-checkbox (hint. `<input type="checkbox" (change)="cambiarFormato(Checkbox.checked)" #Checkbox>`).

* Enlaza la variable `formato` en el `pipe: reloj24xm` en el argumento (hint. `{{ [horas, minutos, segundos] | reloj24xm:formato }}`).

* Agrega texto después del input-checkbox como `Formato 24 horas`.

* Prueba que al marcar y desmarcar el input-checkbox se cambie el formato.