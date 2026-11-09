import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '../data/products'

export type CartItem = {
  product: Product
  quantity: number
  variant?: string
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (product: Product, quantity?: number, variant?: string) => void
  removeItem: (productId: string, variant?: string) => void
  updateQty: (productId: string, quantity: number, variant?: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'lune-parade-cart'

function itemKey(productId: string, variant?: string) {
  return `${productId}::${variant ?? ''}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as CartItem[]) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = items.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0,
    )

    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (product, quantity = 1, variant) => {
        if (!product.inStock) return
        setItems((prev) => {
          const key = itemKey(product.id, variant)
          const existing = prev.find(
            (i) => itemKey(i.product.id, i.variant) === key,
          )
          if (existing) {
            return prev.map((i) =>
              itemKey(i.product.id, i.variant) === key
                ? { ...i, quantity: i.quantity + quantity }
                : i,
            )
          }
          return [...prev, { product, quantity, variant }]
        })
        setIsOpen(true)
      },
      removeItem: (productId, variant) => {
        const key = itemKey(productId, variant)
        setItems((prev) =>
          prev.filter((i) => itemKey(i.product.id, i.variant) !== key),
        )
      },
      updateQty: (productId, quantity, variant) => {
        const key = itemKey(productId, variant)
        setItems((prev) =>
          prev
            .map((i) =>
              itemKey(i.product.id, i.variant) === key
                ? { ...i, quantity }
                : i,
            )
            .filter((i) => i.quantity > 0),
        )
      },
      clearCart: () => setItems([]),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
