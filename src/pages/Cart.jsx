import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import './Cart.css'

const formatPrice = p => `₦${p.toLocaleString()}`

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = getCartTotal()

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <section className="page-hero cart-hero">
          <div className="page-hero-content">
            <h1>Your Cart</h1>
            <p>Your wellness journey starts here</p>
          </div>
        </section>

        <section className="cart-empty section-pad">
          <div className="container text-center">
            <ShoppingCart size={64} className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Add some wellness products to get started on your journey</p>
            <Link to="/products" className="btn-primary">Browse Products</Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="cart-page">
      {/* Hero */}
      <section className="page-hero cart-hero">
        <div className="page-hero-content">
          <h1>Your Cart</h1>
          <p>{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
        </div>
      </section>

      <section className="cart-section section-pad">
        <div className="container">
          <div className="cart-back-link">
            <Link to="/products">
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>
          </div>

          <div className="cart-content">
            {/* Cart Items */}
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="cart-item-details">
                    <h3 className="cart-item-name">
                      <Link to={`/products/${item.id}`}>{item.name}</Link>
                    </h3>
                    <p className="cart-item-category">{item.category}</p>
                    <p className="cart-item-price">{formatPrice(item.price)}</p>
                  </div>

                  <div className="cart-item-quantity">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="cart-item-total">
                    {formatPrice(item.price * item.quantity)}
                  </div>

                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="cart-summary-header">
                <h3>Order Summary</h3>
              </div>

              <div className="cart-summary-content">
                <div className="summary-row">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="cart-actions">
                <button className="btn-primary checkout-btn">
                  Proceed to Checkout
                </button>
                <button className="btn-secondary clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}