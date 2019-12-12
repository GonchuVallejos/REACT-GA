import React from 'react';
import './InfoSolicitudes.css';

function InfoSolicitudes() {
    return(
    <div className="InfoSolicitudes">
        <div class="row">
            <div class="col-lg-6">
                    <div className="row" >
                        <div className="col-lg-5" id="nro_sol">
                            400
                        </div>
                        <div className="col-lg-7 align-self-center">
                            Solicitudes de informacion
                        </div>
                    </div>
            </div>
            <div class="col-lg-6 my-auto">
                <a href="/SolicitudInformacion" class="btn">Solicitar informacion</a>
            </div>
        </div>
        <hr></hr>
        <p></p>
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Información Solicitada"></input>
            <div class="input-group-append">
                <a href="#/" class="btn">Buscar</a>
            </div>
        </div>
        <hr></hr>
        Instituciones con mayor número de Solicitudes de Información
        <div class="row">
            <div class="col-lg-6">
                <p/>
                <a href="#/" class="btn">Presupuesto</a>
                <p/>
                <a href="#/" class="btn">Presupuesto</a>
                <p/>
                <a href="#/" class="btn">Presupuesto</a>
            </div>
            <div class="col-lg-6">
                <p/>
                <a href="#/" class="btn">Presupuesto</a>
                <p/>
                <a href="#/" class="btn">Datos Abiertos</a>
                <p/>
                <a href="#/" class="btn">Presupuesto</a>
            </div>
        </div>
    </div>
    );
}

export default InfoSolicitudes;