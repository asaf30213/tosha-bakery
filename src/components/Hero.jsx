const ORDER_URL = 'https://tabitisrael.co.il/tabit-order?siteName=tosha&step=menu';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-deco hero-deco-1" />
      <div className="hero-deco hero-deco-2" />
      <div className="hero-deco hero-deco-3" />

      <div className="hero-content">
        <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Tosha Bakery" className="hero-logo" />
        <h1>
          <span>Tosha</span> Bakery
        </h1>
        <p className="hero-sub">
          מאפייה בוטיק עם אהבה לפרטים הקטנים.
          לחמים מחמצת, מאפים טריים, קינוחים מיוחדים ועוגות בהזמנה אישית.
        </p>
        <div className="hero-btns">
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            הזמינו עכשיו
          </a>
          <a href="#menu" className="btn-secondary">
            לתפריט המלא
          </a>
        </div>
      </div>
    </section>
  );
}
