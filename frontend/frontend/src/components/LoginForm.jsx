import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/login';

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      username: usuario.trim(),
      password: contraseña.trim(),
    };

    try {
      const response = await login(credentials);

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      localStorage.setItem('username', credentials.username);

      navigate('/');
    } catch (err) {
      console.error('❌ Error en login:', err.response?.data || err.message);
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input
            id="usuario"
            type="text"
            className="form-control"
            placeholder="Tu usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contraseña" className="form-label">Contraseña</label>
          <input
            id="contraseña"
            type="password"
            className="form-control"
            placeholder="Tu contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Entrar</button>
      </form>
      <p className="text-center mt-3">
        ¿No tienes cuenta?{' '}
        <button className="btn btn-link p-0" onClick={() => navigate('/register')}>
          Regístrate aquí
        </button>
      </p>
    </div>
  );
}
