import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad — Pathway",
  description: "Cómo Pathway SpA recopila, usa y protege la información de sus usuarios.",
};

export default function PrivacidadPage() {
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
            style={{ background: "linear-gradient(135deg,#1d4ed8,#4f46e5)" }}>
            <Shield size={22} color="white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Legal</p>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">Política de Privacidad</h1>
          </div>
        </div>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">Última actualización: 29 de mayo de 2025</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">1. Quiénes somos</h2>
            <p>
              Pathway SpA (en adelante, "Pathway", "nosotros") es una empresa con domicilio en Chile, que desarrolla y opera la plataforma de gestión logística Pathway OS. Esta política describe cómo recopilamos, utilizamos y protegemos la información personal de quienes usan nuestra plataforma y visitan nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">2. Información que recopilamos</h2>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li><strong>Información de contacto:</strong> nombre, correo electrónico, empresa y teléfono al registrarse o completar formularios.</li>
              <li><strong>Datos de uso:</strong> acciones dentro de la plataforma, páginas visitadas, hora y fecha de acceso, dirección IP y tipo de dispositivo.</li>
              <li><strong>Datos operativos:</strong> información que la empresa cliente ingresa a la plataforma (rutas, conductores, pedidos, liquidaciones), los cuales son propiedad del cliente.</li>
              <li><strong>Cookies y tecnologías similares:</strong> para mantener sesiones activas y recordar preferencias de visualización.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">3. Cómo usamos tu información</h2>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>Proveer y mantener los servicios de la plataforma Pathway OS.</li>
              <li>Responder solicitudes de soporte y comunicarnos con los usuarios.</li>
              <li>Enviar actualizaciones de producto y avisos relacionados con el servicio contratado.</li>
              <li>Mejorar la experiencia de usuario mediante análisis de uso (de forma agregada y anonimizada).</li>
              <li>Cumplir con obligaciones legales aplicables en Chile.</li>
            </ul>
            <p className="mt-3">No vendemos ni cedemos datos personales a terceros con fines comerciales.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">4. Base legal del tratamiento</h2>
            <p>
              El tratamiento de datos se realiza conforme a la Ley N.° 19.628 sobre Protección de la Vida Privada (Chile) y en base al consentimiento del usuario, la ejecución del contrato de servicio suscrito y el cumplimiento de obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">5. Almacenamiento y seguridad</h2>
            <p>
              Los datos se almacenan en servidores ubicados en EE.UU. bajo proveedores de nube con estándares de seguridad ISO 27001. Implementamos cifrado en tránsito (TLS), control de acceso por roles y copias de seguridad periódicas. A pesar de estas medidas, ningún sistema es 100% infalible; notificaremos a los afectados ante una brecha significativa.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">6. Cookies</h2>
            <p>
              Usamos cookies de sesión (necesarias para el funcionamiento del servicio) y cookies de preferencias (tema visual, idioma). No utilizamos cookies de rastreo publicitario de terceros. Puedes desactivar las cookies en tu navegador, aunque esto puede afectar algunas funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">7. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-2">
              <li>Acceder a los datos personales que tenemos sobre ti.</li>
              <li>Solicitar la rectificación de datos inexactos.</li>
              <li>Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
              <li>Oponerte al tratamiento en determinadas circunstancias.</li>
            </ul>
            <p className="mt-3">Para ejercer tus derechos, escríbenos a <a href="mailto:hola@pathway.cl" className="text-blue-600 dark:text-blue-400 hover:underline">hola@pathway.cl</a>.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">8. Retención de datos</h2>
            <p>
              Conservamos los datos mientras la relación contractual esté vigente y por el período adicional exigido por la legislación chilena (mínimo 5 años para documentos contables). Los datos de usuarios que no han iniciado sesión en más de 3 años pueden ser eliminados previa notificación.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">9. Cambios a esta política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política. Notificaremos los cambios significativos por correo electrónico o mediante un aviso destacado en la plataforma con al menos 15 días de anticipación.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-3">10. Contacto</h2>
            <p>
              Ante cualquier consulta o ejercicio de derechos relacionados con esta política, contáctanos en:<br />
              <a href="mailto:hola@pathway.cl" className="text-blue-600 dark:text-blue-400 hover:underline">hola@pathway.cl</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-100 dark:border-slate-800 px-6 py-6 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-600">
          <span>© {new Date().getFullYear()} Pathway SpA · Chile</span>
          <div className="flex items-center gap-4">
            <Link href="/terminos" className="hover:text-blue-500 transition-colors">Términos de uso</Link>
            <Link href="/v2" className="hover:text-blue-500 transition-colors">Inicio</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
