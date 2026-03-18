import { useEffect, useRef } from 'react';

const items = [
  {
    title: 'מחמצת טבעית',
    desc: 'לחמים ומאפים על בסיס מחמצת שאנחנו מטפחים כבר שנים - טעם עמוק ומרקם מושלם',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="15" rx="9" ry="6"/>
        <path d="M6 15c0-3 2.7-9 6-9s6 6 6 9"/>
      </svg>
    ),
  },
  {
    title: 'קינוחים מיוחדים',
    desc: 'קינוחי בוטיק שנוצרים בהשראה צרפתית עם טוויסט ישראלי ייחודי',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V2"/>
        <path d="M5 12h14c0 0-1 8-7 8s-7-8-7-8z"/>
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4"/>
      </svg>
    ),
  },
  {
    title: 'עוגות בהזמנה',
    desc: 'עוגות מעוצבות לכל אירוע - ימי הולדת, חתונות, בריתות ואירועים מיוחדים',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <rect x="4" y="8" width="16" height="6" rx="1"/>
        <path d="M12 4v4"/>
        <circle cx="12" cy="3" r="1"/>
      </svg>
    ),
  },
  {
    title: 'חומרי גלם מובחרים',
    desc: 'חמאה צרפתית, שוקולד בלגי, פירות עונתיים וקמחים מהטחנה',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c-4.97 0-9-2.24-9-5v-3c0 2.76 4.03 5 9 5s9-2.24 9-5v3c0 2.76-4.03 5-9 5z"/>
        <path d="M12 17c-4.97 0-9-2.24-9-5v-3c0 2.76 4.03 5 9 5s9-2.24 9-5v3c0 2.76-4.03 5-9 5z"/>
        <ellipse cx="12" cy="7" rx="9" ry="5"/>
      </svg>
    ),
  },
  {
    title: 'טרי כל יום',
    desc: 'הכל נאפה מאפס כל בוקר - בלי שאריות מאתמול, בלי הקפאה, רק טרי',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'שירות משלוחים',
    desc: 'הזמינו דרך Tabit ותהנו ממשלוח עד הבית או איסוף עצמי מהמאפייה',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
];

export default function Specialties() {
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
    <section id="specialties" className="section specialties" ref={ref}>
      <h2 className="section-title reveal">מה מיוחד אצלנו</h2>
      <p className="section-subtitle reveal">הסיבות שהלקוחות שלנו חוזרים שוב ושוב</p>

      <div className="specialties-grid">
        {items.map((item, i) => (
          <div key={i} className="specialty-card reveal">
            <div className="specialty-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
