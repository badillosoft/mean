import { Component, OnInit } from '@angular/core';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-panel-mensajes',
  templateUrl: './panel-mensajes.component.html',
  styleUrls: ['./panel-mensajes.component.css']
})
export class PanelMensajesComponent implements OnInit {

  mensajes: Array<any> = [];

  constructor() { }

  ngOnInit() {
    const socket = io("http://localhost:3000");

    socket.on("mensaje-nuevo", mensaje => {
      this.mensajes.push(mensaje);
    });
  }

}
