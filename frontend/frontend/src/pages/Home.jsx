import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    window.location.href = '/login';
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-3">¡Hola, {username || 'Usuario'}! 👋</h1>
      <p className="lead">Bienvenido a la Tienda-App</p>

      <div className="row mt-5">
        <div className="col-md-4 mb-4">
          <div
            className="card shadow-lg h-100"
            onClick={() => navigate('/productos')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body">
              <h5 className="card-title">🛒 Productos</h5>
              <p className="card-text">Ver y administrar los productos disponibles.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card shadow-lg h-100"
            onClick={() => navigate('/ventas')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body">
              <h5 className="card-title">💵 Ventas</h5>
              <p className="card-text">Registrar y ver historial de ventas.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card shadow-lg h-100"
            onClick={() => navigate('/reportes')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body">
              <h5 className="card-title">📊 Reportes</h5>
              <p className="card-text">Consulta de reportes de ventas diarias.</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={handleLogout} className="btn btn-danger mt-4">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Home;
