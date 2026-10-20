import type { NextConfig } from "next";
const basePath = process.env.GITHUB_ACTIONS ? "/TheGroutCollective" : "";
const nextConfig: NextConfig = {
  // GitHub Pages serves this project below /TheGroutCollective. Local dev stays at /.
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  output: "export",
  trailingSlash: true,
};
export default nextConfig;
