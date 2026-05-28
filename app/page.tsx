"use client";
import { useState } from "react";
import {
  Map, DollarSign, Truck, FileSpreadsheet, BarChart3,
  Package, CheckCircle2, ArrowRight, Menu, X, ChevronDown,
  Mail, Phone, MessageSquare, Zap, Shield, Globe
} from "lucide-react";

const APP_URL = "https://app.pathway.cl";

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">
            PATH<span className="text-blue-600">WAY</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[["Producto", "#features"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([label, href]) => (
            <a key={label} href={href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/portal"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Ingresar
          </a>
          <a href="#contacto"
            className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Solicitar demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          {[["Producto", "#features"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-700 py-1">{label}</a>
          ))}
          <div className="pt-2 space-y-2">
            <a href="/portal" className="block text-sm text-center font-medium text-blue-600 py-2 border border-blue-200 rounded-lg">
              Ingresar al sistema
            </a>
            <a href="#contacto" onClick={() => setOpen(false)}
              className="block text-sm text-center font-semibold bg-blue-600 text-white py-2 rounded-lg">
              Solicitar demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-blue-100">
          <Zap size={11} fill="currentColor" />
          Plataforma Logística · Operadores 3PL
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-6">
          Gestiona, planifica y<br />
          <span className="text-blue-600">liquida</span> en una sola plataforma
        </h1>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Pathway centraliza toda tu operación logística: rutas, conductores, flota,
          importaciones y liquidaciones. Sin planillas, sin errores.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contacto"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-200 text-sm">
            Solicitar demo gratuita <ArrowRight size={16} />
          </a>
          <a href="/portal"
            className="flex items-center gap-2 text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-sm">
            Ingresar al sistema
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[["+10", "módulos integrados"], ["3PL", "operadores logísticos"], ["100%", "cloud & en tiempo real"]].map(([num, label]) => (
            <div key={num} className="text-center">
              <div className="text-2xl font-black text-slate-900">{num}</div>
              <div className="text-xs text-slate-500 mt-0.5 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* App screenshot placeholder */}
      <div className="max-w-5xl mx-auto mt-16">
        <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
            <div className="flex gap-1.5">
              {["#ef4444","#f59e0b","#22c55e"].map(c => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 mx-4 bg-slate-700 rounded-md h-5 flex items-center px-3">
              <span className="text-slate-400 text-[10px]">app.pathway.cl</span>
            </div>
          </div>
          {/* Screen content */}
          <div className="h-80 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 px-8 w-full max-w-2xl">
              {[
                { icon: BarChart3, label: "Dashboard",      color: "bg-blue-500"   },
                { icon: Map,        label: "Planificación",  color: "bg-teal-500"   },
                { icon: DollarSign, label: "Liquidación",    color: "bg-violet-500" },
                { icon: Truck,      label: "Gestión Flota",  color: "bg-slate-600"  },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon size={24} color="white" strokeWidth={1.6} />
                  </div>
                  <span className="text-slate-400 text-[10px] font-medium text-center leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: Map, color: "bg-teal-50 text-teal-600",
    title: "Planificación de rutas",
    desc: "Asigna conductores, crea rutas y gestiona el pool del día con vista de mapa en tiempo real. Compatible con Excel Rosen y Drivin.",
  },
  {
    icon: DollarSign, color: "bg-violet-50 text-violet-600",
    title: "Liquidación flexible",
    desc: "Motor de liquidación configurable por módulos: tarifa base, recargos zonales, adicionales, convenios locales y más.",
  },
  {
    icon: Truck, color: "bg-blue-50 text-blue-600",
    title: "Gestión de flota",
    desc: "Control de conductores, vehículos y documentos (licencias, permisos, revisiones) con alertas de vencimiento.",
  },
  {
    icon: FileSpreadsheet, color: "bg-orange-50 text-orange-600",
    title: "Importación de datos",
    desc: "Importa desde Excel Rosen, Drivin API o formato nativo Pathway. Mapeo de columnas inteligente y configurable.",
  },
  {
    icon: BarChart3, color: "bg-emerald-50 text-emerald-600",
    title: "Dashboard y consultas",
    desc: "Métricas en tiempo real, filtros por ruta, conductor y estado. Exportación a Excel con un clic.",
  },
  {
    icon: Package, color: "bg-pink-50 text-pink-600",
    title: "Prefacturas y cobros",
    desc: "Genera prefacturas automáticamente desde las liquidaciones. Control de cobros y estado de facturación por mandante.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Producto</p>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Todo lo que necesita tu operación</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Módulos diseñados para operadores 3PL que necesitan control total sobre su operación logística.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all bg-white group">
              <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center mb-4`}>
                <Icon size={20} strokeWidth={2} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Starter", price: "Consultar", period: "",
    desc: "Para operaciones pequeñas que quieren empezar a digitalizar.",
    features: ["Hasta 3 usuarios", "Planificación de rutas", "Importación Excel", "Consultas y reportes", "Soporte por email"],
    cta: "Contactar", highlight: false,
  },
  {
    name: "Pro", price: "Consultar", period: "",
    desc: "Para operadores 3PL con múltiples conductores y mandantes.",
    features: ["Usuarios ilimitados", "Todo Starter +", "Liquidación flexible", "Gestión de flota completa", "Prefacturas y cobros", "Soporte prioritario"],
    cta: "Solicitar demo", highlight: true,
  },
  {
    name: "Enterprise", price: "A medida", period: "",
    desc: "Para operaciones grandes con necesidades específicas.",
    features: ["Todo Pro +", "Multi-empresa", "Integraciones custom", "API acceso completo", "Onboarding dedicado", "SLA garantizado"],
    cta: "Hablar con ventas", highlight: false,
  },
];

function Pricing() {
  return (
    <section id="precios" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Precios</p>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Planes para cada operación</h2>
          <p className="text-slate-500 text-lg">Sin contratos anuales. Cancela cuando quieras.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.highlight && (
                <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-4">
                  Más popular
                </div>
              )}
              <h3 className={`font-black text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-3xl font-black mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                {plan.price}
              </p>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                {plan.desc}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${plan.highlight ? "text-blue-200" : "text-blue-500"}`} />
                    <span className={plan.highlight ? "text-blue-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto"
                className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // En producción: POST a /api/contact
    setSent(true);
  }

  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Contacto</p>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Hablemos de tu operación</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Agenda una demo gratuita y te mostramos cómo Pathway puede digitalizar
              y optimizar tu operación logística en menos de 30 días.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "contacto@pathway.cl" },
                { icon: Phone, text: "+56 9 XXXX XXXX" },
                { icon: Globe, text: "www.pathway.cl" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-600">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Icon size={16} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Garantías */}
            <div className="mt-10 space-y-2">
              {["Demo gratuita sin compromiso", "Implementación en menos de 30 días", "Soporte en español"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-500 text-sm">Te contactaremos en menos de 24 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "nombre", placeholder: "Tu nombre", label: "Nombre *", required: true, col: 1 },
                    { name: "empresa", placeholder: "Nombre empresa", label: "Empresa *", required: true, col: 1 },
                  ].map(({ name, placeholder, label, required }) => (
                    <div key={name}>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">{label}</label>
                      <input
                        type="text"
                        placeholder={placeholder}
                        required={required}
                        value={form[name as keyof typeof form]}
                        onChange={e => setForm({ ...form, [name]: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email *</label>
                  <input
                    type="email" placeholder="tu@empresa.cl" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Teléfono</label>
                  <input
                    type="tel" placeholder="+56 9 XXXX XXXX"
                    value={form.telefono}
                    onChange={e => setForm({ ...form, telefono: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">¿Qué necesitas?</label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos brevemente tu operación..."
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                <button type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
                  <MessageSquare size={15} /> Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-xs">P</span>
              </div>
              <span className="font-bold text-white text-base">PATH<span className="text-blue-400">WAY</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Plataforma logística para operadores 3PL. Gestiona, planifica y liquida en una sola herramienta.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Producto</p>
            <ul className="space-y-2 text-sm">
              {[["Funcionalidades", "#features"], ["Precios", "#precios"], ["Portal cliente", "/portal"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Empresa</p>
            <ul className="space-y-2 text-sm">
              {[["Contacto", "#contacto"], ["Demo gratuita", "#contacto"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} Pathway. Todos los derechos reservados.</span>
          <span className="text-slate-600">pathway.cl · Plataforma Logística 3PL · Chile</span>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
