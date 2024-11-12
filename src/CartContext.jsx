import { createContext, useState } from "react";

const CartContext = createContext([]);

export function NumCarrinho({cart}) {
    return (
        <p>{cart}</p>
    )
}

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