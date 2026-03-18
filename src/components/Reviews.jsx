import { useEffect, useRef } from 'react';

const Star = () => (
  <svg viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const reviews = [
  {
    text: 'הקרואסונים הכי טובים שטעמתי בארץ! פריכים מבחוץ, רכים מבפנים, בדיוק כמו בפריז.',
    author: 'מיכל א.',
    stars: 5,
  },
  {
    text: 'הזמנו עוגת יום הולדת ופשוט נדהמנו. יפהפייה, טעימה ברמה אחרת, וכל האורחים שיבחו.',
    author: 'יואב כ.',
    stars: 5,
  },
  {
    text: 'לחם המחמצת שלהם ממכר. פעם בשבוע אני באה לקחת כיכר, כבר שנה וחצי ברצף.',
    author: 'שירה ל.',
    stars: 5,
  },
  {
    text: 'מקום קסום עם אנשים מדהימים. השירות חם, המאפים מעולים, והאווירה מושלמת.',
    author: 'נועם ג.',
    stars: 5,
  },
  {
    text: 'הסיני קינמון החדש שלהם הוא פשוט מושלם. עם הקפה של הבוקר - אין יותר טוב.',
    author: 'דנה ר.',
    stars: 5,
  },
  {
    text: 'משלוח הגיע חם ובזמן, כל מאפה ארוז יפה ושלם. תענוג להזמין מהם!',
    author: 'אלון מ.',
    stars: 5,
  },
];

export default function Reviews() {
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
    <section id="reviews" className="section reviews" ref={ref}>
      <h2 className="section-title reveal">מה הלקוחות אומרים</h2>
      <p className="section-subtitle reveal">גאים בכל ביקורת</p>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card reveal">
            <div className="review-stars">
              {Array.from({ length: r.stars }, (_, j) => <Star key={j} />)}
            </div>
            <p className="review-text">{r.text}</p>
            <div className="review-author">{r.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
