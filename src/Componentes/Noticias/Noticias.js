import React from 'react';
import './Noticias.css';

function Noticias (){
    return(
        <div className="Noticias">
            <div className="container">
                <h2 className="my-4">Últimas noticias</h2>
                <div className="row">
                    <div className="col-lg-3 mb-2" id="noticia1">
                        <div class="card">
                          <img src="http://jujuy.gob.ar/home/img/fotos/asiste.jpg" class="card-img-top"/>
                          <div class="card-body">
                            <h5 class="card-title" id="titulo">Asiste</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/Noticias/Asiste" class="btn">Leer</a>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-2" id="noticia2">
                        <div class="card">
                          <img src="http://jujuy.gob.ar/home/img/fotos/asiste.jpg" class="card-img-top"/>
                          <div class="card-body">
                            <h5 class="card-title" id="titulo">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/Noticias/Asiste" class="btn">Leer</a>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-2" id="noticia3">
                        <div class="card">
                          <img src="http://jujuy.gob.ar/home/img/fotos/asiste.jpg" class="card-img-top"/>
                          <div class="card-body">
                            <h5 class="card-title" id="titulo">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/Noticias/Asiste" class="btn">Leer</a>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mb-2" id="noticia4">
                        <div class="card">
                          <img src="http://jujuy.gob.ar/home/img/fotos/asiste.jpg" class="card-img-top"/>
                          <div class="card-body">
                            <h5 class="card-title" id="titulo">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/Noticias/Asiste" class="btn">Leer</a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Noticias