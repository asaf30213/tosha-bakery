import { useState, useEffect, useRef } from 'react';

const ORDER_URL = 'https://tabitisrael.co.il/tabit-order?siteName=tosha&step=menu';

const categories = ['הכל', 'לחמים', 'מאפים', 'קינוחים', 'עוגות', 'משקאות'];

const menuItems = [
  // לחמים
  { name: 'לחם מחמצת קלאסי', desc: 'לחם מחמצת טבעית עם קראסט פריך ופנים רך', price: '32', cat: 'לחמים' },
  { name: 'לחם שיפון כהה', desc: 'לחם שיפון מלא עם זרעי כרוויה', price: '34', cat: 'לחמים' },
  { name: 'חלה מקולעת', desc: 'חלה רכה ומתוקה לשבת - קלועה ביד', price: '28', cat: 'לחמים' },
  { name: 'פוקאצ\'ה זיתים', desc: 'פוקאצ\'ה עם שמן זית, זיתים ורוזמרין טרי', price: '30', cat: 'לחמים' },
  { name: 'באגט צרפתי', desc: 'באגט קלאסי עם קראסט זהוב ופנים אוורירי', price: '18', cat: 'לחמים' },
  { name: 'לחם אגוזים ופירות', desc: 'לחם מחמצת עם אגוזי מלך, חמוציות ותאנים', price: '38', cat: 'לחמים' },

  // מאפים
  { name: 'קרואסון חמאה', desc: 'קרואסון מחמאה צרפתית עם שכבות פריכות', price: '16', cat: 'מאפים', tag: 'הכי נמכר' },
  { name: 'קרואסון שקדים', desc: 'קרואסון ממולא קרם שקדים ופרוסות שקד', price: '20', cat: 'מאפים' },
  { name: 'בורקס גבינות', desc: 'בורקס פריך עם מיקס גבינות ועשבי תיבול', price: '14', cat: 'מאפים' },
  { name: 'שושנת שוקולד', desc: 'מאפה שמרים עם שוקולד בלגי מריר', price: '18', cat: 'מאפים' },
  { name: 'סיני קינמון', desc: 'רול קינמון קלאסי עם זיגוג קרם גבינה', price: '16', cat: 'מאפים', tag: 'חדש' },
  { name: 'מאפה פיסטוק', desc: 'מאפה שמרים עם קרם פיסטוק וחלווה', price: '22', cat: 'מאפים' },

  // קינוחים
  { name: 'טארט שוקולד', desc: 'טארט עם גנאש שוקולד בלגי ומלח ים', price: '26', cat: 'קינוחים' },
  { name: 'טארט פירות עונה', desc: 'טארט עם קרם פטיסייר ופירות עונתיים טריים', price: '28', cat: 'קינוחים' },
  { name: 'קרמבו בוטיק', desc: 'קרמבו על מצע ביסקוויט עם קצפת ושוקולד', price: '14', cat: 'קינוחים' },
  { name: 'פבלובה', desc: 'מרנג פריך עם קרם שנטילי ופירות יער', price: '32', cat: 'קינוחים', tag: 'מומלץ השף' },
  { name: 'מוס שוקולד לבן', desc: 'מוס שוקולד לבן על בסיס דקואז שקדים', price: '24', cat: 'קינוחים' },
  { name: 'אקלייר וניל', desc: 'אקלייר צרפתי עם קרם וניל מדגסקר', price: '18', cat: 'קינוחים' },

  // עוגות
  { name: 'עוגת שוקולד בלגי', desc: 'עוגת שכבות שוקולד עם גנאש וציפוי מראה', price: 'החל מ-180', cat: 'עוגות' },
  { name: 'עוגת גבינה', desc: 'עוגת גבינה אפויה קלאסית על בסיס ביסקוויטים', price: 'החל מ-160', cat: 'עוגות' },
  { name: 'עוגת פיסטוק-פטל', desc: 'שכבות מוס פיסטוק עם קונפי פטל', price: 'החל מ-200', cat: 'עוגות' },
  { name: 'עוגת טרופית', desc: 'מוס מנגו-פסיפלורה על דקואז קוקוס', price: 'החל מ-190', cat: 'עוגות', tag: 'עונתי' },

  // משקאות
  { name: 'קפה פילטר', desc: 'קפה חד-זני טרי - משתנה לפי עונה', price: '14', cat: 'משקאות' },
  { name: 'קפוצ\'ינו', desc: 'אספרסו עם חלב מוקצף', price: '16', cat: 'משקאות' },
  { name: 'מאצ\'ה לאטה', desc: 'מאצ\'ה יפנית אותנטית עם חלב חם', price: '20', cat: 'משקאות' },
  { name: 'לימונענע טרייה', desc: 'לימון, נענע טרייה וקרח', price: '18', cat: 'משקאות' },
  { name: 'שוקו חם בלגי', desc: 'שוקולד חם עשיר משוקולד בלגי אמיתי', price: '20', cat: 'משקאות' },
  { name: 'תה עלים', desc: 'מבחר תה עלים - ירוק, צמחים או שחור', price: '14', cat: 'משקאות' },
];

export default function Menu() {
  const [active, setActive] = useState('הכל');
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = active === 'הכל' ? menuItems : menuItems.filter(i => i.cat === active);

  return (
    <section id="menu" className="section menu" ref={ref}>
      <h2 className="section-title reveal">התפריט שלנו</h2>
      <p className="section-subtitle reveal">טעמים שמדברים בעד עצמם</p>

      <div className="menu-categories reveal">
        {categories.map(cat => (
          <button
            key={cat}
            className={`menu-cat-btn${active === cat ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filtered.map((item, i) => (
          <div key={i} className="menu-card reveal">
            <div className="menu-card-header">
              <span className="menu-card-name">{item.name}</span>
              <span className="menu-card-price">{item.price}</span>
            </div>
            <p className="menu-card-desc">{item.desc}</p>
            {item.tag && <span className="menu-card-tag">{item.tag}</span>}
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          להזמנה אונליין
        </a>
      </div>
    </section>
  );
}
