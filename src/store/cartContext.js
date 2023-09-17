import React, { useState, createContext } from 'react'

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    return(
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}


