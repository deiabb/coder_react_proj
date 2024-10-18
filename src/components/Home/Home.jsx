import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Home.module.css";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=papelaria`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.results);
          setLoading(false);
        });
    }, 500);
  }, []);

  return (
    <>
        
      <div className={styles.productsHome}>
        {loading ? (
          <h1>Carregandooo...</h1>
        ) : (
          products.map(({ id, title, price, thumbnail }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              thumbnail={thumbnail}
            />
            
          ))
        )}
      </div>
    </>
  );
}
