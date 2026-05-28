"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight, Menu, X, Sun, Moon, Shield, ChevronDown,
  Map, DollarSign, Truck, BarChart3, CheckCircle2,
  MessageSquare, Mail, Phone, Check, Zap, Globe, Users
} from "lucide-react";

// ── Theme ─────────────────────────────────────────────────────────────────────
function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("pw-theme");
    const sys = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(saved === "dark" || (!saved && sys));
  }, []);
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("pw-theme", isDark ? "dark" : "light");
  }, [isDark, mounted]);
  return { isDark, toggle: () => setIsDark(d => !d) };
}

// ── Products config ───────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "flow",
    name: "Pathway Flow",
    tag: "Planificación",
    tagline: "Planifica 10 rutas en 15 minutos",
    desc: "Importa, asigna y exporta tu operación diaria. Reemplaza el Excel de planificación con un sistema visual en tiempo real.",
    color: "#0891b2",
    darkColor: "#22d3ee",
    bg: "from-cyan-500 to-blue-600",
    lightBg: "#ecfeff",
    darkBg: "#0c1f2e",
    href: "/flow",
    icon: Map,
    metrics: [{ val: "80%", label: "menos tiempo planificando" }, { val: "100%", label: "visibilidad de rutas" }],
  },
  {
    id: "control",
    name: "Pathway Control",
    tag: "Back-office",
    tagline: "De la entrega al pago, sin planillas",
    desc: "Liquidación, flota, consultas y prefacturas en un solo lugar. Elimina los errores de pago y gestiona tu flota con trazabilidad total.",
    color: "#7c3aed",
    darkColor: "#a78bfa",
    bg: "from-violet-600 to-purple-700",
    lightBg: "#f5f3ff",
    darkBg: "#1a0f2e",
    href: "/control",
    icon: DollarSign,
    metrics: [{ val: "60%", label: "menos tiempo en liquidación" }, { val: "0", label: "errores de pago" }],
  },
  {
    id: "os",
    name: "Pathway OS",
    tag: "All-in-one",
    tagline: "Toda tu operación en un solo lugar",
    desc: "Flow + Control integrados en una plataforma web y aplicación de escritorio. La experiencia logística completa para tu empresa.",
    color: "#2563eb",
    darkColor: "#60a5fa",
    bg: "from-blue-600 to-indigo-700",
    lightBg: "#eff6ff",
    darkBg: "#0d1b3e",
    href: "/os",
    icon: Globe,
    metrics: [{ val: "Web", label: "+ Escritorio" }, { val: "1", label: "plataforma completa" }],
    featured: true,
  },
];

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-black text-lg text-slate-900 dark:text-white tracking-tight">
            PATH<span className="text-blue-600 dark:text-blue-400">WAY</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Products dropdown */}
          <div className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
            <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              Productos <ChevronDown size={14} className={`transition-transform ${dropOpen ? "rotate-180" : ""}`} />
            </button>
            {dropOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
                  {PRODUCTS.map(p => (
                    <a key={p.id} href={p.href}
                      className="flex items-start gap-3 px-4 py-3.5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group border-b border-slate-100 dark:border-slate-800 last:border-none">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <p.icon size={14} color="white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{p.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{p.tagline}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[["Precios", "#precios"], ["Nosotros", "#nosotros"], ["Contacto", "#contacto"]].map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">{l}</a>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          <button onClick={toggle} className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href="/portal" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            Ingresar
          </a>
          <a href="#contacto" className="text-sm font-bold text-white px-5 py-2 rounded-lg transition-all"
            style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 2px 12px rgba(37,99,235,0.35)" }}>
            Demo gratuita
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-1">
          <button onClick={toggle} className="w-9 h-9 flex items-center justify-center text-slate-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-300">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Productos</p>
          {PRODUCTS.map(p => (
            <a key={p.id} href={p.href} className="flex items-center gap-3 py-2.5">
              <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center shrink-0`}>
                <p.icon size={13} color="white" />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{p.name}</span>
            </a>
          ))}
          <div className="border-t border-slate-100 dark:border-slate-800 mt-3 pt-3 space-y-1">
            {[["Precios", "#precios"], ["Contacto", "#contacto"]].map(([l, h]) => (
              <a key={l} href={h} className="block py-2 text-sm text-slate-600 dark:text-slate-300">{l}</a>
            ))}
            <a href="#contacto" className="block mt-2 text-center py-2.5 text-sm font-bold text-white rounded-xl"
              style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)" }}>
              Demo gratuita
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
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 pt-20 pb-24 px-6 transition-colors duration-300">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06] dark:opacity-[0.1]"
          style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-8 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Tecnología logística para operadores 3PL · Chile
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
          El sistema operativo<br />
          <span className="relative">
            de tu{" "}
            <span className="relative inline-block">
              <span style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                logística
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,4 Q150,8 200,3" stroke="url(#g)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#2563eb"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
              </svg>
            </span>
          </span>
        </h1>

        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Tres soluciones que transforman cómo planificas, controlas y pagas tu operación logística. Sin Excel. Sin errores. En tiempo real.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="#contacto" className="flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all"
            style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 6px 24px rgba(37,99,235,0.4)" }}>
            Habla con un especialista <ArrowRight size={15} />
          </a>
          <a href="#productos" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-semibold px-8 py-4 rounded-xl text-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all bg-white dark:bg-slate-900">
            Ver soluciones
          </a>
        </div>

        {/* Impact numbers */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-12 px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          {[
            { val: "80%", label: "menos tiempo planificando" },
            { val: "60%", label: "menos tiempo liquidando" },
            { val: "100%", label: "trazabilidad de entregas" },
          ].map(({ val, label }, i) => (
            <div key={val} className={`text-center ${i > 0 ? "sm:border-l border-slate-200 dark:border-slate-700 sm:pl-12" : ""}`}>
              <div className="text-2xl font-black text-slate-900 dark:text-white">{val}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Products ──────────────────────────────────────────────────────────────────
function Products() {
  return (
    <section id="productos" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Nuestras soluciones</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Tres productos. Un ecosistema.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Adquiere lo que necesitas hoy. Escala cuando lo requieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <a key={p.id} href={p.href}
              className={`group relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border ${
                p.featured
                  ? "border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-800 ring-2 ring-blue-600/20 dark:ring-blue-400/20"
                  : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-700"
              }`}>

              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    Solución completa
                  </span>
                </div>
              )}

              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center shadow-lg`}
                  style={{ boxShadow: `0 8px 20px ${p.color}30` }}>
                  <p.icon size={22} color="white" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full border"
                  style={{ color: p.color, borderColor: `${p.color}30`, background: `${p.color}10` }}>
                  {p.tag}
                </span>
              </div>

              {/* Name + tagline */}
              <h3 className="font-black text-xl text-slate-900 dark:text-white mb-1 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                {p.name}
              </h3>
              <p className="font-semibold text-sm mb-3" style={{ color: p.color }}>{p.tagline}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6 pt-5 border-t border-slate-100 dark:border-slate-700">
                {p.metrics.map(({ val, label }) => (
                  <div key={label} className="rounded-xl p-3" style={{ background: `${p.color}08` }}>
                    <div className="font-black text-lg" style={{ color: p.color }}>{val}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-sm font-bold transition-all" style={{ color: p.color }}>
                Conocer más <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Integration note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            ✦ Pathway Flow y Pathway Control se integran nativamente en{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">Pathway OS</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Why Pathway ───────────────────────────────────────────────────────────────
function Why() {
  return (
    <section id="nosotros" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Por qué Pathway</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              No somos solo un software.<br />Somos tu partner tecnológico.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">
              Diseñamos Pathway para el mercado logístico chileno. Entendemos cómo
              operan los 3PL, sus procesos, sus integraciones y sus dolores. Por eso nuestras
              soluciones se implementan en semanas, no en meses.
            </p>

            <div className="space-y-4">
              {[
                { icon: Zap, title: "Implementación en 30 días", desc: "Operativo y con tu equipo capacitado en menos de un mes." },
                { icon: Shield, title: "Datos seguros en la nube", desc: "Infraestructura segura con backups automáticos y acceso desde cualquier lugar." },
                { icon: Users, title: "Soporte en español", desc: "Equipo local que conoce tu operación y responde en horas, no en días." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{title}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="space-y-4">
            {/* Big stat */}
            <div className="rounded-2xl p-8 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg,#1d4ed8,#4f46e5)" }}>
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10"
                style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%,-30%)" }} />
              <p className="text-sm font-semibold text-blue-200 mb-1">Operadores que ya digitalizaron</p>
              <p className="text-6xl font-black text-white mb-2">3PL</p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Operadores logísticos en Chile confían en Pathway para gestionar
                sus operaciones diarias.
              </p>
            </div>

            {/* Two smaller stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "30 días", label: "tiempo promedio de implementación", color: "#0891b2" },
                { val: "24h", label: "tiempo de respuesta del soporte", color: "#7c3aed" },
              ].map(({ val, label, color }) => (
                <div key={val} className="rounded-2xl p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="font-black text-2xl mb-1" style={{ color }}>{val}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{label}</div>
                </div>
              ))}
            </div>

            {/* Compatible with */}
            <div className="rounded-2xl p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Compatible con</p>
              <div className="flex flex-wrap gap-2">
                {["Excel Rosen", "Drivin API", "Beetrack", "SAP", "Odoo"].map(t => (
                  <span key={t} className="text-xs font-semibold px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const PLANS = [
    {
      product: "Pathway Flow",
      tag: "Planificación",
      color: "#0891b2",
      bg: "from-cyan-500 to-blue-600",
      desc: "Para equipos que necesitan digitalizar la planificación de rutas.",
      features: ["Importación Excel / API", "Planificación en mapa", "Asignación de conductores", "Exportación de rutas", "Soporte estándar"],
    },
    {
      product: "Pathway Control",
      tag: "Back-office",
      color: "#7c3aed",
      bg: "from-violet-600 to-purple-700",
      desc: "Para empresas que quieren automatizar liquidación, flota y cobros.",
      features: ["Liquidación de conductores", "Gestión de flota y documentos", "Prefacturas por mandante", "Dashboard y consultas", "Soporte prioritario"],
    },
    {
      product: "Pathway OS",
      tag: "Completo",
      color: "#2563eb",
      bg: "from-blue-600 to-indigo-700",
      desc: "La solución completa: Flow + Control + app de escritorio.",
      features: ["Todo Flow incluido", "Todo Control incluido", "App de escritorio nativa", "Multi-empresa", "Onboarding dedicado", "SLA garantizado"],
      featured: true,
    },
  ];

  return (
    <section id="precios" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Precios</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Un plan por cada etapa de tu crecimiento
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Empieza con lo que necesitas. Escala cuando quieras.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan) => (
            <div key={plan.product}
              className={`rounded-2xl p-7 flex flex-col bg-white dark:bg-slate-800 transition-all ${
                plan.featured
                  ? "ring-2 ring-blue-600 dark:ring-blue-500 shadow-2xl shadow-blue-100 dark:shadow-blue-950"
                  : "border border-slate-200 dark:border-slate-700 hover:shadow-lg"
              }`}
              style={plan.featured ? { transform: "scale(1.03)" } : {}}>

              {plan.featured && (
                <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: plan.color }}>
                  ⭐ Recomendado
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${plan.bg} flex items-center justify-center`}>
                  <span className="text-white text-xs font-black">{plan.product.split(" ")[1][0]}</span>
                </div>
                <div>
                  <p className="font-black text-slate-900 dark:text-white text-sm">{plan.product}</p>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color: plan.color, background: `${plan.color}12` }}>{plan.tag}</span>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{plan.desc}</p>

              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: `${plan.color}15` }}>
                      <Check size={10} style={{ color: plan.color }} strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto"
                className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${
                  plan.featured
                    ? "text-white"
                    : "border-2 text-slate-900 dark:text-white hover:text-white"
                }`}
                style={plan.featured
                  ? { background: `linear-gradient(135deg, ${plan.color}, #4f46e5)`, boxShadow: `0 4px 16px ${plan.color}40` }
                  : { borderColor: plan.color, color: plan.color }
                }
                onMouseEnter={e => { if (!plan.featured) (e.currentTarget as HTMLElement).style.background = plan.color; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { if (!plan.featured) { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = plan.color; } }}>
                Solicitar demo
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 dark:text-slate-500 mt-8">
          Todos los planes incluyen soporte en español, actualizaciones automáticas y acceso web.
        </p>
      </div>
    </section>
  );
}

// ── CTA Band ──────────────────────────────────────────────────────────────────
function CTABand() {
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e2d5a 50%,#0f172a 100%)" }}>
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
          ¿Listo para digitalizar<br />tu operación logística?
        </h2>
        <p className="text-slate-400 text-lg mb-8">
          Habla con un especialista y descubre qué solución se adapta a tu empresa.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#contacto" className="flex items-center gap-2 font-bold px-8 py-4 rounded-xl text-sm text-white transition-all"
            style={{ background: "linear-gradient(135deg,#2563eb,#4f46e5)", boxShadow: "0 6px 24px rgba(37,99,235,0.4)" }}>
            Solicitar demo gratuita <ArrowRight size={15} />
          </a>
          <a href="/portal" className="flex items-center gap-2 font-semibold px-8 py-4 rounded-xl text-sm border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white transition-all">
            Acceder al sistema
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", producto: "", mensaje: "" });

  return (
    <section id="contacto" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-2">
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Contacto</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-5 leading-tight">Hablemos de tu operación</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
              Cuéntanos cómo opera tu empresa y te mostramos la solución que mejor se adapta a tus necesidades.
            </p>
            <div className="space-y-4 mb-8">
              {[[Mail, "hola@pathway.cl"], [Phone, "+56 9 XXXX XXXX"]].map(([Icon, val]) => (
                <div key={val as string} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{val as string}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              {["Demo personalizada en 30 min", "Sin compromiso ni contratos", "Respuesta en menos de 24h"].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-xl shadow-slate-100 dark:shadow-slate-950/50">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={30} className="text-blue-600" />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white text-xl mb-2">¡Gracias por contactarnos!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Un especialista te escribirá en menos de 24 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 className="font-black text-slate-900 dark:text-white text-lg mb-5">Solicitar demo gratuita</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[{ n: "nombre", l: "Nombre *", p: "Tu nombre" }, { n: "empresa", l: "Empresa *", p: "Nombre empresa" }].map(({ n, l, p }) => (
                    <div key={n}>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">{l}</label>
                      <input type="text" placeholder={p} required value={form[n as keyof typeof form]} onChange={e => setForm({ ...form, [n]: e.target.value })}
                        className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Email *</label>
                    <input type="email" placeholder="tu@empresa.cl" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Teléfono</label>
                    <input type="tel" placeholder="+56 9 XXXX XXXX" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">¿Qué solución te interesa?</label>
                  <select value={form.producto} onChange={e => setForm({ ...form, producto: e.target.value })}
                    className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    <option value="">Seleccionar...</option>
                    <option>Pathway Flow</option>
                    <option>Pathway Control</option>
                    <option>Pathway OS</option>
                    <option>No sé aún, quiero asesoría</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Cuéntanos tu operación</label>
                  <textarea rows={3} placeholder="¿Cuántos conductores? ¿Qué usas hoy? ..." value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none" />
                </div>
                <button type="submit" className="w-full text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}>
                  <MessageSquare size={15} /> Solicitar demo gratuita
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
    <footer className="bg-slate-950 py-16 px-6 text-slate-500 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
                <span className="text-white font-black text-xs">P</span>
              </div>
              <span className="font-black text-white text-base">PATH<span className="text-blue-400">WAY</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5">
              El sistema operativo de tu logística. Tecnología diseñada para operadores 3PL en Chile.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Shield size={11} /> Infraestructura segura · Chile
            </div>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-4">Productos</p>
            <ul className="space-y-2.5 text-sm">
              {[["Pathway Flow", "/flow"], ["Pathway Control", "/control"], ["Pathway OS", "/os"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-4">Empresa</p>
            <ul className="space-y-2.5 text-sm">
              {[["Nosotros", "#nosotros"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-4">Acceso</p>
            <ul className="space-y-2.5 text-sm">
              {[["Portal clientes", "/portal"], ["hola@pathway.cl", "mailto:hola@pathway.cl"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} Pathway · Bigticket Logística SPA · Chile</span>
          <span className="text-slate-700">Todos los derechos reservados</span>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const { isDark, toggle } = useTheme();
  return (
    <>
      <Navbar isDark={isDark} toggle={toggle} />
      <main className="flex-1">
        <Hero />
        <Products />
        <Why />
        <CTABand />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
