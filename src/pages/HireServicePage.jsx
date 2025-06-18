import { useParams } from 'react-router-dom';
import InputField from '../components/form/InputField';
import backgroundImg from '../assets/contratar.jpeg';

export default function HireServicePage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-sm p-6 bg-white rounded shadow">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-600">Contratar servicio</h2>

          {/* Información personal */}
          <h3 className="font-semibold mb-2 text-gray-600">Información personal</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <InputField id="firstName" label="Nombre" type="text" />
            <InputField id="lastName" label="Apellido" type="text" />
          </div>
          <InputField id="phone" label="Teléfono" type="text" className="mb-6" />

          {/* Información de pago */}
          <h3 className="font-semibold mb-2 text-gray-600">Información de pago</h3>
          <InputField id="cardNumber" label="Número de tarjeta" type="text" className="mb-4" />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <InputField id="expiry" label="Fecha vencimiento" type="text" />
            <InputField id="cvc" label="CVC" type="text" />
          </div>
          <InputField id="cardName" label="Nombre de la tarjeta" type="text" className="mb-6" />

          <button className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
            Contratar servicio
          </button>
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
