import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../../CartContext";
import bancoDados from "../../Firestore";
import { doc, getDoc } from "firebase/firestore";


export default function ProductDetail() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});
  const [quantity, setQuantity] = useState(1);
  // const [loading, setLoading] = useState(false)

  const {cart, setCart} = useContext(CartContext);

  useEffect(() => {
    
    (async function() {
      const referenciaDoc = doc(bancoDados, "produtos", id);

      const produtoSnapshot = await getDoc(referenciaDoc);

      const produto = produtoSnapshot.data();
      setProduto(produto);
      
    })()
  
  }, []);
  
  //isso funciona, ele me devolve um array de objetos, mas não estou conseguindo acessar o título 

  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    
        if (newQuantity >= 1) {
            setQuantity(newQuantity)
        }
  }

  const handleAddItem = () => {
    setCart([...cart, {...produto, quantity}]);
  };

  return (
    <div>
      <img width="150px" src={produto.imgUrl}/>
      <h3>{produto.nome}</h3>
      <h4>R$ {produto.preco}</h4>
      <input
      value={quantity} 
      type='number' 
      onChange={handleChangeQuantity} />
      <button onClick={handleAddItem}>Comprar</button>
    </div>
  );
}
