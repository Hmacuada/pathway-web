import { redirect } from "next/navigation";

// Borrador antiguo del sitio: ya no existe, se envía a la portada.
export default function V2() {
  redirect("/");
}
