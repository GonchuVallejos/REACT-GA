import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Componentes/Navigation/Navigation';
import Footer from './Componentes/Footer/Footer';
import Principal from './Principal';
import Formulario from './Views/SolicitudInformación/Formulario_Sol_Inf';
import Informacion from './Views/Presupuesto_Ciudadano/Informacion_PC';
import Presupuesto from './Views/Presupuesto_Ciudadano/Presupuesto';

function App() {
  return (
    <div className="App">
      <header>
        < Navegacion />
      </header>
        < Principal />
        < Formulario />
        < Informacion />
        <Presupuesto />
        < Footer />
    </div>
  );
}

export default App;
