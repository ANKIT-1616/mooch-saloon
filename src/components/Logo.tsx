import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showSubtext?: boolean;
  align?: "left" | "center" | "right";
}

export default function Logo({
  className = "",
  size = "md",
  showSubtext = true,
  align = "center",
}: LogoProps) {
  const titleSizeMap = {
    sm: "text-sm tracking-[0.1em]",
    md: "text-lg md:text-xl tracking-[0.15em]",
    lg: "text-2xl md:text-3xl tracking-[0.2em]",
    xl: "text-4xl md:text-5xl tracking-[0.25em]",
  };

  const iconSizeMap = {
    sm: { width: 14, height: 26, mx: "mx-1" },
    md: { width: 20, height: 38, mx: "mx-2" },
    lg: { width: 26, height: 50, mx: "mx-2.5" },
    xl: { width: 38, height: 72, mx: "mx-4" },
  };

  const { width, height, mx } = iconSizeMap[size];

  const alignWrapperMap = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col select-none ${alignWrapperMap[align]} ${className}`}>

      {/* Brand Name with Central Scissors */}
      <div className="flex items-center font-cinzel font-bold text-white uppercase leading-none">

        {/* MOOCH — gold M */}
        <span className={titleSizeMap[size]}>
          <span className="text-gold-500 font-extrabold">M</span>ooch
        </span>

        {/*
         * ── ENHANCED SCISSOR ICON ──
         *
         * viewBox is 28 × 56.
         * Centre-line: x = 14.
         *
         * Anatomy (top → bottom):
         *   • Two open finger rings   (y ≈ 0–18)
         *   • Two curved shanks       (y ≈ 18–28)
         *   • Layered gem pivot       (y ≈ 28)
         *   • Tapered blade + tip     (y ≈ 31–56)
         */}
        <svg
          width={width}
          height={height}
          viewBox="0 0 28 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 align-middle ${mx}`}
          aria-hidden="true"
        >
          {/* ── Finger rings ── */}

          {/* Left ring — white stroke, dark hole, inner gold hairline */}
          <circle cx="8"  cy="9" r="7.5" stroke="white" strokeWidth="1.5" />
          <circle cx="8"  cy="9" r="4.5" fill="currentColor" className="text-black" style={{ fill: "var(--logo-bg, #0f0b08)" }} />
          <circle cx="8"  cy="9" r="4.5" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />

          {/* Right ring */}
          <circle cx="20" cy="9" r="7.5" stroke="white" strokeWidth="1.5" />
          <circle cx="20" cy="9" r="4.5" fill="currentColor" className="text-black" style={{ fill: "var(--logo-bg, #0f0b08)" }} />
          <circle cx="20" cy="9" r="4.5" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />

          {/* ── Shanks: smooth curves converging to pivot ── */}

          {/* White body */}
          <path d="M8 16.5 Q10.5 22 14 27"  stroke="white"   strokeWidth="1.4" strokeLinecap="round" />
          <path d="M20 16.5 Q17.5 22 14 27" stroke="white"   strokeWidth="1.4" strokeLinecap="round" />
          {/* Gold accent overlay */}
          <path d="M8 16.5 Q10.5 22 14 27"  stroke="#D4AF37" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
          <path d="M20 16.5 Q17.5 22 14 27" stroke="#D4AF37" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />

          {/* ── Pivot gem (layered circles + facet cross) ── */}

          {/* outer bezel */}
          <circle cx="14" cy="27" r="5"   fill="#0f0b08" stroke="#D4AF37" strokeWidth="0.9" />
          {/* gold fill */}
          <circle cx="14" cy="27" r="3.4" fill="#D4AF37" />
          {/* bright centre */}
          <circle cx="14" cy="27" r="2"   fill="#F5C842" />
          {/* dark pupil */}
          <circle cx="14" cy="27" r="0.8" fill="#0f0b08" />
          {/* facet cross */}
          <line x1="9"  y1="27" x2="19" y2="27" stroke="#D4AF37" strokeWidth="0.4" opacity="0.45" />
          <line x1="14" y1="22" x2="14" y2="32" stroke="#D4AF37" strokeWidth="0.4" opacity="0.45" />
          <line x1="10.5" y1="23.5" x2="17.5" y2="30.5" stroke="#D4AF37" strokeWidth="0.3" opacity="0.25" />
          <line x1="17.5" y1="23.5" x2="10.5" y2="30.5" stroke="#D4AF37" strokeWidth="0.3" opacity="0.25" />

          {/* ── Blade: tapered filled shape with spine highlight ── */}

          <path d="M12.9 32 L12.2 47 L14 54 L15.8 47 L15.1 32 Z" fill="white" opacity="0.9" />
          <line x1="14" y1="32" x2="14" y2="54" stroke="white" strokeWidth="0.4" opacity="0.4" />
        </svg>

        {/* SALOON — gold S */}
        <span className={titleSizeMap[size]}>
          <span className="text-gold-500 font-extrabold">S</span>aloon
        </span>
      </div>

      {/* Subtext */}
      {showSubtext && (
        <div className={`flex flex-col mt-1 w-full gap-0.5 ${alignWrapperMap[align]}`}>
          <span className={`font-sans font-bold uppercase tracking-[0.35em] text-gold-500 ${
            size === "sm" ? "text-[6.5px]"
            : size === "lg" ? "text-[10px]"
            : size === "xl" ? "text-sm"
            : "text-[8px] md:text-[9px]"
          }`}>
            Pushkar <span className="text-white/30 mx-0.5">•</span> Premium Grooming
          </span>
              {/* ── FOUNDERS: Rahul & Manish ── */}
          {/*
           * Styled as italic old-style serif names flanking
           * a decorative ampersand, wrapped in fine gold rules
           * and ✦ ornaments — distinct from the caps subtext above.
           */}
          <span
            className="inline-flex items-center gap-1.5 text-[8px] md:text-[9px]"
            style={{ fontFamily: "'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif" }}
          >
            {/* left ornament */}
            <span className="text-gold-500/50" style={{ fontSize: "0.7em" }}>✦</span>

            {/* thin rule left */}
            <span
              className="inline-block bg-gold-500/30"
              style={{ width: "18px", height: "0.5px", marginBottom: "1px" }}
            />

            {/* Rahul */}
            <span
              className="text-gold-500/90 tracking-wider"
              style={{ fontStyle: "italic", letterSpacing: "0.15em" }}
            >
              Rahul
            </span>

            {/* ampersand */}
            <span
              className="text-white/30 tracking-normal"
              style={{ fontStyle: "italic", fontSize: "1.15em" }}
            >
              &amp;
            </span>

            {/* Manish */}
            <span
              className="text-gold-500/90 tracking-wider"
              style={{ fontStyle: "italic", letterSpacing: "0.15em" }}
            >
              Manish
            </span>

            {/* thin rule right */}
            <span
              className="inline-block bg-gold-500/30"
              style={{ width: "18px", height: "0.5px", marginBottom: "1px" }}
            />

            {/* right ornament */}
            <span className="text-gold-500/50" style={{ fontSize: "0.7em" }}>✦</span>
          </span>

        </div>
      )}
    </div>
  );
}