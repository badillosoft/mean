import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-b',
  templateUrl: './pagina-b.component.html',
  styleUrls: ['./pagina-b.component.css']
})
export class PaginaBComponent implements OnInit {

  MiInput : HTMLObjectElement;

  constructor() { }

  ngOnInit() {
  }

  pulsar() {
    console.log("Hola mundo");
  }

}
