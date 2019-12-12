import React from 'react';
import './AccesosPrincipales.css';
import btnpresupuesto from '../../img/presupuesto.svg';
import btnescala from '../../img/escala.svg';
import btndatos from '../../img/datos.svg';
import btndecretos from '../../img/decretos.svg';

function AccesosPrincipales() {
    return (
    <div className="AccesosPrincipales">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 mb-2" id="presupuesto">
                    <p/>
                    <a href="/Presupuesto">
                         <img src={btnpresupuesto} className="svg" alt=""/>
                         <p/>
                    </a>
                    <p>PRESUPUESTO</p>
                    <small>Plan de distribución de recursos del estado provincial</small>
                </div>
                <div className="col-lg-3 mb-2" id="escala">
                    <p/>
                    <a href="http://www.gajujuy.gob.ar/escala-salarial/">
                        <img src={btnescala} className="svg" alt=""/>
                        <p/>
                    </a>
                    <p>ESCALA SALARIAL</p>
                    <small>Remuneración percibida por los funcionarios del Poder Ejecutivo</small>
                </div>
                <div className="col-lg-3 mb-2" id="datos">
                    <p/>
                    <a href="http://www.gajujuy.gob.ar/datos-abiertos/">
                        <img src={btndatos} className="svg" alt=""/>
                        <p/>
                    </a>
                    <p>DATOS ABIERTOS</p>
                    <small>Datos que pueden ser utilizados, reutilizados y redistribuidos libremente</small>
                </div>
                <div className="col-lg-3 mb-2" id="decretos">
                    <p/>
                     <a href="http://www.gajujuy.gob.ar/decretos/">
                         <img src={btndecretos} className="svg" alt=""/>
                        <p/>
                    </a>
                    <p>DESCRETOS Y RESOLUCIONES</p>
                    <small>Decretos y resoluciones ministeriales del poder ejecutivo</small>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AccesosPrincipales;