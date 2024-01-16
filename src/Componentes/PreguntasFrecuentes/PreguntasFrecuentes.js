import React from 'react';
//import './PreguntasFrecuentes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from 'react-bootstrap';

function PreguntasFrecuentes(){
    return(
    <Alert variant="info">
        <h5>Preguntas Frecuentes</h5>
        <Button variant="primary">
            Block level button
        </Button>
        <Button variant="primary">
            Block level button
        </Button>
        <Button variant="primary">
            Block level button
        </Button>
        <Button variant="primary">
            Block level button
        </Button>

    </Alert>
    );
}

export default PreguntasFrecuentes;