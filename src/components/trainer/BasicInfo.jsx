import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { BASE_URL } from '../../api/axiosInstance';

/*
 * Componente que muestra la información básica del entrenador.
 * Incluye foto de perfil, nombre y calificación.
 * Permite cambiar la foto de perfil si el modo es editable.
 */
export default function BasicInfo({editable, trainer}) {

    const trainerPic = trainer?.profile_picture ?? `${BASE_URL}/default-profile.jpg`;
    const [profilePic, setProfilePic] = useState(trainerPic);

    const handleProfilePicChange = (e) => {
        if (editable && e.target.files && e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setProfilePic(url);
        }
    };

    return (
    <div className="bg-sky-100 rounded-2xl shadow-lg p-8 w-full md:w-1/3 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow">
        <img
            src={profilePic}
            alt="Foto de perfil"
            className="w-full h-full object-cover"
        />
        </div>
        { editable &&
       <label className="mb-4">
        <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleProfilePicChange}
        />
        <span className="bg-sky-400 text-white px-6 py-2 rounded-full cursor-pointer shadow hover:bg-sky-500 transition">
            Cambiar foto de perfil
        </span>
        </label>
        }
        <div className="text-3xl font-bold text-black mb-2 text-center">{trainer.first_name} {trainer.last_name}</div>
        <div className="flex items-center justify-center mb-1">
        <Rating name="trainer-rating" value={trainer.average_rating ?? 0} readOnly precision={0.5} size="medium" className="text-yellow-400" />
        </div>
        <div className="text-yellow-400 text-3xl font-bold drop-shadow mb-2">{(trainer.average_rating ?? 0.0)?.toPrecision(2)}</div>
    </div>
        
    );
}