import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import UserTypeModal from "../modals/UserTypeModal";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="bg-sky-400 text-white shadow-md px-0 py-4 w-screen fixed top-0 left-0 z-50">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white flex-1">
            FitCoaches
          </Link>

          {/* Hamburger Button (mobile only) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Menú normal */}
          <nav className="hidden md:flex flex-1 justify-center gap-6">
            <Link to="/">Inicio</Link>
            <Link to="/buscar">Buscar servicios</Link>
            {isAuthenticated && user?.type === "cliente" && (
              <Link to="/mis-servicios">Mis Contrataciones</Link>
            )}
            {isAuthenticated && user?.type === "entrenador" && (
              <>
                <Link to="/mis-servicios">Servicios</Link>
                <Link to="/estadisticas">Estadísticas</Link>
              </>
            )}
          </nav>

          {/* Botones derecha (desktop) */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium"
                >
                  Iniciar sesión
                </Link>
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium"
                >
                  Registrar
                </button>
              </>
            ) : (
              <>
                <Link to="/perfil" className="hover:underline">
                  Mi Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium hover:bg-gray-100"
                >
                  Cerrar sesión
                </button>
              </>
            )}
          </div>
        </div>

        {/* Menú desplegable (mobile only) */}
       {menuOpen && (
  <div className="md:hidden bg-sky-300 px-6 pt-4 pb-6 flex flex-col gap-2 items-start">
    <Link to="/" onClick={toggleMenu}>Inicio</Link>
    <Link to="/buscar" onClick={toggleMenu}>Buscar servicios</Link>

    {isAuthenticated && user?.type === "cliente" && (
      <Link to="/mis-servicios" onClick={toggleMenu}>Mis Contrataciones</Link>
    )}
    {isAuthenticated && user?.type === "entrenador" && (
      <>
        <Link to="/mis-servicios" onClick={toggleMenu}>Servicios</Link>
        <Link to="/estadisticas" onClick={toggleMenu}>Estadísticas</Link>
      </>
    )}

    {!isAuthenticated ? (
      <>
        <Link
          to="/login"
          onClick={toggleMenu}
          className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium"
        >
          Iniciar sesión
        </Link>
        <button
          onClick={() => {
            toggleMenu();
            setShowRegisterModal(true);
          }}
          className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium"
        >
          Registrar
        </button>
      </>
    ) : (
      <>
        <Link to="/perfil" onClick={toggleMenu}>Mi Perfil</Link>
        <button
          onClick={() => {
            toggleMenu();
            handleLogout();
          }}
          className="bg-white text-sky-500 px-4 py-1 rounded-full font-medium"
        >
          Cerrar sesión
        </button>
      </>
    )}
  </div>
)}
      </header>

      {showRegisterModal && (
        <UserTypeModal onClose={() => setShowRegisterModal(false)} />
      )}
    </>
  );
}
