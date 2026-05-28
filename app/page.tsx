"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Map, DollarSign, Truck, FileSpreadsheet, BarChart3, Package,
  CheckCircle2, ArrowRight, Menu, X, Mail, Phone, MessageSquare,
  Shield, Users, Clock, Check, Minus, ChevronRight, ChevronLeft,
  Sun, Moon, AlertTriangle, Play, Star
} from "lucide-react";

// ── Theme ─────────────────────────────────────────────────────────────────────
function useTheme() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("pw-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved === "dark" || (!saved && prefersDark);
    setIsDark(dark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("pw-theme", isDark ? "dark" : "light");
  }, [isDark, mounted]);

  return { isDark, toggle: () => setIsDark(d => !d) };
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
            <span className="text-white font-black text-sm">P</span>
          </div>
          <span className="font-black text-lg text-slate-900 dark:text-white tracking-tight">
            PATH<span className="text-blue-600 dark:text-blue-400">WAY</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[["Solución", "#como-funciona"], ["Módulos", "#modulos"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([l, h]) => (
            <a key={l} href={h} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{l}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <button onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Cambiar tema">
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a href="/portal" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            Ingresar
          </a>
          <a href="#contacto" className="text-sm font-bold text-white px-5 py-2 rounded-lg transition-all"
            style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 2px 12px rgba(37,99,235,0.3)" }}>
            Solicitar demo
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="text-slate-600 dark:text-slate-300 w-9 h-9 flex items-center justify-center" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-4 space-y-1">
          {[["Solución", "#como-funciona"], ["Módulos", "#modulos"], ["Precios", "#precios"], ["Contacto", "#contacto"]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">{l}</a>
          ))}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <a href="/portal" className="block text-center py-2.5 text-sm font-semibold text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-xl">Ingresar</a>
            <a href="#contacto" onClick={() => setOpen(false)}
              className="block text-center py-2.5 text-sm font-bold text-white rounded-xl"
              style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)" }}>Solicitar demo</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 md:py-24 px-6 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            Plataforma Logística 3PL · Chile
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
            Digitaliza tu operación logística con una sola plataforma
          </h1>

          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
            Pathway reemplaza tus planillas de Excel por un sistema centralizado de planificación de rutas, liquidación de conductores y gestión de flota. En tiempo real, en la nube.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contacto"
              className="flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all"
              style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", boxShadow: "0 4px 20px rgba(37,99,235,0.35)" }}>
              Solicitar demo gratuita <ArrowRight size={15} />
            </a>
            <a href="#como-funciona"
              className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 font-semibold px-7 py-3.5 rounded-xl text-sm border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400 transition-all bg-white dark:bg-slate-800">
              <Play size={14} className="text-blue-600 dark:text-blue-400" /> Ver cómo funciona
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
            {[[Shield, "Datos seguros en la nube"], [Clock, "Implementación en 30 días"], [Users, "Soporte en español"]].map(([Icon, text]) => (
              <div key={text as string} className="flex items-center gap-1.5">
                <Icon size={13} className="text-blue-500" />
                <span>{text as string}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl opacity-40 dark:opacity-20"
            style={{ background: "linear-gradient(135deg,#dbeafe,#ede9fe)", filter: "blur(40px)", transform: "scale(0.9)" }} />
          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800 shadow-2xl shadow-slate-200 dark:shadow-slate-950">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <div className="ml-3 flex-1 flex items-center gap-1.5 bg-white dark:bg-slate-800 rounded-md px-3 py-1 border border-slate-200 dark:border-slate-700">
                <Shield size={9} className="text-green-500" />
                <span className="text-[10px] text-slate-400">app.pathway.cl</span>
              </div>
            </div>
            <div className="flex" style={{ minHeight: 300 }}>
              <div className="w-14 border-r border-slate-100 dark:border-slate-700 bg-slate-900 flex flex-col items-center py-4 gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-black text-[9px]">P</span>
                </div>
                {[BarChart3, Map, DollarSign, Truck, FileSpreadsheet].map((Icon, i) => (
                  <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 0 ? "bg-blue-600" : ""}`}>
                    <Icon size={14} color={i === 0 ? "white" : "#64748b"} />
                  </div>
                ))}
              </div>
              <div className="flex-1 p-4 bg-white dark:bg-slate-800">
                <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mb-3">Dashboard · Hoy</div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[{ l: "Rutas activas", v: "12", c: "#2563eb" }, { l: "Conductores", v: "8", c: "#7c3aed" }, { l: "Liquidación", v: "$842K", c: "#059669" }].map(({ l, v, c }) => (
                    <div key={l} className="rounded-xl p-3 border border-slate-100 dark:border-slate-700">
                      <div className="text-[8px] text-slate-500 dark:text-slate-400 mb-1">{l}</div>
                      <div className="font-black text-sm" style={{ color: c }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                  <div className="bg-slate-50 dark:bg-slate-900 px-3 py-1.5 flex justify-between">
                    <span className="text-[8px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Rutas del día</span>
                    <span className="text-[8px] text-blue-600 dark:text-blue-400 font-semibold">Ver todas</span>
                  </div>
                  {[{ r: "Ruta Norte", c: "C. Ramírez", e: "En ruta", d: "#22c55e" }, { r: "Ruta Sur", c: "M. González", e: "Completada", d: "#3b82f6" }, { r: "Ruta Centro", c: "P. Soto", e: "Pendiente", d: "#f59e0b" }].map((row, i) => (
                    <div key={i} className={`flex items-center gap-2 px-3 py-2 ${i < 2 ? "border-b border-slate-50 dark:border-slate-700" : ""}`}>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: row.d }} />
                      <span className="text-[9px] font-semibold text-slate-700 dark:text-slate-300 flex-1">{row.r}</span>
                      <span className="text-[8px] text-slate-400">{row.c}</span>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full" style={{ color: row.d, background: `${row.d}18` }}>{row.e}</span>
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

// ── Problem ───────────────────────────────────────────────────────────────────
function Problem() {
  return (
    <section className="py-16 px-6 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">El problema que resolvemos</p>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
          ¿Tu operación logística aún depende<br className="hidden md:block" /> de planillas de Excel?
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12">
          Las empresas 3PL pierden horas cada día en tareas manuales que se pueden automatizar.
        </p>
        <div className="grid md:grid-cols-3 gap-5 text-left">
          {[
            { icon: AlertTriangle, title: "Errores en liquidación", desc: "Fórmulas rotas, versiones distintas del Excel, pagos incorrectos a conductores.", color: "#ef4444" },
            { icon: Clock, title: "Planificación lenta", desc: "Asignar rutas manualmente toma horas. Sin visibilidad del estado de entrega.", color: "#f59e0b" },
            { icon: FileSpreadsheet, title: "Sin trazabilidad", desc: "Información dispersa entre WhatsApp, correos y archivos. Imposible auditar.", color: "#8b5cf6" },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}12` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works — Slides ─────────────────────────────────────────────────────
const STEPS = [
  {
    step: "01", color: "#2563eb",
    title: "Importa tu data existente",
    desc: "Sube tu Excel de rutas (formato Rosen, Drivin o nativo) y Pathway mapea las columnas automáticamente. Las direcciones se geocodifican en segundos. Sin redigitar nada.",
    tags: ["Excel Rosen", "Drivin API", "Formato nativo"],
    screen: "import",
  },
  {
    step: "02", color: "#7c3aed",
    title: "Planifica y asigna rutas",
    desc: "Visualiza todas las entregas del día en el mapa. Asigna conductores, crea rutas por zona y exporta la hoja de trabajo. Lo que antes tomaba 2 horas, ahora toma 15 minutos.",
    tags: ["Mapa en tiempo real", "Asignación rápida", "Exportar Excel"],
    screen: "map",
  },
  {
    step: "03", color: "#059669",
    title: "Liquida automáticamente",
    desc: "El motor de liquidación calcula el pago de cada conductor: tarifa base, recargos zonales, adicionales y convenios. Sin errores, con trazabilidad completa.",
    tags: ["Cálculo automático", "Múltiples tarifas", "Prefacturas"],
    screen: "liquidation",
  },
];

function ScreenImport() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">Importar archivo</span>
        <span className="text-[9px] text-blue-600 dark:text-blue-400 font-semibold">PATHWAY Nativo</span>
      </div>
      {/* File drop zone */}
      <div className="border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl p-5 text-center bg-blue-50/50 dark:bg-blue-950/30">
        <FileSpreadsheet size={24} className="mx-auto text-blue-400 mb-2" />
        <p className="text-[9px] font-semibold text-slate-600 dark:text-slate-300">AGL_Rutas_2026.xlsx</p>
        <p className="text-[8px] text-slate-400 mt-0.5">144 filas detectadas</p>
      </div>
      {/* Column mapper */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="bg-slate-50 dark:bg-slate-900 px-3 py-1.5">
          <span className="text-[8px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Mapeo de columnas</span>
        </div>
        {[["N°Pedido", "HR", "✓"], ["Cliente", "Razón social", "✓"], ["Dirección", "Dirección", "✓"], ["Conductor", "Conductor", "✓"]].map(([field, col, ok], i) => (
          <div key={i} className={`flex items-center gap-2 px-3 py-1.5 ${i < 3 ? "border-b border-slate-50 dark:border-slate-700" : ""}`}>
            <span className="text-[8px] text-slate-500 dark:text-slate-400 w-16">{field}</span>
            <div className="flex-1 h-4 bg-slate-100 dark:bg-slate-700 rounded text-[7px] flex items-center px-2 text-slate-500 dark:text-slate-400">{col}</div>
            <span className="text-[9px] text-green-500 font-bold">{ok}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-2 rounded-lg text-[9px] font-bold text-white" style={{ background: "#2563eb" }}>
        Importar 144 órdenes
      </button>
    </div>
  );
}

function ScreenMap() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">Planificación · Hoy</span>
        <span className="text-[9px] bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 font-semibold px-2 py-0.5 rounded-full">24 órdenes</span>
      </div>
      {/* Map placeholder */}
      <div className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700" style={{ height: 110, background: "linear-gradient(135deg,#e0f2fe,#f0fdf4)" }}>
        <div className="relative w-full h-full dark:opacity-60">
          {/* Route dots simulation */}
          {[{ x: 20, y: 30, c: "#2563eb" }, { x: 45, y: 50, c: "#2563eb" }, { x: 65, y: 25, c: "#7c3aed" }, { x: 75, y: 60, c: "#7c3aed" }, { x: 35, y: 70, c: "#059669" }, { x: 55, y: 80, c: "#059669" }].map((p, i) => (
            <div key={i} className="absolute w-3 h-3 rounded-full border-2 border-white shadow-sm" style={{ left: `${p.x}%`, top: `${p.y}%`, background: p.c }} />
          ))}
          <div className="absolute bottom-1 right-2 text-[7px] text-slate-400 font-medium">Mapa interactivo</div>
        </div>
      </div>
      {/* Route assignments */}
      {[{ name: "Ruta Norte", conductor: "C. Ramírez", stops: 8, color: "#2563eb" }, { name: "Ruta Sur", conductor: "M. González", stops: 6, color: "#7c3aed" }].map((r, i) => (
        <div key={i} className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-xl px-3 py-2 border border-slate-100 dark:border-slate-700">
          <div className="w-2 h-6 rounded-full" style={{ background: r.color }} />
          <div className="flex-1">
            <p className="text-[9px] font-bold text-slate-700 dark:text-slate-200">{r.name}</p>
            <p className="text-[8px] text-slate-400">{r.conductor} · {r.stops} paradas</p>
          </div>
          <span className="text-[8px] text-blue-600 dark:text-blue-400 font-semibold">Ver</span>
        </div>
      ))}
    </div>
  );
}

function ScreenLiquidation() {
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">Liquidación · Mayo 2026</span>
        <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">$4.2M total</span>
      </div>
      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-2">
        {[{ l: "Conductores", v: "13" }, { l: "Guías", v: "227" }, { l: "Promedio", v: "$324K" }].map(({ l, v }) => (
          <div key={l} className="bg-white dark:bg-slate-800 rounded-lg p-2 border border-slate-100 dark:border-slate-700 text-center">
            <p className="text-[7px] text-slate-400 mb-0.5">{l}</p>
            <p className="text-[10px] font-black text-slate-800 dark:text-slate-200">{v}</p>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="bg-slate-50 dark:bg-slate-900 grid grid-cols-4 px-3 py-1.5 gap-2">
          {["Conductor", "Guías", "Recargos", "Total"].map(h => (
            <span key={h} className="text-[7px] font-bold text-slate-500 dark:text-slate-400 uppercase">{h}</span>
          ))}
        </div>
        {[["C. Ramírez", "24", "+$18K", "$312K"], ["M. González", "19", "+$12K", "$276K"], ["P. Soto", "21", "+$15K", "$298K"]].map((row, i) => (
          <div key={i} className={`grid grid-cols-4 gap-2 px-3 py-1.5 ${i < 2 ? "border-b border-slate-50 dark:border-slate-700" : ""}`}>
            <span className="text-[8px] font-semibold text-slate-700 dark:text-slate-300">{row[0]}</span>
            <span className="text-[8px] text-slate-500 dark:text-slate-400">{row[1]}</span>
            <span className="text-[8px] text-emerald-600 dark:text-emerald-400">{row[2]}</span>
            <span className="text-[8px] font-bold text-slate-800 dark:text-slate-200">{row[3]}</span>
          </div>
        ))}
      </div>
      <button className="w-full py-2 rounded-lg text-[9px] font-bold text-white" style={{ background: "#059669" }}>
        Generar prefacturas
      </button>
    </div>
  );
}

function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive(a => (a + 1) % STEPS.length), []);
  const prev = useCallback(() => setActive(a => (a - 1 + STEPS.length) % STEPS.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, next]);

  const step = STEPS[active];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Cómo funciona</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            Operativo en 3 pasos simples
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            Sin meses de implementación. Sin consultores externos.
          </p>
        </div>

        {/* Step tabs */}
        <div className="flex gap-2 justify-center mb-10">
          {STEPS.map((s, i) => (
            <button key={i}
              onClick={() => { setActive(i); setPaused(true); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${i === active ? "text-white shadow-lg" : "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"}`}
              style={i === active ? { background: s.color, boxShadow: `0 4px 16px ${s.color}40` } : {}}>
              <span className="text-xs opacity-70">{s.step}</span>
              <span className="hidden sm:inline">{s.title.split(" ").slice(0, 2).join(" ")}</span>
            </button>
          ))}
        </div>

        {/* Slide */}
        <div className="grid md:grid-cols-2 gap-10 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-black text-5xl" style={{ color: `${step.color}25` }}>{step.step}</span>
              <div className="h-px flex-1 max-w-xs" style={{ background: `${step.color}30` }} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{step.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{step.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {step.tags.map(t => (
                <span key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{ color: step.color, borderColor: `${step.color}30`, background: `${step.color}08` }}>{t}</span>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button onClick={() => { prev(); setPaused(true); }}
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all">
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-1.5">
                {STEPS.map((_, i) => (
                  <button key={i} onClick={() => { setActive(i); setPaused(true); }}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ width: i === active ? 24 : 6, background: i === active ? step.color : "#cbd5e1" }} />
                ))}
              </div>
              <button onClick={() => { next(); setPaused(true); }}
                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Screen mockup */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl opacity-20"
              style={{ background: `radial-gradient(circle, ${step.color}, transparent)`, filter: "blur(30px)" }} />
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800 shadow-xl">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                <div className="flex gap-1.5">
                  {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <div className="flex-1 mx-3 flex items-center gap-1.5 bg-white dark:bg-slate-800 rounded px-2 py-0.5 border border-slate-200 dark:border-slate-700">
                  <Shield size={8} className="text-green-500" />
                  <span className="text-[9px] text-slate-400">app.pathway.cl</span>
                </div>
              </div>
              {step.screen === "import" && <ScreenImport />}
              {step.screen === "map" && <ScreenMap />}
              {step.screen === "liquidation" && <ScreenLiquidation />}
            </div>
          </div>
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
    { icon: FileSpreadsheet, color: "#d97706", title: "Importación de datos", desc: "Excel Rosen, Drivin API o formato nativo con mapeo inteligente de columnas." },
    { icon: BarChart3, color: "#dc2626", title: "Dashboard y reportes", desc: "Métricas en tiempo real, filtros avanzados y exportación a Excel." },
    { icon: Package, color: "#0891b2", title: "Prefacturas y cobros", desc: "Facturación automática desde liquidaciones, por mandante." },
  ];

  return (
    <section id="modulos" className="py-24 px-6 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Módulos</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              Una plataforma,<br />toda la operación
            </h2>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all">
            Ver demo completa <ChevronRight size={16} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODS.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-lg transition-all group cursor-default">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}12` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Comparison ────────────────────────────────────────────────────────────────
function Comparison() {
  const rows: [string, boolean, boolean, boolean | string][] = [
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
    if (val === true) return <Check size={17} className="mx-auto text-blue-600 dark:text-blue-400" strokeWidth={2.5} />;
    if (val === false) return <Minus size={17} className="mx-auto text-slate-300 dark:text-slate-600" />;
    return <span className="text-xs text-slate-400 font-medium">Parcial</span>;
  }

  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Comparativa</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Pathway vs otras alternativas</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Diseñado específicamente para operadores 3PL en Chile.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-lg">
          <div className="grid grid-cols-4 text-sm font-bold">
            <div className="px-6 py-4 bg-slate-900 dark:bg-slate-800 text-slate-400 font-normal text-xs uppercase tracking-wide">Funcionalidad</div>
            <div className="px-4 py-4 text-center bg-blue-600 text-white">Pathway</div>
            <div className="px-4 py-4 text-center bg-slate-900 dark:bg-slate-800 text-slate-300">Excel / Manual</div>
            <div className="px-4 py-4 text-center bg-slate-900 dark:bg-slate-800 text-slate-300">Software genérico</div>
          </div>
          {rows.map(([label, pathway, excel, generic], i) => (
            <div key={i} className={`grid grid-cols-4 text-sm border-b border-slate-100 dark:border-slate-800 last:border-none ${i % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-50/50 dark:bg-slate-800/50"}`}>
              <div className="px-6 py-3.5 text-slate-700 dark:text-slate-300 font-medium text-sm">{label}</div>
              <div className="px-4 py-3.5 flex items-center justify-center bg-blue-50/30 dark:bg-blue-950/20"><Cell val={pathway} /></div>
              <div className="px-4 py-3.5 flex items-center justify-center"><Cell val={excel} /></div>
              <div className="px-4 py-3.5 flex items-center justify-center"><Cell val={generic} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing ───────────────────────────────────────────────────────────────────
function Pricing() {
  const PLANS = [
    { name: "Starter", highlight: false, desc: "Para operaciones pequeñas que quieren digitalizar.", features: ["Hasta 3 usuarios", "Planificación de rutas", "Importación Excel", "Consultas y reportes", "Soporte por email"], cta: "Contactar" },
    { name: "Pro", highlight: true, desc: "Para operadores 3PL con múltiples conductores.", features: ["Usuarios ilimitados", "Todo Starter incluido", "Liquidación flexible", "Gestión de flota completa", "Prefacturas y cobros", "Soporte prioritario"], cta: "Solicitar demo" },
    { name: "Enterprise", highlight: false, desc: "Para grandes operaciones con necesidades específicas.", features: ["Todo Pro incluido", "Multi-empresa", "Integraciones custom", "API acceso completo", "Onboarding dedicado", "SLA garantizado"], cta: "Hablar con ventas" },
  ];

  return (
    <section id="precios" className="py-24 px-6 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Precios</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Planes para cada operación</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Los precios se ajustan al tamaño de tu operación. Consulta sin compromiso.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan) => (
            <div key={plan.name}
              className={`rounded-2xl p-7 flex flex-col ${plan.highlight ? "text-white shadow-2xl ring-2 ring-blue-600" : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"}`}
              style={plan.highlight ? { background: "linear-gradient(160deg,#1d4ed8,#2563eb 60%,#3b82f6)", transform: "scale(1.03)" } : {}}>
              {plan.highlight && <div className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-3">⭐ Más popular</div>}
              <div className="mb-6">
                <h3 className={`font-black text-xl mb-2 ${plan.highlight ? "text-white" : "text-slate-900 dark:text-white"}`}>{plan.name}</h3>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-blue-200" : "text-slate-500 dark:text-slate-400"}`}>{plan.desc}</p>
              </div>
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${plan.highlight ? "text-blue-200" : "text-blue-500"}`} />
                    <span className={plan.highlight ? "text-blue-100" : "text-slate-600 dark:text-slate-300"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto"
                className={`text-center text-sm font-bold py-3 rounded-xl transition-all ${plan.highlight ? "bg-white text-blue-700 hover:bg-blue-50" : "border-2 border-slate-900 dark:border-slate-400 text-slate-900 dark:text-slate-200 hover:bg-slate-900 dark:hover:bg-slate-700 hover:text-white"}`}>
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
    <section id="contacto" className="py-24 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-2">
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Contacto</p>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-5 leading-tight">Agenda una demo gratuita</h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm">Muéstranos tu operación y te mostramos cómo Pathway la digitaliza. Sin compromiso, sin contratos.</p>
            <div className="space-y-5 mb-8">
              {[[Mail, "Email", "hola@pathway.cl"], [Phone, "Teléfono", "+56 9 XXXX XXXX"]].map(([Icon, label, val]) => (
                <div key={label as string} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{label as string}</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{val as string}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-2.5">
              {["Demo en 30 minutos", "Respuesta en menos de 24h", "Soporte en español"].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Check size={10} color="white" strokeWidth={3} />
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-xl shadow-slate-100 dark:shadow-slate-950/50">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 dark:bg-green-950 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={30} className="text-green-500" />
                </div>
                <h3 className="font-black text-slate-900 dark:text-white text-xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Te contactaremos en menos de 24 horas hábiles.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h3 className="font-black text-slate-900 dark:text-white text-xl mb-5">Solicitar demo</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[{ name: "nombre", label: "Nombre *", ph: "Tu nombre" }, { name: "empresa", label: "Empresa *", ph: "Nombre empresa" }].map(({ name, label, ph }) => (
                    <div key={name}>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">{label}</label>
                      <input type="text" placeholder={ph} required value={form[name as keyof typeof form]} onChange={e => setForm({ ...form, [name]: e.target.value })}
                        className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Email *</label>
                    <input type="email" placeholder="tu@empresa.cl" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">Teléfono</label>
                    <input type="tel" placeholder="+56 9 XXXX XXXX" value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">¿Cuéntanos tu operación?</label>
                  <textarea rows={3} placeholder="¿Cuántos conductores? ¿Qué usas ahora? ..." value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none" />
                </div>
                <button type="submit" className="w-full text-white font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"
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
    <footer className="bg-slate-950 dark:bg-black py-14 px-6 text-slate-500 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)" }}>
                <span className="text-white font-black text-xs">P</span>
              </div>
              <span className="font-black text-white text-base tracking-tight">PATH<span className="text-blue-400">WAY</span></span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">Plataforma logística para operadores 3PL en Chile.</p>
            <div className="flex items-center gap-2 mt-5 text-xs text-slate-600">
              <Shield size={11} /> Datos alojados en servidores seguros
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
      <Navbar isDark={isDark} toggleTheme={toggle} />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Modules />
        <Comparison />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
