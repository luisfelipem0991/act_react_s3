import Link from "next/link";

export default function ProductoPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Producto: {params.id}</h1>
      <p>Este es el detalle del producto con ID {params.id}.</p>
      <Link href="/productos">⬅ Volver a Productos</Link>
    </div>
  );
}
