import React from 'react';
import Inicio from '../Inicio';
import Categoria from '../Categoria';
import Popular from '../Popular';
import Escolha from '../Escolha';
import Jogos from '../Jogos';
import { Switch, Route, Redirect } from 'react-router-dom';

function Rotas(props){
    return <Switch>
                <Route path="/" exact={true} component={Inicio} />
                <Route path="/categorias" component={Categoria} />
                <Route path="/popular" component={Popular} />
                <Route path="/escolha" component={Escolha} />
                <Route path="/jogos" component={Jogos} />
            </Switch>;
}

export default Rotas;