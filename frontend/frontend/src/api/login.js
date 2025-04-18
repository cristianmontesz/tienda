// src/api/login.js
import axios from 'axios';

export const login = (credentials) =>
  axios.post(
    'http://127.0.0.1:8000/api/token/',    // ⚠️ PUERTO 8000 del backend
    credentials,
    { headers: { 'Content-Type': 'application/json' } }
  );
