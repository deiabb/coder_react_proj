import React, { useState, useContext } from 'react';
import styles from './ProductCard.module.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


export default function ProductCard({id, title, price, thumbnail, available_quantity}){
  const [quantity, setQuantity] = useState(1);
 
  
    
  
  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    
        if (newQuantity >= 1) {
            setQuantity(newQuantity)
        }
        

    console.log(newQuantity)

  }
    
    return (
        <>
            <div key={id} className={styles.cardProduct}>
                <div className={styles.imgArea}>
                    <Link to={`/coder_react_proj/product/${id}`}>
                        <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="product" className={styles.image} />
                    </Link>
                    
                </div>
                
                <div className={styles.productInfo}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <h2 className={styles.cardPrice}>R$ {price?.toFixed(2)}</h2> 
                </div>
              
                <input
                 value={quantity} 
                 type='number' 
                 onChange={handleChangeQuantity} />
                 <Link to={`/coder_react_proj/cart`}>
                    <button className={styles.btnCompra} >Comprar</button>
                 </Link>
                
            </div>
           
        </>
    )
}