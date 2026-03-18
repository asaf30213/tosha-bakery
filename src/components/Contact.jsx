import { useEffect, useRef } from 'react';

const ORDER_URL = 'https://tabitisrael.co.il/tabit-order?siteName=tosha&step=menu';

export default function Contact() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="contact" className="section contact" ref={ref}>
        <h2 className="section-title reveal">בואו לבקר אותנו</h2>
        <p className="section-subtitle reveal">נשמח לראות אתכם</p>

        <div className="contact-grid">
          <div className="contact-card reveal">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h4>כתובת</h4>
            <p>פרטי הכתובת יעודכנו בקרוב</p>
          </div>

          <div className="contact-card reveal">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h4>שעות פתיחה</h4>
            <p>ראשון - חמישי: 07:00 - 19:00</p>
            <p>שישי: 07:00 - 15:00</p>
            <p>שבת: סגור</p>
          </div>

          <div className="contact-card reveal">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12" y2="18.01"/>
              </svg>
            </div>
            <h4>הזמנות</h4>
            <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'var(--purple)' }}>
              הזמינו דרך Tabit
            </a>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <h2>רעבים? בואו נתחיל</h2>
        <p>הזמינו עכשיו למשלוח או לאיסוף עצמי</p>
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          להזמנה
        </a>
      </section>
    </>
  );
}
