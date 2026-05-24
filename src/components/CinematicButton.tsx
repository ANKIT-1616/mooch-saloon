import { motion } from "motion/react";
import { ReactNode } from "react";

interface CinematicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "gold" | "outline" | "text";
  href?: string;
  target?: string;
  rel?: string;
}

export default function CinematicButton({
  children,
  onClick,
  className = "",
  variant = "gold",
  href,
  target,
  rel,
}: CinematicButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden uppercase transition-all duration-700 ease-out cursor-pointer focus:outline-none group active:scale-97 select-none";

  let variantStyles = "";
  if (variant === "gold") {
    variantStyles = "bg-gold-500 text-black border border-gold-500 shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]";
  } else if (variant === "outline") {
    variantStyles = "border border-white/10 text-white hover:border-gold-500/30";
  } else {
    variantStyles = "text-white/60 hover:text-gold-500 hover:translate-x-1";
  }

  // Hover sliding backgrounds
  const hoverBg = variant === "gold" ? (
    <span className="absolute inset-0 bg-white transition-transform duration-700 ease-[0.16,1,0.3,1] origin-left scale-x-0 group-hover:scale-x-100 z-0" />
  ) : variant === "outline" ? (
    <span className="absolute inset-0 bg-gold-500 transition-transform duration-700 ease-[0.16,1,0.3,1] origin-left scale-x-0 group-hover:scale-x-100 z-0" />
  ) : null;

  const textClass = `relative z-10 flex items-center gap-2 font-cinzel text-xs tracking-[0.25em] font-medium transition-colors duration-700 ease-[0.16,1,0.3,1] ${
    variant === "gold" ? "group-hover:text-black" : variant === "outline" ? "group-hover:text-black" : "group-hover:text-gold-500"
  }`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {hoverBg}
        <span className={textClass}>
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {hoverBg}
      <span className={textClass}>
        {children}
      </span>
    </button>
  );
}
