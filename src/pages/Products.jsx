import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Star, Filter, Search } from 'lucide-react'
import PRODUCTS from '../data/products.js'
import { playChime } from '../hooks/useChimes.js'
import './Products.css'

const CATEGORIES = ['All', ...new Set(PRODUCTS.map(p => p.category))]

const formatPrice = p => `₦${p.toLocaleString()}`

const Products = ()=> {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch]                 = useState('')
  const [sortBy, setSortBy]                 = useState('default')
  const [addedId, setAddedId]               = useState(null)
  const hoverTimer = useRef(null)

  const filtered = PRODUCTS
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) ||
                 p.shortDesc.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-asc')  return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating')     return b.rating - a.rating
      return 0
    })

  const handleHoverEnter = () => {
    hoverTimer.current = setTimeout(() => playChime(), 600)
  }
  const handleHoverLeave = () => {
    clearTimeout(hoverTimer.current)
  }

  const handleAddToCart = (e, id) => {
    e.preventDefault()
    e.stopPropagation()
    playChime()
    setAddedId(id)
    setTimeout(() => setAddedId(null), 2000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="page-hero products-hero">
        <div className="page-hero-content">
          <h1>Our Wellness Products</h1>
          <p>Natural oils, herbs &amp; supplements for holistic health</p>
        </div>
      </section>

      <section className="products-section section-pad">
        <div className="container">

          {/* Toolbar */}
          <div className="products-toolbar">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="toolbar-right">
              <div className="sort-box">
                <Filter size={16} />
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value="default">Sort: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
              <span className="product-count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`cat-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >{category}</button>
            ))}
          </div>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <div className="no-results">
              <p>No products found for "<strong>{search}</strong>"</p>
              <button className="btn-primary" onClick={() => { setSearch(''); setActiveCategory('All') }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map(product => (
                <Link
                  to={`/products/${product.id}`}
                  className="product-card"
                  key={product.id}
                  onMouseEnter={handleHoverEnter}
                  onMouseLeave={handleHoverLeave}
                >
                  <div className="product-img-wrap">
                    <img src={product.img} alt={product.name} loading="lazy" />
                    {product.badge && (
                      <span className={`product-badge badge-${product.badgeColor}`}>{product.badge}</span>
                    )}
                    {!product.inStock && <div className="out-of-stock-overlay">Out of Stock</div>}
                  </div>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-short-desc">{product.shortDesc}</p>

                    <div className="product-rating">
                      <span className="stars-row">
                        {[1,2,3,4,5].map(star => (
                          <Star key={star} size={14} fill={star <= Math.round(product.rating) ? '#f5a623' : 'none'} color="#f5a623" />
                        ))}
                      </span>
                      <span className="rating-val">{product.rating}</span>
                      <span className="review-count">({product.reviews})</span>
                    </div>

                    <div className="product-pricing">
                      <span className="price-current">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="price-original">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>

                    <button
                      className={`add-to-cart-btn ${addedId === product.id ? 'added' : ''} ${!product.inStock ? 'disabled' : ''}`}
                      onClick={e => product.inStock && handleAddToCart(e, product.id)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart size={16} />
                      {addedId === product.id ? 'Added! ✓' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <div className="ready">
        <h2>Need Help Choosing?</h2>
        <p>Our practitioners can recommend the right products for your health needs</p>
        <Link to="/book-session" className="btn-outline">Book a Consultation</Link>
      </div>
    </div>
  )
}

export default Products