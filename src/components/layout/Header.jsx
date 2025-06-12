import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-sky-400 text-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        FitCoaches
      </Link>

      <nav className="flex gap-4 items-center">
        <Link to="/">Inicio</Link>
        <Link to="/buscar">Buscar servicios</Link>

        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium"
            >
              Registrar
            </Link>
          </>
        ) : user?.type === "cliente" ? (
          <>
            <Link to="/mis-servicios">Mis Contrataciones</Link>
            <Link to="/perfil">Mi Perfil</Link>
            <button
              onClick={handleLogout}
              className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium hover:bg-gray-100"
            >
              Cerrar sesión
            </button>
          </>
        ) : user?.type === "entrenador" ? (
          <>
            <Link to="/mis-servicios">Servicios</Link>
            <Link to="/estadisticas">Estadísticas</Link>
            <Link to="/perfil">Mi Perfil</Link>
            <button
              onClick={handleLogout}
              className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium hover:bg-gray-100"
            >
              Cerrar sesión
            </button>
          </>
        ) : null}
      </nav>
    </header>
  );
}
