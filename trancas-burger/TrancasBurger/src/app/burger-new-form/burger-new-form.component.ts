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
