import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputField from '../components/form/InputField';
import PasswordField from '../components/form/PasswordField';
import { registerUser } from '../api/userService';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import backgroundImg from '../assets/registro.jpeg';

export default function RegisterFormPage() {
  const { state } = useLocation();
  const userType = state?.userType;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await registerUser({ ...form, type: userType });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrar');
    }
  };

  if (!userType) {
    navigate('/register');
    return null;
  }

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-600">Crear tu cuenta</h2>

          <div className="bg-sky-100 text-sky-600 text-sm font-semibold text-center py-1 rounded mb-4">
            {userType.charAt(0).toUpperCase() + userType.slice(1)}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField id="firstName" label="Nombre" type="text" value={form.firstName} onChange={handleChange} />
            <InputField id="lastName" label="Apellido" type="text" value={form.lastName} onChange={handleChange} />
            <InputField id="email" label="Email" type="email" value={form.email} onChange={handleChange} />
            <PasswordField id="password" label="Contraseña" value={form.password} onChange={handleChange} />
            <div className="text-sm text-gray-500 mb-2">La contraseña debe incluir mínimo 8 caracteres, al menos una mayúscula, un número y un carácter especial.</div>
            <PasswordField id="confirmPassword" label="Confirmar contraseña" value={form.confirmPassword} onChange={handleChange} />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-sky-500 text-white font-semibold py-2 rounded hover:bg-sky-600 transition"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>

      {/* Imagen */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={backgroundImg}
          alt="Fondo registro"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
