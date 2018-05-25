import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as BurgerService from './BurgerService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  pulsame(e) {
    console.log(e);
  }

  buscar(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      console.log("Enviar busqueda", e.target.value);
      if (typeof this.props.onSearch === "function") {
        this.props.onSearch(e.target.value);
      }
    }
  }

  render() {
    return (
      <div>hola
        <input onKeyPress={ e => this.buscar(e) } type="text" placeholder="burcar..." />
        <button onClick={ e => this.pulsame(e) } >pulsame</button>
      </div>
    );
  }
}

export default App;
