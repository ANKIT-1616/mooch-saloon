import React from "react";
import { MapPin, Clock, Phone, Instagram, Compass } from "lucide-react";
import GlassmorphismCard from "./GlassmorphismCard";
import AnimatedText from "./AnimatedText";
import SectionReveal from "./SectionReveal";
import CinematicButton from "./CinematicButton";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-36 bg-[#0B0B0B] text-white">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/[0.01] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 pb-10 border-b border-white/5">
          <div>
            <span className="font-cinzel text-xs tracking-[0.4em] text-gold-500 font-bold block mb-3">— VISIT OUR COURT</span>
            <AnimatedText
              text="THE SALOON."
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase"
              el="h2"
            />
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm text-white/55 leading-relaxed">
              We look forward to serving you with sovereign luxury. Get in touch directly via WhatsApp or phone call anytime, or visit our premium barber studio in Shiv Chowk, Pushkar.
            </p>
          </div>
        </div>

        {/* Custom Bento Box Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Info Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Location Card */}
            <SectionReveal delay={0.05} className="flex-1">
              <GlassmorphismCard className="p-8 h-full flex flex-col justify-between group">
                <div className="flex gap-4 items-start mb-6">
                  <div className="p-3 border border-gold-500/15 bg-gold-500/[0.03] text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] tracking-[0.3em] text-gold-500 font-bold block mb-1">
                      LOCATION ADDRESS
                    </span>
                    <h3 className="font-cinzel text-sm sm:text-base font-bold tracking-widest uppercase">
                      SHIV CHOWK, PUSHKAR
                    </h3>
                  </div>
                </div>
                <div>
                  <address className="not-italic font-sans text-xs md:text-sm text-white/60 leading-relaxed mb-6">
                    Mooch Saloon / Rahul RR Grooming Studio<br />
                    Shiv Chowk, Badi Basti, Pushkar,<br />
                    Rajasthan 305022, India
                  </address>
                  <CinematicButton
                    variant="outline"
                    href="https://maps.google.com/?q=Mooch+Saloon+Pushkar+Rajasthan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-6 text-[10px] sm:text-xs border-white/5"
                  >
                    Open on Maps <Compass className="w-3.5 h-3.5 ml-2 text-gold-500" />
                  </CinematicButton>
                </div>
              </GlassmorphismCard>
            </SectionReveal>

            {/* Timings Status Card */}
            <SectionReveal delay={0.1} className="flex-1">
              <GlassmorphismCard className="p-8 h-full flex flex-col justify-between group">
                <div className="flex gap-4 items-start mb-6">
                  <div className="p-3 border border-gold-500/15 bg-gold-500/[0.03] text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-500">
                    <Clock className="w-5 h-5 animate-spin-slow" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] tracking-[0.3em] text-gold-500 font-bold block mb-1">
                      BUSINESS HOURS
                    </span>
                    <h3 className="font-cinzel text-sm sm:text-base font-bold tracking-widest uppercase">
                      OPEN DAILY
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs md:text-sm text-white/60 leading-relaxed mb-6">
                    Our studio operates <strong>9am–9pm</strong> daily, welcoming elite locals and international travelers for royal grooming sessions.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                    <span className="font-sans text-xs font-semibold text-green-400 tracking-wider">
                      OPEN TODAY · 9AM–9PM
                    </span>
                  </div>
                </div>
              </GlassmorphismCard>
            </SectionReveal>

            {/* Direct Contact Speeddial */}
            <SectionReveal delay={0.15} className="flex-1">
              <GlassmorphismCard className="p-8 h-full flex flex-col justify-between group">
                <div className="flex gap-4 items-start mb-4">
                  <div className="p-3 border border-gold-500/15 bg-gold-500/[0.03] text-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] tracking-[0.3em] text-gold-500 font-bold block mb-1">
                      DIRECT PHONE CALL
                    </span>
                    <h3 className="font-cinzel text-sm sm:text-base font-bold tracking-widest uppercase">
                      +91 8955209287
                    </h3>
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs text-white/50 mb-4">
                    Speak directly with Rahul  for bookings or queries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <CinematicButton
                      variant="gold"
                      href="https://wa.me/918955209287?text=Hi%20Mooch%20Saloon%2C%20I%20want%20to%20book%20a%20seat%20for%20a%20luxury%20grooming%20session."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-6 flex-1 text-center"
                    >
                      WhatsApp Us
                    </CinematicButton>
                    <CinematicButton
                      variant="outline"
                      href="tel:+918955209287"
                      className="py-2.5 px-6 flex-1 text-center"
                    >
                      Call Rahul RR
                    </CinematicButton>
                  </div>
                </div>
              </GlassmorphismCard>
            </SectionReveal>

          </div>

          {/* Column 2: Elegant Map Display (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Beautiful black theme styled Map Iframe Embed that takes full container height */}
            <SectionReveal delay={0.2} className="h-full flex flex-col">
              <div className="relative w-full h-full min-h-[450px] lg:min-h-0 flex-1 overflow-hidden border border-white/5 bg-[#151515] rounded-none shadow-xl">
                {/* Standard Google Map with dark visual filter */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14285.193025686008!2d74.55106269999999!3d26.4862438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be220f4b30cb9%3A0xc6cbef8fbb664082!2sMooch%20Saloon!5e0!3m2!1sen!2sin!4v1716440400000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, height: "100%", width: "100%", minHeight: "450px", filter: "invert(90%) hue-rotate(180deg) contrast(120%) brightness(85%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location of Mooch Saloon Badi Basti, Pushkar"
                />
              </div>
            </SectionReveal>

          </div>

        </div>
      </div>
    </section>
  );
}
