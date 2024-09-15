import React, { useState } from 'react'
import { ShoppingCart } from "lucide-react"
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

const Navbar = () => {
  const { cart } = useCart();
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <nav className="bg-slate-200 shadow-xl sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to='/'><span className="text-xl font-bold text-gray-800">Dev's Shop</span></Link>
          </div>
          <div className="flex gap-8 items-center">
            <div className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total,item) => total + item.amount,0)}
              </span>
              {isHovered && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-700">Shopping Cart</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto min-w-fit">
                    {cart.map((item) => (
                      <div key={item.id} className="px-4 py-2 hover:bg-gray-100">
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">{item.title}</span>
                          <span className="text-sm text-gray-500">{item.amount}x</span>
                        </div>
                        <div className="text-xs text-gray-500">${item.price.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-700">Total</span>
                      <span className="text-sm font-bold text-gray-900">
                        ${cart.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to='/cart'><div className="text-center w-full bg-blue-600 text-white rounded-md py-2 px-2 text-sm font-medium hover:bg-blue-800 transition-colors hover:cursor-pointer">View Cart</div></Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar


