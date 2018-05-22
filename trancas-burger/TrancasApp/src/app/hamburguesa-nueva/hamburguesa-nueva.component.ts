import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburguesa-nueva',
  templateUrl: './hamburguesa-nueva.component.html',
  styleUrls: ['./hamburguesa-nueva.component.css']
})
export class HamburguesaNuevaComponent implements OnInit {

  data: any = {
    _id: Math.random().toString(16).slice(2).toUpperCase(),
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "http://placehold.it/400x400"
  };

  constructor() { }

  ngOnInit() {
  }

  async enviar() {
    const token = localStorage.getItem("token");
    
    const url = `http://localhost:5000/api/hamburguesa?token=${token}`;
    
    const options = {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.data)
    };
    
    const response = await fetch(url, options);

    if (response.status !== 200) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();

    console.log(result);
  }

}
