import React from 'react';
import './Presupuesto.css';

function Presupuesto() {
    return(
        <div className="Presupuesto">
            <div class="container">
                <h1 class="mt-4 mb-3"> Presupuesto</h1>
                <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a className="Referencia" href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active">Presupuestos anuales</li>
                </ol>
                <p></p>
                <div class="row">
                    <div class="col-md-4">
                        <select class="form-control" name="years-select" id="years-select">
                            <option value="">Seleccione un año</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                        </select>
                    </div>
                    <div class="col-md-8">
                        <select class="form-control" name="tipo-select" id="tipo-select">
                            <option value="">Seleccione una opción</option>
                            <option value="Ingresos">Ingresos</option>
                            <option value="Gastos">Gastos</option>
                            <option value="Deudas">Deudas</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presupuesto;