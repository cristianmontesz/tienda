import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReporteList = () => {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/reportes-venta-diarios/');
        console.log('📊 Reportes recibidos:', res.data); // Para depuración
        setReportes(res.data);
      } catch (error) {
        console.error('❌ Error al cargar los reportes:', error);
        alert('Error al cargar los reportes');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Reportes de Venta Diaria</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total Ventas</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((reporte) => (
            <tr key={reporte.id}>
              <td>{reporte.id}</td>
              <td>{new Date(reporte.fecha).toLocaleDateString()}</td>
              <td>${parseFloat(reporte.total_ventas).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReporteList;
