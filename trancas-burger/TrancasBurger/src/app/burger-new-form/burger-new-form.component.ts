import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-new-form',
  templateUrl: './burger-new-form.component.html',
  styleUrls: ['./burger-new-form.component.css']
})
export class BurgerNewFormComponent implements OnInit {

  burger: any = {
    _id: Math.random().toString(16).slice(2),
    name: "",
    description: "",
    price: 50,
    image: "http://placehold.it/400x400"
  };

  constructor() { }

  ngOnInit() {
  }

}
