import { useEffect, useState } from 'react';
import SearchSidebar from '../components/search/SearchSidebar';
import ServiceCard from '../components/search/ServiceCard';
import { getServices } from '../api/serviceApi';


export default function SearchPage() {
  const [filters, setFilters] = useState({});
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices(filters);
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    }
    fetchServices();
  }, [filters]);

  return (
    <div className="bg-white min-h-screen w-full px-4 py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col [@media(min-width:500px)]:flex-row gap-6">
        
        {/* Sidebar: arriba en <500px, izquierda si ≥ 500px */}
        <div className="w-full [@media(min-width:500px)]:w-[300px] shrink-0">
          <SearchSidebar setFilters={setFilters} />
        </div>

        {/* Servicios: 1 card en mobile, 2 en md, 3 en lg */}
        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
