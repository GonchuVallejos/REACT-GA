import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navigation/Navigation';
import Footer from './Componentes/Footer/Footer';
import Principal from './Principal';

function App() {
  return (
    <div className="App">
      <header>
        < Navegacion />
      </header>
        < Principal />
        < Footer />
    </div>
  );
}

export default App;
