import React, { useContext } from "react";
import CartContext from "../../CartContext";

export default function Cart() {
    const {cart} = useContext(CartContext)
    return (
        <>
            <ul>    
                {
                    cart.map(product => 
                        <li>{`${product.title} x ${product.quantity}`}</li>
                    )
                }
            </ul>
            
        </>
    )
}