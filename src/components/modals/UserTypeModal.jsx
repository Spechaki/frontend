import { useNavigate } from "react-router-dom";

export default function UserTypeModal({ onClose }) {
  const navigate = useNavigate();

  const handleSelect = (userType) => {
    onClose(); // primero cerramos el modal
    setTimeout(() => {
      navigate("/register/form", { state: { userType } });
    }, 100); // leve delay para que cierre suavemente
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full text-center relative z-50">
        <h2 className="text-xl font-semibold mb-4 text-gray-600">¿Sos entrenador o buscás uno?</h2>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSelect("entrenador")}
            className="bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
          >
            Soy entrenador
          </button>
          <button
            onClick={() => handleSelect("cliente")}
            className="bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
          >
            Estoy buscando entrenador
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-sky-500 hover:underline"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
