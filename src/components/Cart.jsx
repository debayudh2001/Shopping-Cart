import React from 'react'
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from '../CartContext'

const Cart = () => {
   const { cart,updateQuantity } = useCart();
   const totalCost = cart.reduce((sum, item) => sum + item.price * item.amount, 0)

   return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500 font-semibold">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.img} className="w-20 h-20 object-cover rounded" />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    {item.amount === 1 ? <Trash2 size={18} /> : <Minus size={18} />}
                  </button>
                  <span className="w-8 text-center">{item.amount}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-2xl font-bold">${totalCost.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white rounded-md py-3 text-lg font-medium hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart

