import { useState } from 'react';
import { useEffect } from 'react';
import { getTrainerServicesById } from '../../api/trainer';

// Componente que muestra los servicios destacados de un entrenador
export default function FeaturedServices({ trainer , enabled }) {
    if (!enabled) return null; // Si no está habilitado, no renderiza nada
    const id = trainer.id;
    const [servicesData, setServicesData] = useState(null);
    useEffect(() => {
        getTrainerServicesById(id).then(setServicesData).catch(console.error);
    }, [id]);

    if (!servicesData) return <div className="p-4">Cargando...</div>;
    const services = servicesData.services;
    
    return (
        <div className="bg-sky-100 rounded-2xl shadow-lg p-6">
            <div className="text-2xl font-bold mb-4">Servicios destacados</div>
            <ul className="space-y-2">
              {services?.map((srv, idx) => (
                <li key={srv} className="border-b border-sky-200 pb-1 last:border-b-0 text-lg">
                  {srv}
                </li>
              ))}
            </ul>
          </div>
    );
}