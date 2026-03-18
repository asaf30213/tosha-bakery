import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="about-grid">
        <div className="about-img-wrap reveal">
          <div className="about-img-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
              <circle cx="9" cy="9" r="1" fill="var(--purple)"/>
              <circle cx="15" cy="9" r="1" fill="var(--purple)"/>
            </svg>
          </div>
        </div>

        <div className="about-text reveal">
          <h3>הסיפור שלנו</h3>
          <p>
            תושה בייקרי נולדה מתוך אהבה אמיתית לאפייה.
            כל מאפה שלנו מוכן מחומרי גלם איכותיים, ללא חומרים משמרים,
            עם תשומת לב לכל פרט - מהבצק ועד להגשה.
          </p>
          <p>
            אנחנו מאמינים שאוכל טוב מחבר אנשים, ולכן כל ביס אצלנו
            מלווה בחיוך, בריח של טרי מהתנור ובתחושה של בית.
          </p>

          <div className="about-features">
            <span className="about-feature">חומרי גלם טבעיים</span>
            <span className="about-feature">אפייה יומית טרייה</span>
            <span className="about-feature">ללא חומרים משמרים</span>
            <span className="about-feature">מחמצת טבעית</span>
            <span className="about-feature">עוגות בהזמנה אישית</span>
          </div>
        </div>
      </div>
    </section>
  );
}
