export default function ServiceAvailabilityDays({ available_days = [] }) {
  const weekDays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Días disponibles</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {weekDays.map((day) => (
          <li
            key={day}
            className={`flex items-center justify-between px-4 py-2 rounded ${
              available_days.includes(day)
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            <span className="capitalize">{day}</span>
            <span>{available_days.includes(day) ? 'Disponible' : 'No disponible'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
