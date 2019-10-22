import React from 'react';
import './Page404.css';

function Page404(){
    return(
        <div className="Page404">
            <div class="container">
                <h1 class="mt-4 mb-3"> Error</h1>
                <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a className="Referencia" href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active">Error</li>
                </ol>
                <div className="Fondo">
                    <h1 className="Negritas">Um, si. Esto es incómodo.</h1>
                    <div className="row">
                        <div className="col-md-3"/>
                        <div className="col-md-6">
                        <h5>Lo intentamos muy duro, pero no podíamos encontrar la página que estabas buscando. Puedes encontrar lo que buscas en nuestra página principal</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Page404;