import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../api/axiosInstance';
import axiosInstance from '../../api/axiosInstance';
import { Rating } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function ServiceCard({ service }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const fullName = `${service.trainer_first_name} ${service.trainer_last_name}`;
  const image = service.highlight_image
    ? `${BASE_URL}${service.highlight_image}`
    : '/default-service.jpg';
  const trainerImage = service.trainer_profile_picture
    ? `${BASE_URL}${service.trainer_profile_picture}`
    : '/default-profile.jpg';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await axiosInstance.post("/payments/create-checkout-session", {
        servicio_id: service.id,
      });

      const { url } = response.data;
      if (url) {
        setTimeout(() => {
          window.location.href = url;
        }, 1000);
      } else {
        setError("No se pudo iniciar el proceso de pago.");
        setLoading(false);
      }
    } catch (err) {
      if (err.response?.status === 400) {
        setError(err.response.data?.message || "Ya contrataste este servicio.");
      } else {
        setError("Ocurrió un error al redirigir a Stripe.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="bg-sky-200 rounded-lg shadow-md overflow-hidden flex flex-col justify-between h-full p-4">
      <img
        src={image}
        alt="Servicio"
        className="w-full h-40 object-cover rounded"
      />

      <div className="flex-1 flex flex-col justify-between mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
          <img
            src={trainerImage}
            alt="Entrenador"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium">{fullName}</span>
            <Rating
              name="read-only-rating"
              value={parseFloat(service.trainer_average_rating)}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
          <span className="ml-auto text-green-600 font-bold">
            ${Number(service.price).toLocaleString()} ARS
          </span>
        </div>

        <p className="text-sm font-semibold text-black min-h-[1.5rem] line-clamp-1">{service.name}</p>
        <p className="text-xs text-gray-600 min-h-[1.5rem] line-clamp-1">{service.category}</p>
        <p className="text-xs text-gray-600 min-h-[4rem] line-clamp-3">{service.description?.slice(0, 200)}</p>
      </div>

      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/servicios/${service.id}`}
          className="bg-white text-sky-500 px-3 py-1 rounded shadow"
        >
          Ver detalles
        </Link>

        {isAuthenticated ? (
          loading ? (
            <div className="px-3 py-1">
              <CircularProgress size={20} className="text-sky-500" />
            </div>
          ) : (
            <button
              onClick={handleCheckout}
              className="bg-sky-500 text-white px-3 py-1 rounded shadow hover:bg-sky-600"
            >
              Contratar
            </button>
          )
        ) : (
          <Link
            to="/login"
            className="bg-sky-500 text-white px-3 py-1 rounded shadow hover:bg-sky-600"
          >
            Contratar
          </Link>
        )}
      </div>
    </div>
  );
}
