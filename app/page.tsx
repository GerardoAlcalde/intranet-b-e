import {
  Clock3,
  ExternalLink,
  FileText,
  FolderPlus,
  Link2,
  Presentation,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import { LegalShell } from "./components/LegalShell";

const primaryActions = [
  {
    title: "Presentación corporativa",
    description: "Plantillas oficiales para español, inglés y PPT.",
    icon: Presentation,
  },
  {
    title: "Ingreso cliente / materia",
    description: "Acceso directo al flujo de alta de clientes y asuntos.",
    icon: FolderPlus,
  },
  {
    title: "Ingreso de horas",
    description: "Registro diario de tiempos y revisión semanal.",
    icon: Clock3,
  },
];

const quickLinks = [
  { label: "LemonSuite", icon: Clock3 },
  { label: "BUK", icon: Users },
  { label: "Políticas internas", icon: ShieldCheck },
  { label: "Bibliografía", icon: FileText },
];

const newsLinks = [
  {
    title: "Competencia del TDLC en sede contenciosa",
    meta: "25 mayo 2026 · Actualidad legal",
    href: "https://www.bye.cl/competencia-del-tdlc-en-sede-contenciosa/",
  },
  {
    title: "The Legal Industry Reviews | Edición 25 N°1",
    meta: "19 mayo 2026 · Noticias B&E",
    href: "https://www.bye.cl/the-legal-industry-reviews-edicion-25-n1/",
  },
  {
    title: "Columna de opinión | Ley de Desalinización",
    meta: "30 abril 2026 · Opinión",
    href: "https://www.bye.cl/columna-de-opinion-ley-de-desalinizacion-desafios-pendientes-para-su-correcta-implementacion/",
  },
];

const agendaItems = [
  { time: "09:00", title: "Comité comunicaciones", detail: "Sala 1502" },
  { time: "11:30", title: "Revisión presentación corporativa", detail: "Equipo Desarrollo & Mercado" },
  { time: "16:00", title: "Cierre registro de horas", detail: "Recordatorio semanal" },
];

export default function Home() {
  return (
    <LegalShell active="dashboard" showHeaderBrand>
      <section className="repo-page" aria-labelledby="dashboard-title">
        <header className="repo-heading">
          <p>Repositorio interno</p>
          <h1 id="dashboard-title">Barros & Errázuriz</h1>
        </header>

        <section className="primary-actions" aria-label="Acciones principales">
          {primaryActions.map((action) => {
            const Icon = action.icon;

            return (
              <button className="primary-action-card" key={action.title} type="button">
                <span>
                  <Icon aria-hidden="true" size={28} />
                </span>
                <strong>{action.title}</strong>
                <small>{action.description}</small>
              </button>
            );
          })}
        </section>

        <div className="repo-grid">
          <div className="repo-main">
            <section className="feature-strip" aria-labelledby="feature-title">
              <Image
                src="/clippings/encuentro-ny.png"
                alt="Equipo Barros & Errázuriz"
                fill
                sizes="(max-width: 900px) 100vw, 760px"
                priority
              />
              <div>
                <p>Información interna</p>
                <h2 id="feature-title">Un solo lugar para encontrar documentos, noticias y accesos B&E.</h2>
              </div>
            </section>

            <section className="quick-repository" aria-labelledby="quick-title">
              <div className="section-heading">
                <h2 id="quick-title">Accesos rápidos</h2>
                <span>Uso diario</span>
              </div>
              <div className="quick-link-grid">
                {quickLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <button className="quick-link-card" key={link.label} type="button">
                      <Icon aria-hidden="true" size={25} />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="repo-side" aria-label="Noticias y agenda">
            <section className="news-panel" aria-labelledby="news-title">
              <div className="section-heading">
                <h2 id="news-title">Noticias B&E</h2>
                <a href="https://www.bye.cl/noticias/" target="_blank" rel="noreferrer">
                  Ver todas
                </a>
              </div>
              <div className="news-list">
                {newsLinks.map((news) => (
                  <a className="news-link" href={news.href} key={news.href} target="_blank" rel="noreferrer">
                    <span>
                      <strong>{news.title}</strong>
                      <small>{news.meta}</small>
                    </span>
                    <ExternalLink aria-hidden="true" size={18} />
                  </a>
                ))}
              </div>
            </section>

            <section className="today-panel" aria-labelledby="today-title">
              <div className="section-heading">
                <h2 id="today-title">Agenda de hoy</h2>
                <Link2 aria-hidden="true" size={18} />
              </div>
              <div className="agenda-list">
                {agendaItems.map((item) => (
                  <article className="agenda-item" key={`${item.time}-${item.title}`}>
                    <time>{item.time}</time>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.detail}</small>
                    </span>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </LegalShell>
  );
}
