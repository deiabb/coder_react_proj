import React, { useState, useContext } from 'react';
import styles from './ProductCard.module.css'

import { Link } from 'react-router-dom';


export default function ProductCard({id, nome, preco, imagem, estoque}){
  const [quantidade, setQuantidade] = useState(1);
 
  
  const handleChangeQuantidade = (e) => {
    const novaQuantidade = Number(e.target.value);
    
        if (novaQuantidade >= 1) {
            setQuantidade(novaQuantidade)
        }
        

    console.log(novaQuantidade)

  }
    
    return (
        <>
            <div key={id} className={styles.cardProduct}>
                <div className={styles.imgArea}>
                    
                    <Link to={`/coder_react_proj/product/${id}`}>
                        <img src={imagem} width="150px" alt="" />
                    </Link>
                    
                </div>
                
                <div className={styles.productInfo}>
                    <h2 className={styles.cardTitle}>{nome}</h2>
                    <h2 className={styles.cardPrice}>R$ {preco?.toFixed(2)}</h2> 
                </div>
              
                <input
                 value={quantidade} 
                 type='number' 
                 onChange={handleChangeQuantidade} />
                 <Link to={`/coder_react_proj/cart`}>
                    <button className={styles.btnCompra} >Comprar</button>
                 </Link>
                
            </div>
           
        </>
    )
}