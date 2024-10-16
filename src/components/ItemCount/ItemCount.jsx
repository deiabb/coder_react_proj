import React, { useState } from "react";
import styles from './ItemCount.module.css'

export default function ItemCount({id, available_quantity}){
    let [count, setCount] = useState(0);
    function aumenta() {
        if (count !== available_quantity) {
            setCount(count +1)
        } else {
            setCount(count)
        }
        
    };
    function diminui() {
        if (count > 0) {
            setCount(count -1)
        } else {
            setCount(0)
        }
    }

    return (
        <>
            <div className={styles.countContainer} >
                <div className={styles.btnContainer} >
                
                    <p>{count}</p>
                    <button className={styles.btnCount} onClick={aumenta}>
                        +
                    </button>
                    <button className={styles.btnCount} onClick={diminui} >
                        -
                    </button>
                </div>
            
                <button className={styles.btnCompra} >Comprar</button>

            </div>
            
        </>
    )
}