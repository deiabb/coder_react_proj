import React from "react";
import styles from './ProductDetail.module.css'

export default function ProductDetail({id, title, price, thumbnail, attributes}){
    return (
        <>
            <img src={thumbnail}></img>
            <h2>{title}</h2>
        </>
    )
}