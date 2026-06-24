import {
  Cake,
  Clock3,
  Folder,
  FolderPlus,
  Presentation,
} from "lucide-react";
import Image from "next/image";
import { LegalShell } from "./components/LegalShell";

const birthdays = [
  {
    name: "Valentina Rojas",
    area: "Derecho Corporativo",
    date: "Hoy",
    image: "/people/valentina-rojas.png",
  },
  {
    name: "Ignacio Valdés",
    area: "División Tributaria",
    date: "Mañana",
    image: "/people/ignacio-valdes.png",
  },
  {
    name: "Catalina Soto",
    area: "Administración",
    date: "26 Oct",
    initials: "CS",
  },
];

const actionCards = [
  {
    title: "Ingreso de Horas",
    description: "Registra tu tiempo de hoy.",
    icon: Clock3,
    tone: "red",
  },
  {
    title: "Ingreso Cliente / Materia",
    description: "Abre nuevos registros.",
    icon: FolderPlus,
    tone: "blue",
  },
  {
    title: "Presentaciones Corporativas",
    description: "Accede a plantillas.",
    icon: Presentation,
    tone: "beige",
  },
];

const matters = [
  {
    code: "M-2023-0891",
    name: "Fusión Adquisición - TechCorp",
    status: "Activo",
  },
  {
    code: "M-2023-1102",
    name: "Asesoría Laboral - Inversiones Sur",
    status: "Pendiente",
  },
];

export default function Home() {
  return (
    <LegalShell active="dashboard" showHeaderBrand>
      <section className="dashboard-page" aria-labelledby="dashboard-title">
        <div className="dashboard-heading">
          <h1 id="dashboard-title">Buenos días, Alejandro.</h1>
          <p>Aquí está tu resumen de hoy, 24 de Octubre.</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-primary">
            <div className="action-grid" aria-label="Acciones principales">
              {actionCards.map((card) => {
                const Icon = card.icon;

                return (
                  <button className="action-card" data-tone={card.tone} key={card.title} type="button">
                    <span className="action-icon">
                      <Icon aria-hidden="true" size={42} />
                    </span>
                    <span>
                      <strong>{card.title}</strong>
                      <small>{card.description}</small>
                    </span>
                  </button>
                );
              })}
            </div>

            <section className="matters-card" aria-labelledby="matters-title">
              <h2 id="matters-title">Asuntos Recientes</h2>
              <div className="matter-list">
                {matters.map((matter) => (
                  <article className="matter-row" key={matter.code}>
                    <span className="matter-icon">
                      <Folder aria-hidden="true" size={28} />
                    </span>
                    <div>
                      <h3>{matter.code}</h3>
                      <p>{matter.name}</p>
                    </div>
                    <span className="matter-status">{matter.status}</span>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="birthday-panel" aria-labelledby="birthdays-title">
            <div className="panel-title">
              <Cake aria-hidden="true" size={32} />
              <h2 id="birthdays-title">Cumpleaños</h2>
            </div>
            <div className="birthday-panel-list">
              {birthdays.map((birthday) => (
                <article className="birthday-person" key={birthday.name}>
                  {birthday.image ? (
                    <Image src={birthday.image} alt={birthday.name} width={58} height={58} />
                  ) : (
                    <span>{birthday.initials}</span>
                  )}
                  <div>
                    <h3>{birthday.name}</h3>
                    <p>{birthday.area}</p>
                    <small>{birthday.date}</small>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </LegalShell>
  );
}
