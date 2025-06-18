import { Visibility, Computer, Chat, Percent, ThumbUp, TrendingUp } from "@mui/icons-material";

export default function Metrics() {
  // Dummy data for metrics
  const metrics = [
    {
      icon: <Visibility style={{ fontSize: 48 }} />,
      value: 100,
      label: "Visualizaciones por servicios",
    },
    {
      icon: <Computer style={{ fontSize: 48 }} />,
      value: 100,
      label: "Tasa de conversion por servicio",
    },
    {
      icon: <Chat style={{ fontSize: 48 }} />,
      value: 100,
      label: "Distribución de calificaciones",
    },
    {
      icon: <Percent style={{ fontSize: 48 }} />,
      value: 100,
      label: "Promedio de calificaciones",
    },
    {
      icon: <ThumbUp style={{ fontSize: 48 }} />,
      value: 2,
      label: "Cantidad total de calificaciones",
    },
    {
      icon: <TrendingUp style={{ fontSize: 48 }} />,
      value: 100,
      label: "Distribución de calificaciones",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl py-6 text-black">
      <div className="text-4xl font-bold mb-6 text-black">Métricas</div>
      <div className="bg-sky-300 rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-sky-100 rounded-xl shadow p-8 flex flex-col items-center"
            >
              <div className="bg-white rounded-full p-4 mb-2">{m.icon}</div>
              <div className="text-3xl font-bold mb-1">{m.value}</div>
              <div className="text-center text-lg">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

