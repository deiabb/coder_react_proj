import { useContext } from "react";
import React from "react";
import CartContext from "../../CartContext";

export default function Checkout() {
    const {cart} = useContext(CartContext);


    return (
        <>
            <h1>Checkout</h1>


        </>
    )
}