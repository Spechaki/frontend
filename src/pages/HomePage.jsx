import FeaturedItems from "../components/home/FeaturedItems";

export default function HomePage() {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-4">
          <div className="bg-sky-200 mb-4 md:mb-0 rounded-lg px-4 py-4 shadow-lg">
            <h2 className="text-xl font-bold text-black">ENCUENTRA TU ENTRENADOR PERSONAL</h2>
            <p className="text-black mt-2 max-w-xl">
              Conecta con entrenadores profesionales que te ayudarán a alcanzar tus objetivos fitness, con servicios personalizados para cada necesidad.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Gimnasio', 'Running', 'Nutrición', 'Yoga', 'Crossfit', 'Pilates'].map((cat) => (
                <div className="bg-sky-100 text-black px-2 py-1 rounded shadow" key={cat}>
                <img src={"src/assets/cat/" + cat.toLowerCase() + ".png"} className="float-left size-4" alt=""/>
                <span key={cat} className="text-xs font-semibold float-left">&nbsp;{cat}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <img src="src/assets/home/top-right-1.jpg" className="w-40 h-28 object-cover rounded shadow-lg mt-8" />
            <img src="src/assets/home/top-right-2.jpg" className="w-40 h-28 object-cover rounded shadow-lg -ml-8" />
          </div>
        </div>
      </div>

      {/* Featured Items */}
      <FeaturedItems />

      {/* ¿Cómo funciona? */}
      <div className="bg-sky-50 py-10 px-4 text-black">
        <h2 className="text-xl font-bold text-center mb-6">¿CÓMO FUNCIONA?</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-sky-200 rounded-lg shadow p-4 text-center items-center justify-center flex flex-col">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center">
                <p className="text-black text-2xl font-bold">1</p>
            </div>
            <div className="font-semibold mb-1">Busca y Compara</div>
            <div className="text-sm">Explora nuestra selección de entrenadores profesionales y servicios. Filtra por especialidad, ubicación y más.</div>
          </div>
          <div className="bg-sky-200 rounded-lg shadow p-4 text-center items-center justify-center flex flex-col">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center">
                <p className="text-black text-2xl font-bold">2</p>
            </div>
            <div className="font-semibold mb-1">Reserva y Paga</div>
            <div className="text-sm">Selecciona el servicio que mejor se adapte a tus necesidades, elige un horario disponible y realiza el pago de forma segura.</div>
          </div>
          <div className="bg-sky-200 rounded-lg shadow p-4 text-center items-center justify-center flex flex-col">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center">
                <p className="text-black text-2xl font-bold">3</p>
            </div>
            <div className="font-semibold mb-1">Entrena y Progresa</div>
            <div className="text-sm">Disfruta de tus sesiones personalizadas, sigue tu progreso y comparte tu experiencia para ayudar a otros usuarios.</div>
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="max-w-5xl mx-auto py-10 px-4 text-black">
        <h2 className="text-xl font-bold text-center mb-6">Lo que dicen nuestros usuarios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-sky-200 rounded-lg shadow p-4">
            <div className="font-semibold">Juan Perez</div>
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <div className="text-sm">"Gracias a FitCoaches encontré a Carlos, un entrenador que realmente entendió mis necesidades. Es exigente, sabe, logro mejorar mi resistencia y perdí 10 kilos."</div>
          </div>
          <div className="bg-sky-200 rounded-lg shadow p-4">
            <div className="font-semibold">María Gonzalez</div>
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <div className="text-sm">"Las clases virtuales de yoga con Ana han sido estupendas. Su atención personalizada y profesionalismo son excepcionales. Totalmente recomendado."</div>
          </div>
          <div className="bg-sky-200 rounded-lg shadow p-4">
            <div className="font-semibold">Roberto Sanchez</div>
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <div className="text-sm">"El plan de nutrición de Martín complementó perfectamente mi rutina de entrenamiento. Los resultados son visibles y me siento con más energía."</div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto mx-auto py-2 px-0 text-black">
        <img src="src/assets/home/bottom.png" className="object-cover" alt=""/>
      </div>        
    </div>
  );
}