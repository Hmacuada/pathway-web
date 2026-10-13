import {
  ArrowDown, ArrowRight, Bot, Check, Mail, MessageCircle, Truck, Warehouse,
} from "lucide-react";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";
import { Shot } from "./_components/shot";
import { EMAIL, SHOW_CLIENTS, WHATSAPP, demoLink, whatsappLink } from "./_components/site";

// ── Contenido ────────────────────────────────────────────────────────────────
// Solo se describe lo que hoy existe. Lo que está en desarrollo se dice como tal.

type Tone = "brand" | "amber";

const TONE: Record<Tone, { chip: string; check: string; link: string }> = {
  brand: { chip: "bg-brand-soft text-brand-ink", check: "bg-brand-soft text-brand", link: "text-brand" },
  amber: { chip: "bg-amber-soft text-amber-ink", check: "bg-amber-soft text-amber-ink", link: "text-amber-ink" },
};

const OVERVIEW = [
  {
    id: "transporte",
    icon: Truck,
    tone: "brand" as Tone,
    name: "Transporte",
    status: "Disponible",
    tagline: "Back-office para operadores de transporte y 3PL: de cada viaje al pago del transportista.",
    points: ["Liquidación por guía, con aprobación", "Prefacturas por período y transportista", "Flota y documentos al día"],
    shot: { name: "transporte-dashboard", alt: "Dashboard de Pathway Transporte con tasa de entrega, pipeline de rutas y resumen diario", label: "Pathway Transporte" },
  },
  {
    id: "bodega",
    icon: Warehouse,
    tone: "amber" as Tone,
    name: "Bodega",
    status: "Nuevo · en implementación",
    tagline: "Un solo stock confiable y un portal para atender a tus distribuidores con plazos que se puedan cumplir.",
    points: ["Stock central con alertas de reposición", "Pedidos de todos tus canales", "Portal mayorista para distribuidores"],
    shot: { name: "bodega-dashboard", alt: "Dashboard de Pathway Bodega con ventas, pedidos, quiebres y margen en riesgo", label: "Pathway Bodega" },
  },
] as const;

const STEPS = [
  { n: "1", title: "Diagnóstico", text: "Entendemos cómo operas hoy y qué planillas y procesos conviene reemplazar primero." },
  { n: "2", title: "Implementación", text: "Cargamos tus datos y dejamos la plataforma funcionando, con cuentas para tu equipo." },
  { n: "3", title: "Acompañamiento", text: "Capacitamos a tu equipo y te acompañamos las primeras semanas, hasta que la operación corra sola." },
] as const;

const NEXT_UP = [
  { name: "RO", tag: "En desarrollo", text: "Asistente de IA para consultar tu operación en lenguaje natural." },
  { name: "Flow", tag: "Más adelante", text: "Planificación de rutas y despacho." },
  { name: "Analytics", tag: "Más adelante", text: "Reportes y tendencias operativas." },
] as const;

const TRANSPORTE_EXTRAS = [
  "Dashboard operacional", "Resultados mensuales", "Chat con el transporte",
  "Cobros con contrato en línea", "Comparador de órdenes de compra", "Importación desde Drivin",
];
const BODEGA_EXTRAS = [
  "Recepción de compras y contenedores", "Comparador marítimo vs aéreo", "Carga por Excel",
  "Conciliación con tu tienda web", "Cuentas por rol",
];

// ── Piezas ───────────────────────────────────────────────────────────────────
function Eyebrow({ children, tone = "brand" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] ${TONE[tone].chip}`}>
      {children}
    </span>
  );
}

function Feature({
  title, text, bullets, shot, tone = "brand", reverse = false,
}: {
  title: string;
  text: string;
  bullets: readonly string[];
  shot: { name: string; alt: string; label: string };
  tone?: Tone;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        <h3 className="text-balance text-2xl font-extrabold leading-tight tracking-tight md:text-[1.9rem]">{title}</h3>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{text}</p>
        <ul className="mt-6 space-y-3.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-[15px] leading-snug text-ink-2">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${TONE[tone].check}`}>
                <Check size={12} strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <Shot {...shot} />
      </div>
    </div>
  );
}

