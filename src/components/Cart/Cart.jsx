import React, { useContext } from "react";
import CartContext from "../../CartContext";

function CartItem({nome, quantidade, id}) {
    const {cart, setCart} = useContext(CartContext)
    const handleRemoveItem = (produtoId) => {
        const selecionarItem = cart.filter(produto => produto.id !== produtoId)
        setCart(selecionarItem);
    }

    const handleMudaQuantidade = () => {

    }


    return (
        <li >{`${nome} X ${quantidade}`}
        <button onClick={() => handleRemoveItem(id)} >Remover item</button>
        <button onClick={() => handleMudaQuantidade(id)} >Editar item</button>
        </li>
    )
}

export default function Cart() {
    const {cart} = useContext(CartContext)


    return (
        <>
            <h1>Cart</h1>
            <ul>
                {cart?.length === 0 && "Seu carrinho está vazio!    "}    
                {cart?.map(({id, nome, quantidade}) => 
                        <CartItem id={id} nome={nome} quantidade={quantidade}/>
                    )
                }
                Total R$ {cart.reduce((valorAnterior, valorAtual) => {
                    return valorAnterior + valorAtual.quantidade * valorAtual.preco
                }, 0).toFixed(2)}
            </ul>
            
        </>
    )
}