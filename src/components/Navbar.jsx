import { useState, useEffect } from 'react';

const ORDER_URL = 'https://tabitisrael.co.il/tabit-order?siteName=tosha&step=menu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  const links = [
    { href: '#about', label: 'אודות' },
    { href: '#specialties', label: 'מה מיוחד אצלנו' },
    { href: '#menu', label: 'תפריט' },
    { href: '#reviews', label: 'ביקורות' },
    { href: '#contact', label: 'צרו קשר' },
  ];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Tosha Bakery" />
          <span className="nav-logo-text">Tosha Bakery</span>
        </a>

        <div className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="nav-order-btn">
            להזמנה
          </a>
        </div>

        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="תפריט">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href={ORDER_URL} target="_blank" rel="noopener noreferrer" className="nav-order-btn" onClick={close}>
          להזמנה
        </a>
      </div>
    </>
  );
}
