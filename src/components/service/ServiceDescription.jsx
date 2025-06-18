export default function ServiceDescription({ description }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Descripción</h2>
      <p className="text-sm whitespace-pre-line">{description}</p>
    </section>
  );
}