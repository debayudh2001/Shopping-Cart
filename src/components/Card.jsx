import { useState } from "react"
import React from 'react'
import { Plus } from "lucide-react"
import { useCart } from "../CartContext"

const Card = ({item}) => {
  const { handleClick } = useCart();
  const [isAdding, setIsAdding] = useState(false)
 
  return (
    <>
      <div className="bg-slate-200 rounded-lg shadow-md overflow-hidden">
      <img src={item.img} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.author}</p>
        <p className="text-gray-600 mb-4 font-semibold">${item.price.toFixed(2)}</p>
        <button
          onClick={() => {
            handleClick(item)
            setIsAdding(true)
            setTimeout(() => setIsAdding(false), 2500)
          }}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
            isAdding ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-800'
          }`}
          disabled={isAdding}
        >
          {isAdding ? 'Added!' : (
            <>
              <Plus className="inline-block w-5 h-5 mr-1" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
    </>
  )
}

export default Card



