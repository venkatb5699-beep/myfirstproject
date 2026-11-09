import { Link } from 'react-router-dom'
import { categories, occasions, products } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export function Home() {
  const recent = products.slice(0, 8)
  const popular = [...products].sort((a, b) => b.price - a.price).slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="hero-media" aria-hidden />
        <div className="hero-grain" aria-hidden />
        <div className="hero-copy">
          <span className="eyebrow">Singapore party atelier</span>
          <h1>LUNÉ PARADE</h1>
          <p>
            Helium balloons, personalised gifts, and party décor that make the
            night feel cinematic — delivered 7 days a week.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" to="/shop">
              Shop recent arrivals
            </Link>
            <Link className="btn btn-ghost" to="/shop?category=helium-bouquets">
              Browse balloons
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Featured product categories</h2>
            <p>Not to be missed — our curated picks for parties that stay memorable.</p>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="category-tile"
              >
                <img src={cat.image} alt="" loading="lazy" />
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(180deg, transparent, rgba(207,227,236,0.35), transparent)' }}>
        <div className="container">
          <div className="section-head">
            <h2>Browse by occasions</h2>
            <p>
              Stylish party supplies, personalised balloons, and décor for birthdays,
              weddings, baby showers, and special events.
            </p>
          </div>
          <div className="occasion-rail">
            {occasions.map((o) => (
              <Link key={o.id} to={`/shop?occasion=${o.id}`} className="occasion-card">
                <img src={o.image} alt="" loading="lazy" />
                <strong>{o.name}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Recent products</h2>
            <p>Add our new arrivals to your party items list.</p>
          </div>
          <div className="product-grid">
            {recent.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Popular this week</h2>
            <p>Customer favourites flying out of the studio.</p>
          </div>
          <div className="product-grid">
            {popular.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Why choose Luné Parade</h2>
            <p>Epic parties without the jaw-dropping price tag.</p>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <h3>Affordability</h3>
              <p>
                Handpicked décor at approachable prices so you can style a full
                room without stretching the budget.
              </p>
            </div>
            <div className="why-item">
              <h3>High quality</h3>
              <p>
                Helium that floats for hours, foil that holds its shape, and
                custom pieces built for the photo moment.
              </p>
            </div>
            <div className="why-item">
              <h3>Islandwide delivery</h3>
              <p>
                Same-day and next-day options across Singapore, plus studio
                pickup when you want it sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>
          <div className="faq">
            <details open>
              <summary>Do you offer helium balloons?</summary>
              <p>Yes — helium balloons are a specialty, available individually or in bouquets.</p>
            </details>
            <details>
              <summary>Can I customise letters or messages?</summary>
              <p>
                Many balloons and banners support personalisation. Check the product
                page for colour and letter options.
              </p>
            </details>
            <details>
              <summary>How far in advance should I order?</summary>
              <p>
                We recommend 3–4 business days for standard courier. Custom and
                helium deliveries may need a little more lead time.
              </p>
            </details>
            <details>
              <summary>Do you deliver across Singapore?</summary>
              <p>
                Yes, islandwide. Some restricted areas may need a nearby drop-off
                point or a small surcharge.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
