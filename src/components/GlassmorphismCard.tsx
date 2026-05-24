import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: boolean;
}

export default function GlassmorphismCard({
  children,
  className = "",
  delay = 0,
  hoverGlow = true,
}: GlassmorphismCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(
        "relative rounded-none overflow-hidden p-6 md:p-8 group",
        "bg-[#151515]/60 backdrop-blur-md",
        "border border-white/8 transition-all duration-700",
        hoverGlow && "gold-glow-hover",
        className
      )}
    >
      {/* Subtle top-right golden glow spot */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold-500/5 blur-[50px] rounded-full group-hover:bg-gold-500/10 transition-colors duration-700 pointer-events-none" />
      {children}
    </motion.div>
  );
}
