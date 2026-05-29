import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CinematicButton from "./CinematicButton";
import Logo from "./Logo";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#0B0B0B]/80 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Title */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex flex-col items-start group select-none"
          >
            <Logo size="sm" align="left" showSubtext={true} className="transition-all duration-300 group-hover:scale-[1.02]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`relative font-cinzel text-xs tracking-[0.2em] uppercase py-2 transition-all duration-500 hover:text-gold-500 ${
                        isActive ? "text-gold-500 font-semibold" : "text-white/70"
                      }`}
                    >
                      {item.label}
                      {/* Interactive sliding indicator under active item */}
                      {isActive && (
                        <motion.span
                          layoutId="navIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* WhatsApp Direct Action on Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/mooch_saloon_rr?igsh=amU1OHZ3Y2FpNDk1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-gold-500 hover:scale-110 transition-all duration-300"
              aria-label="Instagram profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <CinematicButton
              variant="outline"
              href="https://wa.me/918955209287?text=Hi%20Mooch%20Saloon%2C%20I%20want%20to%20connect%20with%20your%20premium%20studio."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-6"
            >
              Contact Us
            </CinematicButton>
          </div>

          {/* Mobile Menu Action Icon */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href="tel:+918955209287"
              className="p-2 border border-white/5 bg-white/5 text-gold-500 hover:text-white transition-colors duration-300 rounded-none"
              aria-label="Call saloon team"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-white/5 bg-white/5 text-white hover:text-gold-500 transition-colors duration-300 rounded-none cursor-pointer"
              aria-label="Toggle mobile drawer menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-Over Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-30 bg-[#0B0B0B]/98 backdrop-blur-2xl flex flex-col justify-center px-8"
            id="mobile-menu"
          >
            <div className="flex flex-col gap-8 max-w-sm mx-auto w-full text-center">
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold-500 font-bold mb-4">
                — EXQUISITE GROOMING STUDIO
              </span>
              <ul className="flex flex-col gap-6">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`block font-cinzel text-lg tracking-[0.25em] uppercase py-2 transition-colors ${
                          isActive ? "text-gold-500 font-bold" : "text-white/80"
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="h-[1px] bg-white/10 w-2/3 mx-auto my-4" />

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://www.instagram.com/mooch_saloon_rr?igsh=amU1OHZ3Y2FpNDk1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-gold-500 transition-all font-cinzel text-xs tracking-[0.2em]"
                >
                  <Instagram className="w-4 h-4 text-gold-500" /> INSTAGRAM
                </a>
                <CinematicButton
                  variant="gold"
                  href="https://wa.me/918955209287?text=Hi%20Mooch%20Saloon%2C%20I%20want%20to%20connect%20with%20your%20premium%20studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 mt-2"
                >
                  WhatsApp Chat
                </CinematicButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
