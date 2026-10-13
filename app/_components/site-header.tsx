import Link from "next/link";
import { Logo } from "./logo";
import { APP_URL } from "./site";

const LINKS = [
  { href: "/#productos", label: "Productos" },
  { href: "/#como-trabajamos", label: "Cómo trabajamos" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Pathway, inicio">
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-semibold text-ink-2 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href={APP_URL}
            className="rounded-lg border border-line bg-white px-3 py-2 text-sm font-semibold text-ink hover:border-ink-2 sm:px-4"
          >
            Ingresar
          </a>
          <Link
            href="/#contacto"
            className="rounded-lg bg-ink px-3 py-2 text-sm font-bold text-white hover:bg-ink-2 sm:px-4"
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Solicitar demo</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
