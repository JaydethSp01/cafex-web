export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/clientes", label: "Clientes" }, { href: "/inventario", label: "Inventario" }, { href: "/mesas", label: "Mesas" }, { href: "/pedidos", label: "Pedidos" }, { href: "/productos", label: "Productos" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Panel", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Panel">{children}</ProtectedShell>
      </body>
    </html>
  );
}
