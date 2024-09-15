import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export default function CartProvider ({ children }) {
    const [cart,setCart] = useState([])
  
    useEffect(() => {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        setCart(JSON.parse(storedCart))
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])
  
    const handleClick = (item) => {
        console.log(item)
        setCart([...cart,item])
    }

    const updateQuantity = (id, change) => {
        setCart(prevItems =>
          prevItems.map(item =>
            item.id === id
              ? { ...item, amount: Math.max(0, item.amount + change) }
              : item
          ).filter(item => item.amount > 0)
        )
      }
  
    return (
      <CartContext.Provider value={{ cart, setCart, handleClick, updateQuantity }}>
        {children}
      </CartContext.Provider>
    )
  }



