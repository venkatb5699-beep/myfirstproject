import { Link } from 'react-router-dom'
import { formatPrice, type Product } from '../data/products'

export function ProductCard({ product }: { product: Product }) {
  const badgeClass =
    product.badge === 'Sale' ? 'sale' : product.badge === 'Out of stock' ? 'oos' : ''

  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-media">
        {product.badge && <span className={`badge ${badgeClass}`}>{product.badge}</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </Link>
      <div>
        <h3>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="price-row">
          {product.compareAt && (
            <span className="compare">{formatPrice(product.compareAt)}</span>
          )}
          <strong>{formatPrice(product.price)}</strong>
          <span className="gst">(inclusive of GST)</span>
        </div>
      </div>
    </article>
  )
}
