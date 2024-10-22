import React from "react";
import styles from './NavBar.module.css';
import logo from './../../assets/Qlogo.png';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
       <>
        <nav className={styles.navBar}>
           
            <ul className={styles.navList}>
            <li className={styles.navCategory}> 
                <Link to="/coder_react_proj">Home</Link>
                {/* <a className={styles.navLink} href="">Tudo</a> */}
            </li>
            <li className={styles.navCategory}>
                <Link to="/coder_react_proj/papelaria" >Papelaria</Link>
                {/* <a className={styles.navLink} href="">Papelaria</a> */}
            </li>
            <li className={styles.navCategory}>
                <Link to="/coder_react_proj/cart" >Carrinho</Link>
                
            </li>
            <li className={styles.navCategory}>
                <Link to="/coder_react_proj/artes" >Artes</Link>
                {/* <a className={styles.navLink} href="">Artes</a> */}
            </li>
            <img className={styles.logo} src={logo} alt="" />
           
            
            <li className={styles.navCategory}>
                <Link to="/coder_react_proj/estojos" >Estojos</Link>
                {/* <a className={styles.navLink} href="">Estojos</a> */}
            </li>
            <li className={styles.navCategory}>
                <Link to="/coder_react_proj/cadernos" >Cadernos</Link>
                {/* <a className={styles.navLink} href="">Cadernos</a> */}
            </li>
            <li className={styles.navCategory}>
                <Link to="/coder_react_proj/agendas" >Agendas</Link>
                {/* <a className={styles.navLink} href="">Agendas</a> */}
            </li>
            </ul>
           
        </nav>
            <button className={styles.btnSearch}>
            <span className="material-symbols-outlined">
            search
            </span>
            <input className={styles.search} type="text" placeholder='O que você procura?' /> 
            </button>
        </>    
    )
}

