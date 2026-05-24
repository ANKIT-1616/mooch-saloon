import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const services = [
  'Signature Haircut',
  'Royal Hot Towel Shave',
  'Master Beard Sculpting',
  'Hair Spa & Treatment',
  'Keratin & Smoothening',
  'Full Grooming Package',
];

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

// ⚠️ Replace with your actual WhatsApp number (with country code, no +)
const WHATSAPP_NUMBER = '918955209287';

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const msg = `Hi Mooch Saloon! I'd like to book:
• Name: ${form.name}
• Service: ${form.service}
• Date: ${form.date}
• Time: ${form.time}
• Phone: ${form.phone}
${form.message ? `• Note: ${form.message}` : ''}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) return;
    // Primary: open WhatsApp with booking details
    handleWhatsApp();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--dark-3)',
    border: '1px solid rgba(201,168,76,0.15)',
    color: 'var(--cream)',
    padding: '14px 16px',
    fontSize: '13px',
    letterSpacing: '0.05em',
    outline: 'none',
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <section id="booking" className="py-28 px-6" style={{ background: 'var(--dark)' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Info */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
            Reserve Your Seat
          </p>
          <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight" style={{ color: 'var(--cream)' }}>
            Book a
            <br />
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Session</span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Fill out the form and we'll confirm your appointment via WhatsApp within 30 minutes.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Walk-ins welcome, but booking ensures your preferred time slot.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Location', value: 'Pushkar, Rajasthan — Near Shiv Chowk, Badi Basti' },
              { label: 'Hours', value: 'Daily · 9:00 AM – 9:00 PM' },
              { label: 'WhatsApp', value: '+91 89552 09287' },
            ].map(item => (
              <div key={item.label} className="flex gap-4">
                <span className="text-xs tracking-widest uppercase w-20 shrink-0 pt-0.5" style={{ color: 'var(--gold)' }}>
                  {item.label}
                </span>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Direct WhatsApp button */}
          <button
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
            className="mt-10 flex items-center gap-3 px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300"
            style={{ background: '#25D366', color: '#fff', fontFamily: 'Montserrat, sans-serif' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.9')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </button>
        </div>

        {/* Right: Form */}
        <div style={{ border: '1px solid rgba(201,168,76,0.1)', background: 'var(--dark-2)', padding: '2.5rem' }}>
          {submitted ? (
            <div className="text-center py-10">
              <div className="font-display text-5xl mb-4" style={{ color: 'var(--gold)' }}>✓</div>
              <h3 className="font-display text-2xl mb-3" style={{ color: 'var(--cream)' }}>Booking Sent!</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                WhatsApp opened with your booking details. We'll confirm shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs tracking-widest uppercase"
                style={{ color: 'var(--gold)' }}
              >
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Full Name *"
                required
                value={form.name}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)')}
                onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
              />
              <input
                name="phone"
                placeholder="Phone Number *"
                required
                type="tel"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
                onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)')}
                onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
              />
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                style={{ ...inputStyle, cursor: 'pointer' }}
                onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)')}
                onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
              >
                <option value="">Select Service *</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  style={inputStyle}
                  onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)')}
                  onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
                />
                <select
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)')}
                  onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
                >
                  <option value="">Time *</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Special requests (optional)"
                rows={3}
                value={form.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)')}
                onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)')}
              />
              <button
                type="submit"
                className="w-full py-4 flex items-center justify-center gap-3 text-xs tracking-widest uppercase transition-all duration-300"
                style={{ background: 'var(--gold)', color: 'var(--dark)', fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--gold-light)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--gold)')}
              >
                <Send size={14} />
                Confirm via WhatsApp
              </button>
              <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                Opens WhatsApp with your booking details pre-filled
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
