import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-a',
  templateUrl: './pagina-a.component.html',
  styleUrls: ['./pagina-a.component.css']
})
export class PaginaAComponent implements OnInit {

  titulo : String = "Hola mundo";

  frutas : Array<String> = [
    "Manzana",
    "Mango",
    "Maracuya",
    "Mora"
  ];

  frutaSeleccionada : String = "";

  visible : Boolean = false;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.titulo = `Hola ${Math.random().toString(16).slice(2)}`;
    }, 3000);
  }

  agregarFruta(nombre) {
    // if (nombre[0] !== nombre[0].toUpperCase()) {
    //   return;
    // }

    if (nombre.match(/^[^A-Z]/)) {
      return;
    }

    this.frutas.push(nombre);
  }

}
