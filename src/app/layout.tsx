import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ateliê do Sabor | Cursos de culinária para adultos e crianças",
  description:
    "Cursos presenciais de culinária: Culinária Essencial, para aprender do zero a partir de 13 anos, e Culinária Kids, para crianças de 6 a 12 anos com um responsável. Faça sua pré-inscrição.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
