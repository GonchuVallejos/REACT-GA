import React from 'react';
import './LeerNoticia.css';

function LeerNoticia (){
    return(
        <div className="LeerNoticia">
            <div class="container">
                <h1 class="mt-4 mb-3"> Noticias</h1>
                <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a className="Referencia" href="/">Inicio</a>
                </li>
                <li class="breadcrumb-item active">Noticia</li>
                </ol>
                <img src="http://jujuy.gob.ar/home/img/fotos/asiste.jpg" alt="" />
                <h2 className="my-5" id="titulo">Asiste</h2>
                <p>tgvhhjhhdschiesjwiocscrSin embargo, no todas las propiedades numéricas del objeto style son convertidas a strings con píxeles. Ciertas propiedades se mantienen sin unidad (p.ej zoom, order, flex). Una lista completa de las propiedades sin unidad puede verse aquí.

suppressContentEditableWarning
Normalmente, hay una advertencia cuando un elemento con hijos también se marca como contentEditable, porque no funcionará. Este atributo suprime esa advertencia. No lo uses a menos que estés construyendo una biblioteca como Draft.js que administra contentEditable manualmente.

suppressHydrationWarning
Si usas renderización de React del lado del servidor, normalmente hay una advertencia cuando el servidor y el cliente presentan contenido diferente. Sin embargo, en algunos casos raros, es muy difícil o imposible garantizar una coincidencia exacta. Por ejemplo, se espera que las marcas de tiempo difieran en el servidor y en el cliente.

Si estableces suppressHydrationWarning como true, React no te advertirá sobre los desajustes en los atributos y el contenido de ese elemento. Solo funciona a un nivel de profundidad y está diseñado para ser utilizado como una vía de escape. No lo uses en exceso. Puedes leer más sobre hidratación en la documentación de ReactDOM.hydrate().

</p>
            </div>
        </div>
    );
}

export default LeerNoticia;