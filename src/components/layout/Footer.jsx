export default function Footer({ openRegisterModal }) {
  return (
    <footer className="bg-sky-400 w-screen text-white p-6">
      <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <p>
            Conectando entrenadores profesionales con clientes que buscan
            alcanzar sus objetivos fitness de manera personalizada.
          </p>
        </div>
        <div>
          <p className="font-semibold">Enlaces</p>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/buscar" className="hover:underline">Buscar servicios</a></li>
            <li><a href="/login" className="hover:underline">Iniciar sesión</a></li>
            <li>
              <button
                onClick={openRegisterModal}
                className="text-white font-medium hover:text-[#e0e0ff] transition-colors"
              >
                Registrar
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <p>info@fitcoaches.com</p>
          <p>+54 11 12345678</p>
          <p>Av. Independencia 1234, Buenos Aires, Argentina</p>
          <div className="mt-2 flex gap-2">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
