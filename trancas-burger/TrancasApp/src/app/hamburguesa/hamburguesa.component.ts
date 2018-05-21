import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['./hamburguesa.component.css']
})
export class HamburguesaComponent implements OnInit {

  id: String = "batman-burguer";

  data: any = {};

  constructor() { }

  async ngOnInit() {
    const token = localStorage.getItem("token");
    const url = `http://localhost:5000/api/hamburguesa/${this.id}?token=${token}`;
    const response = await fetch(url);

    if (response.status !== 200) {
      const text = await response.text();
      throw new Error(text);
    }

    this.data = await response.json();

    console.log(this.data);
  }

}
