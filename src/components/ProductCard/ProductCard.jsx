import React, { useEffect, useState, useContext } from "react";
import styles from "./ProductCard.module.css";

import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import bancoDados from "../../Firestore";
import { doc, getDoc } from "firebase/firestore";


export default function ProductCard({ id, nome, preco, imagem, estoque }) {
   
  const [produto, setProduto] = useState({});
  const { cart, setCart } = useContext(CartContext);
  const [quantidade] = useState(1);
  

  useEffect(() => {
    
    (async function() {
      const referenciaDoc = doc(bancoDados, "produtos", id);

      const produtoSnapshot = await getDoc(referenciaDoc);

      const produto = produtoSnapshot.data();
      setProduto(produto);
      
    })()
  
  }, []);

  const handleAddCart = () => {
    setCart([...cart, { ...produto,quantidade, id }]);

    console.log(cart.length);
  };

  return (
    <>
      <div key={id} className={styles.cardProduct}>
        <Link to={`/coder_react_proj/product/${id}`}>
          <div className={styles.imgArea}>
            <img src={imagem} width="150px" alt="" />
          </div>
        </Link>
        <div className={styles.productInfo}>
          <h2 className={styles.cardTitle}>{nome}</h2>
          <h2 className={styles.cardPrice}>R$ {preco?.toFixed(2)}</h2>
        </div>

        <button onClick={handleAddCart} className={styles.btnCompra}>
          Adicionar ao carrinho
        </button>
       
      </div>
    </>
  );
}
