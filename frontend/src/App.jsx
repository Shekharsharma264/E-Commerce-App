import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import About from './pages/About';
import Cart from './pages/Cart';
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <ToastContainer/> 
    <Navbar/>
    <Searchbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/placeOrder" element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
