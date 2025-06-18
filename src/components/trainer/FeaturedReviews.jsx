import { useState } from 'react';
import { useEffect } from 'react';
import { getTrainerReviewsById } from '../../api/trainer';

// Componente que muestra las reseñas destacadas de un entrenador
export default function FeaturedReviews({ trainer }) {

    const id = trainer.id;
    const [reviewsData, setReviewsData] = useState(null);
    useEffect(() => {
        getTrainerReviewsById(id).then(setReviewsData).catch(console.error);
    }, [id]);

    if (!reviewsData) return <div className="p-4">Cargando...</div>;
    const reviews = reviewsData.reviews;

    return (
        <div className="bg-sky-100 rounded-2xl shadow-lg p-6">
        <div className="text-2xl font-bold mb-4">Reseñas destacadas</div>
        <div className="space-y-4">
            {reviews?.map((rev, idx) => (
            <div key={idx} className="border-b border-sky-200 pb-2 last:border-b-0">
                <div className="font-bold">{rev.name}</div>
                <div className="flex items-center mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={`text-lg ${i <= rev.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                ))}
                </div>
                <div className="text-sm">{rev.text}</div>
            </div>
            ))}
        </div>
        </div>
    );
};