function Chips({ items, tone }: { items: readonly string[]; tone: Tone }) {
  return (
    <div className="mt-14 border-t border-line pt-8">
      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted">También incluye</p>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {items.map((i) => (
          <li key={i} className={`rounded-full px-4 py-2 text-sm font-semibold ${TONE[tone].chip}`}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

// ── Página ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-bg relative overflow-hidden">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-14 text-center md:pb-28 md:pt-20">
            <a
              href="#bodega"
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/90 py-1.5 pl-2 pr-4 text-sm font-semibold text-ink-2 shadow-sm hover:border-brand-2"
            >
              <span className="rounded-full bg-amber px-2.5 py-0.5 text-xs font-extrabold text-ink">Nuevo</span>
              Pathway Bodega: un solo stock para tu tienda y tus distribuidores
              <ArrowRight size={14} className="text-brand" />
            </a>

            <h1 className="mx-auto mt-7 max-w-4xl text-balance text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl md:text-[4.25rem]">
              Tu operación logística, ordenada <span className="gradient-text">de la ruta a la bodega.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Pathway reúne en un solo lugar la liquidación de transportistas y el control de inventario.
              Menos planillas, menos cuadraturas a mano y datos en los que puedes confiar.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-8px_rgba(47,102,245,0.75)] hover:bg-brand-ink"
              >
                Solicitar demo <ArrowRight size={16} />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink hover:border-brand-2"
              >
                Ver los productos <ArrowDown size={16} />
              </a>
            </div>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted">
              {["Hecho en Chile", "Implementación acompañada", "Para transporte y distribución"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check size={14} strokeWidth={3} className="text-brand" /> {t}
                </li>
              ))}
            </ul>

            <div className="relative mx-auto mt-14 max-w-5xl text-left md:mt-16 md:pb-10">
              <Shot
                name="transporte-dashboard"
                alt="Dashboard de Pathway Transporte con tasa de entrega, pipeline de rutas y resumen diario"
                label="Pathway Transporte · Dashboard"
                priority
                sizes="(min-width: 1024px) 1024px, 94vw"
              />
              <Shot
                name="bodega-portal"
                alt="Portal mayorista de Pathway Bodega con catálogo, precios por volumen y disponibilidad"
                label="Pathway Bodega · Portal mayorista"
                sizes="(min-width: 1024px) 480px, 0px"
                className="floaty absolute -bottom-2 -right-6 hidden w-[46%] md:block"
              />
            </div>
          </div>
        </section>

        {/* Productos */}
        <section id="productos" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Productos</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Dos productos que se pueden usar por separado o juntos.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {OVERVIEW.map((p) => (
              <article key={p.id} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_2px_rgba(15,27,51,0.04),0_20px_50px_-30px_rgba(15,27,51,0.35)]">
                <div className={`px-6 pt-6 ${p.tone === "brand" ? "bg-brand-soft/60" : "bg-amber-soft/70"}`}>
                  <Shot {...p.shot} className="translate-y-px rounded-b-none border-b-0 shadow-none" sizes="(min-width: 1024px) 540px, 90vw" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-3">
                      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${p.tone === "brand" ? "bg-brand text-white" : "bg-amber text-ink"}`}>
                        <p.icon size={21} strokeWidth={1.8} />
                      </span>
                      <span>
                        <span className="block text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Pathway</span>
                        <span className="block text-2xl font-extrabold tracking-tight">{p.name}</span>
                      </span>
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${p.tone === "brand" ? "bg-emerald-50 text-emerald-800" : "bg-amber-soft text-amber-ink"}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted">{p.tagline}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-[15px] text-ink-2">
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${TONE[p.tone].check}`}>
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a href={`#${p.id}`} className={`mt-7 inline-flex w-fit items-center gap-2 text-sm font-extrabold ${TONE[p.tone].link} hover:underline`}>
                    Ver cómo funciona Pathway {p.name} <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Quiénes lo usan: se activa en site.ts cuando haya clientes que lo autoricen */}
        {SHOW_CLIENTS && (
          <section className="border-y border-line bg-tint">
            <div className="mx-auto max-w-6xl px-6 py-14 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">Operaciones que ya trabajan con Pathway</p>
              <div className="mt-8 grid grid-cols-2 items-center gap-6 md:grid-cols-4">
                {/* Reemplazar por logos reales (public/clientes/…) */}
              </div>
            </div>
          </section>
        )}

        {/* Transporte */}
        <section id="transporte" className="border-y border-line bg-tint">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <Eyebrow>Pathway Transporte</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                De cada viaje al pago del transportista, sin planillas.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Para operadores de transporte y 3PL que liquidan, prefacturan y controlan su flota en hojas de cálculo.
              </p>
            </div>
            <div className="mt-16 space-y-24">
              <Feature
                title="Liquidación por guía, con aprobación."
                text="Cada hoja de ruta se liquida con las tarifas de tu plan: valor por guía, rechazos, recargos y adicionales. Revisas el detalle antes de confirmar."
                bullets={[
                  "Planes de pago por cliente (mandante)",
                  "Viajes especiales con aprobación",
                  "Descarga en Excel e impresión de cada documento",
                ]}
                shot={{ name: "transporte-liquidacion", alt: "Detalle de liquidación de una hoja de ruta con valor por guía y total a pagar", label: "Pathway Transporte · Liquidación" }}
              />
              <Feature
                reverse
                title="Prefacturas por período y transportista."
                text="Agrupa las rutas liquidadas de cada transportista y emite la prefactura con neto, IVA y total. Todo queda en un historial que puedes consultar, imprimir o descargar."
                bullets={[
                  "Quincenas o el período que necesites",
                  "Historial de prefacturas emitidas",
                  "Portal de solo lectura para que cada transportista vea sus viajes, prefacturas y liquidaciones",
                ]}
                shot={{ name: "transporte-prefacturas", alt: "Historial de prefacturas emitidas por transportista con neto, IVA y total", label: "Pathway Transporte · Prefacturas" }}
              />
              <Feature
                title="Flota y documentos al día."
                text="Vehículos, personal y documentos con fecha de vencimiento: revisión técnica, permiso de circulación, SOAP y licencias, con aviso de lo que vence pronto."
                bullets={[
                  "Documentos por vehículo y por conductor",
                  "Alertas de vencimientos próximos",
                  "Kilómetros por patente y por mes",
                ]}
                shot={{ name: "transporte-flota", alt: "Gestión de flota con documentos y fechas de vencimiento", label: "Pathway Transporte · Flota" }}
              />
            </div>
            <Chips items={TRANSPORTE_EXTRAS} tone="brand" />
          </div>
        </section>

        {/* Bodega */}
        <section id="bodega">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <div className="max-w-3xl">
              <Eyebrow tone="amber">Pathway Bodega · Nuevo</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Un solo stock confiable, y un portal para tus distribuidores.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Para distribuidoras e importadores que hoy cuadran el inventario en planillas: un stock central que alimenta tus pedidos, tu tienda web y el portal mayorista.
              </p>
            </div>
            <div className="mt-16 space-y-24">
              <Feature
                tone="amber"
                title="Stock central, siempre a la vista."
                text="Sabes qué está en quiebre, qué está bajo el punto de reposición y qué viene en camino, antes de que te falte."
                bullets={[
                  "Alertas de quiebre y de reposición, con clasificación ABC",
                  "Lo que viene en camino y cuándo llega",
                  "Crea la compra del faltante desde la misma pantalla",
                ]}
                shot={{ name: "bodega-stock", alt: "Stock crítico con estado, disponible, en camino y punto de reposición", label: "Pathway Bodega · Stock" }}
              />
              <Feature
                reverse
                tone="amber"
                title="Pedidos de todos tus canales."
                text="Mayorista, web y ventas directas en una sola lista, validados contra el stock antes de despachar."
                bullets={[
                  "Cotizaciones de distribuidores y demanda cotizada frente al stock",
                  "Alerta con faltantes cuando un pedido no se puede cumplir",
                  "Estado de cada pedido hasta el despacho",
                ]}
                shot={{ name: "bodega-pedidos", alt: "Lista de pedidos por canal con cliente, fecha, total y estado", label: "Pathway Bodega · Pedidos" }}
              />
              <Feature
                tone="amber"
                title="Un portal exclusivo para tus distribuidores."
                text="Tus distribuidores se registran, ven su catálogo con precios por volumen y la disponibilidad real, y cotizan o piden sin llamarte."
                bullets={[
                  "Registro y aprobación de distribuidores",
                  "Precios por volumen y descuento propio por cliente",
                  "Disponibilidad y fecha de llegada de cada producto",
                ]}
                shot={{ name: "bodega-portal", alt: "Portal mayorista con catálogo, descuentos por volumen y disponibilidad", label: "Pathway Bodega · Portal mayorista" }}
              />
            </div>
            <Chips items={BODEGA_EXTRAS} tone="amber" />
          </div>
        </section>

        {/* Quiénes lo usan (marcador): el bloque real va arriba cuando SHOW_CLIENTS sea true */}

        {/* Cómo trabajamos */}
        <section id="como-trabajamos" className="border-y border-line bg-tint">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Cómo trabajamos</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                No entregamos solo un sistema: lo dejamos funcionando con tu equipo.
              </h2>
            </div>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="rounded-3xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(15,27,51,0.04),0_20px_50px_-34px_rgba(15,27,51,0.35)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-lg font-extrabold text-white">{s.n}</span>
                  <h3 className="mt-5 text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Lo que viene */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            <div>
              <Eyebrow>Lo que viene</Eyebrow>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                Estamos construyendo más.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                Lo que sigue está en desarrollo y todavía no está disponible. Si alguna pieza te interesa, cuéntanos y la priorizamos.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {NEXT_UP.map((n) => (
                <li key={n.name} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(15,27,51,0.04)]">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    {n.name === "RO" ? <Bot size={20} /> : <span className="text-base font-extrabold">{n.name[0]}</span>}
                  </span>
                  <div>
                    <p className="flex flex-wrap items-center gap-2 text-lg font-extrabold">
                      {n.name}
                      <span className="rounded-full border border-line bg-tint px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-muted">{n.tag}</span>
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{n.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="px-6 pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-2 px-6 py-16 text-center text-white md:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">Hablemos de tu operación</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Cuéntanos cómo operas y te mostramos cómo se vería en Pathway. Respondemos en un día hábil.
              </p>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <a
                  href={demoLink("Transporte o Bodega")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand-ink shadow-[0_12px_28px_-10px_rgba(15,27,51,0.5)] hover:bg-brand-soft"
                >
                  <Mail size={16} /> {EMAIL}
                </a>
                {WHATSAPP && (
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pathway SpA",
            url: "https://pathway.cl",
            email: EMAIL,
            description:
              "Software para transporte y bodega: liquidación de transportistas, prefacturas, flota, stock central y portal para distribuidores.",
            areaServed: "CL",
          }),
        }}
      />
    </>
  );
}
