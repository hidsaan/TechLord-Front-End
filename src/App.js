import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss'

import Navbar from './components/sharedComponents/Navbar';
import Footer from './components/sharedComponents/Footer';
import Home from './components/sharedComponents/Home';
import About from './components/sharedComponents/About';
import News from './components/sharedComponents/News';

import Sell from './components/shopComponents/Sell'
;import Shop from './components/shopComponents/Shop';

import Dashboard from './components/userComponents/Dashboard';
import Login from './components/userComponents/Login';
import Register from './components/userComponents/Register';

import 'react-toastify/dist/ReactToastify.css';
import AddProducts from './components/adminComponents/AddProducts';
import Cart from './components/userComponents/Cart';
import TermsAndConditions from './components/sharedComponents/TermsAndConditions';


const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path='/News' element={<News />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Sell' element={<Sell />} />
        <Route path='/admin/AddProducts' element={<AddProducts />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
    
  )
}

export default App