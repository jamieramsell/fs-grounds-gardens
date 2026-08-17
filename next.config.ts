import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits a fully static site to `out/`.
  // Cloudflare Pages serves this directly, no Node server at runtime.
  output: "export",

  // next/image optimisation needs a server, which a static export doesn't have.
  // Serve images as-is; we compress them ourselves in M5.
  images: {
    unoptimized: true,
  },

  // Emit `about/index.html` instead of `about.html` so clean URLs work on
  // static hosts without extra redirect rules.
  trailingSlash: true,
};

export default nextConfig;
