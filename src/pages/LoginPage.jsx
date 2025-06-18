import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../api/authService';
import { loginSuccess } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import UserTypeModal from "../components/modals/UserTypeModal";

import InputField from '../components/form/InputField';
import PasswordField from '../components/form/PasswordField';
import loginImage from '../assets/registro.jpeg'; // ajustá la ruta si usás otra imagen

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

useEffect(() => {
  if (isAuthenticated) {
    navigate('/');
  }
}, [isAuthenticated, navigate]);

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await loginUser(form);
      dispatch(loginSuccess(res));
      navigate('/');
    } catch (err) {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-center text-xl font-semibold mb-6 text-gray-600">BIENVENIDO</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              id="email"
              label="Correo electrónico"
              type="email"
              value={form.email}
              onChange={handleChange}
            />

            <div className="relative">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contraseña
                </label>
                <Link to="/recuperar" className="text-xs text-sky-500 hover:underline">
                    ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <PasswordField
                id="password"
                label=""
                value={form.password}
                onChange={handleChange}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                className="w-full bg-sky-500 text-white font-semibold py-2 rounded hover:bg-sky-600 transition"
            >
            Iniciar sesión
            </button>
          </form>



          <div className="text-center mt-4 text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <button
                onClick={() => setShowRegisterModal(true)}
                className="text-sky-600 hover:underline font-medium"
            >
                Registrate
            </button>
        </div>
        </div>
      </div>

      {/* Imagen */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={loginImage}
          alt="Fondo login"
          className="w-full h-full object-cover"
        />
      </div>
      {showRegisterModal && (
  <UserTypeModal onClose={() => setShowRegisterModal(false)} />
)}
    </div>
  );
}
