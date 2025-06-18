import { useState, useEffect } from 'react';
import { Slider, Rating } from '@mui/material';
import { getZones } from '../../api/zoneService';
import { getCategories } from '../../api/categoryService';

export default function SearchSidebar({ setFilters }) {
  const initialFilters = {
  minPrice: 0,
  maxPrice: 200000,
  duration: 60,
  rating: 0,
  mode: '',
  zone: '',
  category: '' 
};

  const [localFilters, setLocalFilters] = useState(initialFilters);
  const [zoneOptions, setZoneOptions] = useState([]);
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    setFilters(localFilters);
  }, [localFilters]);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (err) {
      console.error('Error cargando categorías:', err);
    }
  };
  fetchCategories();
}, []);

  useEffect(() => {
  const fetchZones = async () => {
    try {
      const data = await getZones();
      // Excluir 'virtual' porque se filtra por 'mode'
      setZoneOptions(data.filter(zone => zone.name.toLowerCase() !== 'virtual'));
    } catch (err) {
      console.error('Error cargando zonas:', err);
    }
  };
  fetchZones();
}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePriceChange = (_, newValue) => {
    setLocalFilters(prev => ({
      ...prev,
      minPrice: newValue[0],
      maxPrice: newValue[1]
    }));
  };

  const handleDurationChange = (_, newValue) => {
    setLocalFilters(prev => ({
      ...prev,
      duration: newValue
    }));
  };

const handleRatingChange = (_, newValue) => {
  setLocalFilters(prev => ({
    ...prev,
    rating: newValue ?? 0 // ⬅️ Si es null, asigna 0
  }));
};

  const handleClear = () => {
    setLocalFilters(initialFilters);
    setFilters(initialFilters);
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4 text-gray-600">
      <h3 className="font-semibold mb-1">Rango de precio</h3>
      <div className="flex justify-between text-sm font-medium">
        <span>${localFilters.minPrice.toLocaleString()}</span>
        <span>${localFilters.maxPrice.toLocaleString()}</span>
      </div>
      <Slider
        value={[localFilters.minPrice, localFilters.maxPrice]}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={200000}
        step={1000}
        className="mt-2"
      />

      <h3 className="font-semibold">Modalidad</h3>
      <label className="block">
        <input type="radio" name="mode" value="virtual" checked={localFilters.mode === 'virtual'} onChange={handleInputChange} className="mr-2" />
        Virtual
      </label>
      <label className="block">
        <input type="radio" name="mode" value="presencial" checked={localFilters.mode === 'presencial'} onChange={handleInputChange} className="mr-2" />
        Presencial
      </label>

      <h3 className="font-semibold mb-1">Duración (min)</h3>
      <div className="text-sm font-medium text-right mb-1">{localFilters.duration} min</div>
      <Slider
        value={localFilters.duration}
        onChange={handleDurationChange}
        valueLabelDisplay="auto"
        min={20}
        max={180}
        step={10}
      />
      <h3 className="font-semibold">Categoría</h3>
      <select
        name="category"
        value={localFilters.category || ''}
        onChange={handleInputChange}
        className="w-full border px-2 py-1"
      >
        <option value="">Todas</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
      <h3 className="font-semibold">Zona</h3>
      <select
        name="zone"
        value={localFilters.zone}
        onChange={handleInputChange}
        className="w-full border px-2 py-1"
      >
        <option value="">Todas</option>
        {zoneOptions.map((zone) => (
          <option key={zone.id} value={zone.name}>
            {zone.name}
          </option>
        ))}
      </select>

      <h3 className="font-semibold mb-1">Rating mínimo</h3>
      <div className="flex items-center gap-2">
        <Rating
          name="rating-filter"
          value={localFilters.rating}
          onChange={handleRatingChange}
          precision={1}
        />
        <span className="text-sm text-gray-500">y más</span>
      </div>

      <button
        onClick={handleClear}
        className="bg-sky-500 text-white px-4 py-2 rounded w-full cursor-pointer hover:bg-sky-600"
      >
        Limpiar filtros
      </button>
    </div>
  );
}