import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mi App con App Router",
  description: "Ejercicio de Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link href="/">Inicio</Link> |{" "}
          <Link href="/productos">Productos</Link> |{" "}
          <Link href="/blog">Blog</Link> |{" "}
          <Link href="/contacto">Contacto</Link>
        </nav>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
