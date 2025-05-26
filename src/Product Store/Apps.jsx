import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import ProductDetails from './ProductDetails'
import "./style.css"

const Apps = () => {
  return (
    <div>
        <nav className='navbar'>
                <Link className='navLink' to={'/'}>Home</Link>
                <Link className='navLink' to={'/products'}>Products</Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:productId' element={<ProductDetails/>}/>
        </Routes>
    </div>
  )
}

export default Apps