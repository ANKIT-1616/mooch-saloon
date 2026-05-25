import Showcase from "../components/MoochSaloonShowcase.jsx";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { MessageSquare } from "lucide-react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "services", "about", "reviews", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative bg-[#0B0B0B] text-white min-h-screen selection:bg-gold-500 selection:text-black">
      
      {/* Floating Animated WhatsApp Pulse Selector */}
      <a
        href="https://wa.me/918955209287?text=Hi%20Mooch%20Saloon%2C%20I%20want%20to%20connect%20with%20your%20premium%20studio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-30 flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-cinzel text-xs font-bold uppercase tracking-[0.2em] px-6 py-4 shadow-2xl transition-all duration-300 group max-w-[240px] select-none rounded-none"
        aria-label="Direct quick reservation on WhatsApp"
      >
        <div className="relative shrink-0">
          <MessageSquare className="w-5 h-5 fill-white/10" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </div>
        <span className="hidden sm:inline font-semibold">WhatsApp Desk</span>
      </a>

      {/* Header Sticky */}
      <Header activeSection={activeSection} />

      {/* Symmetrical cascading grid rows */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* About Storytelling Section */}
        <section id="about">
          <About />
        </section>
        {/* Premium Showcase Section */}
<section id="showcase">
  <Showcase />
</section>


        {/* Testimonials Review Slider */}
        <section id="reviews">
          <Testimonials />
        </section>

        {/* Interactive Contact & Coordinate Map Drawer */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Minimal Luxury Ending Footer */}
      <Footer />

      {/* Scroll Up Fast Widget */}
      <ScrollToTop />

    </div>
  );
}
