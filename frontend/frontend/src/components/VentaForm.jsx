import React, { useState } from 'react';
import { crearVenta } from '../api/ventas'; // Ajusta la ruta si es diferente

const CreateVentaForm = ({ onVentaCreada }) => {
  const [form, setForm] = useState({
    producto: '',
    cantidad: '',
    total: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearVenta(form);
      setForm({ producto: '', cantidad: '', total: '' });
      if (onVentaCreada) onVentaCreada(); // Actualiza la lista
    } catch (error) {
      console.error('❌ Error al crear venta:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <h4>Crear nueva venta</h4>
      <input
        type="text"
        name="producto"
        placeholder="ID del Producto"
        value={form.producto}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="number"
        name="cantidad"
        placeholder="Cantidad"
        value={form.cantidad}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <input
        type="number"
        name="total"
        placeholder="Total"
        value={form.total}
        onChange={handleChange}
        className="form-control mb-2"
        required
      />
      <button type="submit" className="btn btn-success">Registrar venta</button>
    </form>
  );
};

export default CreateVentaForm;
