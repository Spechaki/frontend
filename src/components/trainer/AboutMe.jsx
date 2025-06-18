import { useState } from "react";

export default function AboutMe({description, editable}) {
  const [about, setAbout] = useState(description);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(about);

  const handleEdit = () => {
    setDraft(about);
    setEditing(true);
  };

  const handleSave = () => {
    setAbout(draft);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setDraft(about);
  };

  return (
    <div className="mx-auto max-w-6xl py-6">

      <div className="bg-sky-100 rounded-2xl shadow-lg p-8 mb-6 text-black max-w-full">
        <div className="text-3xl font-bold mb-2">Sobre mí</div>
        <div className="border-b-2 border-sky-200 mb-4"></div>
        {editable && editing ? (
          <>
            <textarea
              className="w-full rounded p-3 border text-lg mb-4"
              rows={5}
              value={draft}
              onChange={e => setDraft(e.target.value)}
            />
            <div className="flex gap-3 justify-end">
              <button
                className="bg-sky-500 text-white px-8 py-2 rounded-full font-semibold hover:bg-sky-600 transition"
                onClick={handleSave}
              >
                Guardar
              </button>
              <button
                className="bg-gray-300 text-black px-8 py-2 rounded-full font-semibold hover:bg-gray-400 transition"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </>
        ) : (
          <div className="text-2xl mb-6 whitespace-pre-line">{about}</div>
        )}
        {editable && !editing && (
          <div className="flex justify-end">
            <button
              className="bg-sky-400 text-white px-10 py-2 rounded-full font-semibold hover:bg-sky-500 transition"
              onClick={handleEdit}
            >
              Editar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
