import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navigation';
import Footer from './Componentes/Footer';
import Carousel from './Componentes/Carousel'

function App() {
  return (
    <div className="App">
      < Navegacion />
      < Carousel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://es.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    < Footer />
    </div>
  );
}

export default App;
