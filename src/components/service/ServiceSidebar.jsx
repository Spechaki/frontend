import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import CircularProgress from "@mui/material/CircularProgress";

export default function ServiceSidebar({ id }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setError(null);

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post("/payments/create-checkout-session", {
        servicio_id: parseInt(id),
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
    <aside className="bg-sky-100 p-4 rounded h-fit">
      <img
        src="../src/assets/service/service-side.jpg"
        alt="Promo"
        className="w-full h-32 object-contain mb-4"
      />
      <p className="text-sm mb-4">
        Calidad garantizada por nuestros mejores entrenadores. Servicios de toda clase para todos los clientes.
      </p>

      {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

      {loading ? (
        <div className="w-full flex flex-col items-center py-2 gap-2">
          <CircularProgress size={24} className="text-sky-500" />
          <p className="text-sm text-sky-600">Redirigiendo a Stripe...</p>
        </div>
      ) : (
        <button
          onClick={handleCheckout}
          className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
        >
          Contratar servicio
        </button>
      )}
    </aside>
  );
}
