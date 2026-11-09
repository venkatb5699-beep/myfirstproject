import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatPrice, getProductBySlug } from '../data/products'
import { useCart } from '../context/CartContext'

export function ProductDetail() {
  const { slug } = useParams()
  const product = useMemo(() => (slug ? getProductBySlug(slug) : undefined), [slug])
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [variant, setVariant] = useState<string | undefined>()

  if (!product) {
    return (
      <section className="section">
        <div className="container empty">
          <p>Product not found.</p>
          <Link className="btn btn-outline" to="/shop">
            Back to shop
          </Link>
        </div>
      </section>
    )
  }

  const selected =
    product.variants && product.variants.length > 0
      ? variant ?? product.variants[0]
      : undefined

  return (
    <section className="container pdp">
      <div className="pdp-media">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="pdp-info">
        {product.badge && (
          <span className={`badge ${product.badge === 'Sale' ? 'sale' : product.badge === 'Out of stock' ? 'oos' : ''}`} style={{ position: 'static', display: 'inline-block', marginBottom: '0.75rem' }}>
            {product.badge}
          </span>
        )}
        <h1>{product.name}</h1>
        <div className="price-row" style={{ marginBottom: '1rem' }}>
          {product.compareAt && <span className="compare">{formatPrice(product.compareAt)}</span>}
          <strong style={{ fontSize: '1.25rem' }}>{formatPrice(product.price)}</strong>
          <span className="gst">(inclusive of GST)</span>
        </div>
        <p className="desc">{product.description}</p>

        {product.variants && (
          <div>
            <strong style={{ fontSize: '0.9rem' }}>Options</strong>
            <div className="variant-row">
              {product.variants.slice(0, 12).map((v) => (
                <button
                  key={v}
                  type="button"
                  className={`chip ${selected === v ? 'active' : ''}`}
                  onClick={() => setVariant(v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="qty-row">
          <button aria-label="Decrease" onClick={() => setQty((n) => Math.max(1, n - 1))}>
            −
          </button>
          <span>{qty}</span>
          <button aria-label="Increase" onClick={() => setQty((n) => n + 1)}>
            +
          </button>
        </div>

        <button
          className="btn btn-primary"
          disabled={!product.inStock}
          onClick={() => addItem(product, qty, selected)}
        >
          {product.inStock ? 'Add to cart' : 'Out of stock'}
        </button>

        <p style={{ marginTop: '1.25rem' }}>
          <Link to="/shop">← Continue shopping</Link>
        </p>
      </div>
    </section>
  )
}
