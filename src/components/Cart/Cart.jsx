import { useContext } from "react";
import CartContext from "../../CartContext";
import CartItem from "../CartItem";

export default function Cart() {
    const {cart} = useContext(CartContext)


    return (
        <>
            <h1>Cart</h1>
            <ul>
                {cart?.length === 0 && "Seu carrinho está vazio!    "}    
                {cart?.map(({id, nome, quantidade}) => 
                        <CartItem key={nome} id={id} nome={nome} quantidade={quantidade}/>
                    )
                }
                Total R$ {cart.reduce((valorAnterior, valorAtual) => {
                    return valorAnterior + valorAtual.quantidade * valorAtual.preco
                }, 0).toFixed(2)}
            </ul>
            
        </>
    )
}