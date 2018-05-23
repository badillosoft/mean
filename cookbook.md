# Recetas de MEAN

Autor: Alan Badillo Salas (badillo.soft@hotmail.com)

## SERVIDOR BÁSICO EN EXPRESS

~~~js
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Definir las rutas

http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});
~~~

## SERVIDOR EXPRESS + MONGOOSE

~~~js
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Agregar esquemas

// TODO: Agregar rutas

mongoose.connect("mongodb://localhost/mean").then(() => {
    http.createServer(app).listen(3000, () => {
        console.log("Servidor iniciado en http://localhost:3000/");
    });
});
~~~

## SERVIDOR EXPRESS + SEGURIDAD

~~~js
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// -- UTIL

function random_token(n = 32) {
    let token = "";
    while (token.length < n) {
        token += Math.random().toString(16).slice(2);
    }
    return token.slice(0, n);
}

function middleware_token(req, res, next) {
    const token = req.query.token || req.body.token;

    const cliente = clientes.filter(c => c.token === token)[0];

    if (!cliente) {
        res.status(401).send("unauthorized");
        return;
    }

    req.cliente = cliente;

    // TODO: Hacer un log en BD para guardar que el usuario accedió al sistema

    next();
}

app.use("/api", middleware_token);

// -- UTIL

// -- CLIENTES

const clientes = [
    {
        id: "123",
        nombre: "Bruno Diaz",
        correo: "batman@gmail.com",
        contraseña: "robin123",
        token: random_token()
    }
];

app.put("/api/cliente/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contraseña } = req.body;

    clientes.push({
        id,
        nombre,
        correo,
        contraseña,
        token: random_token()
    });

    res.send(clientes.filter(c => c.id === id)[0]);
});

app.get("/api/cliente", (req, res) => {
    res.send(clientes);
});

app.get("/api/cliente/:id", (req, res) => {
    const { id } = req.params;

    res.send(clientes.filter(c => c.id === id)[0]);
});

app.post("/auth/login", (req, res) => {
    const { correo, contraseña } = req.body;

    const cliente = clientes.filter(c => 
        c.correo === correo && c.contraseña === contraseña)[0];

    if (!cliente) {
        res.status(400).send("La credenciales correo y contraseña no coinciden para ningún usuario");
        return;
    }

    res.send({
        token: cliente.token
    });
});

// -- CLIENTES

http.createServer(app).listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000/");
});
~~~

## Pasos para construir un formulario de envío en Angular 6

* Crear un nuevo proyecto `ng new TrancasBurger`

* Instalar Material Angular `npm install --save @angular/material @angular/cdk` y `ng add @angular/material`

* Crear el módulo `material` mediante `ng generate module material —module=app`

* Importar y exportar los módulos en `material.module.ts`:

~~~ts
// ...
import { MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterializeModule { }
~~~

* Crear el componente `BurgerNewForm` mediante `ng generate componente BurgerNewForm`.

* Definir el formulario y conectar sus comparas mediante `[(ngModel)]`:

~~~html
<form class="burger-form" #Form="ngForm">
  <h1>Nueva Hamburguesa 
    <button [disabled]="!Form.valid" (click)="send()" mat-button color="primary" class="burger-send">Enviar &nbsp;&nbsp; <mat-icon>send</mat-icon></button>
  </h1>

  <mat-form-field class="burger-full-width">
    <input name="id" [(ngModel)]="burger._id" matInput placeholder="ID" required>
  </mat-form-field>

  <mat-form-field class="burger-full-width">
    <input name="name" [(ngModel)]="burger.name" matInput placeholder="Nombre" required>
  </mat-form-field>

  <mat-form-field class="burger-full-width">
    <textarea name="description" [(ngModel)]="burger.description" matInput placeholder="Descripción"></textarea>
  </mat-form-field>

  <mat-form-field class="burger-full-width">
    <input name="price" [(ngModel)]="burger.price" matInput placeholder="Precio" type="number" class="burger-right-align" required>
    <span matPrefix>$&nbsp;</span>
    <span matSuffix>.00</span>
  </mat-form-field>

  <mat-form-field class="burger-full-width">
    <input name="image" [(ngModel)]="burger.image" type="url" matInput placeholder="Imagen">
  </mat-form-field>

  <img src="{{ burger.image }}" alt="burger image">
</form>
~~~

* Establecer la funcionalidad de `BurgerNewFormComponent`:

~~~ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-new-form',
  templateUrl: './burger-new-form.component.html',
  styleUrls: ['./burger-new-form.component.css']
})
export class BurgerNewFormComponent implements OnInit {

  burger: any = {
    _id: Math.random().toString(16).slice(2).toUpperCase(),
    name: "",
    description: "",
    price: 50,
    image: "http://placehold.it/400x400"
  };

  constructor() { }

  ngOnInit() {
  }

  send() {
    // TODO: Enviar `burger` al servicio `burgerService.create()`

    this.burger._id = Math.random().toString(16).slice(2).toUpperCase(),
    this.burger.name = "";
    this.burger.description = "";
  }

}
~~~