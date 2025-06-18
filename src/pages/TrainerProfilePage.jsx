import { useState } from "react";
import { useEffect } from "react";
import BasicInfo from "../components/trainer/BasicInfo";
import FeaturedServices from "../components/trainer/FeaturedServices";
import FeaturedReviews from "../components/trainer/FeaturedReviews";
import AboutMe from "../components/trainer/AboutMe";
import Reviews from "../components/trainer/Reviews";
import Metrics from "../components/trainer/Metrics";
import { useSelector } from "react-redux";
import { getTrainerById } from "../api/trainer";
import { useParams } from "react-router-dom";

export default function TrainerProfilePage() {

  const id = useSelector((state) => useParams().id ?? state.auth.user.id);
  const editable = useSelector((state) => state.auth.user.id) == id;
  const [trainerData, setTrainerData] = useState(null);

  useEffect(() => {
    getTrainerById(id).then(setTrainerData).catch(console.error);
  }, [id]);

  if (!trainerData) return <div className="p-4">Cargando...</div>;
  const trainer = trainerData.trainer;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Datos básicos */}
        <BasicInfo trainer={trainer} editable={editable} />

        {/* Servicios y reseñas */}
        <div className="flex-1 flex flex-col gap-6 text-black">
          {/* Servicios destacados */}
          <FeaturedServices trainer={trainer} enabled={editable} />
          {/* Reseñas destacadas */}
          <FeaturedReviews trainer={trainer}/>
        </div>
      </div>
      <AboutMe description={trainer.description} editable={editable} />
      {/* Métricas */}
      <Metrics />
      {/* Reseñas */}
      <Reviews />
    </div>
  );
}