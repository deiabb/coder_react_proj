import React, { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setProduct(data)
    })
  }, []);
  console.log(product)
  //isso funciona, ele me devolve um array de objetos, mas não estou conseguindo acessar o título 

  

  return (
    <div>
      <img src={product.thumbnail}/>
      <h3>{product.title}</h3>
      <h4>R$ {product.price}</h4>
      
    </div>
  );
}
