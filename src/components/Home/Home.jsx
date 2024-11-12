import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Home.module.css";
import { collection, getDocs } from "firebase/firestore";
import bancoDados from "../../Firestore";


export default function Home() {
  const [produtos, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  
//useEffect não aceita funções assíncronas
  useEffect(() => {
    setLoading(true);
    (async function(){
      const produtosCol = collection(bancoDados, 'produtos');
      const produtosSnapshot = await getDocs(produtosCol);

      const produtos = produtosSnapshot.docs.map((documentos) => {
        return {
          id: documentos.id, 
          ...documentos.data(),
        }
      });
      setProducts(produtos)
      setLoading(false)
    })();
    
  }, []);

  return (
    <>
        
      <div className={styles.productsHome}>
        {loading ? (
          <h1>Carregandooo...</h1>
        ) : (
          produtos.map(({ id, nome, categoria, descricao,  preco, imgUrl }) => (
            <ProductCard
              key={id}
              id={id}
              nome={nome}
              preco={preco}
              imagem={imgUrl}
            />
            
          ))
        )}
      </div>
    </>
  );
}