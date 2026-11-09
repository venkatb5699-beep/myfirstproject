import { useEffect, useState } from 'react'
import { IconClose } from './Icons'

const KEY = 'lune-parade-promo-seen'

export function PromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return
    const t = window.setTimeout(() => setOpen(true), 900)
    return () => window.clearTimeout(t)
  }, [])

  function dismiss() {
    sessionStorage.setItem(KEY, '1')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="promo-backdrop" role="dialog" aria-modal="true" aria-label="Welcome offer">
      <div className="promo-modal">
        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80"
            alt="Colourful party balloons"
          />
          <button
            className="icon-btn"
            aria-label="Close"
            onClick={dismiss}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'rgba(255,255,255,0.9)',
            }}
          >
            <IconClose />
          </button>
        </div>
        <div className="promo-body">
          <h2>Do you want 5% OFF on 1st order!*</h2>
          <div className="promo-actions">
            <button className="btn btn-primary" onClick={dismiss}>
              Yes, please.
            </button>
            <button className="btn btn-outline" onClick={dismiss}>
              No, thanks.
            </button>
          </div>
          <div className="promo-note">
            <span>*For first-time subscribers only.</span>
            <span>Need help? Chat with us</span>
          </div>
        </div>
      </div>
    </div>
  )
}
