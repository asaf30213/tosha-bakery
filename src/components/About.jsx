import { useEffect, useRef, useState } from 'react';

const images = [
  'about-1.webp',
  'about-3.webp',
  'about-4.webp',
];

export default function About() {
  const ref = useRef();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="about-grid">
        <div className="about-img-wrap reveal">
          {images.map((img, i) => (
            <img
              key={img}
              src={`${import.meta.env.BASE_URL}${img}`}
              alt={`תושה בייקרי ${i + 1}`}
              className={`about-slide${i === current ? ' active' : ''}`}
            />
          ))}
          <div className="about-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`about-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`תמונה ${i + 1}`}
              />
            ))}
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
