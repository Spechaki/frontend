import { useState, useEffect } from 'react';
import { featuredServices } from '../../api/services';
import Stars from '../common/Stars';

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
          <div className="bg-sky-100 rounded-lg shadow p-4">
            <img alt={item.category} className="w-full h-36 object-cover rounded mb-3" />
            <div className="font-semibold">{item.trainer_first_name} {item.trainer_last_name}</div>
            <div className="text-yellow-400 mb-2"><Stars rating={item.trainer_average_rating}/></div>
            <div className="font-bold text-sm">Entrenamiento de fuerza personalizado</div>
            <p className="text-sm mt-2">{item.description}</p>
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
