import type { CSSProperties } from "react";
// Ilustrações próprias em SVG: leves, sem direitos de terceiros e sem imagem de texto (§6, §9).

export function IlustracaoChef({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 270"
      role="img"
      aria-label="Retrato ilustrado da Chef Helena Duarte, de chapéu e jaqueta de cozinheira"
      className={className}
    >
      <circle
        cx="120"
        cy="140"
        r="116"
        fill="#F0B73C"
        stroke="#1D1A12"
        strokeWidth="4"
      />
      <g
        stroke="#1D1A12"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M34 266Q34 190 120 182Q206 190 206 266Z" fill="#F6F1E3" />
        <path d="M120 184L100 214M120 184L140 214" fill="none" />
        <circle cx="120" cy="226" r="4" fill="#1D1A12" />
        <circle cx="120" cy="246" r="4" fill="#1D1A12" />
        <rect x="106" y="150" width="28" height="36" rx="8" fill="#B9774B" />
        <ellipse cx="74" cy="116" rx="9" ry="20" fill="#3A2418" />
        <ellipse cx="166" cy="116" rx="9" ry="20" fill="#3A2418" />
        <circle cx="120" cy="116" r="46" fill="#C98B5E" />
        <path
          className="anim-chapeu"
          d="M78 98V74C54 70 54 34 82 34C88 18 152 18 158 34C186 34 186 70 162 74V98Z"
          fill="#fff"
        />
        <path d="M78 86H162" fill="none" />
      </g>
      <g fill="#1D1A12" className="anim-pisca">
        <circle cx="104" cy="120" r="4.5" />
        <circle cx="136" cy="120" r="4.5" />
      </g>
      <path
        d="M104 138Q120 152 136 138"
        stroke="#1D1A12"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="92" cy="134" r="6" fill="#E88A70" opacity=".6" />
      <circle cx="148" cy="134" r="6" fill="#E88A70" opacity=".6" />
    </svg>
  );
}

export function OndaDivisoria() {
  return (
    <svg
      viewBox="0 0 1280 60"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="block h-12 w-full bg-oliva"
    >
      <path
        d="M0 0C160 50 320 50 480 25S800 0 960 25 1200 55 1280 30V60H0z"
        fill="#F6F1E3"
      />
    </svg>
  );
}

/** Ingredientes do hero: decorativos, flutuam devagar enquanto estão na tela. */
export function IngredientesFlutuantes({ className }: { className?: string }) {
  const flutua = (dur: string, amp: string, r0: string, r1: string) =>
    ({
      "--dur": dur,
      "--amp": amp,
      "--rot0": r0,
      "--rot1": r1,
    }) as CSSProperties;

  return (
    <svg
      viewBox="0 0 320 250"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g className="flutua" style={flutua("7s", "-12px", "-4deg", "4deg")}>
        <circle
          cx="86"
          cy="150"
          r="58"
          fill="#C2411F"
          stroke="#1D1A12"
          strokeWidth="4"
        />
        <path
          d="M56 108Q86 126 116 108Q100 104 86 88Q72 104 56 108Z"
          fill="#3C4F2E"
          stroke="#1D1A12"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M46 146Q50 124 70 116"
          stroke="#F6F1E3"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          opacity=".55"
        />
      </g>
      <g className="flutua" style={flutua("8.5s", "-9px", "6deg", "-3deg")}>
        <path
          d="M232 108C190 86 190 26 232 8C274 26 274 86 232 108Z"
          fill="#3C4F2E"
          stroke="#1D1A12"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M232 104V24M232 58L212 42M232 76L254 58"
          stroke="#1D1A12"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <g className="flutua" style={flutua("6.2s", "-14px", "3deg", "-5deg")}>
        <path
          d="M176 214Q176 176 230 176Q284 176 284 214Q284 238 258 238H202Q176 238 176 214Z"
          fill="#E8A33D"
          stroke="#1D1A12"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M214 194L224 218M244 190L254 216M274 196L280 214"
          stroke="#FFE2A8"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
