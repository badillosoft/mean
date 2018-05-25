import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as BurgerService from './services/BurgerService';
import Search from './components/Search';

class App extends Component {

  render() {
    return (
      <div>hola
        <Search onSearch={text => console.log("Buscando:", text)} />
      </div>
    );
  }
}

export default App;
