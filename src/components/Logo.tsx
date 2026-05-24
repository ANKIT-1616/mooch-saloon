import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showSubtext?: boolean;
  align?: "left" | "center" | "right";
}

export default function Logo({ className = "", size = "md", showSubtext = true, align = "center" }: LogoProps) {
  // Define sizing classes for the main title
  const titleSizeMap = {
    sm: "text-sm tracking-[0.1em]",
    md: "text-lg md:text-xl tracking-[0.15em]",
    lg: "text-2xl md:text-3xl tracking-[0.2em]",
    xl: "text-4xl md:text-5xl tracking-[0.25em]",
  };

  // Define sizing for the scissor icon
  const iconSizeMap = {
    sm: { width: 14, height: 24, mx: "mx-1" },
    md: { width: 18, height: 32, mx: "mx-1.5" },
    lg: { width: 24, height: 40, mx: "mx-2" },
    xl: { width: 36, height: 60, mx: "mx-3.5" },
  };

  const currentIconSize = iconSizeMap[size];

  const alignWrapperMap = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const alignSubtextMap = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <div className={`flex flex-col select-none ${alignWrapperMap[align]} ${className}`}>
      
      {/* Brand Name with Central Scissors Asset */}
      <div className="flex items-center font-cinzel font-bold text-white uppercase leading-none">
        {/* MOOCH with gold M */}
        <span className={titleSizeMap[size]}>
          <span className="text-gold-500 font-extrabold">M</span>ooch
        </span>

        {/* Custom Exact SVG Scissor Icon from Official Branding */}
        <svg
          width={currentIconSize.width}
          height={currentIconSize.height}
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block shrink-0 align-middle ${currentIconSize.mx}`}
        >
          {/* Top two elegant white circular loops */}
          <circle cx="7" cy="7" r="3.5" fill="white" />
          <circle cx="17" cy="7" r="3.5" fill="white" />
          
          {/* Delicate thin beaded chain/stems connecting top loops to the central core */}
          <line x1="7.5" y1="10.5" x2="12" y2="18.5" stroke="#D4AF37" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <line x1="16.5" y1="10.5" x2="12" y2="18.5" stroke="#D4AF37" strokeWidth="1" strokeDasharray="1.5 1.5" />
          
          {/* Vertical sleek blade / needle pointing downwards */}
          <line x1="12" y1="19" x2="12" y2="35" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10.5 32 L12 37 L13.5 32 Z" fill="white" />

          {/* Golden core pivot stone */}
          <circle cx="12" cy="18.5" r="2" fill="#D4AF37" stroke="black" strokeWidth="0.5" />
        </svg>

        {/* SALOON with gold S */}
        <span className={titleSizeMap[size]}>
          <span className="text-gold-500 font-extrabold">S</span>aloon
        </span>
      </div>

      {/* Subtext and Credit lines */}
      {showSubtext && (
        <div className={`flex flex-col mt-1 w-full gap-0.5 ${alignSubtextMap[align]}`}>
          {/* PUSHKAR • PREMIUM GROOMING */}
          <span className={`font-sans font-bold uppercase tracking-[0.35em] text-gold-500 ${
            size === "sm" ? "text-[6.5px]" : size === "lg" ? "text-[10px]" : size === "xl" ? "text-sm" : "text-[8px] md:text-[9px]"
          }`}>
            Pushkar <span className="text-white/30 mx-0.5">•</span> Premium Grooming
          </span>

          {/* BY RAHUL */}
          <span className={`font-sans font-semibold uppercase tracking-[0.3em] text-white/40 ${
            size === "sm" ? "text-[5.5px]" : size === "lg" ? "text-[8px]" : size === "xl" ? "text-[10px]" : "text-[7px]"
          }`}>
            by rahul
          </span>
        </div>
      )}

    </div>
  );
}
