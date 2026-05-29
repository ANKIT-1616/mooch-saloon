import { motion } from "framer-motion";
import { MessageSquare, Instagram, ArrowDown } from "lucide-react";
import AnimatedText from "./AnimatedText";
import CinematicButton from "./CinematicButton";

export default function Hero() {
  const handleScrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Cinematic Image with heavy dark vignette overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Barber Studio Interior"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35] contrast-[1.10] saturation-75"
        />
        {/* Radial Vignette & Linear Gradients for Absolute Depth */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,0,0,0.1)_0%,rgba(11,11,11,0.95)_90%]" />
        <div className="absolute inset-y-0 w-full bg-gradient-to-b from-black/50 via-transparent to-[#0B0B0B]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      </div>

      {/* Floating Ambient Lights (Cinema Glow) */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/4 blur-[160px] rounded-full animate-pulse-slow pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-12 flex flex-col items-center">
        {/* Micro-Header Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-gold-400" />
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold-500 font-bold uppercase">
            PUSHKAR'S PREMIER MEN'S REFUGE
          </span>
          <span className="h-[1px] w-8 bg-gold-400" />
        </motion.div>

        {/* Cinematic Main Heading */}
        <AnimatedText
          text="Where Royal Grooming Meets Modern Luxury."
          className="font-cinzel text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase max-w-4xl leading-tight"
          delay={0.15}
        />

        {/* Exquisite Tagline Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="font-cormorant text-lg md:text-2xl text-white/70 italic max-w-2xl mb-12 tracking-wide font-light"
        >
          Step into a realm where Indian heritage meets royal, precision grooming. Hand-carved craftsmanship by Rahul RR and master barber stylists.
        </motion.p>

        {/* Dual Actions Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <CinematicButton
            variant="gold"
            href="https://wa.me/918955209287?text=Hi%20Mooch%20Saloon%2C%20I%20want%20to%20connect%20with%20your%20premium%20studio."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 text-black mr-2 fill-black/10" /> Chat on WhatsApp
          </CinematicButton>

          <CinematicButton
            variant="outline"
            href="https://www.instagram.com/mooch_saloon_rr?igsh=amU1OHZ3Y2FpNDk1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Instagram className="w-4 h-4 text-gold-400 mr-2" /> View Instagram
          </CinematicButton>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={handleScrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-white/50 group-hover:text-gold-500 transition-colors duration-300">
          Scroll Down
        </span>
        <div className="w-[1.5px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
