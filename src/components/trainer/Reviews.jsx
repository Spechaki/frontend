import { useState } from "react";
import { Rating } from "@mui/material";

export default function Reviews() {
  const reviews = [
    {
      name: "Raúl Gomez",
      rating: 1,
      text: "por favor no lo contraten cobra carisimo y encima se metio a mi cuenta de mercado pago mientras estaba haciendo 100 sentadillas y me robo toda la plata sere mas fuerte ahora pero ESTOY POBRE si pudiera darle 0 estrellas lo haria",
      reply: "Mirá amigo, si me vas a tachar de chorro por algo que no hice y encima me vas a dejar una mala reseña me arruinas todo el negocio por nada. Si tan convencido estás de que te robé denunciamé, no tengo miedo. El tamaño de mis músculos hablan por sí solo."
    },
    {
      name: "María Fernandez",
      rating: 4,
      text: "Muy satisfecha, como entrenador es todo lo que buscaba aunque a veces es demasiado exigente.",
    },
    {
      name: "Pedro Gutiérrez",
      rating: 4,
      text: "Calidad muy alta. Satisfecho con el servicio.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl py-6 text-black">
      <div className="text-3xl font-bold mb-4">Reseñas</div>
      <div className="flex flex-col gap-6">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-sky-100 rounded-2xl shadow p-6">
            <div className="flex items-center mb-2">
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <svg width="36" height="36" fill="#bbb"><circle cx="18" cy="13" r="8"/><ellipse cx="18" cy="28" rx="12" ry="7"/></svg>
              </div>
              <div>
                <div className="text-2xl font-bold">{rev.name}</div>
                <div className="flex items-center gap-1">
                <Rating name="trainer-rating" value={rev.rating} readOnly precision={0.5} size="medium" className="text-yellow-400" />
                  <span className="ml-2 text-yellow-400 font-bold text-lg">({rev.rating.toFixed(1)})</span>
                </div>
              </div>
            </div>
            <div className="text-lg mb-2">{rev.text}</div>
            {rev.reply && (
              <div className="mt-4 border-t border-sky-200 pt-2">
                <div className="text-sky-600 font-semibold mb-1">Respuesta</div>
                <div className="text-base">{rev.reply}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
