import { Link } from 'react-router-dom'
import { products } from '../data/products'

export function Gallery() {
  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-head">
          <h2>Gallery</h2>
          <p>Party setups, balloon moments, and gift styling from the studio.</p>
        </div>
        <div className="gallery-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="gallery-item"
            >
              <img src={product.image} alt={product.name} loading="lazy" />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
