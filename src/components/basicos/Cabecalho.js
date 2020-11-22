import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function Cabecalho(props){
    return  <Jumbotron fluid>
                <h1 className="text-center">{props.titulo}</h1>
            </Jumbotron>;
}

export default Cabecalho;