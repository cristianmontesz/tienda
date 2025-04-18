import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Ventas from './pages/Ventas';
import Reportes from './pages/Reportes';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Rutas protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/productos"
          element={
            <ProtectedRoute>
              <Productos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ventas"
          element={
            <ProtectedRoute>
              <Ventas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reportes"
          element={
            <ProtectedRoute>
              <Reportes />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<p>404 - Página no encontrada</p>} />
      </Routes>
    </Router>
  );
}

export default App;


