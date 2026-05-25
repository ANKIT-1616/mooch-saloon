import { motion } from "motion/react";
import { Award, Compass, Heart, Sparkles, Clock } from "lucide-react";
import ParallaxImage from "./ParallaxImage";
import SectionReveal from "./SectionReveal";
import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section id="about" className="relative pt-12 pb-24 md:pt-16 md:pb-36 bg-[#151515] text-white">
      {/* Visual background blend */}
      <div className="absolute inset-0 bg-radial-[circle_at_top,rgba(212,175,55,0.03)_0%,transparent_60%]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Editorial Storytelling Content */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold-500 font-bold block mb-4">
            — THE HERITAGE & THE LEGEND
          </span>
          <AnimatedText
            text="THE CRAFTSMANSHIP OF MOOCH."
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-8"
            el="h2"
          />

          <div className="flex flex-col gap-6 text-sm md:text-base text-white/70 leading-relaxed">
            <p>
              Founded under the creative vision of <strong>Rahul  & Team</strong>, Mooch Saloon is more than just a barber studio — it is a premium men's grooming destination located in the heart of <strong>Pushkar, Rajasthan</strong>. Combining modern styling techniques with traditional Rajasthani hospitality, the salon delivers a refined grooming experience crafted for confidence, comfort, and style.
            </p>

            <p className="text-white/60">
              Operating 9am–9pm right near Shiv Chowk, our sanctuary provides royal face shaving, beard contouring, skin fades, and luxurious Ayurvedic hair spa relaxation. Step into comfort, indulge in sandalwood sensory compresses, and walk out styled for sovereign power.
            </p>
          </div>
        </div>

        {/* Fine Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/5">
          
          <SectionReveal delay={0.1} className="flex gap-4">
            <div className="w-12 h-12 border border-gold-500/10 bg-gold-500/[0.02] flex items-center justify-center shrink-0 text-gold-500">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs tracking-[0.2em] font-extrabold text-white uppercase mb-2">
                Team Craftsmanship
              </h4>
              <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                Expert grooming services delivered by skilled professionals dedicated to precision, consistency, and modern styling excellence.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="flex gap-4">
            <div className="w-12 h-12 border border-gold-500/10 bg-gold-500/[0.02] flex items-center justify-center shrink-0 text-gold-500">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs tracking-[0.2em] font-extrabold text-white uppercase mb-2">
                Prime Location
              </h4>
              <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                Conveniently positioned in Shiv Chowk, Badi Basti, right in the spiritual hub of Pushkar.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3} className="flex gap-4">
            <div className="w-12 h-12 border border-gold-500/10 bg-gold-500/[0.02] flex items-center justify-center shrink-0 text-gold-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs tracking-[0.2em] font-extrabold text-white uppercase mb-2">
                Royal Shaving Rituals
              </h4>
              <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                Santalore steam wraps, raw sandalwood oil massages, and ultra-sharp blade finishes.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.4} className="flex gap-4">
            <div className="w-12 h-12 border border-gold-500/10 bg-gold-500/[0.02] flex items-center justify-center shrink-0 text-gold-500">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs tracking-[0.2em] font-extrabold text-white uppercase mb-2">
                Sovereign Hospitality
              </h4>
              <p className="font-sans text-[12px] text-white/50 leading-relaxed">
                Welcome refreshments, head massage reflexology, and absolute acoustic comfort.
              </p>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}
