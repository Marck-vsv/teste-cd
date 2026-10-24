import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Young_Serif } from "next/font/google";
import "./globals.css";

const corpo = Atkinson_Hyperlegible({
  variable: "--fonte-corpo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  display: "swap",
});

const titulo = Young_Serif({
  variable: "--fonte-titulo",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ateliê do Sabor: cursos de culinária presencial e pré-inscrição",
  description:
    "Escola de culinária com os cursos Culinária Essencial (a partir de 13 anos) e Culinária Kids (de 6 a 12 anos, com um responsável). Veja turmas, valores e faça a pré-inscrição.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${corpo.variable} ${titulo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
