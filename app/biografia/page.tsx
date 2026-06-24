import {
  Building2,
  CalendarDays,
  ChevronRight,
  FileText,
  Headphones,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LegalShell } from "../components/LegalShell";

const practiceAreas = [
  "Fusiones y Adquisiciones (M&A)",
  "Mercado de Capitales",
  "Derecho Corporativo General",
  "Inversión Extranjera",
];

export default function BiographyPage() {
  return (
    <LegalShell active="directory">
      <section className="profile-page" aria-labelledby="lawyer-title">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/biografia">Bibliografía</Link>
          <ChevronRight aria-hidden="true" size={18} />
          <span>Socio</span>
        </nav>

        <div className="profile-grid">
          <div className="profile-main">
            <article className="lawyer-card">
              <Image
                className="lawyer-photo"
                src="/people/andres-larrain.png"
                alt="Retrato de Andrés Larraín B."
                width={238}
                height={318}
                priority
              />
              <div className="lawyer-summary">
                <h1 id="lawyer-title">Andrés Larraín B.</h1>
                <span className="role-pill">Socio</span>
                <div className="lawyer-meta">
                  <InfoItem icon={Mail} label="Correo" value="alarrain@barros.cl" />
                  <InfoItem icon={Phone} label="Teléfono Directo" value="+56 2 2339 0000" />
                  <InfoItem icon={Building2} label="Ubicación" value="Piso 15, Oficina 1502" />
                  <InfoItem icon={CalendarDays} label="Fecha de Incorporación" value="Marzo 1998" />
                </div>
              </div>
            </article>

            <article className="bio-card">
              <h2>
                <FileText aria-hidden="true" size={26} />
                Biografía
              </h2>
              <p>
                Andrés Larraín se especializa en derecho corporativo, fusiones y
                adquisiciones, y mercado de capitales. Ha participado en numerosas
                transacciones locales e internacionales, asesorando a empresas públicas y
                privadas en diversas industrias, incluyendo energía, infraestructura,
                retail y servicios financieros.
              </p>
              <p>
                Antes de incorporarse a Barros & Errázuriz, trabajó como asociado
                internacional en una destacada firma en Nueva York. Es profesor de Derecho
                Comercial en la Pontificia Universidad Católica de Chile y ha sido
                reconocido consistentemente por publicaciones internacionales como
                Chambers and Partners y The Legal 500.
              </p>
            </article>
          </div>

          <aside className="profile-side" aria-label="Información secundaria">
            <article className="side-card">
              <h2>Áreas de Práctica</h2>
              <ul className="practice-list">
                {practiceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </article>

            <article className="side-card assistant-card">
              <h2>
                <Headphones aria-hidden="true" size={28} />
                Asistente
              </h2>
              <div className="assistant-person">
                <Image
                  src="/people/francisca-montes.png"
                  alt="Francisca Montes"
                  width={56}
                  height={56}
                />
                <div>
                  <h3>Francisca Montes</h3>
                  <p>Secretaria Ejecutiva</p>
                </div>
              </div>
              <div className="assistant-contact">
                <p>
                  <Phone aria-hidden="true" size={18} />
                  Anexo: 452
                </p>
                <p>
                  <Mail aria-hidden="true" size={18} />
                  fmontes@barros.cl
                </p>
              </div>
              <button type="button">Contactar Asistente</button>
            </article>
          </aside>
        </div>
      </section>
    </LegalShell>
  );
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="info-item">
      <span>
        <Icon aria-hidden="true" size={22} />
      </span>
      <div>
        <dt>{label}</dt>
        <dd>{value}</dd>
      </div>
    </div>
  );
}
