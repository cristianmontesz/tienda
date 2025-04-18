// api/ventas.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/ventas/';

export const crearVenta = async (ventaData) => {
  try {
    const response = await axios.post(API_URL, ventaData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const obtenerVentas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};
