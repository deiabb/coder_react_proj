import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import ProductDetail from './components/ProductDetail/ProductDetail'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/coder_react_proj' element={<Home/>} />
          <Route path='/coder_react_proj/papelaria' element={<Products/>} />
          <Route path='/coder_react_proj/artes' element={<>Artes</>} />
          <Route path='/coder_react_proj/estojos' element={<>Estojos</>} />
          <Route path='/coder_react_proj/cadernos' element={<>Cadernos</>} />
          <Route path='/coder_react_proj/agendas' element={<>Agendas</>} />
          <Route path='/coder_react_proj/checkout' element={<>Checkout</>} />
          <Route path='/coder_react_proj/product/:id' element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

