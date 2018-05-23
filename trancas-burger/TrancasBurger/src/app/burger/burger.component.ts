import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  @Input() data: any = {
    _id: "XYZ",
    name: "Fake Burger",
    description: "La hamburguesa falsa",
    price: 50,
    image: "http://placehold.it/400x400"
  }

  @Input() mode: String = "big";

  constructor() { }

  ngOnInit() {
  }

}
