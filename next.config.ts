import type { NextConfig } from "next";

// No GitHub Pages o site é exportado como HTML estático e servido em
// https://<usuário>.github.io/<repositório>, por isso o basePath. O workflow
// em .github/workflows/deploy-pages.yml define GITHUB_PAGES=true no build.
const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/Atelie-do-Sabor-teste-" : "";

const nextConfig: NextConfig = {
  ...(githubPages && {
    output: "export",
    basePath,
    // Sem servidor não há otimização de imagem; os WebP já saem leves de public/.
    images: { unoptimized: true },
  }),
  // O next/image não prefixa caminhos de public/ com o basePath; o código usa isto.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
