import { Rating } from '@mui/material';
import { BASE_URL } from '../../api/axiosInstance';

export default function ServiceTrainer({ trainer }) {
  const fullName = `${trainer.first_name} ${trainer.last_name}`;
  const image = trainer.profile_picture
    ? `${BASE_URL}${trainer.profile_picture}`
    : '/default-profile.jpg';

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Entrenador</h2>
      <div className="flex items-center bg-sky-100 p-4 rounded gap-4">
        <img
          src={image}
          alt={fullName}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <div className="font-bold">{fullName}</div>
          <Rating
            value={trainer.average_rating ?? 0}
            precision={0.5}
            readOnly
          />
        </div>
      </div>
    </section>
  );
}