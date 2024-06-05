import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './componentes/navegacion/navbar';
import Alertas from './componentes/paginas/alertas';
import Recursos from './componentes/paginas/recursos';
import Rutina from './componentes/paginas/rutina';
import Salud from './componentes/paginas/salud';
import Usuario from './componentes/paginas/usuario';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/usuario" exact component={Usuario} />
          <Route path="/alertas" component={Alertas} />
          <Route path="/recursos" component={Recursos} />
          <Route path="/rutina" component={Rutina} />
          <Route path="/salud" component={Salud} />
        </Routes>
      </Router>
      <header>
        <h1>PAZ MENTAL</h1>
        <h2>Psicología</h2>
      </header>
      <div className="search-container">
        <form className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Búsqueda de un tema específico"/>
          <button type="submit" className="search-button">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
