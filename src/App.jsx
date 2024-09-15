import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import CartProvider from './CartContext'


const App = () => {

  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App




