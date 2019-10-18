import React from 'react';
import './Principal.css';
import Carousel from './Componentes/Carousel/Carousel';

function Principal() {
    return (
        <div className="Principal">
            < Carousel />
        <div className="container">
            <h1 className="my-4">Transparencia y Gobierno Abierto</h1>
            <div class="row">
                <div class="col-lg-3 mb-3">
                    <div class="card h-100">
                    <h4 class="card-header">Data Set</h4>
                    <div class="card-body">
                        <img src="img/dataset.png" alt=""/>
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer">
                        <a href="#/" class="btn btn-primary">
                            <img src="img/dataset.png" alt=""/>
                        Data Sets</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 mb-3">
                    <div class="card h-100">
                    <h4 class="card-header">Card Title</h4>
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer">
                        <a href="#/" class="btn btn-primary">Learn More</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 mb-3">
                    <div class="card h-100">
                    <h4 class="card-header">Card Title</h4>
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer">
                        <a href="#/" class="btn btn-primary">Learn More</a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 mb-3">
                <div class="card h-100">
                <h4 class="card-header">Transparencia</h4>
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
                <div class="card-footer">
                    <a href="#/" class="btn btn-primary">Learn More</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Principal;