import React, { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=papelaria/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setProduct(data)
    })
  }, []);
  console.log(product)
  //isso funciona, ele me devolve um array de objetos, mas não estou conseguindo acessar o título 

  return (
    <div>
      <h1>{product.query}</h1>
      
      </div>
  );
}
