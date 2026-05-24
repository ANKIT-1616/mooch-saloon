import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Now', href: '#booking' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10,10,8,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-2xl tracking-widest" style={{ color: 'var(--gold)', letterSpacing: '0.2em' }}>
          MOOCH<span style={{ color: 'var(--cream)', fontWeight: 300 }}> SALOON</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.label}>
              {link.label === 'Book Now' ? (
                <a
                  href={link.href}
                  className="px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
                  style={{
                    border: '1px solid var(--gold)',
                    color: 'var(--gold)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--gold)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--dark)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-xs tracking-widest uppercase transition-colors duration-300"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--gold)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" style={{ color: 'var(--gold)' }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ background: 'rgba(10,10,8,0.98)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
          <ul className="flex flex-col px-6 py-6 gap-5">
            {links.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs tracking-widest uppercase"
                  style={{ color: link.label === 'Book Now' ? 'var(--gold)' : 'var(--cream)' }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
