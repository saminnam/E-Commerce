import React,{useState} from 'react';
import './App.css';
import Nav from './nav';
import {BrowserRouter} from 'react-router-dom';
import Rout from './rout';
import Footer from './footer';
import Product from './product';
import Productdetail from './productdetail';

function App() {
  const [product,setProduct] = useState(Productdetail)
  function searchbtn(search)
    {
      console.log(search)
      const change = Productdetail.filter((x) => 
      {
        return x.Cat === search
      })
      setProduct(change)
    }
  return (
    <>
      <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Rout product = {product} setProduct = {setProduct}/>
      <Product/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
