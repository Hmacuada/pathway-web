import Link from "next/link";
import { ChevronDown, Truck, Warehouse } from "lucide-react";
import { Logo } from "./logo";
import { APP_URL, BODEGA_URL } from "./site";

const LINKS = [
  { href: "/#productos", label: "Productos" },
  { href: "/#como-trabajamos", label: "Cómo trabajamos" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Pathway, inicio">
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-semibold text-ink-2 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-lg border border-line bg-white px-3 py-2 text-sm font-semibold text-ink hover:border-brand-2 sm:px-4 [&::-webkit-details-marker]:hidden">
              Ingresar
              <ChevronDown size={14} className="transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="absolute right-0 z-40 mt-2 w-[19rem] rounded-2xl border border-line bg-white p-2 shadow-[0_18px_50px_rgba(15,27,51,0.16)]">
              <p className="px-3 pb-1 pt-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-muted">
                Elige tu producto
              </p>
              <a href={APP_URL} className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-tint">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand text-white">
                  <Truck size={17} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold">Pathway Transporte</span>
                  <span className="block text-xs text-muted">app.pathway.cl</span>
                </span>
              </a>
              {BODEGA_URL ? (
                <a href={BODEGA_URL} className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-tint">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber text-ink">
                    <Warehouse size={17} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold">Pathway Bodega</span>
                    <span className="block text-xs text-muted">{BODEGA_URL.replace(/^https?:\/\//, "")}</span>
                  </span>
                </a>
              ) : (
                <div className="flex items-start gap-3 rounded-xl px-3 py-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber text-ink">
                    <Warehouse size={17} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold">Pathway Bodega</span>
                    <span className="block text-xs leading-snug text-muted">
                      Cada empresa entra desde su propia dirección, que le entregamos al implementar.{" "}
                      <Link href="/#contacto" className="font-semibold text-brand underline underline-offset-2">
                        ¿No la tienes?
                      </Link>
                    </span>
                  </span>
                </div>
              )}
            </div>
          </details>
          <Link
            href="/#contacto"
            className="rounded-lg bg-brand px-3 py-2 text-sm font-bold text-white shadow-[0_6px_18px_-6px_rgba(47,102,245,0.7)] hover:bg-brand-ink sm:px-4"
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Solicitar demo</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
