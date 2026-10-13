import { ImageResponse } from "next/og";

export const alt = "Pathway — Software para transporte y bodega";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf9f4",
          padding: "72px 84px",
          color: "#0e2740",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 40 40" fill="none">
            <path d="M4 31 C16 31 14 9 26 9 S 32 20 36 20" stroke="#0e2740" strokeWidth="3.2" strokeLinecap="round" />
            <circle cx="4" cy="31" r="3.6" fill="#0e2740" />
            <circle cx="36" cy="20" r="4.4" fill="#e3a035" stroke="#0e2740" strokeWidth="2.4" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 6 }}>PATHWAY</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 84, height: 8, background: "#e3a035", borderRadius: 4, marginBottom: 30 }} />
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
            Tu operación logística, ordenada de la ruta a la bodega.
          </div>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 30, color: "#3b5572", fontWeight: 700 }}>
          <span>Transporte</span>
          <span style={{ color: "#e3a035" }}>•</span>
          <span>Bodega</span>
          <span style={{ marginLeft: "auto" }}>pathway.cl</span>
        </div>
      </div>
    ),
    size,
  );
}
