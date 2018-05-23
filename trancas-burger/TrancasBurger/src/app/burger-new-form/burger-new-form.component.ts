import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../burger.service';
import { MatSnackBar } from '@angular/material';

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

  constructor(
    private burgerService: BurgerService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  async send() {
    try {
      await this.burgerService.create(this.burger);
      this.snackBar.open('Hamburguesa enviada', "aceptar", {
        duration: 1000,
        horizontalPosition: "center",
        verticalPosition: "top"
      });
    } catch(error) {
      console.log(error);
      this.snackBar.open("No se pudo enviar la hamburguesa", "aceptar", {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "top"
      });
      return;
    }

    this.burger._id = Math.random().toString(16).slice(2).toUpperCase(),
    this.burger.name = "";
    this.burger.description = "";
  }

}
