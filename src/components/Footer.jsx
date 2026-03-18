export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Tosha Bakery</div>
        <div className="footer-links">
          <a href="#about">אודות</a>
          <a href="#specialties">מה מיוחד אצלנו</a>
          <a href="#menu">תפריט</a>
          <a href="#reviews">ביקורות</a>
          <a href="#contact">צרו קשר</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Tosha Bakery. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
