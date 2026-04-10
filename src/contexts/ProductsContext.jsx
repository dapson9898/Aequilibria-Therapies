import React, { createContext, useContext, useCallback, useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_API_URL || 'https://aequilibria-backend.onrender.com'
const ProductsContext = createContext()

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return context
}

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [productsError, setProductsError] = useState(null)

  const fetchProducts = useCallback(async () => {
    setLoadingProducts(true)
    setProductsError(null)

    try {
      const response = await fetch(`${API_BASE}/api/products`)
      if (!response.ok) {
        throw new Error('Failed to load products from the server.')
      }
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      setProductsError(error.message || 'Failed to load products.')
    } finally {
      setLoadingProducts(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <ProductsContext.Provider
      value={{ products, loadingProducts, productsError, refreshProducts: fetchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
