import {
  ArrowDown, ArrowRight, Bot, Check, Mail, MessageCircle, Truck, Warehouse,
} from "lucide-react";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";
import { EMAIL, SHOW_CLIENTS, WHATSAPP, demoLink } from "./_components/site";

// ── Contenido ────────────────────────────────────────────────────────────────
// Solo se describe lo que hoy existe. Lo que está en desarrollo se dice como tal.

const PRODUCTS = [
  {
    key: "transporte",
    icon: Truck,
    name: "Transporte",
    status: "Disponible",
    statusTone: "bg-emerald-50 text-emerald-800 border-emerald-200",
    tagline: "Back-office para operadores de transporte y 3PL: de cada viaje al pago del transportista, sin planillas.",
    features: [
      "Liquidación de conductores y de viajes especiales, con aprobación",
      "Prefacturas por mandante y por período, con descarga en Excel",
      "Flota y tripulación con control de documentos",
      "Portal de solo lectura para que cada transportista vea sus viajes, prefacturas y liquidaciones",
      "Chat con el transporte y cobros con contrato en línea, mensualidades y recibos",
      "Resultados mensuales por transporte y comparador de órdenes de compra contra prefacturas",
    ],
    cta: "Solicitar demo de Transporte",
  },
  {
    key: "bodega",
    icon: Warehouse,
    name: "Bodega",
    status: "Nuevo · en implementación",
    statusTone: "bg-amber/15 text-amber-ink border-amber/50",
    tagline: "Un solo stock confiable, con un portal para atender a tus distribuidores con plazos que se puedan cumplir.",
    features: [
      "Stock central con alertas de quiebre y de reposición",
      "Portal mayorista: registro y aprobación de distribuidores, precios por volumen, cotizaciones y pedidos validados contra el stock",
      "Recepción de compras y contenedores contra el packing list",
      "Comparador de compras por barco o avión: costo, plazo y margen",
      "Carga por Excel y conciliación con tu tienda web",
      "Cuentas individuales para el personal, con permisos por rol",
    ],
    cta: "Solicitar demo de Bodega",
  },
] as const;

const STEPS = [
  { n: "1", title: "Diagnóstico", text: "Entendemos cómo operas hoy y qué planillas y procesos conviene reemplazar primero." },
  { n: "2", title: "Implementación", text: "Cargamos tus datos y dejamos la plataforma funcionando, con cuentas para tu equipo." },
  { n: "3", title: "Acompañamiento", text: "Capacitamos a tu equipo y te acompañamos las primeras semanas, hasta que la operación corra sola." },
] as const;

const NEXT_UP = [
  { name: "RO", text: "Asistente de IA para consultar tu operación en lenguaje natural." },
  { name: "Flow", text: "Planificación de rutas y despacho." },
  { name: "Analytics", text: "Reportes y tendencias operativas." },
] as const;

// ── Visual del hero: una sola ruta que va del viaje a la bodega ──────────────
const NODES = [
  { x: 110, y: 210, label: "Viajes", sub: "desde tu ruteo", group: "t" },
  { x: 290, y: 90, label: "Prefacturas", sub: "por mandante", group: "t" },
  { x: 470, y: 210, label: "Liquidación", sub: "de transportistas", group: "t" },
  { x: 650, y: 90, label: "Stock", sub: "un solo inventario", group: "b" },
  { x: 830, y: 210, label: "Pedidos", sub: "web y mayoristas", group: "b" },
  { x: 1010, y: 90, label: "Recepción", sub: "de compras y contenedores", group: "b" },
] as const;

const ROUTE_D =
  "M0 210 L110 210 C200 210 200 90 290 90 C380 90 380 210 470 210 C560 210 560 90 650 90 C740 90 740 210 830 210 C920 210 920 90 1010 90 L1100 90";

