import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import GlassmorphismCard from "./GlassmorphismCard";
import AnimatedText from "./AnimatedText";
import SectionReveal from "./SectionReveal";

interface Review {
  id: number;
  name: string;
  role?: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Vikram Singh",
      
      location: "Pushkar",
      rating: 5,
      text: "Mooch Saloon is the absolute best barber sanctuary in Rajasthan. Rahul RR gave me a beard sculpt and steam razor finish that easily rivals high-end 5-star resort salons in Dubai. The sandalwood essential pack works magic on skin!",
      date: "April 2025",
    },
    {
      id: 2,
      name: "Sunil",
      
      location: "Ajmer",
      rating: 4,
      text: "Incredible design and layout. I arrived in Pushkar late at night and found Mooch Saloon open at 2:00 AM! The posture wash and master skin fade were flawlessly uniform. Extremely professional and hygienic trimmer setups.",
      date: "june 2024",
    },
    {
      id: 3,
      name: "Amit Gharu",
      
      location: "Pushkar",
      rating: 4,
      text: "Absolute top-tier grooming standards. The team here doesn't hurry through your profile; they map your jawline structure first. The Keratin Spa and Gold Facial are legendary rituals.",
      date: "April 2025",
    },
    {
      id: 4,
      name: "Mohah",
      
      location: "Pushkar",
      rating: 5,
      text: "I booked the Royal Rajput Grooming Package as a surprise gift for my husband. This 2.5-hour experience was purely divine! The facial, Ayurvedic head acupressure, and custom trim were impeccable. Highly recommended!",
      date: "feb 2026",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="relative py-24 md:py-36 bg-[#0B0B0B] text-white">
      {/* Background circular gradients */}
      <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-gold-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold-500 font-bold block mb-3">— CRITICAL ACCLAIM</span>
          <AnimatedText
            text="Sovereign Reviews."
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-6"
            el="h2"
          />
          <p className="font-sans text-sm text-white/50 max-w-lg leading-relaxed">
            Discover what elite gentlemen and international travelers say about their royal grooming experiences in Pushkar.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="relative min-h-[350px] flex flex-col justify-between">
          
          {/* Animated Card Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassmorphismCard className="relative md:p-12 p-8" hoverGlow={false}>
                {/* Decorative Quote Icon */}
                <Quote className="absolute right-10 top-10 w-24 h-24 text-white/[0.02] transform rotate-180 pointer-events-none" />

                <div className="flex flex-col gap-6 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 text-gold-500">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>

                  {/* Review text */}
                  <blockquote className="font-cormorant text-xl md:text-3xl italic text-white/90 leading-relaxed tracking-wide font-light">
                    "{reviews[activeIndex].text}"
                  </blockquote>

                  {/* Reviewer Meta Details */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-4">
                    <div>
                      <h4 className="font-cinzel text-sm md:text-base font-bold text-white tracking-widest uppercase">
                        {reviews[activeIndex].name}
                      </h4>
                      <p className="font-sans text-[11px] text-gold-400 uppercase tracking-[0.2em] mt-1">
                        {reviews[activeIndex].role ? (
                          <>
                            {reviews[activeIndex].role} — <span className="text-white/45">{reviews[activeIndex].location}</span>
                          </>
                        ) : (
                          <span className="text-white/45">{reviews[activeIndex].location}</span>
                        )}
                      </p>
                    </div>
                    <span className="font-sans text-xs text-white/30 tracking-widest hidden sm:inline">
                      {reviews[activeIndex].date}
                    </span>
                  </div>
                </div>
              </GlassmorphismCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Buttons Actions */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 border border-white/5 hover:border-gold-500/30 text-white/50 hover:text-gold-500 bg-white/[0.02] transition-colors rounded-none cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Dots */}
            <div className="flex items-center gap-3">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-500 ${
                    activeIndex === idx ? "w-8 bg-gold-500" : "w-2 bg-white/10"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 border border-white/5 hover:border-gold-500/30 text-white/50 hover:text-gold-500 bg-white/[0.02] transition-colors rounded-none cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
