/**
 * MoochSaloonShowcase.jsx — PRODUCTION FIXED
 * Fixes: all missing imports, useReducedMotion removed (not in motion v12),
 *        video src hardcode bug, picture element structure
 */

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
} from "motion/react";
import {
  Scissors,
  Instagram,
  Phone,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

// ─── REDUCED MOTION HOOK (replaces missing useReducedMotion from motion v12) ──
function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const TEAM = [
  {
    id: "rahul",
    name: "Rahul",
    role: "Co-Founder & Senior Barber",
    handle: "@its_rahul_rr_r18",
    instagram: "https://www.instagram.com/its_rahul_rr_r18",
    phone: "+91-8955209287",
    bio: "The visionary behind Mooch Saloon. Rahul brings precision, passion, and a decade of craft mastery to every cut — turning hair into art in the heart of Pushkar.",
    img: "/team/rahul.webp",
    imgFallback: "/team/rahul.jpg",
    specialties: ["Skin Fades", "Pompadour", "Classic Cuts"],
  },
  {
    id: "manish",
    name: "Manish",
    role: "Grooming Specialist & Styling Expert",
    handle: "@manish8522_",
    instagram: "https://www.instagram.com/manish8522_",
    phone: "+91-7357498469",
    bio: "Manish blends modern techniques with Rajasthani charm. His eye for detail and obsession with clean lines make every client walk out feeling like royalty.",
    img: "/team/manish.webp",
    imgFallback: "/team/manish.jpg",
    specialties: ["Beard Sculpting", "Hair Colour", "Texture Work"],
  },
];

const GALLERY = [
  { id: 1,  src: "/gallery/g1.jpg",  label: "The Mooch Lounge",         span: "row-span-2" },
  { id: 3,  src: "/gallery/g3.jpg",  label: "Textured Pompadour" },
  { id: 4,  src: "/gallery/g4.jpg",  label: "The Finish",               span: "row-span-2" },
  { id: 5,  src: "/gallery/g5.jpg",  label: "The Gentleman's Fade" },
  { id: 6,  src: "/gallery/g6.jpg",  label: "Where Style Meets Comfort" },
  { id: 7,  src: "/gallery/g7.jpg",  label: "Mid Taper Fade" },
  { id: 9,  src: "/gallery/g9.jpg",  label: "Luxury Fade" },
  { id: 10, src: "/gallery/g10.jpg", label: "Royal Styling" },
  { id: 11, src: "/gallery/g11.jpg", label: "Sharp Beard Work" },
  { id: 12, src: "/gallery/g12.jpg", label: "Premium Finish" },
];

const REELS = [
  { id: 1, src: "/reels/r1.mp4", thumb: "/gallery/g1.jpg",  title: "The Perfect Art" },
  { id: 2, src: "/reels/r2.mp4", thumb: "/gallery/g4.jpg",  title: "The Craft" },
  { id: 3, src: "/reels/r3.mp4", thumb: "/gallery/g7.jpg",  title: "Just The Salon Things" },
  { id: 4, src: "/reels/r4.mp4", thumb: "/gallery/g10.jpg", title: "The Art of Grooming" },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── SAFE IMAGE — handles webp→jpg fallback ───────────────────────────────────
function SafeImg({ src, fallback, alt, className, style, loading = "lazy", ...props }) {
  const [errored, setErrored] = useState(false);
  const actualSrc = errored ? (fallback || src.replace(".webp", ".jpg")) : src;
  return (
    <img
      src={actualSrc}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      onError={() => setErrored(true)}
      {...props}
    />
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, subtitle }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-center mb-16 md:mb-20"
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className="text-xs tracking-[0.4em] uppercase mb-3 font-medium"
        style={{ color: "#C9A84C" }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        custom={1}
        className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.02em" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        custom={3}
        className="mx-auto mt-6 h-px w-24"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
      />
    </motion.div>
  );
}

// ─── TEAM CARD ────────────────────────────────────────────────────────────────
function TeamCard({ member, index, onImageClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      custom={index}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.18) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(201,168,76,0.2)",
        }}
      >
        <div className="relative overflow-hidden" style={{ height: "380px" }}>
          <SafeImg
            src={member.img}
            fallback={member.imgFallback}
            alt={`${member.name} — ${member.role} at Mooch Saloon`}
            loading="eager"
            className="w-full h-full object-cover object-top cursor-pointer"
            style={{
              transform: shouldReduceMotion ? "scale(1)" : hovered ? "scale(1.06)" : "scale(1)",
              transition: shouldReduceMotion ? "none" : "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
            onClick={() => onImageClick(member)}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.5) 70%, rgba(10,10,10,0.95) 100%)",
            }}
          />
          <div
            className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}
          >
            <Scissors size={16} color="#C9A84C" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ color: "#C9A84C" }}>
              {member.role}
            </p>
            <h3
              className="text-3xl font-black text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {member.name}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
            {member.bio}
          </p>
          <div className="flex flex-wrap gap-2">
            {member.specialties.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#C9A84C",
                  letterSpacing: "0.05em",
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs transition-all duration-300 hover:text-[#C9A84C]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <Instagram size={14} />
              {member.handle}
            </a>
            <a
              href={`tel:${member.phone}`}
              className="flex items-center gap-2 text-xs transition-all duration-300 hover:text-[#C9A84C]"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <Phone size={14} />
              {member.phone}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MEMBER LIGHTBOX ──────────────────────────────────────────────────────────
function MemberLightbox({ member, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}
        onClick={onClose}
        aria-label="Close"
      >
        <X size={18} color="#C9A84C" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={member.id}
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full"
          style={{ maxWidth: "420px" }}
          onClick={(e) => e.stopPropagation()}
        >
          <SafeImg
            src={member.img}
            fallback={member.imgFallback}
            alt={`${member.name} — ${member.role} at Mooch Saloon`}
            loading="eager"
            className="w-full h-auto rounded-2xl object-cover object-top"
            style={{
              maxHeight: "80vh",
              backgroundColor: "#111",
              boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.15)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-6 rounded-b-2xl"
            style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 60%, transparent 100%)" }}
          >
            <p className="text-xs tracking-[0.35em] uppercase mb-1.5" style={{ color: "#C9A84C" }}>
              {member.role}
            </p>
            <p className="text-2xl font-black text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {member.name}
            </p>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs transition-all duration-300 hover:text-[#C9A84C]"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Instagram size={13} />
                {member.handle}
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
              <a
                href={`tel:${member.phone}`}
                className="flex items-center gap-2 text-xs transition-all duration-300 hover:text-[#C9A84C]"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <Phone size={13} />
                {member.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// ─── GALLERY LIGHTBOX ─────────────────────────────────────────────────────────
function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  if (activeIndex === null || activeIndex === undefined || !images[activeIndex]) return null;
  const currentImage = images[activeIndex];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)" }}
        onClick={onClose}
        aria-label="Close gallery"
      >
        <X size={18} color="#C9A84C" />
      </button>
      <button
        className="absolute left-4 md:left-8 z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <ChevronLeft size={20} color="white" />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.src}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <SafeImg
            src={currentImage.src}
            alt={currentImage.label || "Gallery image"}
            loading="eager"
            className="w-full h-auto rounded-2xl object-contain"
            style={{ maxHeight: "80vh", width: "100%", backgroundColor: "#111" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-5 rounded-b-2xl"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
          >
            <p className="text-white font-semibold">{currentImage.label || "Gallery Image"}</p>
            <p className="text-xs mt-1" style={{ color: "#C9A84C" }}>
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute right-4 md:right-8 z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <ChevronRight size={20} color="white" />
      </button>
    </motion.div>
  );
}

// ─── GALLERY ITEM ─────────────────────────────────────────────────────────────
function GalleryItem({ item, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl cursor-pointer ${item.span || ""}`}
      style={{ minHeight: item.span ? "320px" : "200px" }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={scaleIn}
      custom={index * 0.5}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(index)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(index); } }}
      role="button"
      tabIndex={0}
      aria-label={`Open gallery image: ${item.label}`}
    >
      <SafeImg
        src={item.src}
        alt={`Mooch Saloon — ${item.label}`}
        loading="lazy"
        className="w-full h-full object-cover"
        style={{
          minHeight: "inherit",
          transform: shouldReduceMotion ? "scale(1)" : hovered ? "scale(1.1)" : "scale(1)",
          transition: shouldReduceMotion ? "none" : "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(0,0,0,0.75) 100%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-sm font-semibold text-white">{item.label}</p>
      </div>
    </motion.div>
  );
}

// ─── REEL CARD ────────────────────────────────────────────────────────────────
function ReelCard({ reel, index }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const toggle = () => {
    if (!videoRef.current || videoError) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play().catch(() => setVideoError(true));
      setPlaying(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      custom={index * 0.2}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: "9/16", border: "1px solid rgba(201,168,76,0.2)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggle}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
      role="button"
      tabIndex={0}
      aria-label={`${playing ? "Pause" : "Play"} reel: ${reel.title}`}
    >
      {/* Poster thumbnail shown when video errors or before play */}
      <SafeImg
        src={reel.thumb}
        alt={`${reel.title} preview`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: videoError ? "block" : "block", zIndex: playing ? -1 : 0 }}
      />

      {/* Actual video */}
      {!videoError && (
        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.thumb}
          playsInline
          muted
          preload="none"
          loop
          controlsList="nodownload"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: playing ? 1 : -1 }}
          onError={() => { setVideoError(true); setPlaying(false); }}
        />
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.85) 100%)",
          zIndex: 2,
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ opacity: shouldReduceMotion ? 1 : hovered || !playing ? 1 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
        style={{ zIndex: 3 }}
      >
        <motion.div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          style={{
            background: "rgba(201,168,76,0.2)",
            border: "2px solid #C9A84C",
            backdropFilter: "blur(8px)",
          }}
        >
          {playing ? (
            <Pause size={20} color="#C9A84C" fill="#C9A84C" />
          ) : (
            <Play size={20} color="#C9A84C" fill="#C9A84C" className="ml-1" />
          )}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-4" style={{ zIndex: 3 }}>
        <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "#C9A84C" }}>
          Mooch Saloon
        </p>
        <p className="text-white text-sm font-semibold">{reel.title}</p>
      </div>
    </motion.div>
  );
}

// ─── INSTAGRAM CTA ────────────────────────────────────────────────────────────
function InstagramCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative py-24 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div variants={fadeUp} custom={0}>
          <div
            className="mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              boxShadow: "0 0 40px rgba(220,39,67,0.3)",
            }}
          >
            <Instagram size={28} color="white" />
          </div>
        </motion.div>

        <motion.p variants={fadeUp} custom={1}
          className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#C9A84C" }}>
          Follow Us
        </motion.p>

        <motion.h2 variants={fadeUp} custom={2}
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Stay in the Cut
        </motion.h2>

        <motion.p variants={fadeUp} custom={3}
          className="text-sm md:text-base mb-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}>
          Follow{" "}
          <span style={{ color: "#C9A84C" }}>@mooch_saloon_rr</span>{" "}
          on Instagram for daily transformations, style drops, and behind-the-chair moments from Pushkar's finest grooming studio.
        </motion.p>

        <motion.a
          variants={fadeUp}
          custom={4}
          href="https://www.instagram.com/mooch_saloon_rr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-widest uppercase"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: hovered ? "linear-gradient(135deg, #C9A84C, #a8872e)" : "transparent",
            border: "2px solid #C9A84C",
            color: hovered ? "#0a0a0a" : "#C9A84C",
            transition: "all 0.3s ease",
            boxShadow: hovered ? "0 0 30px rgba(201,168,76,0.4)" : "none",
          }}
        >
          <Instagram size={18} />
          Follow @mooch_saloon_rr
        </motion.a>

        <motion.div variants={fadeUp} custom={5} className="mt-10 flex justify-center gap-10">
          {[
            { n: "1K+", l: "Followers" },
            { n: "200+", l: "Posts" },
            { n: "5★",  l: "Rated" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-2xl font-black"
                style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}>
                {s.n}
              </p>
              <p className="text-xs mt-1"
                style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
                {s.l}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function MoochSaloonShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeMember, setActiveMember] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY.length) % GALLERY.length));
  const nextImg = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY.length));

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #0a0a0a 0%, #0f0f0f 40%, #0c0b09 100%)",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        .grain::after {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 2px; }
      `}</style>

      <div className={shouldReduceMotion ? "" : "grain"}>

        {/* ── TEAM ── */}
        <section className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="flex justify-center mb-4">
            <Scissors size={24} color="rgba(201,168,76,0.4)" />
          </div>
          <SectionHeader
            eyebrow="The Craftsmen"
            title="Meet The Team"
            subtitle="Two artisans, one vision — redefining men's grooming in the streets of Pushkar since day one."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TEAM.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} onImageClick={setActiveMember} />
            ))}
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }} />
        </div>

        {/* ── GALLERY ── */}
        <section className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="The Work"
            title="Portfolio"
            subtitle="Every chair tells a story. Every cut is a statement. Real craft, real results — straight from the salon floor."
          />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "160px" }}
          >
            {GALLERY.map((item, i) => (
              <GalleryItem key={item.id} item={item} index={i} onClick={openLightbox} />
            ))}
          </div>
        </section>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <Lightbox images={GALLERY} activeIndex={lightboxIndex} onClose={closeLightbox} onPrev={prevImg} onNext={nextImg} />
          )}
        </AnimatePresence>

        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)" }} />
        </div>

        {/* ── REELS ── */}
        <section className="relative py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Behind The Chair"
            title="Reels"
            subtitle="Watch the craft in motion. Tap to play — experience the energy of Mooch Saloon."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {REELS.map((reel, i) => (
              <ReelCard key={reel.id} reel={reel} index={i} />
            ))}
          </div>
        </section>

        {/* ── INSTAGRAM CTA ── */}
        <AnimatePresence>
          {activeMember && (
            <MemberLightbox member={activeMember} onClose={() => setActiveMember(null)} />
          )}
        </AnimatePresence>

        <InstagramCTA />

      </div>
    </div>
  );
}
