import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scissors, Sparkles, Gem, Droplet, Smile, Palette, Award } from "lucide-react";
import GlassmorphismCard from "./GlassmorphismCard";
import AnimatedText from "./AnimatedText";

interface ServiceItem {
  id: string;
  name: string;
  category: "grooming" | "spa" | "packages";
  price: string;
  duration: string;
  description: string;
  features: string[];
  icon: any;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "grooming" | "spa" | "packages">("all");

  const services: ServiceItem[] = [
    {
      id: "premium-haircut",
      name: "Premium Haircut & Wash",
      category: "grooming",
      price: "₹350",
      duration: "45 Mins",
      description: "Custom consultation, posture wash, precise structural cut, tonic hot towel massage, and custom styling.",
      features: ["Profile mapping & consultation", "Premium shampoo wash & conditioning", "Blow dry & signature product finish"],
      icon: Scissors,
    },
    {
      id: "beard-styling",
      name: "Signature Beard Sculpting",
      category: "grooming",
      price: "₹200",
      duration: "30 Mins",
      description: "Clean straight razor contours, oil infusion, structural beard hot towel compression, and soothing aftershave.",
      features: ["Facial profile beard line balancing", "Hot-steam razor styling", "Premium sandal beard balm massage"],
      icon: Sparkles,
    },
    {
      id: "skin-fade",
      name: "Master Class Skin Fade",
      category: "grooming",
      price: "₹450",
      duration: "60 Mins",
      description: "Elite blending from absolute bald skin to crown length. Meticulous premium detail.",
      features: ["Zero/Foil shaver close transition", "Laser-sharp outline trim", "Tonic-water skull refresh"],
      icon: Award,
    },
    {
      id: "hair-spa",
      name: "Keratin Deep Hair Spa",
      category: "spa",
      price: "₹800",
      duration: "50 Mins",
      description: "Mineral mask steam therapy, scalp detoxification massage, and nutrient-enriched peptide rinse.",
      features: ["Damage hair reconstruction therapy", "15-Min Ayurvedic head pressure-point massage", "Shine serum wrap"],
      icon: Droplet,
    },
    {
      id: "premium-facial",
      name: "Royal O2 Gold Facial",
      category: "spa",
      price: "₹1,200",
      duration: "75 Mins",
      description: "Multi-stage skin exfoliation, authentic Rajasthan gold scrub, hydration massage, and custom mud pack.",
      features: ["Blackhead/impurity painless extraction", "Hydra-infusion cooling face steam", "Ice-roller facial toning"],
      icon: Smile,
    },
    {
      id: "hair-color",
      name: "Signature Balayage & Highlight",
      category: "grooming",
      price: "₹1,500+",
      duration: "90 Mins",
      description: "Ammonia-free luxury color matching, gray hair coverage, or global architectural tones.",
      features: ["Hair health scalp guard shield blocker", "Custom tone swatch selector", "Hydrating color-lock treatment"],
      icon: Palette,
    },
    {
      id: "royal-rajput-package",
      name: "Royal Rajput Groom Package",
      category: "packages",
      price: "₹2,500",
      duration: "150 Mins",
      description: "Our crowning experience. Elite hair styling, beard sculpt, deep charcoal facial mask, premium spa, and full arm-neck therapy.",
      features: ["Premium haircut, wash, beard styling", "Charcoal skin clarify & Gold facial", "Signature hair spa and massage combo", "Complimentary non-alcoholic welcome drink"],
      icon: Gem,
    },
  ];

  const filteredServices = activeTab === "all"
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="relative pt-24 pb-12 md:pt-36 md:pb-16 bg-[#0B0B0B] text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-12 w-96 h-96 bg-gold-500/3 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 border-b border-white/5 pb-10">
          <div>
            <span className="font-cinzel text-xs tracking-[0.4em] text-gold-500 font-bold block mb-3">— THE RITUAL MENU</span>
            <AnimatedText
              text="LUXURY SERVICES."
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide"
              el="h2"
            />
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed">
              Every appointment at Mooch Saloon is treated like a masterwork. We blend artisan craftsmanship with top-tier hair treatments of the highest standard.
            </p>
          </div>
        </div>

        {/* Categories Tab Toggles */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-white/5 pb-6">
          {(["all", "grooming", "spa", "packages"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-cinzel text-xs tracking-[0.2em] uppercase transition-all duration-500 border relative ${
                activeTab === tab
                  ? "border-gold-500 text-gold-500 font-bold bg-[#151515]"
                  : "border-white/5 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/5"
              }`}
            >
              {tab === "all" ? "Full Collection" : tab === "grooming" ? "Elite Grooming" : tab === "spa" ? "Spa & Skin" : "Groom Packages"}
              {activeTab === tab && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Services Showcase Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <GlassmorphismCard className="h-full flex flex-col justify-between group pb-8">
                    <div>
                      {/* Icon & Meta Badge */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 flex items-center justify-center border border-gold-500/10 bg-gold-500/[0.04] text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all duration-700 ease-out">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-right">
                          <div className="font-cinzel text-lg md:text-xl font-bold text-gold-500">{service.price}</div>
                          <div className="font-sans text-[10px] uppercase text-white/50 tracking-[0.15em] mt-1">
                            {service.duration}
                          </div>
                        </div>
                      </div>

                      {/* Header */}
                      <h3 className="font-cinzel text-lg md:text-xl font-bold tracking-wider mb-3 text-white group-hover:text-gold-400 transition-colors duration-500">
                        {service.name}
                      </h3>

                      <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features Bullet List */}
                      <div className="border-t border-white/5 pt-4">
                        <ul className="flex flex-col gap-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-white/50 leading-relaxed">
                              <span className="w-1.5 h-1.5 bg-gold-500/60 rounded-full mt-1.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
