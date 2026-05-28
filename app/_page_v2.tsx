"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight, Sun, Moon, Shield, BarChart3, Map,
  DollarSign, Globe, Package2, Bot, Check,
  ChevronRight, Mail, Zap, Calendar,
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
  return { isDark, toggle: () => setIsDark(d => !d), mounted };
}

// ── Roadmap de apps ───────────────────────────────────────────────────────────
const ROADMAP = [
  {
    icon: DollarSign,
    name: "Control",
    desc: "Back-office operacional: liquidaciones, flota y prefacturas",
    bg: "from-violet-600 to-violet-800",
    status: "disponible",
    eta: null,
  },
  {
    icon: Bot,
    name: "RO",
    desc: "Agente de IA que monitorea, analiza e interviene en tu operación",
    bg: "from-teal-500 to-cyan-600",
    status: "pronto",
    eta: "Q3 2025",
  },
  {
    icon: Map,
    name: "Flow",
    desc: "Planificación de rutas y despacho inteligente",
    bg: "from-cyan-500 to-blue-600",
    status: "roadmap",
    eta: "Q4 2025",
  },
  {
    icon: Package2,
    name: "Supply",
    desc: "Compras, inventario y ventas con trazabilidad completa",
    bg: "from-green-600 to-emerald-600",
    status: "roadmap",
    eta: "2026",
  },
  {
    icon: BarChart3,
    name: "Analytics",
    desc: "Reportes, tendencias y KPIs operativos consolidados",
    bg: "from-red-500 to-rose-600",
    status: "roadmap",
    eta: "2026",
  },
];

