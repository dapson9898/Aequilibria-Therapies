import React from 'react'
import Home from './pages/Home'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import NotFound from './pages/NotFound'
import About from './pages/About'
import AlternativeMedicine from './pages/AlternativeMedicine'
import BookSession from './pages/BookSession'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import { CartProvider } from './contexts/CartContext'
import './index.css'

const App = () => {
  const location = useLocation();

  const validRoutes = ['/', '/about', '/alternative-medicine', '/book-session', '/contact', '/services', '/products', '/cart'];
  const adminRoutes = ['/admin/login', '/admin/dashboard'];
  const isNotFound = !validRoutes.includes(location.pathname) && !location.pathname.startsWith('/products/') && !adminRoutes.includes(location.pathname);
  const isAdminRoute = adminRoutes.includes(location.pathname);

  return (
    <CartProvider>
      {!isNotFound && !isAdminRoute && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Navigate to="/" />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/alternative-medicine" element={<AlternativeMedicine />}/>
        <Route path="/book-session" element={<BookSession />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="*" element={<NotFound />}/>
      </Routes>
      {!isNotFound && !isAdminRoute && <Footer />}
    </CartProvider>
  )
}

export default App
