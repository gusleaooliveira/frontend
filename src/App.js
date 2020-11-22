import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/basicos/Menu';
import Rota from './components/basicos/Rotas'
import { BrowserRouter as Router } from 'react-router-dom';
import React from  'react';

function App() {
  return (
      <React.Fragment>
        <Router>
            <Menu />
            <Rota />
        </Router>
      </React.Fragment>
  );
}

export default App;
