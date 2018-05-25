import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as BurgerService from './BurgerService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      burgers: [{
        _id: "xhhh",
        name: "Fake",
        description: "fake",
        image: "http://placehold.it/400x400"
      }]
    };
  }

  async componentWillMount() {
    const new_burgers = await BurgerService.all();
    console.log(new_burgers);
    // this.setState({
    //   burgers: [...this.state.burgers, ...new_burgers]
    // });
    this.setState((prevState, props) => {
      return {
        burgers: [...prevState.burgers, ...new_burgers]
      };
    });
  }

  render() {
    const burgers_list = [];

    for (let burger_data of this.state.burgers) {
      let burger = (
        <div key={burger_data._id}>
          <h1>{burger_data.name}</h1>
          <h2>{burger_data.description}</h2>
          <img src={burger_data.image} />
        </div>
      );

      burgers_list.push(burger);
    }
    return (
      <div>{ burgers_list }</div>
    );
  }
}

export default App;
