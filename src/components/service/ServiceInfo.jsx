import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import NumbersIcon from '@mui/icons-material/Numbers';
import WifiIcon from '@mui/icons-material/Wifi';
import PublicIcon from '@mui/icons-material/Public';

export default function ServiceInfo({
  price,
  schedule_start,
  schedule_end,
  address,
  duration_minutes,
  session_count,
  mode,
  zone,
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Información</h2>
      <div className="bg-sky-100 p-4 rounded space-y-2 text-sm">
        <div className="flex items-center bg-sky-50 px-4 py-2 rounded">
          <AttachMoneyIcon className="text-green-600 mr-2" />
          <span>${parseFloat(price).toLocaleString()} ARS</span>
        </div>
        <div className="flex items-center bg-sky-50 px-4 py-2 rounded">
          <AccessTimeIcon className="text-gray-700 mr-2" />
          <span>Disponibilidad de {schedule_start?.slice(0,5)} a {schedule_end?.slice(0,5)}</span>
        </div>
        <div className="flex items-center bg-sky-50 px-4 py-2 rounded">
          <LocationOnIcon className="text-purple-700 mr-2" />
          <span>{address}</span>
        </div>
        <div className="flex items-center bg-sky-50 px-4 py-2 rounded">
          <HourglassBottomIcon className="text-yellow-600 mr-2" />
          <span>Duración: {duration_minutes} minutos</span>
        </div>
        <div className="flex items-center bg-sky-50 px-4 py-2 rounded">
          <NumbersIcon className="text-indigo-600 mr-2" />
          <span>Sesiones: {session_count}</span>
        </div>
        <div className="flex items-center bg-sky-50 px-4 py-2 rounded">
          <WifiIcon className="text-blue-600 mr-2" />
          <span>Modalidad: {mode}</span>
        </div>
        <div className="flex items-center bg-sky-50 px-4 py-2 rounded">
          <PublicIcon className="text-cyan-600 mr-2" />
          <span>Zona: {zone}</span>
        </div>
      </div>
    </section>
  );
}