const STATUS_STYLES = {
  disponible: { label: "Disponible",  pill: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400" },
  pronto:     { label: "Próximamente", pill: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400" },
  roadmap:    { label: "Roadmap",      pill: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400" },
};

export default function HomeV2() {
  const { isDark, toggle, mounted } = useTheme();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 flex flex-col">

      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <nav className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-black text-lg tracking-tight">
            PATH<span className="text-blue-600 dark:text-blue-400">WAY</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {mounted && (
            <button onClick={toggle}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <a href="mailto:hola@pathway.cl"
            className="hidden sm:block text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            hola@pathway.cl
          </a>
          <a href="#contacto"
            className="text-sm font-bold text-white px-4 py-2 rounded-lg transition-all"
            style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)" }}>
            Solicitar demo
          </a>
        </div>
      </nav>

      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-[0.06] dark:opacity-[0.1]"
              style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }} />
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
              style={{ backgroundImage: "linear-gradient(#334155 1px,transparent 1px),linear-gradient(90deg,#334155 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              Más que software.<br />
              <span style={{
                background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>
                El núcleo de la logística moderna.
              </span>
            </h1>

            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              <strong className="text-slate-700 dark:text-slate-300">Pathway OS</strong> conecta procesos, personas y operaciones en una plataforma inteligente diseñada para empresas que necesitan control en tiempo real.
            </p>

            {/* Email capture — CAMBIO: CTA "Solicitar acceso" */}
            {!sent ? (
              <form onSubmit={e => { e.preventDefault(); if (email) setSent(true); }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" required placeholder="tu@empresa.cl" value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />
                <button type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 6px 20px rgba(37,99,235,0.3)" }}>
                  Solicitar acceso <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 py-3.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Check size={11} strokeWidth={3} className="text-blue-600 dark:text-blue-400" />
                </div>
                ¡Listo! Te contactamos pronto.
              </div>
            )}
          </div>
        </section>

        {/* ── Pathway Control — disponible ahora ──────────────────────────── */}
        <section className="px-6 py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-center gap-2 mb-10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
                Disponible ahora
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Info */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 8px 24px rgba(124,58,237,0.35)" }}>
                    <DollarSign size={22} color="white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-violet-500 uppercase tracking-widest">Pathway</p>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white">Control</h2>
                  </div>
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  La app de back-office para operadores 3PL. Gestiona liquidación de conductores,
                  flota, prefacturas y consultas operativas — todo en un solo lugar, sin planillas.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Liquidación automática de conductores",
                    "Gestión de flota y documentos",
                    "Prefacturas por mandante",
                    "Consultas y trazabilidad de entregas",
                    "Dashboard operacional en tiempo real",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(124,58,237,0.12)" }}>
                        <Check size={11} strokeWidth={3} style={{ color: "#7c3aed" }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contacto"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3.5 rounded-xl transition-all"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 6px 20px rgba(124,58,237,0.35)" }}>
                  Solicitar demo de Control <ChevronRight size={15} />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "5 min",  label: "para liquidar una ruta completa", color: "#7c3aed" },
                  { val: "0",      label: "errores de pago",                  color: "#7c3aed" },
                  { val: "2 sem",  label: "implementación promedio",          color: "#7c3aed" },
                  { val: "24h",    label: "soporte de respuesta",             color: "#7c3aed" },
                ].map(({ val, label, color }) => (
                  <div key={label} className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <div className="font-black text-3xl mb-1" style={{ color }}>{val}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── RO — el agente ──────────────────────────────────────────────── */}
        <section className="px-6 py-16 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,#0f172a 0%,#1a2744 50%,#0f172a 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />

          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-3xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg,#0d9488,#0891b2)", boxShadow: "0 24px 60px rgba(13,148,136,0.4)" }}>
                    <Bot size={64} color="white" strokeWidth={1.2} />
                  </div>
                  <div className="absolute inset-0 rounded-3xl animate-ping opacity-20"
                    style={{ background: "linear-gradient(135deg,#0d9488,#0891b2)" }} />
                  <div className="absolute -top-3 -right-3 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    IA
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono px-3 py-1 rounded-full shadow-lg">
                    online
                  </div>
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-3">Agente de operaciones</p>
                <h2 className="text-4xl font-black text-white mb-4">
                  Conoce a <span style={{
                    background: "linear-gradient(90deg,#2dd4bf,#38bdf8)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
                  }}>RO</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  RO es el agente de IA de Pathway. Monitorea tu operación en tiempo real,
                  detecta anomalías, responde tus preguntas y puede intervenir para resolver
                  problemas — dentro de cualquier app del ecosistema.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Zap,    text: "Monitoreo continuo de rutas, conductores y liquidaciones" },
                    { icon: Bot,    text: "Responde preguntas en lenguaje natural sobre tu operación" },
                    { icon: Shield, text: "Detecta y alerta anomalías antes de que se conviertan en problemas" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: "rgba(13,148,136,0.2)" }}>
                        <Icon size={15} className="text-teal-400" />
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-teal-400 border border-teal-800 px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Próximamente en Pathway Control
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pathway OS — Roadmap ─────────────────────────────────────────── */}
        {/* CAMBIO: De descripción genérica a tabla de roadmap con fechas */}
        <section className="px-6 py-16 bg-white dark:bg-slate-950">
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#4f46e5)", boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}>
                <Globe size={26} color="white" strokeWidth={1.5} />
              </div>
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">El ecosistema</p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Pathway OS</h2>
              <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
                Un entorno donde cada app está conectada. Así va creciendo el ecosistema.
              </p>
            </div>

            {/* Tabla de roadmap */}
            <div className="divide-y divide-slate-100 dark:divide-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
              {ROADMAP.map(app => {
                const s = STATUS_STYLES[app.status as keyof typeof STATUS_STYLES];
                return (
                  <div key={app.name}
                    className="flex items-center gap-4 px-5 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
                    {/* Ícono */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${app.bg}`}>
                      <app.icon size={18} color="white" strokeWidth={1.8} />
                    </div>

                    {/* Texto */}
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-900 dark:text-white text-sm">{app.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">{app.desc}</div>
                    </div>

                    {/* Estado + fecha */}
                    <div className="flex items-center gap-2 shrink-0">
                      {app.eta && (
                        <span className="hidden sm:flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                          <Calendar size={11} />
                          {app.eta}
                        </span>
                      )}
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${s.pill}`}>
                        {s.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── Contacto ────────────────────────────────────────────────────── */}
        <section id="contacto" className="px-6 py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Contacto</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Hablemos de tu operación</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Cuéntanos cómo operas y te mostramos lo que Pathway Control puede hacer por ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:hola@pathway.cl"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 6px 20px rgba(37,99,235,0.3)" }}>
                <Mail size={15} /> hola@pathway.cl
              </a>
              <a href="https://wa.me/56900000000" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700 transition-all bg-white dark:bg-slate-800">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 dark:border-slate-800 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-600">
          <div className="flex items-center gap-1.5">
            <Shield size={11} />
            © {new Date().getFullYear()} Pathway SpA · Chile
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:hola@pathway.cl" className="hover:text-blue-500 transition-colors">hola@pathway.cl</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
