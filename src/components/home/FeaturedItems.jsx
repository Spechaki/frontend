import { useState, useEffect } from 'react';
import { featuredServices } from '../../api/services';
import { Rating } from '@mui/material';

export default function FeaturedItems() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await featuredServices();
        setServices(data);
      } catch (err) {
        setError('No se pudieron cargar los servicios destacados. Intente más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);


  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
      <div className="max-w-5xl mx-auto py-10 px-4 text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Servicios Destacados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, index) => (
          <div key={item.id} className="bg-sky-200 rounded-lg shadow p-4">
            <img alt={item.category} className="w-full h-36 object-cover rounded mb-3" />
            <div className="font-semibold">{item.trainer_first_name} {item.trainer_last_name}</div>
            <div className="text-yellow-400 mb-2"><Rating readOnly size="small" value={item.trainer_average_rating} precision={1}/></div>
            <div className="font-bold text-sm">Entrenamiento de fuerza personalizado</div>
            <p className="text-sm mt-2 h-25 line-clamp-5">{item.description}</p>
            <div className="flex justify-end mt-3">
              <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition">
                Ver detalles
              </button>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
}
