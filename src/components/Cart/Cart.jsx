import React, { useContext } from "react";
import CartContext from "../../CartContext";

export default function Cart() {
    const {cart} = useContext(CartContext)
    return (
        <>
            <h1>Cart</h1>
            <ul>    
                {
                    cart.map(produto => 
                        <li key={produto.id} >{`${produto.nome} - R$${produto.preco} x ${produto.quantidade} -  Valor total: R$${produto.preco * produto.quantidade}`}</li>
                    )
                }
                Total R$ {cart.reduce((valorAnterior, valorAtual) => {
                    return valorAnterior + valorAtual.quantidade * valorAtual.preco.toFixed(2)
                }, 0)}
            </ul>
            
        </>
    )
}