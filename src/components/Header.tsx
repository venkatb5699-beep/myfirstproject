import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { navLinks } from '../data/products'
import { useCart } from '../context/CartContext'
import { IconBag, IconMenu, IconSearch } from './Icons'

export function Header() {
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()

  function submitSearch(e: FormEvent) {
    e.preventDefault()
    const query = q.trim()
    setSearchOpen(false)
    setMenuOpen(false)
    navigate(query ? `/shop?q=${encodeURIComponent(query)}` : '/shop')
  }

  return (
    <>
      <div className="announce">
        Same day or next day delivery available. WhatsApp us for urgent requests.
        Complimentary gift wrap on selected sets.
      </div>
      <header className="header">
        <div className="container header-inner">
          <nav className="nav-desktop" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to + link.label}
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
            Luné Parade
          </Link>

          <div className="header-actions">
            <button
              className="icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <IconSearch />
            </button>
            <button className="icon-btn" aria-label="Open cart" onClick={openCart}>
              <IconBag />
              {count > 0 && <span className="cart-count">{count}</span>}
            </button>
            <button
              className="icon-btn menu-toggle"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile">
        {navLinks.map((link) => (
          <Link key={link.label} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>

      {searchOpen && (
        <div className="mobile-nav open" style={{ top: 'calc(var(--announce-h) + var(--header-h))' }}>
          <form onSubmit={submitSearch}>
            <label className="sr-only" htmlFor="site-search">
              Search products
            </label>
            <input
              id="site-search"
              className="search-input"
              style={{ width: '100%' }}
              placeholder="Search balloons, gifts, décor…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              autoFocus
            />
          </form>
        </div>
      )}
    </>
  )
}
