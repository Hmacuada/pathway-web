"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Sun, Moon, Shield, BarChart3, Map, DollarSign, Globe, Brain, Eye } from "lucide-react";

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

// ── Productos próximos ────────────────────────────────────────────────────────
const COMING = [
  { icon: Globe,    name: "Pathway OS",        tag: "Core",         desc: "La plataforma operacional completa.", color: "#2563eb",  bg: "from-blue-600 to-indigo-700" },
  { icon: Map,      name: "Pathway Flow",       tag: "Planificación",desc: "Rutas y despacho en tiempo real.",   color: "#0891b2",  bg: "from-cyan-500 to-blue-600" },
  { icon: DollarSign,name:"Pathway Control",    tag: "Back-office",  desc: "Liquidación, flota y cobros.",       color: "#7c3aed",  bg: "from-violet-600 to-purple-700" },
  { icon: Brain,    name: "Pathway AI",         tag: "Inteligencia", desc: "Agente operacional con IA.",         color: "#0d9488",  bg: "from-teal-600 to-emerald-600" },
  { icon: Eye,      name: "Pathway Vision",     tag: "Visibilidad",  desc: "Visibilidad total de la operación.", color: "#d97706",  bg: "from-amber-500 to-orange-600" },
  { icon: BarChart3,name: "Pathway Analytics",  tag: "Datos",        desc: "Reportes y tendencias operativas.", color: "#dc2626",  bg: "from-red-500 to-rose-600" },
];

export default function Home() {
  const { isDark, toggle, mounted } = useTheme();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 flex flex-col">

      {/* Nav mínima */}
      <nav className="w-full px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white">
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
            className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            hola@pathway.cl
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-[0.07] dark:opacity-[0.12]"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }} />
        </div>

        <div className="relative max-w-3xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full mb-10
            bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            En construcción · Lanzamiento próximamente
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            El sistema operativo<br />
            <span style={{
              background: "linear-gradient(90deg,#2563eb,#7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              de tu operación
            </span>
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12 max-w-xl mx-auto">
            Pathway es la plataforma donde vive la operación de tu empresa.
            Estamos construyendo algo diferente.
          </p>

          {/* Email capture */}
          {!sent ? (
            <form onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-5">
              <input
                type="email"
                required
                placeholder="tu@empresa.cl"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700
                  bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white
                  placeholder-slate-400 dark:placeholder-slate-500
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white whitespace-nowrap transition-all"
                style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 6px 20px rgba(37,99,235,0.35)" }}>
                Avisarme <ArrowRight size={14} />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-5 py-3.5">
              <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
              </div>
              ¡Listo! Te avisamos cuando lancemos.
            </div>
          )}

          <p className="text-xs text-slate-400 dark:text-slate-600">
            Sin spam. Solo una notificación cuando estemos listos.
          </p>
        </div>
      </main>

      {/* Módulos próximos */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">

          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            El ecosistema que viene
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {COMING.map((p) => (
              <div key={p.name}
                className="rounded-2xl p-5 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-start gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center shrink-0`}
                  style={{ boxShadow: `0 4px 12px ${p.color}25` }}>
                  <p.icon size={16} color="white" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm text-slate-900 dark:text-white truncate">{p.name}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="border-t border-slate-100 dark:border-slate-800 px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-600">
          <div className="flex items-center gap-1.5">
            <Shield size={11} />
            © {new Date().getFullYear()} Pathway SpA · Chile
          </div>
          <a href="mailto:hola@pathway.cl"
            className="hover:text-blue-500 transition-colors">
            hola@pathway.cl
          </a>
        </div>
      </footer>

    </div>
  );
}
