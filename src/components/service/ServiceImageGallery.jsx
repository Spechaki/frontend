import { BASE_URL } from '../../api/axiosInstance';

export default function ServiceImageGallery({ images = [] }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Imágenes</h2>
      {images.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={BASE_URL + img}
              alt={`Imagen ${idx + 1}`}
              className="rounded h-32 object-cover w-full"
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No hay imágenes adicionales.</p>
      )}
    </section>
  );
}
