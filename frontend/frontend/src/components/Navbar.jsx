import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">Tienda-App</Link>
      <ul className="navbar-nav ml-auto d-flex flex-row gap-3">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/productos">Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/ventas">Ventas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/reportes">Reportes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
