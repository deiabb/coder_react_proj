import CartContext from "../CartContext";
import {useContext} from "react";

export default function CartItem({nome, quantidade, id}) {
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
