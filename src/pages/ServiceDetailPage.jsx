import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceById } from '../api/serviceApi';
import { BASE_URL } from '../api/axiosInstance';
import ServiceInfo from '../components/service/ServiceInfo';
import ServiceTrainer from '../components/service/ServiceTrainer';
import ServiceDescription from '../components/service/ServiceDescription';
import ServiceAvailabilityDays from '../components/service/ServiceAvailabilityDays';
import ServiceImageGallery from '../components/service/ServiceImageGallery';
import ServiceSidebar from '../components/service/ServiceSidebar';

export default function ServiceDetailPage() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    getServiceById(id).then(setService).catch(console.error);
  }, [id]);

  if (!service) return <div className="p-4">Cargando servicio...</div>;

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">{service.name}</h1>
       <h2 className="text-md font-semibold text-gray-600 mb-4">{service.category}</h2>

      <img
        src={service.images[0] ? BASE_URL + service.images[0] : '/default-service.jpg'}
        alt="Servicio"
        className="w-full h-64 object-cover rounded mb-4"
      />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <ServiceInfo {...service} />
          <ServiceTrainer trainer={service.trainer} />
          <ServiceDescription description={service.description} />
          <ServiceAvailabilityDays available_days={service.available_days} />
          <ServiceImageGallery images={service.images} />
        </div>

         <ServiceSidebar id={id} />
      </div>
    </div>
  );
}
