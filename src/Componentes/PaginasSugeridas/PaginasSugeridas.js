import React from 'react';
import './PaginasSugeridas.css';
import declaracion from '../../img/oa.png';
import boletin from '../../img/logo-gobierno.png'

function PaginasSugeridas(){
    return(
    <div className="PaginasSugeridas">
        <h5>Paginas Sugeridas</h5>
        <a href="http://oa.jujuy.gob.ar/declaraciones-juradas/" class="btn" target="_blank">
            <div className="row">
                <div className="col-lg-4 my-auto">
                    <img src={declaracion}></img>
                </div>
                <div className="col-lg-8 my-auto">
                    Declaraciones Juradas
                </div>
            </div>                    
        </a>
        <p/>
        <a href="http://www.dipec.jujuy.gov.ar/" class="btn" target="_blank">
            <div className="row">
                <div className="col-lg-4 my-auto">
                    <img src="http://www.dipec.jujuy.gov.ar/img/logodipec.png"></img>
                </div>
                <div className="col-lg-8 my-auto">
                    Dir. Prov. de Estad. y Censo
                </div>
            </div>                      
        </a>
        <p/>
        <a href="http://boletinoficial.jujuy.gob.ar/" class="btn" target="_blank">
            <div className="row">
                <div className="col-lg-4 my-auto">
                    <img src={boletin}></img>
                </div>
                <div className="col-lg-8 my-auto">
                    Boletín Oficial
                </div>
            </div>
        </a>
        <p/>
        <a href="#/" class="btn" target="_blank">
            <div className="row">
                <div className="col-lg-4 my-auto">
                    <img src={boletin}></img>
                </div>
                <div className="col-lg-8 my-auto">
                    Girsu
                </div>
            </div>
        </a>
        <p/>
        <a href="#/" class="btn" target="_blank">¿Que es?</a>
        <p/>
        <a href="#/" class="btn" target="_blank">¿Que es?</a>
    </div>
    );
}

export default PaginasSugeridas;