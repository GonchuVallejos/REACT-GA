import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';


import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navigation/Navigation';
import Footer from './Componentes/Footer/Footer';
import Contenido from './Componentes/Contenido/Contenido';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <header>
          < Navegacion />
        </header>
          < Contenido body = { children } />
          < Footer />
      </div>
    );
  }
}

export default App;
