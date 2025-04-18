import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/productos/reportes-venta-diarios/';

export const obtenerReportes = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
