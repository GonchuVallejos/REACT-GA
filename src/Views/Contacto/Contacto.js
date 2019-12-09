import React from 'react';
import './Contacto.css';

function Contacto() {
    return(
        <div class="Contacto">
        <div className ="container">

                <h1 class="mt-4 mb-3"> Contacto</h1>
                <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a className="Referencia" href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active">Contacto</li>
                </ol>
                <p></p>
    
            <div class="row">
            <div class="col-lg-8 mb-4">
                <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1819.7849308289076!2d-65.2999279!3d-24.1868136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f4370ea9e81%3A0xe73c14b82bfd607d!2sDirecci%C3%B3n%20de%20Transparencia%20y%20Gobierno%20Abierto!5e0!3m2!1ses!2sar!4v1575299301003!5m2!1ses!2sar"></iframe>

            </div>
            <div class="col-lg-4 mb-4">
                <h3>Contacto</h3>
                <p>Sarmiento 174 - Dpto 12A</p>
                <p>San Salvador de Jujuy, CP 4600</p>
                <br/>
                <p>
                    <abbr title="Telefono">T</abbr>: 0388-4239452 | 388 446-2864
                </p>
                <p>
                    <abbr title="Email">E</abbr>: gobiernoabiertojujuy@gmail.com
                </p>
                <p>
                <abbr title="Horarios">H</abbr>: Lunes - Viernes: 8:00 AM a 1:00 PM
                </p>
            </div>
            </div>
    
            <div class="row">
            <div class="col-lg-8 mb-4">
                <h3>Enviar un mensaje</h3>
                <form name="sentMessage" id="contactForm" novalidate>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Nombre completo:</label>
                            <input type="text" class="form-control" id="name" required data-validation-required-message="Por favor ingrese su nombre."></input>
                            <p class="help-block"></p>
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Teléfono:</label>
                            <input type="tel" class="form-control" id="phone" required data-validation-required-message="Por favor ingrese su nombre."></input>
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>E-Mail</label>
                            <input type="email" class="form-control" id="email" required data-validation-required-message="Por favor ingrese su e-mail."></input>
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Mensaje:</label>
                            <textarea rows="10" cols="100" class="form-control" id="mensaje" required data-validation-required-message="Por favor ingrese su mensaje" maxlength="999"></textarea>
                        </div>
                    </div>
                    <a href="#/" class="btn">Enviar</a>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
}
export default Contacto;