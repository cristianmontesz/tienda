import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reportes = () => {
  const [reportes, setReportes] = useState([]);
  const [error, setError] = useState('');

  const fetchReportes = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      const headers = token
        ? { Authorization: `Bearer ${token}` }
        : {};

      const res = await axios.get('http://127.0.0.1:8000/api/reportes-venta-diarios/', {
        headers: headers
      });

      setReportes(res.data);
    } catch (error) {
      console.error('❌ Error al cargar reportes:', error);
      setError('No se pudo cargar el reporte de ventas');
    }
  };

  useEffect(() => {
    fetchReportes();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Reporte Diario de Ventas</h2>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {reportes.map((reporte) => (
          <li key={reporte.id} className="list-group-item">
          <strong>Fecha:</strong> {reporte.fecha} <br />
          <strong>Total Vendido:</strong> ${reporte.total_ventas} <br />
          <strong>Productos Vendidos:</strong> {reporte.total_productos_vendidos}
        </li>        
        ))}
      </ul>
    </div>
  );
};

export default Reportes;
