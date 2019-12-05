import React from 'react';
import './Principal.css';
import Carousel from '../../Componentes/Carousel/Carousel';
import Accesos from '../../Componentes/AccesosPrincipales/AccesosPrincipales';
import Preguntas from '../../Componentes/PreguntasFrecuentes/PreguntasFrecuentes';
import Solicitudes from '../../Componentes/InfoSolicitudes/InfoSolicitudes';
import Paginas from '../../Componentes/PaginasSugeridas/PaginasSugeridas';
import Noticias from '../../Componentes/Noticias/Noticias';

function Principal() {
    return (
        <div className="Principal">
            < Carousel />
            <div className="container">
                <h1 className="my-4">Transparencia y Gobierno Abierto</h1>
                    < Accesos />
                <div className="informacion">
                    <div className="row">
                        <div className="col-lg-3">
                            < Preguntas />
                        </div>
                        <div className="col-lg-6">
                            < Solicitudes />
                        </div>
                        <div className="col-lg-3">
                            < Paginas />
                        </div>
                    </div>
                </div>
                < Noticias />
            </div>
        </div>
    );
}

export default Principal;