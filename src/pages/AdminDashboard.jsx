import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Edit, Trash2, LogOut } from 'lucide-react'
import './Admin.css'

export default function AdminDashboard() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/admin/login')
      return
    }
    fetchProducts()
  }, [navigate])

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products')
      if (!response.ok) throw new Error('Failed to fetch products')
      const data = await response.json()
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return

    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setProducts(products.filter(p => p.id !== id))
      } else {
        setError('Failed to delete product')
      }
    } catch (err) {
      setError('Network error')
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingProduct(null)
  }

  const handleFormSuccess = () => {
    setShowForm(false)
    setEditingProduct(null)
    fetchProducts()
  }

  if (loading) return <div className="admin-loading">Loading...</div>

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <button onClick={() => setShowForm(true)} className="btn-primary">
            <Plus size={16} /> Add Product
          </button>
          <button onClick={handleLogout} className="btn-secondary">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {error && <div className="error-message">{error}</div>}

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.img} alt={product.name} className="product-thumb" />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₦{product.price.toLocaleString()}</td>
                <td>{product.inStock ? 'In Stock' : 'Out of Stock'}</td>
                <td>
                  <button onClick={() => handleEdit(product)} className="btn-edit">
                    <Edit size={14} />
                  </button>
                  <button onClick={() => handleDelete(product.id)} className="btn-delete">
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <ProductForm
          product={editingProduct}
          onClose={handleFormClose}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  )
}

function ProductForm({ product, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    id: product?.id || '',
    name: product?.name || '',
    category: product?.category || '',
    price: product?.price || '',
    originalPrice: product?.originalPrice || '',
    rating: product?.rating || 0,
    reviews: product?.reviews || 0,
    badge: product?.badge || '',
    badgeColor: product?.badgeColor || '',
    img: product?.img || '',
    shortDesc: product?.shortDesc || '',
    description: product?.description || '',
    benefits: product?.benefits || [''],
    usage: product?.usage || '',
    ingredients: product?.ingredients || '',
    size: product?.size || '',
    inStock: product?.inStock ?? true
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Dropdown options
  const categoryOptions = ['Essential Oils', 'Supplements', 'Herbs & Superfoods']
  const badgeOptions = ['', 'Best Seller', 'New', 'Sale', 'Premium', 'Organic', 'Popular']
  const badgeColorOptions = ['', 'teal', 'gold', 'red', 'black']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const token = localStorage.getItem('adminToken')
      const method = product ? 'PUT' : 'POST'
      const url = product
        ? `http://localhost:5000/api/products/${product.id}`
        : 'http://localhost:5000/api/products'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        onSuccess()
      } else {
        const data = await response.json()
        setError(data.message || 'Failed to save product')
      }
    } catch (err) {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  const handleBenefitChange = (index, value) => {
    const newBenefits = [...formData.benefits]
    newBenefits[index] = value
    setFormData({ ...formData, benefits: newBenefits })
  }

  const addBenefit = () => {
    setFormData({ ...formData, benefits: [...formData.benefits, ''] })
  }

  const removeBenefit = (index) => {
    const newBenefits = formData.benefits.filter((_, i) => i !== index)
    setFormData({ ...formData, benefits: newBenefits })
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>ID</label>
              <input
                type="text"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                required
                disabled={!!product}
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">Select Category</option>
                {categoryOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Price (₦) *</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) || '' })}
                placeholder="4500"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Original Price (₦)</label>
              <input
                type="number"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: parseInt(e.target.value) || '' })}
                placeholder="6000 (leave empty if no discount)"
              />
            </div>
            <div className="form-group">
              <label>Rating *</label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                required
              />
              <span className="range-value">{formData.rating}/5</span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Reviews Count *</label>
              <input
                type="number"
                value={formData.reviews}
                onChange={(e) => setFormData({ ...formData, reviews: parseInt(e.target.value) || 0 })}
                placeholder="124"
                required
              />
            </div>
            <div className="form-group">
              <label>Badge</label>
              <select
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
              >
                <option value="">No Badge</option>
                {badgeOptions.filter(option => option !== '').map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Badge Color</label>
              <select
                value={formData.badgeColor}
                onChange={(e) => setFormData({ ...formData, badgeColor: e.target.value })}
              >
                <option value="">Default</option>
                {badgeColorOptions.filter(option => option !== '').map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Size *</label>
              <input
                type="text"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                placeholder="30ml"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              value={formData.img}
              onChange={(e) => setFormData({ ...formData, img: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Short Description</label>
            <textarea
              value={formData.shortDesc}
              onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={4}
            />
          </div>

          <div className="form-group">
            <label>Benefits</label>
            {formData.benefits.map((benefit, index) => (
              <div key={index} className="benefit-row">
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => handleBenefitChange(index, e.target.value)}
                  placeholder="Enter benefit"
                />
                <button type="button" onClick={() => removeBenefit(index)} className="remove-btn">×</button>
              </div>
            ))}
            <button type="button" onClick={addBenefit} className="add-btn">Add Benefit</button>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Usage</label>
              <textarea
                value={formData.usage}
                onChange={(e) => setFormData({ ...formData, usage: e.target.value })}
                placeholder="How to use the product"
              />
            </div>
            <div className="form-group">
              <label>Ingredients</label>
              <textarea
                value={formData.ingredients}
                onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                placeholder="Product ingredients"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.inStock}
                  onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
                />
                In Stock
              </label>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-secondary">Cancel</button>
            <button type="submit" disabled={loading} className="btn-primary">
              {loading ? 'Saving...' : 'Save Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}