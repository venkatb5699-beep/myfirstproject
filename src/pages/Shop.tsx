import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { categories, filterProducts, occasions } from '../data/products'
import { ProductCard } from '../components/ProductCard'

export function Shop() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  const occasion = params.get('occasion')
  const q = params.get('q') ?? ''

  const list = useMemo(
    () => filterProducts({ category, occasion, q }),
    [category, occasion, q],
  )

  const title =
    categories.find((c) => c.id === category)?.name ||
    occasions.find((o) => o.id === occasion)?.name ||
    (q ? `Search: ${q}` : 'All products')

  function update(key: string, value: string) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    if (key === 'category') next.delete('occasion')
    if (key === 'occasion') next.delete('category')
    setParams(next)
  }

  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-head">
          <h2>{title}</h2>
          <p>{list.length} item{list.length === 1 ? '' : 's'}</p>
        </div>

        <div className="shop-toolbar">
          <input
            className="search-input"
            placeholder="Search products"
            value={q}
            onChange={(e) => update('q', e.target.value)}
          />
          <select
            className="select-input"
            value={category ?? ''}
            onChange={(e) => update('category', e.target.value)}
            aria-label="Filter by category"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <select
            className="select-input"
            value={occasion ?? ''}
            onChange={(e) => update('occasion', e.target.value)}
            aria-label="Filter by occasion"
          >
            <option value="">All occasions</option>
            {occasions.map((o) => (
              <option key={o.id} value={o.id}>
                {o.name}
              </option>
            ))}
          </select>
        </div>

        {list.length === 0 ? (
          <p className="empty">No products match these filters.</p>
        ) : (
          <div className="product-grid">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
