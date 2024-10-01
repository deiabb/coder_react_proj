//O número do contador não pode superar o estoque disponível
import React from "react";

export default function ItemCount({estoque, inicial, adicionar}) {
    return (
        <>
        
            <div className={styles.btnsContainer}>
                <div className={styles.counterContainer}>
                    <button className={styles.btnCounter} onClick={()=>setCount(count > 0 ? count -1 : count)}>-</button>
                    <Count className={styles.counter}>{count}</Count>
                    <button className={styles.btnCounter} onClick={()=>setCount(count +1)}>+</button>
                </div>
                    <button className={styles.btnRemove} onClick={()=>setCount(0)}>Remover</button>
            </div>
            
        </>
    )
}