import {
  Bell,
  Building2,
  Cake,
  CircleHelp,
  Grid2X2,
  Search,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ShellProps = {
  active: "dashboard" | "directory";
  children: ReactNode;
  showHeaderBrand?: boolean;
};

const navItems = [
  { id: "dashboard", label: "Panel de Control", href: "/", icon: Grid2X2 },
  { id: "directory", label: "Bibliografía", href: "/biografia", icon: BookOpen },
] as const;

export function LegalShell({ active, children, showHeaderBrand = false }: ShellProps) {
  return (
    <div className="legal-shell">
      <aside className="legal-sidebar" aria-label="Navegación lateral">
        <Link className="sidebar-wordmark" href="/">
          <span>BARROS &</span>
          <span>ERRÁZURIZ</span>
        </Link>
        <div className="sidebar-brand slim">
          <span>Intranet Legal</span>
        </div>

        <nav className="sidebar-nav" aria-label="Secciones principales">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === active;

            return (
              <Link className={isActive ? "active" : ""} href={item.href} key={item.id}>
                <Icon aria-hidden="true" size={24} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-birthday-card">
            <div>
              <Cake aria-hidden="true" size={22} />
              <strong>Cumpleaños</strong>
            </div>
            <div className="mini-person">
              {showHeaderBrand ? (
                <Image
                  src="/people/valentina-rojas.png"
                  alt="Valentina Rojas"
                  width={40}
                  height={40}
                />
              ) : null}
              <span>
                <strong>{showHeaderBrand ? "Valentina Rojas" : "María González"}</strong>
                <small>{showHeaderBrand ? "Hoy" : "Hoy · 24 de junio"}</small>
              </span>
            </div>
          </div>
        </div>
      </aside>

      <div className={showHeaderBrand ? "legal-main" : "legal-main compact"}>
        <header className="legal-topbar" aria-label="Utilidades de intranet">
          <nav aria-label="Navegación superior">
            <Link href="#">Mis Asuntos</Link>
            <Link href="#">Recursos</Link>
            <Link href="#">Enlaces Rápidos</Link>
          </nav>
          <label className="topbar-search">
            <Search aria-hidden="true" size={24} />
            <span className="sr-only">Buscar en la intranet</span>
            <input placeholder="Buscar en la intranet..." />
          </label>
          <button className="topbar-icon" type="button" aria-label="Notificaciones">
            <Bell aria-hidden="true" size={24} />
          </button>
          <button className="topbar-icon" type="button" aria-label="Ayuda">
            <CircleHelp aria-hidden="true" size={24} />
          </button>
          <Image
            className="topbar-avatar"
            src="/people/current-user.png"
            alt="Usuario conectado"
            width={48}
            height={48}
          />
        </header>

        <div className="legal-canvas">{children}</div>

        <footer className="legal-footer">
          <p>© 2024 Barros & Errázuriz. Todos los derechos reservados.</p>
          <nav aria-label="Enlaces de pie de página">
            {showHeaderBrand ? (
              <>
                <Link href="#">
                  <CircleHelp aria-hidden="true" size={18} />
                  Preguntas Frecuentes
                </Link>
                <Link href="#">
                  <Building2 aria-hidden="true" size={18} />
                  BUK
                </Link>
                <span aria-hidden="true" />
                <Link href="#">Portales Internos</Link>
                <Link href="#">Soporte TI</Link>
                <Link href="#">Línea Ética</Link>
              </>
            ) : (
              <>
                <Link href="#">Portales Internos</Link>
                <Link href="#">Soporte TI</Link>
                <Link href="#">Biblioteca</Link>
                <Link href="#">Canal de Denuncias</Link>
              </>
            )}
          </nav>
        </footer>
      </div>
    </div>
  );
}
