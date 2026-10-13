import Link from "next/link";
import { EMAIL, LEGAL_NAME, RUT } from "./site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {LEGAL_NAME} · RUT {RUT} · Chile
        </p>
        <nav aria-label="Pie de página" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/terminos" className="hover:text-ink">Términos de uso</Link>
          <Link href="/privacidad" className="hover:text-ink">Privacidad</Link>
          <a href={`mailto:${EMAIL}`} className="hover:text-ink">{EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