function RouteVisual() {
  return (
    <>
      {/* Escritorio: la ruta completa */}
      <svg
        viewBox="0 0 1100 340"
        className="hidden h-auto w-full md:block"
        role="img"
        aria-label="Una sola ruta conecta los viajes, las prefacturas y la liquidación de transportistas con el stock, los pedidos y la recepción de bodega."
      >
        <path d={ROUTE_D} pathLength={1} className="route-line" fill="none" stroke="#0e2740" strokeWidth="3" strokeLinecap="round" />
        {NODES.map((n) => {
          const upper = n.y < 150;
          const ty = upper ? n.y - 40 : n.y + 36;
          return (
            <g key={n.label}>
              <circle cx={n.x} cy={n.y} r="11" fill={n.group === "b" ? "#e3a035" : "#fbf9f4"} stroke="#0e2740" strokeWidth="3" />
              <text x={n.x} y={ty} textAnchor="middle" fontSize="19" fontWeight="800" fill="#0e2740">{n.label}</text>
              <text x={n.x} y={ty + 19} textAnchor="middle" fontSize="13.5" fill="#566478">{n.sub}</text>
            </g>
          );
        })}
        {/* Llaves de producto */}
        <g fontSize="12.5" fontWeight="800" letterSpacing="2.4" textAnchor="middle">
          <path d="M60 306 H520" stroke="#0e2740" strokeWidth="2" strokeLinecap="round" />
          <text x="290" y="330" fill="#0e2740">PATHWAY TRANSPORTE</text>
          <path d="M600 306 H1060" stroke="#e3a035" strokeWidth="2" strokeLinecap="round" />
          <text x="830" y="330" fill="#8a5a0a">PATHWAY BODEGA</text>
        </g>
      </svg>

      {/* Móvil: la misma idea en dos columnas */}
      <div className="grid grid-cols-2 gap-5 md:hidden">
        {(["t", "b"] as const).map((g) => (
          <div key={g} className={`border-l-[3px] pl-4 ${g === "t" ? "border-ink" : "border-amber"}`}>
            <p className={`mb-3 text-[11px] font-extrabold tracking-[0.18em] ${g === "t" ? "text-ink" : "text-amber-ink"}`}>
              {g === "t" ? "PATHWAY TRANSPORTE" : "PATHWAY BODEGA"}
            </p>
            <ol className="space-y-3">
              {NODES.filter((n) => n.group === g).map((n) => (
                <li key={n.label}>
                  <p className="text-sm font-extrabold leading-tight">{n.label}</p>
                  <p className="text-xs text-muted">{n.sub}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Página ───────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="dots pointer-events-none absolute right-0 top-0 h-[420px] w-[560px]" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
            <div className="mb-6 h-1 w-12 rounded-full bg-amber" aria-hidden="true" />
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-ink-2">
              Software logístico hecho en Chile
            </p>
            <h1 className="max-w-4xl text-balance text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-[4.1rem]">
              Tu operación logística, ordenada <span className="text-ink-2">de la ruta a la bodega.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              Pathway reúne en un solo lugar la liquidación de transportistas y el control de inventario.
              Menos planillas, menos cuadraturas a mano y datos en los que puedes confiar.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(14,39,64,0.25)] hover:bg-ink-2"
              >
                Solicitar demo <ArrowRight size={16} />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink hover:border-ink-2"
              >
                Ver los productos <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-14 md:mt-16">
              <RouteVisual />
            </div>
          </div>
        </section>

        {/* Productos */}
        <section id="productos" className="border-y border-line bg-white/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink-2">Productos</p>
            <h2 className="mt-3 max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Dos productos que se pueden usar por separado o juntos.
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {PRODUCTS.map((p) => (
                <article key={p.key} id={p.key} className="flex flex-col rounded-2xl border border-line bg-paper p-7 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
                      <p.icon size={22} strokeWidth={1.8} />
                    </span>
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold ${p.statusTone}`}>{p.status}</span>
                  </div>
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-muted">Pathway</p>
                  <h3 className="text-3xl font-extrabold tracking-tight">{p.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{p.tagline}</p>
                  <ul className="mt-6 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[15px] leading-snug text-ink-2">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/25">
                          <Check size={12} strokeWidth={3} className="text-amber-ink" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={demoLink(p.name)}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-ink-2"
                  >
                    {p.cta} <ArrowRight size={15} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quiénes lo usan: se activa en site.ts cuando haya clientes que lo autoricen */}
        {SHOW_CLIENTS && (
          <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink-2">Quiénes lo usan</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Operaciones que ya trabajan con Pathway.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {/* Reemplazar por logos reales (public/clientes/…) */}
            </div>
          </section>
        )}

        {/* Cómo trabajamos */}
        <section id="como-trabajamos" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink-2">Cómo trabajamos</p>
          <h2 className="mt-3 max-w-3xl text-balance text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            No entregamos solo un sistema: lo dejamos funcionando con tu equipo.
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="relative border-t-2 border-ink pt-6">
                <span className="absolute -top-[13px] left-0 flex h-6 w-6 items-center justify-center rounded-full bg-amber text-xs font-extrabold text-ink">
                  {s.n}
                </span>
                <h3 className="text-xl font-extrabold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Lo que viene */}
        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber">Lo que viene</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
                Estamos construyendo más.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
                Lo que sigue está en desarrollo y todavía no está disponible. Si alguna de estas piezas te interesa, cuéntanos y la priorizamos.
              </p>
            </div>
            <ul className="space-y-4">
              {NEXT_UP.map((n) => (
                <li key={n.name} className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-5">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    {n.name === "RO" ? <Bot size={18} className="text-amber" /> : <span className="text-sm font-extrabold text-amber">{n.name[0]}</span>}
                  </span>
                  <div>
                    <p className="flex items-center gap-3 text-lg font-extrabold">
                      {n.name}
                      <span className="rounded-full border border-white/25 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-white/70">
                        {n.name === "RO" ? "En desarrollo" : "Más adelante"}
                      </span>
                    </p>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/70">{n.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink-2">Contacto</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Hablemos de tu operación</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Cuéntanos cómo operas y te mostramos cómo se vería en Pathway. Respondemos en un día hábil.
            </p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={demoLink("Transporte o Bodega")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(14,39,64,0.25)] hover:bg-ink-2"
              >
                <Mail size={16} /> {EMAIL}
              </a>
              {WHATSAPP && (
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink hover:border-ink-2"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              )}
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
