// Datos de contacto y banderas del sitio. Se editan acá, en un solo lugar.

export const EMAIL = "hola@pathway.cl";
export const APP_URL = "https://app.pathway.cl";

// Dirección de ingreso de Pathway Bodega (la instalación en producción). Si más adelante hay una
// dirección propia, por ejemplo bodega.pathway.cl, se cambia solo acá.
export const BODEGA_URL = "https://chicaswowdemo-production.up.railway.app";

// Número real en formato internacional sin "+" ni espacios (ej. "56912345678").
// Mientras esté vacío, el botón de WhatsApp no se muestra.
export const WHATSAPP = "56966474551";

export function whatsappLink() {
  const text = encodeURIComponent("Hola, quiero ver una demo de Pathway.");
  return `https://wa.me/${WHATSAPP}?text=${text}`;
}

// Cambiar a true cuando haya clientes que autoricen mostrar su nombre y logo.
export const SHOW_CLIENTS = false;

export const LEGAL_NAME = "Pathway SpA";
export const RUT = "78.416.033-5";

export function demoLink(product: string) {
  const subject = encodeURIComponent(`Demo de Pathway ${product}`);
  const body = encodeURIComponent(
    `Hola, quiero ver una demo de Pathway ${product}.\n\nEmpresa:\nNombre:\nTeléfono:\nCómo operan hoy:\n`,
  );
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}
