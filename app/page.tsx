"use client";
import { useState, useEffect } from "react";
import {
  Map, DollarSign, Truck, FileSpreadsheet, BarChart3,
  Package, CheckCircle2, ArrowRight, Menu, X,
  Mail, Phone, MessageSquare, Zap, Shield,
  TrendingUp, Clock, Users, ChevronRight, Star
} from "lucide-react";

const APP_URL = "https://app.pathway.cl";

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between" style={{height:"72px"}}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className={`font-black text-lg tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
            PATH<span className="text-blue-400">WAY</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[["Producto", "#features"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([label, href]) => (
            <a key={label} href={href}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${scrolled ? "text-slate-600" : "text-white/80"}`}>
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/portal"
            className={`text-sm font-medium transition-colors hover:text-blue-400 ${scrolled ? "text-slate-600" : "text-white/80"}`}>
            Ingresar
          </a>
          <a href="#contacto"
            className="text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-600/30">
            Solicitar demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className={`md:hidden transition-colors ${scrolled ? "text-slate-700" : "text-white"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 shadow-xl">
          {[["Producto", "#features"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}
              className="block text-sm font-medium text-slate-700 py-1.5">{label}</a>
          ))}
          <div className="pt-2 space-y-2 border-t border-slate-100">
            <a href="/portal" className="block text-sm text-center font-medium text-blue-600 py-2.5 border border-blue-200 rounded-xl">
              Ingresar al sistema
            </a>
            <a href="#contacto" onClick={() => setOpen(false)}
              className="block text-sm text-center font-bold bg-blue-600 text-white py-2.5 rounded-xl shadow-lg shadow-blue-200">
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020917 0%, #0a1628 40%, #0d1f45 70%, #071020 100%)" }}>

      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)", filter: "blur(80px)" }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-8 border"
          style={{ background: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.3)", color: "#93c5fd" }}>
          <Zap size={11} fill="currentColor" />
          Plataforma Logística para Operadores 3PL
          <ChevronRight size={12} />
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 text-white">
          Gestiona, planifica y{" "}
          <span style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            liquida
          </span>
          <br />en una sola plataforma
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#94a3b8" }}>
          Pathway centraliza toda tu operación logística: rutas, conductores, flota,
          importaciones y liquidaciones. Sin planillas, sin errores.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#contacto"
            className="flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all text-sm text-white"
            style={{ background: "linear-gradient(135deg, #2563eb, #3b82f6)", boxShadow: "0 8px 30px rgba(37,99,235,0.4)" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,99,235,0.6)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,99,235,0.4)")}>
            Solicitar demo gratuita <ArrowRight size={16} />
          </a>
          <a href="/portal"
            className="flex items-center gap-2 font-semibold px-8 py-4 rounded-xl transition-all text-sm border"
            style={{ color: "#cbd5e1", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>
            Ingresar al sistema
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-16">
          {[
            { num: "+10", label: "módulos integrados" },
            { num: "100%", label: "cloud & tiempo real" },
            { num: "30d", label: "implementación" },
          ].map(({ num, label }) => (
            <div key={num} className="text-center">
              <div className="text-3xl font-black text-white">{num}</div>
              <div className="text-xs mt-1" style={{ color: "#64748b" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glow under mockup */}
          <div className="absolute inset-x-8 -bottom-4 h-12 rounded-full opacity-40"
            style={{ background: "linear-gradient(90deg, #2563eb, #6366f1)", filter: "blur(20px)" }} />

          <div className="relative rounded-2xl overflow-hidden border"
            style={{ background: "#0d1117", borderColor: "rgba(255,255,255,0.1)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}>
            {/* Browser bar */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b"
              style={{ background: "#161b22", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="flex gap-1.5">
                {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="flex-1 mx-4 rounded-md h-6 flex items-center px-3 gap-2"
                style={{ background: "rgba(255,255,255,0.06)" }}>
                <Shield size={10} style={{ color: "#4ade80" }} />
                <span className="text-[10px]" style={{ color: "#64748b" }}>app.pathway.cl</span>
              </div>
            </div>

            {/* App UI simulation */}
            <div className="p-5" style={{ background: "#0d1117" }}>
              {/* Top bar */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-24 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
                  <div className="h-2.5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
                </div>
                <div className="flex gap-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-6 w-16 rounded-md" style={{ background: "rgba(255,255,255,0.06)" }} />
                  ))}
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[
                  { label: "Rutas hoy", val: "24", color: "#2563eb", icon: Map },
                  { label: "Conductores", val: "18", color: "#7c3aed", icon: Users },
                  { label: "Liquidación", val: "$1.2M", color: "#059669", icon: DollarSign },
                  { label: "Pendientes", val: "3", color: "#d97706", icon: Clock },
                ].map(({ label, val, color, icon: Icon }) => (
                  <div key={label} className="p-3 rounded-xl border"
                    style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-medium" style={{ color: "#64748b" }}>{label}</span>
                      <div className="w-5 h-5 rounded-md flex items-center justify-center"
                        style={{ background: `${color}22` }}>
                        <Icon size={10} style={{ color }} />
                      </div>
                    </div>
                    <div className="text-lg font-black text-white">{val}</div>
                  </div>
                ))}
              </div>

              {/* Table rows */}
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                {[
                  { ruta: "Ruta Norte — Santiago", conductor: "C. Ramírez", estado: "En ruta", color: "#22c55e" },
                  { ruta: "Ruta Sur — Pudahuel", conductor: "M. González", estado: "Completada", color: "#3b82f6" },
                  { ruta: "Ruta Centro — Maipú", conductor: "P. Soto", estado: "Pendiente", color: "#f59e0b" },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-4 py-2.5 ${i < 2 ? "border-b" : ""}`}
                    style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", borderColor: "rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: row.color }} />
                      <span className="text-[10px] font-medium text-white">{row.ruta}</span>
                    </div>
                    <span className="text-[9px]" style={{ color: "#64748b" }}>{row.conductor}</span>
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: row.color, background: `${row.color}18` }}>{row.estado}</span>
                  </div>
                ))}
              </div>
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
    icon: Map,
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    title: "Planificación de rutas",
    desc: "Asigna conductores, crea rutas y gestiona el pool del día con mapa en tiempo real. Compatible con Excel Rosen y Drivin.",
  },
  {
    icon: DollarSign,
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
    title: "Liquidación flexible",
    desc: "Motor configurable por módulos: tarifa base, recargos zonales, adicionales, convenios locales y más. Sin fórmulas en Excel.",
  },
  {
    icon: Truck,
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
    title: "Gestión de flota",
    desc: "Control de conductores, vehículos y documentos con alertas automáticas de vencimiento de licencias y revisiones.",
  },
  {
    icon: FileSpreadsheet,
    gradient: "from-orange-500 to-amber-500",
    shadow: "shadow-orange-500/20",
    title: "Importación de datos",
    desc: "Importa desde Excel Rosen, Drivin API o formato nativo. Mapeo de columnas inteligente con detección automática.",
  },
  {
    icon: BarChart3,
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    title: "Dashboard y consultas",
    desc: "Métricas en tiempo real, filtros por ruta, conductor y estado. Exportación a Excel con formato Rosen incluido.",
  },
  {
    icon: Package,
    gradient: "from-sky-500 to-blue-600",
    shadow: "shadow-sky-500/20",
    title: "Prefacturas y cobros",
    desc: "Genera prefacturas automáticamente desde las liquidaciones. Control de cobros por mandante en un solo panel.",
  },
];

function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-blue-50">
            Producto
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
            Todo lo que necesita<br />tu operación logística
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
            Módulos diseñados para operadores 3PL que necesitan control total
            sin depender de planillas de Excel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, gradient, shadow, title, desc }) => (
            <div key={title}
              className="group relative p-7 rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 cursor-default">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} shadow-lg ${shadow} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <Icon size={22} color="white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2.5">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              {/* Hover indicator */}
              <div className={`absolute bottom-0 left-7 right-7 h-0.5 rounded-full bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why section ───────────────────────────────────────────────────────────────
function Why() {
  return (
    <section className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e2d4e 50%, #0f172a 100%)" }}>

      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            ¿Por qué{" "}
            <span style={{ background: "linear-gradient(90deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Pathway?
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Diseñado específicamente para operadores logísticos en Chile
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Eficiencia operacional",
              desc: "Reduce el tiempo de planificación diaria de horas a minutos. Automatiza la asignación de rutas y la liquidación de conductores.",
              color: "#60a5fa",
            },
            {
              icon: Shield,
              title: "100% en la nube",
              desc: "Accede desde cualquier dispositivo y lugar. Sin instalaciones, sin servidores propios. Actualizaciones automáticas incluidas.",
              color: "#a78bfa",
            },
            {
              icon: Zap,
              title: "Implementación rápida",
              desc: "Operativo en menos de 30 días. Importa tu data existente desde Excel, configura tus tarifas y empieza a operar.",
              color: "#34d399",
            },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="p-8 rounded-2xl border transition-all hover:border-blue-500/30"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${color}18` }}>
                <Icon size={24} style={{ color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
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
    name: "Starter",
    badge: null,
    price: "Consultar",
    desc: "Para operaciones pequeñas que quieren empezar a digitalizar.",
    features: ["Hasta 3 usuarios", "Planificación de rutas", "Importación Excel", "Consultas y reportes", "Soporte por email"],
    cta: "Contactar",
    highlight: false,
  },
  {
    name: "Pro",
    badge: "Más popular",
    price: "Consultar",
    desc: "Para operadores 3PL con múltiples conductores y mandantes.",
    features: ["Usuarios ilimitados", "Todo Starter +", "Liquidación flexible", "Gestión de flota completa", "Prefacturas y cobros", "Soporte prioritario"],
    cta: "Solicitar demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    badge: null,
    price: "A medida",
    desc: "Para operaciones grandes con necesidades específicas.",
    features: ["Todo Pro +", "Multi-empresa", "Integraciones custom", "API acceso completo", "Onboarding dedicado", "SLA garantizado"],
    cta: "Hablar con ventas",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="precios" className="py-28 px-6" style={{ background: "#f8fafc" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-blue-50">
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Planes para cada operación
          </h2>
          <p className="text-slate-500 text-lg">Sin contratos anuales. Sin sorpresas. Cancela cuando quieras.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                plan.highlight
                  ? "text-white"
                  : "bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg"
              }`}
              style={plan.highlight ? {
                background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%)",
                boxShadow: "0 20px 60px rgba(37,99,235,0.35)",
                transform: "scale(1.04)"
              } : {}}>

              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-1.5 rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-black text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-3xl font-black mb-3 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </p>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 size={15} className={`shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-500"}`} />
                    <span className={plan.highlight ? "text-blue-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto"
                className={`text-center text-sm font-bold py-3.5 rounded-xl transition-all ${
                  plan.highlight
                    ? "bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}>
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
    setSent(true);
  }

  return (
    <section id="contacto" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-blue-600 font-bold text-xs uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-blue-50">
              Contacto
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
              Hablemos de<br />tu operación
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Agenda una demo gratuita y te mostramos cómo Pathway puede
              digitalizar tu operación logística en menos de 30 días.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, text: "hola@pathway.cl", label: "Email" },
                { icon: Phone, text: "+56 9 XXXX XXXX", label: "Teléfono" },
              ].map(({ icon: Icon, text, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{label}</div>
                    <div className="text-slate-800 font-semibold text-sm">{text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl border border-slate-100 bg-slate-50 space-y-3">
              {[
                "Demo gratuita sin compromiso",
                "Implementación en menos de 30 días",
                "Soporte en español incluido",
                "Sin costos de instalación",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 p-8 shadow-xl shadow-slate-100">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-emerald-500" />
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-500 text-sm">Te contactaremos en menos de 24 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-black text-slate-900 text-xl mb-6">Solicitar demo</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "nombre", placeholder: "Tu nombre", label: "Nombre *", type: "text", required: true },
                    { name: "empresa", placeholder: "Nombre empresa", label: "Empresa *", type: "text", required: true },
                  ].map(({ name, placeholder, label, type, required }) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        value={form[name as keyof typeof form]}
                        onChange={e => setForm({ ...form, [name]: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Email *</label>
                  <input
                    type="email" placeholder="tu@empresa.cl" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Teléfono</label>
                  <input
                    type="tel" placeholder="+56 9 XXXX XXXX"
                    value={form.telefono}
                    onChange={e => setForm({ ...form, telefono: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">¿Cuéntanos tu operación?</label>
                  <textarea
                    rows={3}
                    placeholder="¿Cuántos conductores? ¿Qué software usas ahora? ..."
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white resize-none"
                  />
                </div>
                <button type="submit"
                  className="w-full text-white font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 mt-2"
                  style={{ background: "linear-gradient(135deg, #2563eb, #3b82f6)", boxShadow: "0 4px 20px rgba(37,99,235,0.3)" }}>
                  <MessageSquare size={15} /> Solicitar demo gratuita
                </button>
                <p className="text-center text-xs text-slate-400">Sin compromiso · Respuesta en 24h hábiles</p>
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
    <footer style={{ background: "#080d19" }} className="text-slate-500 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-black text-xs">P</span>
              </div>
              <span className="font-black text-white text-base tracking-tight">PATH<span className="text-blue-400">WAY</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500">
              Plataforma logística para operadores 3PL en Chile. Gestiona, planifica y liquida en una sola herramienta.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-600">
              <Shield size={12} />
              Datos alojados en servidores seguros
            </div>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-4">Producto</p>
            <ul className="space-y-2.5 text-sm">
              {[["Funcionalidades", "#features"], ["Precios", "#precios"], ["Portal cliente", "/portal"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-4">Empresa</p>
            <ul className="space-y-2.5 text-sm">
              {[["Contacto", "#contacto"], ["Demo gratuita", "#contacto"], ["hola@pathway.cl", "mailto:hola@pathway.cl"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <span>© {new Date().getFullYear()} Pathway · Bigticket Logística SPA · Chile</span>
          <span className="text-slate-700">Todos los derechos reservados</span>
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
        <Why />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
