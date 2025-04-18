// src/components/ProtectedRoute.jsx
import React from 'react';                     // ① IMPORTAR React (necesario para JSX)
import { Navigate } from 'react-router-dom';   // ② IMPORTAR Navigate

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('access_token');
  // ③ Si no hay token, redirige a /login
  if (!token) return <Navigate to="/login" replace />;
  // ④ Si hay token, renderiza los hijos
  return children;
}
