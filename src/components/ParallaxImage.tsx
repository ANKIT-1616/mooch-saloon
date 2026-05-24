import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[16/10]",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Moves the viewport of the image relative to scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative w-full ${aspectRatio} ${className}`}
    >
      <motion.img
        style={{ y, scale: 1.15 }}
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover object-center filter brightness-[0.85] contrast-[1.05] grayscale-[20%] transition-transform duration-700 ease-out hover:scale-120"
      />
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
    </div>
  );
}
