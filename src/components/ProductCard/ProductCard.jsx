import React from 'react';
import styles from './ProductCard.module.css'
import ItemCount from '../ItemCount/ItemCount';

export default function ProductCard({id, title, price, thumbnail}){
  
    
    return (
        <>
            <div className={styles.cardProduct}>
                <div className={styles.imgArea}>
                    <img src={thumbnail} alt="product" className={styles.image} />
                </div>
                
                <div className={styles.productInfo}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <h2 className={styles.cardPrice}>R$ {price}</h2> 
                </div>
                <ItemCount />
            </div>
           
        </>
    )
}