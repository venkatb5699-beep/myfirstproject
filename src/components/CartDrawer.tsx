import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'
import { IconClose } from './Icons'

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, updateQty, removeItem } = useCart()

  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside className={`drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-head">
          <strong>Your bag</strong>
          <button className="icon-btn" aria-label="Close cart" onClick={closeCart}>
            <IconClose />
          </button>
        </div>

        <div className="drawer-body">
          {items.length === 0 && <p className="empty">Your bag is empty.</p>}
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
                      aria-label="Decrease"
                      onClick={() =>
                        updateQty(item.product.id, item.quantity - 1, item.variant)
                      }
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label="Increase"
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
        </div>

        <div className="drawer-foot">
          <div className="subtotal-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <Link to="/cart" className="btn btn-primary btn-block" onClick={closeCart}>
            View bag / checkout
          </Link>
        </div>
      </aside>
    </>
  )
}
