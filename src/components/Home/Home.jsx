import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard';
import styles from "./Home.module.css"

export default function Home() {
    const [products, setProducts] = useState([]);
  

   useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=papelaria`)
    .then((response) => response.json())
    .then((data) => {
        setProducts(data.results);
    })
   }, []);

    return (
        <>
        
        <div className={styles.productsHome}>
            {products.map(({id, title, price, thumbnail}) => (
                <ProductCard 
                key={id}
                id={id}
                title={title}
                price={price}
                thumbnail={thumbnail}
                />
            ))}
        </div>
        </>
    )
}