import {
  BriefcaseBusiness,
  Cake,
  CalendarDays,
  ChevronRight,
  FileText,
  Mail,
  Phone,
  Printer,
  Smartphone,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LegalShell } from "../components/LegalShell";

const contactRows = [
  { icon: Mail, label: "Correo", value: "evasquez@bye.cl" },
  { icon: Phone, label: "Teléfono", value: "+56 2 2378 8940 · Anexo 243" },
  { icon: Smartphone, label: "Celular", value: "9 9817 5960" },
  { icon: UserRound, label: "Secretaria", value: "Jeannette Vargas · Anexo 240" },
  { icon: BriefcaseBusiness, label: "Piso", value: "12" },
  { icon: Cake, label: "Cumpleaños", value: "07 de junio" },
  { icon: CalendarDays, label: "Fecha ingreso", value: "01/08/2000" },
];

const biographyActions = [
  "Español",
  "Inglés",
  "PPT Español",
  "PPT Inglés",
  "Imprimir",
];

export default function BiographyPage() {
  return (
    <LegalShell active="directory">
      <section className="bio-repository-page" aria-labelledby="lawyer-title">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Panel de Control</Link>
          <ChevronRight aria-hidden="true" size={18} />
          <span>Bibliografía</span>
        </nav>

        <div className="bio-repository-grid">
          <main className="bio-repository-main">
            <article className="person-summary-card">
              <Image
                className="person-photo"
                src="/clippings/emilio-vasquez.png"
                alt="Retrato de Emilio Vásquez M."
                width={238}
                height={318}
                priority
              />
              <div className="person-summary">
                <p>Socio</p>
                <h1 id="lawyer-title">Emilio Vásquez M.</h1>
                <span>M&A Corporativo, Socios</span>
              </div>
            </article>

            <article className="person-info-card" aria-labelledby="contact-title">
              <div className="section-heading">
                <h2 id="contact-title">Información</h2>
                <span>Ficha interna</span>
              </div>
              <div className="contact-row-grid">
                {contactRows.map((row) => {
                  const Icon = row.icon;

                  return (
                    <div className="contact-row" key={row.label}>
                      <Icon aria-hidden="true" size={19} />
                      <span>{row.label}</span>
                      <strong>{row.value}</strong>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="bio-text-card" aria-labelledby="bio-title">
              <h2 id="bio-title">
                <FileText aria-hidden="true" size={22} />
                Biografía
              </h2>
              <p>
                Emilio Vásquez concentra su práctica en derecho corporativo, fusiones y
                adquisiciones, gobiernos corporativos y materias societarias. Asesora a
                clientes nacionales e internacionales en operaciones complejas y
                coordinación de equipos multidisciplinarios.
              </p>
              <p>
                Esta vista resume la información que el equipo consulta con mayor
                frecuencia y mantiene las acciones de descarga, impresión y presentación
                visibles para uso interno.
              </p>
            </article>
          </main>

          <aside className="bio-repository-side" aria-label="Acciones de biografía">
            <section className="biography-actions-card" aria-labelledby="actions-title">
              <h2 id="actions-title">Bibliografías</h2>
              <div>
                {biographyActions.map((action) => (
                  <button className={action === "Imprimir" ? "print-action" : ""} key={action} type="button">
                    {action === "Imprimir" ? <Printer aria-hidden="true" size={18} /> : null}
                    {action}
                  </button>
                ))}
              </div>
            </section>

            <section className="short-info-card" aria-labelledby="short-info-title">
              <h2 id="short-info-title">Información corta</h2>
              <div className="short-info-person">
                <Image
                  src="/people/francisca-montes.png"
                  alt="Jeannette Vargas"
                  width={48}
                  height={48}
                />
                <span>
                  <strong>Jeannette Vargas</strong>
                  <small>Secretaria · Anexo 240</small>
                </span>
              </div>
              <div className="short-info-list">
                <p>
                  <Cake aria-hidden="true" size={17} />
                  Cumpleaños: 07 de junio
                </p>
                <p>
                  <CalendarDays aria-hidden="true" size={17} />
                  Agenda: Comité M&A, 12:30
                </p>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </LegalShell>
  );
}
