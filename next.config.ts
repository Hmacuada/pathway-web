import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",   // optimizado para Railway / Docker
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pathway.cl" }],
        destination: "https://pathway.cl/:path*",
        permanent: true, // 301 — los buscadores indexan pathway.cl como canónica
      },
    ];
  },
};

export default nextConfig;
