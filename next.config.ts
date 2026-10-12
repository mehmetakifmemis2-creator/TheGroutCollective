import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // GitHub Pages serves this project below /TheGroutCollective. Local dev stays at /.
  ...(process.env.GITHUB_ACTIONS ? { basePath: "/TheGroutCollective" } : {}),
  output: "export",
  trailingSlash: true,
};
export default nextConfig;
