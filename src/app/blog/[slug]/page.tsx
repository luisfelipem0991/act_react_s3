import Link from "next/link";

export default function BlogArticulo({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Artículo: {params.slug}</h1>
      <p>Contenido del artículo "{params.slug}".</p>
      <Link href="/blog">⬅ Volver al Blog</Link>
    </div>
  );
}
