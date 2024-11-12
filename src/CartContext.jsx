import { react, createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider
        value={{
            cart,
            setCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;

//O valor inicial desse contexto é um array vazio