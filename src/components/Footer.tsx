import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import CinematicButton from "./CinematicButton";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0B0B0B] text-white border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Luxury Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Logo size="md" align="left" showSubtext={true} />
            <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm mt-3">
              Mooch Saloon is Pushkar's premium grooming studio, crafting confidence, razor-sharp fades, and custom beard contours 9am-9pm under the strict standards of Rahul.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/mooch_saloon_rr?igsh=amU1OHZ3Y2FpNDk1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/5 bg-white/[0.02] hover:bg-gold-500 hover:text-black hover:border-gold-500 text-gold-500 transition-all rounded-none"
                aria-label="Instagram Profile Log"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="tel:+918955209287"
                className="p-2 border border-white/5 bg-white/[0.02] hover:bg-gold-500 hover:text-black hover:border-gold-500 text-gold-500 transition-all rounded-none"
                aria-label="Phone Speeddial Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Structural Navigation Links (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h4 className="font-cinzel text-xs tracking-[0.3em] font-bold text-white uppercase mb-6">— NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
                    className="font-sans text-xs sm:text-sm text-white/60 hover:text-gold-500 transition-colors"
                  >
                    Home Entrance
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}
                    className="font-sans text-xs sm:text-sm text-white/60 hover:text-gold-500 transition-colors"
                  >
                    Ritual Menu
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#about"); }}
                    className="font-sans text-xs sm:text-sm text-white/60 hover:text-gold-500 transition-colors"
                  >
                    The Heritage
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#reviews"); }}
                    className="font-sans text-xs sm:text-sm text-white/60 hover:text-gold-500 transition-colors"
                  >
                    Client Acclaim
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                    className="font-sans text-xs sm:text-sm text-white/60 hover:text-gold-500 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact & Timings Quick Indicators (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-cinzel text-xs tracking-[0.3em] font-bold text-white uppercase mb-2">— SANCTUARY TIMINGS</h4>
            <address className="not-italic flex flex-col gap-3.5">
              <div className="flex gap-3 items-start text-white/65">
                <MapPin className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm">
                  Shiv Chowk, Badi Basti, Pushkar, Rajasthan 305022, India
                </span>
              </div>
              <div className="flex gap-3 items-start text-white/65">
                <Clock className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm">
                  Open 9am–9pm, 7 Days a Week
                </span>
              </div>
              <div className="flex gap-3 items-start text-white/65">
                <Phone className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs sm:text-sm">
                  +91 8955209287
                </span>
              </div>
            </address>
          </div>

        </div>

        {/* Absolute Bottom Copyright Block */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 gap-4">
          <p className="font-sans text-[11px] sm:text-xs text-white/40 text-center sm:text-left leading-relaxed">
            © {currentYear} Mooch Saloon Pushkar. Under supervision of <strong>Rahul </strong>. All Rights Reserved.
          </p>
          <p className="font-sans text-[10px] uppercase text-white/30 tracking-widest text-center sm:text-right">
            AG BRANDING
          </p>
        </div>
      </div>
    </footer>
  );
}
