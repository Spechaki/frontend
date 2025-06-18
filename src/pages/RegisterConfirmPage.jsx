import { useNavigate } from 'react-router-dom';

export default function RegisterConfirmPage() {
  const navigate = useNavigate();

  const handleSelect = (type) => {
    navigate('/register/form', { state: { userType: type } });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <p className="text-lg mb-4">
          Antes de crear tu cuenta, ¿sos un entrenador o estás buscando uno?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleSelect('entrenador')}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded"
          >
            Soy entrenador
          </button>
          <button
            onClick={() => handleSelect('cliente')}
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded"
          >
            Estoy buscando entrenador
          </button>
        </div>
      </div>
    </div>
  );
}
