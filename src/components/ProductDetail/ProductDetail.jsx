import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import CartContext from "../../CartContext";


export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const {cart, setCart} = useContext(CartContext);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setProduct(data)
    })
  }, []);
  
  //isso funciona, ele me devolve um array de objetos, mas não estou conseguindo acessar o título 

  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    
        if (newQuantity >= 1) {
            setQuantity(newQuantity)
        }
  }

  const handleAddItem = () => {
    setCart([...cart, {...product, quantity}]);
  };

  return (
    <div>
      <img src={product.thumbnail}/>
      <h3>{product.title}</h3>
      <h4>R$ {product.price}</h4>
      <input
      value={quantity} 
      type='number' 
      onChange={handleChangeQuantity} />
      <button onClick={handleAddItem}>Comprar</button>
    </div>
  );
}
