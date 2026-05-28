"use client";
import { useState } from "react";
import {
  Map, DollarSign, Truck, FileSpreadsheet, BarChart3, Package,
  CheckCircle2, ArrowRight, Menu, X, Mail, Phone, MessageSquare,
  Shield, Users, Clock, TrendingUp, AlertTriangle, Check, Minus,
  ChevronRight, Play, Star
} from "lucide-react";

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-black text-lg text-slate-900 tracking-tight">
            PATH<span className="text-blue-600">WAY</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[["Solución", "#como-funciona"], ["Módulos", "#modulos"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors">{l}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="/portal" className="text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all">
            Ingresar
          </a>
          <a href="#contacto" className="text-sm font-bold text-white px-5 py-2 rounded-lg transition-all"
            style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 2px 12px rgba(37,99,235,0.3)" }}>
            Solicitar demo
          </a>
        </div>

        <button className="md:hidden text-slate-600" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-1">
          {[["Solución", "#como-funciona"], ["Módulos", "#modulos"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-700">{l}</a>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a href="/portal" className="block text-center py-2.5 text-sm font-semibold text-blue-700 border border-blue-200 rounded-xl">Ingresar</a>
            <a href="#contacto" onClick={() => setOpen(false)}
              className="block text-center py-2.5 text-sm font-bold text-white rounded-xl"
              style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)" }}>Solicitar demo</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero — split layout ───────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Plataforma Logística 3PL · Chile
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            Digitaliza tu operación logística con una sola plataforma
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            Pathway reemplaza tus planillas de Excel por un sistema centralizado
            de planificación de rutas, liquidación de conductores y gestión de flota.
            Todo en tiempo real, todo en la nube.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contacto"
              className="flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all"
              style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 4px 20px rgba(37,99,235,0.35)" }}>
              Solicitar demo gratuita <ArrowRight size={15} />
            </a>
            <a href="#como-funciona"
              className="flex items-center justify-center gap-2 text-slate-700 font-semibold px-7 py-3.5 rounded-xl text-sm border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-all bg-white">
              <Play size={14} className="text-blue-600" /> Ver cómo funciona
            </a>
          </div>

          {/* Trust mini-badges */}
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            {[
              [Shield, "Datos seguros en la nube"],
              [Clock, "Implementación en 30 días"],
              [Users, "Soporte en español"],
            ].map(([Icon, text]) => (
              <div key={text as string} className="flex items-center gap-1.5">
                <Icon size={13} className="text-blue-500" />
                <span>{text as string}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dashboard mockup */}
        <div className="relative">
          {/* Background blob */}
          <div className="absolute inset-0 rounded-3xl opacity-60"
            style={{ background: "linear-gradient(135deg,#dbeafe,#ede9fe)", filter: "blur(40px)", transform: "scale(0.9)" }} />

          <div className="relative rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xl shadow-slate-200">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="ml-3 flex-1 flex items-center gap-1.5 bg-white rounded-md px-3 py-1 border border-slate-200">
                <Shield size={9} className="text-green-500" />
                <span className="text-[10px] text-slate-400">app.pathway.cl</span>
              </div>
            </div>

            {/* Sidebar + content */}
            <div className="flex" style={{ minHeight: 320 }}>
              {/* Sidebar */}
              <div className="w-14 border-r border-slate-100 bg-slate-900 flex flex-col items-center py-4 gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-black text-[9px]">P</span>
                </div>
                {[BarChart3, Map, DollarSign, Truck, FileSpreadsheet].map((Icon, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 0 ? "bg-blue-600" : "hover:bg-slate-700"}`}>
                    <Icon size={14} color={i === 0 ? "white" : "#64748b"} />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 bg-white">
                <div className="text-[10px] font-bold text-slate-800 mb-3">Dashboard · Hoy</div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Rutas activas", val: "12", color: "#2563eb", bg: "#dbeafe" },
                    { label: "Conductores", val: "8", color: "#7c3aed", bg: "#ede9fe" },
                    { label: "Liquidación", val: "$842K", color: "#059669", bg: "#d1fae5" },
                  ].map(({ label, val, color, bg }) => (
                    <div key={label} className="rounded-xl p-3 border border-slate-100">
                      <div className="text-[8px] text-slate-500 mb-1">{label}</div>
                      <div className="font-black text-sm" style={{ color }}>{val}</div>
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="rounded-xl border border-slate-100 overflow-hidden">
                  <div className="bg-slate-50 px-3 py-1.5 flex justify-between">
                    <span className="text-[8px] font-bold text-slate-600 uppercase tracking-wide">Rutas del día</span>
                    <span className="text-[8px] text-blue-600 font-semibold">Ver todas</span>
                  </div>
                  {[
                    { ruta: "Ruta Norte", conductor: "C. Ramírez", estado: "En ruta", dot: "#22c55e" },
                    { ruta: "Ruta Sur", conductor: "M. González", estado: "Completada", dot: "#3b82f6" },
                    { ruta: "Ruta Centro", conductor: "P. Soto", estado: "Pendiente", dot: "#f59e0b" },
                  ].map((r, i) => (
                    <div key={i} className={`flex items-center gap-2 px-3 py-2 ${i < 2 ? "border-b border-slate-50" : ""}`}>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.dot }} />
                      <span className="text-[9px] font-semibold text-slate-700 flex-1">{r.ruta}</span>
                      <span className="text-[8px] text-slate-400">{r.conductor}</span>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ color: r.dot, background: `${r.dot}18` }}>{r.estado}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Problem / Pain ────────────────────────────────────────────────────────────
function Problem() {
  return (
    <section style={{ background: "#f1f5f9" }} className="py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">El problema que resolvemos</p>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
          ¿Tu operación logística aún depende<br className="hidden md:block" /> de planillas de Excel?
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12">
          Las empresas 3PL pierden horas cada día en tareas manuales que se pueden automatizar.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: AlertTriangle, title: "Errores en liquidación", desc: "Fórmulas rotas, versiones distintas del Excel, pagos incorrectos a conductores.", color: "#ef4444" },
            { icon: Clock, title: "Planificación lenta", desc: "Asignar rutas manualmente toma horas. Sin visibilidad en tiempo real del estado de entrega.", color: "#f59e0b" },
            { icon: FileSpreadsheet, title: "Sin trazabilidad", desc: "Información dispersa entre WhatsApp, correos y archivos. Imposible auditar o reportar.", color: "#8b5cf6" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200 text-left">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}12` }}>
                <Icon size={20} style={{ color }} />
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

// ── Cómo funciona ─────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Cómo funciona</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Operativo en 3 pasos simples
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Sin meses de implementación. Sin consultores externos. Tu equipo opera desde el primer día.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              step: "01",
              title: "Importa tu data existente",
              desc: "Sube tu Excel de rutas (formato Rosen, Drivin o nativo) y Pathway mapea las columnas automáticamente. Las direcciones se geocodifican en segundos. Sin redigitar nada.",
              tags: ["Excel Rosen", "Drivin API", "Formato nativo"],
              side: "left",
              color: "#2563eb",
            },
            {
              step: "02",
              title: "Planifica y asigna rutas",
              desc: "Visualiza todas las entregas del día en el mapa. Asigna conductores, crea rutas agrupadas por zona y exporta la hoja de trabajo. Lo que antes tomaba 2 horas, ahora toma 15 minutos.",
              tags: ["Mapa en tiempo real", "Asignación rápida", "Exportar Excel"],
              side: "right",
              color: "#7c3aed",
            },
            {
              step: "03",
              title: "Liquida automáticamente",
              desc: "Al cerrar el día, el motor de liquidación calcula automáticamente el pago de cada conductor: tarifa base, recargos zonales, adicionales y convenios. Sin errores, con trazabilidad completa.",
              tags: ["Cálculo automático", "Múltiples tarifas", "Prefacturas"],
              side: "left",
              color: "#059669",
            },
          ].map(({ step, title, desc, tags, side, color }) => (
            <div key={step} className={`flex flex-col md:flex-row items-center gap-10 ${side === "right" ? "md:flex-row-reverse" : ""}`}>
              {/* Text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="font-black text-4xl" style={{ color: `${color}30` }}>{step}</span>
                  <div className="h-px flex-1 max-w-xs" style={{ background: `${color}30` }} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-base leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                      style={{ color, borderColor: `${color}30`, background: `${color}08` }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Visual block */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex items-center justify-center"
                  style={{ minHeight: 180 }}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                      style={{ background: `linear-gradient(135deg,${color},${color}cc)` }}>
                      {step === "01" && <FileSpreadsheet size={28} color="white" />}
                      {step === "02" && <Map size={28} color="white" />}
                      {step === "03" && <DollarSign size={28} color="white" />}
                    </div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Modules ───────────────────────────────────────────────────────────────────
function Modules() {
  const MODS = [
    { icon: Map, color: "#2563eb", title: "Planificación de rutas", desc: "Asignación, agrupación por zona, mapa interactivo y exportación diaria." },
    { icon: DollarSign, color: "#7c3aed", title: "Liquidación flexible", desc: "Motor configurable: tarifas, recargos, convenios y módulos personalizables." },
    { icon: Truck, color: "#059669", title: "Gestión de flota", desc: "Vehículos, conductores y documentos con alertas de vencimiento automáticas." },
    { icon: FileSpreadsheet, color: "#d97706", title: "Importación de datos", desc: "Desde Excel Rosen, Drivin API o formato nativo con mapeo inteligente." },
    { icon: BarChart3, color: "#dc2626", title: "Dashboard y reportes", desc: "Métricas en tiempo real, filtros avanzados y exportación a Excel." },
    { icon: Package, color: "#0891b2", title: "Prefacturas y cobros", desc: "Facturación automática desde liquidaciones por mandante." },
  ];

  return (
    <section id="modulos" className="py-24 px-6" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Módulos</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Una plataforma,<br />toda la operación
            </h2>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all">
            Ver demo completa <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODS.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all group cursor-default">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}12` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Comparison table ──────────────────────────────────────────────────────────
function Comparison() {
  const rows = [
    ["Planificación de rutas", true, false, "parcial"],
    ["Liquidación automática", true, false, "parcial"],
    ["Gestión de flota + documentos", true, false, false],
    ["Importación Excel / API", true, false, "parcial"],
    ["Dashboard en tiempo real", true, false, false],
    ["Soporte en español", true, false, false],
    ["Implementación en 30 días", true, true, false],
    ["Sin instalación local", true, true, false],
  ];

  function Cell({ val }: { val: boolean | string }) {
    if (val === true) return <Check size={18} className="mx-auto text-blue-600" strokeWidth={2.5} />;
    if (val === false) return <Minus size={18} className="mx-auto text-slate-300" />;
    return <span className="text-xs text-slate-400 font-medium">Parcial</span>;
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Comparativa</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Pathway vs otras alternativas
          </h2>
          <p className="text-slate-500 text-lg">Diseñado específicamente para operadores 3PL en Chile.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
          {/* Header */}
          <div className="grid grid-cols-4 text-sm font-bold bg-slate-900 text-white">
            <div className="px-6 py-4 col-span-1 text-slate-400 font-normal text-xs uppercase tracking-wide">Funcionalidad</div>
            <div className="px-4 py-4 text-center bg-blue-600">Pathway</div>
            <div className="px-4 py-4 text-center text-slate-300">Excel / Manual</div>
            <div className="px-4 py-4 text-center text-slate-300">Software genérico</div>
          </div>

          {rows.map(([label, pathway, excel, generic], i) => (
            <div key={i} className={`grid grid-cols-4 text-sm border-b border-slate-100 last:border-none ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
              <div className="px-6 py-4 text-slate-700 font-medium">{label as string}</div>
              <div className="px-4 py-4 flex items-center justify-center bg-blue-50/50">
                <Cell val={pathway} />
              </div>
              <div className="px-4 py-4 flex items-center justify-center">
                <Cell val={excel} />
              </div>
              <div className="px-4 py-4 flex items-center justify-center">
                <Cell val={generic} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Testimonial ───────────────────────────────────────────────────────────────
function Testimonial() {
  return (
    <section style={{ background: "linear-gradient(135deg,#1e3a8a,#1d4ed8)" }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />)}
        </div>
        <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8 max-w-3xl mx-auto">
          "Pathway redujo el tiempo de planificación diaria de 2 horas a 15 minutos.
          Ahora nuestro equipo se enfoca en lo que importa: la operación."
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="w-11 h-11 rounded-full bg-blue-400 flex items-center justify-center">
            <span className="text-white font-bold text-sm">JR</span>
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-sm">Jefe de Operaciones</p>
            <p className="text-blue-300 text-xs">Operador logístico 3PL · Chile</p>
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
      name: "Starter", highlight: false,
      desc: "Para operaciones pequeñas que quieren digitalizar.",
      features: ["Hasta 3 usuarios", "Planificación de rutas", "Importación Excel", "Consultas y reportes", "Soporte por email"],
      cta: "Contactar",
    },
    {
      name: "Pro", highlight: true,
      desc: "Para operadores 3PL con múltiples conductores.",
      features: ["Usuarios ilimitados", "Todo Starter incluido", "Liquidación flexible", "Gestión de flota completa", "Prefacturas y cobros", "Soporte prioritario"],
      cta: "Solicitar demo",
    },
    {
      name: "Enterprise", highlight: false,
      desc: "Para grandes operaciones con necesidades específicas.",
      features: ["Todo Pro incluido", "Multi-empresa", "Integraciones custom", "API acceso completo", "Onboarding dedicado", "SLA garantizado"],
      cta: "Hablar con ventas",
    },
  ];

  return (
    <section id="precios" className="py-24 px-6" style={{ background: "#f8fafc" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Precios</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Planes para cada operación</h2>
          <p className="text-slate-500 text-lg">Los precios se ajustan al tamaño de tu operación. Consulta sin compromiso.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className={`rounded-2xl p-7 flex flex-col ${plan.highlight ? "text-white shadow-2xl ring-2 ring-blue-600" : "bg-white border border-slate-200"}`}
              style={plan.highlight ? { background: "linear-gradient(160deg,#1d4ed8,#2563eb 60%,#3b82f6)", transform: "scale(1.03)" } : {}}>

              {plan.highlight && (
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-3">⭐ Más popular</div>
              )}

              <div className="mb-6">
                <h3 className={`font-black text-xl mb-2 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>{plan.desc}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${plan.highlight ? "text-blue-200" : "text-blue-500"}`} />
                    <span className={plan.highlight ? "text-blue-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto"
                className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${
                  plan.highlight ? "bg-white text-blue-700 hover:bg-blue-50" : "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
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

  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Left — 2/5 */}
          <div className="md:col-span-2">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Contacto</p>
            <h2 className="text-3xl font-black text-slate-900 mb-5 leading-tight">
              Agenda una demo gratuita
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              Muéstranos tu operación y te mostramos cómo Pathway la digitaliza.
              Sin compromiso, sin contratos.
            </p>

            <div className="space-y-5 mb-8">
              {[
                { icon: Mail, label: "Email", val: "hola@pathway.cl" },
                { icon: Phone, label: "Teléfono", val: "+56 9 XXXX XXXX" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{label}</div>
                    <div className="text-sm font-semibold text-slate-800">{val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-2.5">
              {["Demo en 30 minutos", "Respuesta en menos de 24h", "Soporte en español"].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Check size={10} color="white" strokeWidth={3} />
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3/5 */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-slate-200 p-8 shadow-xl shadow-slate-100/80">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={30} className="text-green-500" />
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-500 text-sm">Te contactaremos en menos de 24 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "nombre", label: "Nombre *", placeholder: "Tu nombre" },
                    { name: "empresa", label: "Empresa *", placeholder: "Nombre empresa" },
                  ].map(({ name, label, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-500 mb-1.5">{label}</label>
                      <input type="text" placeholder={placeholder} required
                        value={form[name as keyof typeof form]}
                        onChange={e => setForm({ ...form, [name]: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5">Email *</label>
                    <input type="email" placeholder="tu@empresa.cl" required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1.5">Teléfono</label>
                    <input type="tel" placeholder="+56 9 XXXX XXXX"
                      value={form.telefono}
                      onChange={e => setForm({ ...form, telefono: e.target.value })}
                      className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">¿Cuéntanos tu operación?</label>
                  <textarea rows={3} placeholder="¿Cuántos conductores? ¿Qué usas ahora? ..."
                    value={form.mensaje}
                    onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" />
                </div>
                <button type="submit"
                  className="w-full text-white font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
                  style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 4px 16px rgba(37,99,235,0.3)" }}>
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
    <footer style={{ background: "#0d1117" }} className="py-14 px-6 text-slate-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
                <span className="text-white font-black text-xs">P</span>
              </div>
              <span className="font-black text-white text-base tracking-tight">PATH<span className="text-blue-400">WAY</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Plataforma logística para operadores 3PL en Chile. Gestiona, planifica y liquida en una sola herramienta.
            </p>
            <div className="flex items-center gap-2 mt-5 text-xs text-slate-600">
              <Shield size={11} /> Datos alojados en servidores seguros · Chile
            </div>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-4">Plataforma</p>
            <ul className="space-y-2.5 text-sm">
              {[["Cómo funciona", "#como-funciona"], ["Módulos", "#modulos"], ["Precios", "#precios"], ["Portal cliente", "/portal"]].map(([l, h]) => (
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

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
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
        <Problem />
        <HowItWorks />
        <Modules />
        <Comparison />
        <Testimonial />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
