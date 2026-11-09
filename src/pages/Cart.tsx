import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'

export function Cart() {
  const { items, subtotal, updateQty, removeItem, clearCart } = useCart()

  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-head">
          <h2>Your bag</h2>
          <p>{items.length === 0 ? 'Nothing here yet.' : 'Review items before checkout.'}</p>
        </div>

        {items.length === 0 ? (
          <div className="empty">
            <Link className="btn btn-primary" to="/shop">
              Browse products
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '1.25rem', maxWidth: 720 }}>
            {items.map((item) => (
              <div className="cart-line" key={`${item.product.id}-${item.variant ?? ''}`}>
                <img src={item.product.image} alt="" />
                <div>
                  <h4>{item.product.name}</h4>
                  <div className="meta">
                    {formatPrice(item.product.price)}
                    {item.variant ? ` · ${item.variant}` : ''}
                  </div>
                  <div className="line-actions">
                    <div className="qty-row" style={{ margin: 0 }}>
                      <button
                        onClick={() =>
                          updateQty(item.product.id, item.quantity - 1, item.variant)
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQty(item.product.id, item.quantity + 1, item.variant)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeItem(item.product.id, item.variant)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="subtotal-row" style={{ fontSize: '1.1rem' }}>
              <span>Subtotal (incl. GST)</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="cta-row">
              <button className="btn btn-primary" onClick={() => alert('Demo checkout — payments not connected.')}>
                Proceed to checkout
              </button>
              <button className="btn btn-outline" onClick={clearCart}>
                Clear bag
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
