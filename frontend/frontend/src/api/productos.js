import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/productos/';

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const obtenerProductos = () => {
  return axios.get(API_URL, getAuthHeaders());
};

export const crearProducto = (productoData) => {
  return axios.post(API_URL, productoData, getAuthHeaders());
};

export const eliminarProducto = (id) => {
  return axios.delete(`${API_URL}${id}/`, getAuthHeaders());
};

export const actualizarProducto = (id, productoData) => {
  return axios.put(`${API_URL}${id}/`, productoData, getAuthHeaders());
};
