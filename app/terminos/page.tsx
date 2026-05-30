import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos de Uso — Pathway",
  description: "Condiciones generales de uso de la plataforma Pathway OS.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      {/* Nav mínimo */}
      <nav className="w-full px-6 py-5 max-w-4xl mx-auto flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-black text-lg tracking-tight">
            PATH<span className="text-blue-600 dark:text-blue-400">WAY</span>
          </span>
        </div>
        <Link href="/v2"
          className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowLeft size={14} /> Volver
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
            <FileText size={22} color="white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Legal</p>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">Términos de Uso</h1>
          </div>
        </div>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">Última actualización: 29 de mayo de 2025</p>

        <div className="space-y-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar la plataforma Pathway OS (en adelante, "el Servicio") operada por Pathway SpA (en adelante, "Pathway"), el usuario acepta quedar vinculado por los presentes Términos de Uso. Si no está de acuerdo con alguna de estas condiciones, no debe utilizar el Servicio.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">2. Descripción del Servicio</h2>
            <p>
              Pathway OS es una plataforma de gestión logística orientada a empresas de transporte y operadores 3PL. Incluye módulos de planificación de rutas, liquidación de conductores, gestión de flota, consultas operativas y otras funcionalidades descritas en el producto contratado.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">3. Acceso y cuentas de usuario</h2>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>El acceso al Servicio requiere credenciales (correo y contraseña) proporcionadas por la empresa cliente o su administrador.</li>
              <li>El usuario es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades que ocurran bajo su cuenta.</li>
              <li>Pathway se reserva el derecho de suspender cuentas que violen estos términos o que presenten actividad sospechosa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">4. Uso aceptable</h2>
            <p>El usuario se compromete a no:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>Utilizar el Servicio para actividades ilegales o que violen derechos de terceros.</li>
              <li>Intentar acceder sin autorización a sistemas, datos o redes de Pathway o de otros clientes.</li>
              <li>Realizar ingeniería inversa, descompilar o desensamblar el software.</li>
              <li>Compartir credenciales de acceso con personas no autorizadas.</li>
              <li>Cargar contenido malicioso (malware, scripts de ataque, etc.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">5. Propiedad intelectual</h2>
            <p>
              Todo el software, diseño, código, textos y materiales del Servicio son propiedad exclusiva de Pathway SpA o sus licenciantes. El uso del Servicio no otorga al usuario ningún derecho sobre la propiedad intelectual de Pathway salvo la licencia limitada de uso descrita en el contrato de servicio.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">6. Datos del cliente</h2>
            <p>
              Los datos operativos ingresados por el cliente (rutas, pedidos, conductores, etc.) son propiedad del cliente. Pathway los utiliza exclusivamente para prestar el Servicio y no los compartirá con terceros salvo por requerimiento legal. Al terminar la relación contractual, el cliente puede solicitar la exportación de sus datos dentro de 30 días.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">7. Disponibilidad y SLA</h2>
            <p>
              Pathway procura una disponibilidad del Servicio de al menos 99 % mensual. El mantenimiento programado se notificará con un mínimo de 48 horas de anticipación. Las interrupciones no programadas serán comunicadas a través de los canales de soporte tan pronto sean detectadas.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">8. Limitación de responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley chilena, Pathway no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso o imposibilidad de uso del Servicio. La responsabilidad total de Pathway no excederá el monto pagado por el cliente en los 3 meses anteriores al evento que originó la reclamación.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">9. Modificaciones al Servicio y a los Términos</h2>
            <p>
              Pathway puede modificar o discontinuar funcionalidades del Servicio con un preaviso razonable. Los presentes Términos pueden actualizarse; los cambios sustanciales serán notificados por correo electrónico con al menos 15 días de anticipación. El uso continuado del Servicio tras dicha notificación implica la aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">10. Legislación aplicable y resolución de conflictos</h2>
            <p>
              Estos Términos se rigen por las leyes de la República de Chile. Cualquier controversia será sometida a la jurisdicción de los tribunales ordinarios de justicia de la ciudad de Santiago, Chile.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">11. Contacto</h2>
            <p>
              Para consultas sobre estos Términos, contáctanos en:<br />
              <a href="mailto:hola@pathway.cl" className="text-blue-600 dark:text-blue-400 hover:underline">hola@pathway.cl</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-100 dark:border-slate-800 px-6 py-6 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-600">
          <span>© {new Date().getFullYear()} Pathway SpA · Chile</span>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="hover:text-blue-500 transition-colors">Política de privacidad</Link>
            <Link href="/v2" className="hover:text-blue-500 transition-colors">Inicio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
