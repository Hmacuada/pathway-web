/* eslint-disable @next/next/no-img-element */

type ShotProps = {
  /** Nombre base en /public/screens (sin tamaño ni extensión) */
  name: string;
  alt: string;
  /** Texto de la barra de dirección del marco */
  label: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Pantallazo de producto dentro de un marco de navegador. */
export function Shot({ name, alt, label, priority, sizes = "(min-width: 1024px) 640px, 92vw", className = "" }: ShotProps) {
  return (
    <figure className={`frame ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-tint px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc14d]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#3ddc97]/70" />
        </span>
        <span className="mx-auto max-w-[70%] truncate rounded-md border border-line bg-white px-3 py-0.5 text-[11px] font-semibold text-muted">
          {label}
        </span>
        <span className="w-10" aria-hidden="true" />
      </div>
      <img
        src={`/screens/${name}-1600.webp`}
        srcSet={`/screens/${name}-800.webp 800w, /screens/${name}-1600.webp 1600w`}
        sizes={sizes}
        alt={alt}
        width={1600}
        height={1000}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full"
      />
    </figure>
  );
}
