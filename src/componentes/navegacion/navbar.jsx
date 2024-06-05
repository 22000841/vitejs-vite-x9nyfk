import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-#5a5917 bg-#5a5917">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to = "/alertas"> Alertas y recordatorios </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/rutina"> Rutina de autocuidado </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/recursos"> Recursos y consejos </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/salud"> Seguimiento de salud </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/usuario"> Usuario </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;