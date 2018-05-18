import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-a',
  templateUrl: './pagina-a.component.html',
  styleUrls: ['./pagina-a.component.css']
})
export class PaginaAComponent implements OnInit {

  titulo : String = "Hola mundo";

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.titulo = `Hola ${Math.random().toString(16).slice(2)}`;
    }, 3000);
  }

}
