import React from 'react'
import {BrowserRouter as Router,Routes } from 'react-router-dom'
import ProductCreate from './admin/ProductCreate'
import ProductEdit from './admin/ProductEdit'
import Products from './admin/Products'
import Main from './main/Main';
export default function App() {
  return (
    <div className="App">
        <Main/>
      <Router>
      
      <Products/>
    
      <data/>
        <Routes path='/' exact component={Main} />
        <Routes path='/admin/products' exact component={Products} />
        <Routes path='/admin/products/create' exact component={ProductCreate} />
        <Routes path='/admin/products/:id/edit' exact component={ProductEdit} />
      </Router>      
    </div>
  )
}