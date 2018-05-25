import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ImageGallery extends Component {

  render() {
    const images = [];

    for (let i = 0; i < (this.props.total || 0); i++) {
      images.push(<img src="http://placehold.it/200x200" />);
    }

    return (
      <div>Galería de Imágenes <br/>
        {this.props.images || images}
      </div>
    );
  }

}

class App extends Component {
  render() {
    const images = [
      <img src="http://placehold.it/400x400" />
    ];
    return (
      <div>
        <ImageGallery total={50} images={images} />
      </div>
    );
  }
}

export default App;
