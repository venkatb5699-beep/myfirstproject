import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">Luné Parade</div>
          <p style={{ marginTop: '0.85rem', maxWidth: '34ch' }}>
            Premium party supplies, helium balloons, and personalised gifts —
            delivered islandwide from our Singapore studio.
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/shop">All products</Link>
          <Link to="/shop?category=helium-bouquets">Balloon bouquets</Link>
          <Link to="/shop?occasion=birthday">Birthday</Link>
          <Link to="/shop?occasion=wedding">Wedding</Link>
        </div>
        <div>
          <h4>Help</h4>
          <a href="#faq">FAQs</a>
          <a href="mailto:hello@luneparade.sg">Email us</a>
          <a href="https://wa.me/6580000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div>
          <h4>Visit</h4>
          <p style={{ margin: 0 }}>
            Studio pickup by appointment
            <br />
            Ang Mo Kio, Singapore
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} Luné Parade. Demo mirror storefront for learning.
      </div>
    </footer>
  )
}
