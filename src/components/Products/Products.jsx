import React, {useState, useEffect} from 'react';
import styles from './Products.module.css'
import fetchProducts from './../../api/fetchProducts';
import ProductCard from './../ProductCard/ProductCard';
//ACHO QUE NAO TO USANDO ESSE COMPONENTE! ESQUECER DELE POR ENQUANTO


// export default function Products(props){
//    const [products, setProducts] = useState([]);
  

//    useEffect(() => {
//     fetchProducts('papelaria e escritório')
//     .then((response) => {
//         setProducts(response)
//     })
//    }, []);


//     return (
    
//             <div className={styles.productsArea}>
                
//                 {
//                     products.map((product) =>
                        
//                         <ProductCard key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail}/>
//                 )}
               
//             </div>
//     )
// }