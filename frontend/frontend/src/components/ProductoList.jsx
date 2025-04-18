import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoList = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ nombre: '', descripcion: '', precio: '', stock: '' });
  const [editando, setEditando] = useState(null); // ID del producto que se está editando

  const fetchProductos = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/productos/');
      setProductos(res.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando) {
        await axios.put(`http://127.0.0.1:8000/api/productos/${editando}/`, form);
      } else {
        const res = await axios.post('http://127.0.0.1:8000/api/productos/', form);
        console.log('Producto creado con ID:', res.data.id);
      }
      setForm({ nombre: '', descripcion: '', precio: '', stock: '' });
      setEditando(null);
      fetchProductos();
    } catch (error) {
      console.error('Error al guardar producto:', error);
    }
  };

  const handleEdit = (producto) => {
    setForm({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      stock: producto.stock
    });
    setEditando(producto.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/productos/${id}/`);
        fetchProductos();
      } catch (error) {
        console.error('Error al eliminar producto:', error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>{editando ? 'Editar Producto' : 'Crear Producto'}</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} className="form-control mb-2" />
        <input type="number" name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} className="form-control mb-2" />
        <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">{editando ? 'Actualizar' : 'Crear'}</button>
        {editando && (
          <button type="button" className="btn btn-secondary ms-2" onClick={() => {
            setForm({ nombre: '', descripcion: '', precio: '', stock: '' });
            setEditando(null);
          }}>
            Cancelar
          </button>
        )}
      </form>

      <h3>Lista de Productos</h3>
      <ul className="list-group">
        {productos.map((producto) => (
          <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              <strong>ID:</strong> {producto.id} - <strong>{producto.nombre}</strong> - {producto.descripcion} - ${producto.precio} - Stock: {producto.stock}
            </span>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(producto)}>Editar</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(producto.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoList;

