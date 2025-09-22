export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  const segmentos = params.slug || [];
  const ruta = ["Docs", ...segmentos].join(" > ");

  return (
    <div>
      <h1>Documentación</h1>
      <p>{ruta}</p>
      {segmentos.length === 0 ? (
        <p>Bienvenido a la documentación principal.</p>
      ) : (
        <p>Estás en la sección: {segmentos.join(" / ")}</p>
      )}
    </div>
  );
}
