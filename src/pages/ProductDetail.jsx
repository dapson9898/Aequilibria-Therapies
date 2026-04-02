import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Zap, Star, ChevronLeft, Check, Package, Shield, Truck, RefreshCw } from 'lucide-react'
import { playChime } from '../hooks/useChimes.js'
import { useCart } from '../contexts/CartContext'
import './ProductDetail.css'

const formatPrice = p => `₦${p.toLocaleString()}`

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, clearCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [related, setRelated] = useState([])
  const [qty, setQty] = useState(1)
  const [cartDone, setCartDone] = useState(false)
  const [tab, setTab] = useState('description')

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`)
        if (!response.ok) {
          throw new Error('Product not found')
        }
        const data = await response.json()
        setProduct(data)

        // Fetch related products
        const allResponse = await fetch('http://localhost:5000/api/products')
        const allProducts = await allResponse.json()
        const relatedProducts = allProducts.filter(p => p.category === data.category && p.id !== data.id).slice(0, 3)
        setRelated(relatedProducts)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (!product.inStock) return
    playChime()
    addToCart(product, qty)
    setCartDone(true)
    setTimeout(() => setCartDone(false), 2500)
  }

  const handleBuyNow = () => {
    if (!product.inStock) return
    playChime()
    
    const message = `Hello! I'd like to purchase:\n\n${product.name}\nQuantity: ${qty}\nPrice: ₦${(product.price * qty).toLocaleString()}\n\nPlease process my order.`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/+2347033030833?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    
    // Clear cart after placing order
    clearCart()
  }

  const discount = product && product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  if (loading) {
    return (
      <div className="pd-loading">
        <p>Loading product...</p>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="pd-not-found">
        <h2>{error || 'Product not found'}</h2>
        <Link to="/products" className="btn-primary">Back to Products</Link>
      </div>
    )
  }

  return (
    <div className="pd-page">
      {/* Breadcrumb */}
      <div className="pd-breadcrumb">
        <div className="container pd-breadcrumb-inner">
          <button onClick={() => navigate(-1)} className="back-link"><ChevronLeft size={16} /> Back</button>
          <span className="bc-trail">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span>{product.name}</span>
          </span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="pd-main section-pad">
        <div className="container pd-grid">

          {/* Image */}
          <div className="pd-image-col">
            <div className="pd-img-wrap">
              <img src={product.img} alt={product.name} />
              {product.badge && (
                <span className={`pd-badge badge-${product.badgeColor}`}>{product.badge}</span>
              )}
              {!product.inStock && <div className="pd-out-overlay">Out of Stock</div>}
            </div>
          </div>

          {/* Info */}
          <div className="pd-info-col">
            <span className="pd-category">{product.category}</span>
            <h1 className="pd-title">{product.name}</h1>

            {/* Rating */}
            <div className="pd-rating-row">
              <div className="stars-row">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={18} fill={s <= Math.round(product.rating) ? '#f5a623' : 'none'} color="#f5a623" />
                ))}
              </div>
              <span className="pd-rating-val">{product.rating}</span>
              <span className="pd-reviews">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="pd-price-row">
              <span className="pd-price">{formatPrice(product.price)}</span>
              {product.originalPrice && <>
                <span className="pd-original">{formatPrice(product.originalPrice)}</span>
                <span className="pd-discount">{discount}% OFF</span>
              </>}
            </div>

            <p className="pd-short-desc">{product.shortDesc}</p>

            {/* Size */}
            <div className="pd-meta">
              <span className="pd-meta-label">Size:</span>
              <span className="pd-meta-val">{product.size}</span>
            </div>

            {/* Stock */}
            <div className={`pd-stock ${product.inStock ? 'in-stock' : 'oos'}`}>
              {product.inStock
                ? <><Check size={15} /> In Stock — Ready to Ship</>
                : <><Package size={15} /> Currently Out of Stock</>}
            </div>

            {/* Quantity */}
            {product.inStock && (
              <div className="pd-qty-row">
                <span className="pd-meta-label">Quantity:</span>
                <div className="qty-ctrl">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(q => q + 1)}>+</button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pd-actions">
              <button
                className={`pd-cart-btn ${cartDone ? 'done' : ''} ${!product.inStock ? 'disabled' : ''}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={18} />
                {cartDone ? 'Added to Cart ✓' : 'Add to Cart'}
              </button>
              <button
                className={`pd-buy-btn ${!product.inStock ? 'disabled' : ''}`}
                onClick={handleBuyNow}
                disabled={!product.inStock}
              >
                <Zap size={18} />
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-item"><Shield size={16} /><span>100% Authentic</span></div>
              <div className="trust-item"><Truck size={16} /><span>Nationwide Delivery</span></div>
              <div className="trust-item"><RefreshCw size={16} /><span>Easy Returns</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="pd-tabs-section">
        <div className="container">
          <div className="pd-tabs">
            {['description','benefits','usage','ingredients'].map(t => (
              <button
                key={t}
                className={`pd-tab ${tab === t ? 'active' : ''}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div className="pd-tab-content">
            {tab === 'description' && (
              <p>{product.description}</p>
            )}
            {tab === 'benefits' && (
              <ul className="pd-benefits-list">
                {product.benefits.map((b, i) => (
                  <li key={i}><Check size={16} color="var(--teal)" /><span>{b}</span></li>
                ))}
              </ul>
            )}
            {tab === 'usage' && (
              <div className="pd-usage-box">
                <h4>How to Use</h4>
                <p>{product.usage}</p>
              </div>
            )}
            {tab === 'ingredients' && (
              <div className="pd-ingredients-box">
                <h4>Full Ingredients</h4>
                <p>{product.ingredients}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section-pad bg-light">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">You May Also Like</h2>
              <p className="section-subtitle">More products from the {product.category} range</p>
            </div>
            <div className="related-grid">
              {related.map(rp => (
                <Link to={`/products/${rp.id}`} className="related-card" key={rp.id} onClick={() => { playChime(); window.scrollTo(0,0) }}>
                  <div className="related-img"><img src={rp.img} alt={rp.name} /></div>
                  <div className="related-info">
                    <h3>{rp.name}</h3>
                    <div className="stars-row" style={{ marginBottom: '0.3rem' }}>
                      {[1,2,3,4,5].map(s => <Star key={s} size={13} fill={s <= Math.round(rp.rating) ? '#f5a623' : 'none'} color="#f5a623" />)}
                    </div>
                    <span className="price-current">{formatPrice(rp.price)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="ready">
        <h2>Want Expert Advice?</h2>
        <p>Our practitioners will recommend the best products for your health goals</p>
        <Link to="/book-session" className="btn-outline">Book a Consultation</Link>
      </div>
    </div>
  )
}
