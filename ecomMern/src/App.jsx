import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Collection from './pages/Collection.jsx'
import Login from './pages/Login.jsx'
import Order from './pages/Order.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import Footer from './components/Footer.jsx'
import { ToastContainer, toast } from 'react-toastify';




const App = () => {
  return (
   <>
   <ToastContainer/>
    <Navbar/>
    <Routes>

    <Route path='/' element={ <Home/>} />
    <Route path='/about' element={ <About/>} />
    <Route path='/collection' element={ <Collection/>} />
    <Route path='/login' element={ <Login/>} />
    <Route path='/order' element={ <Order/>} />
    <Route path='/place-order' element={ <PlaceOrder/>} />
    <Route path='/contact' element={ <Contact/>} />
    <Route path='/cart' element={ <Cart/>} />
    <Route path='/product/:productId' element={ <Product/>} />

    </Routes>
    <Footer/>

   </>
  )
}

export default App
