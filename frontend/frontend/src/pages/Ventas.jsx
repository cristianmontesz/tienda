import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VentaForm from '../components/VentaForm';

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [error, setError] = useState('');

  const fetchVentas = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/ventas/');
      setVentas(res.data);
    } catch (error) {
      console.error('❌ Error al cargar ventas:', error);
      setError('No se pudo cargar la lista de ventas');
    }
  };

  useEffect(() => {
    fetchVentas();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Lista de Ventas</h2>
      {error && <p className="text-danger">{error}</p>}
      
      {/* Mostrar el formulario para crear nueva venta */}
      <VentaForm onVentaCreada={fetchVentas} />

      <ul className="list-group mt-4">
        {ventas.map((venta) => (
          <li key={venta.id} className="list-group-item">
            Producto: {venta.producto} - Cantidad: {venta.cantidad} - Total: ${venta.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ventas;

