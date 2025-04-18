import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterForm() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    documento: '',
    telefono: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/cuentas/register/', userData);
      alert('Usuario registrado correctamente');
      navigate('/login');
    } catch (error) {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Registrarse</h2>
      <form onSubmit={handleRegister} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input type="text" className="form-control" name="username" value={userData.username} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" name="password" value={userData.password} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Documento</label>
          <input type="text" className="form-control" name="documento" value={userData.documento} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="text" className="form-control" name="telefono" value={userData.telefono} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Registrarse</button>
      </form>
      <p className="text-center mt-3">
        ¿Ya tienes cuenta?{' '}
        <button className="btn btn-link p-0" onClick={() => navigate('/login')}>
          Inicia sesión aquí
        </button>
      </p>
    </div>
  );
}

export default RegisterForm;
