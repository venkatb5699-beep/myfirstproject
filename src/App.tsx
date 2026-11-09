import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { PromoModal } from './components/PromoModal'
import { IconWhatsApp } from './components/Icons'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <PromoModal />
      <a
        className="wa-fab"
        href="https://wa.me/6580000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <IconWhatsApp />
      </a>
    </div>
  )
}
