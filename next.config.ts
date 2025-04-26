import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // output: "standalone",

  experimental: {
    reactCompiler: { compilationMode: "all" },
    // reactCompiler: false,
    // ppr: true, // 'incremental',
  },
};

export default nextConfig;
