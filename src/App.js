import React from 'react';
import './App.css';
import MainHeader from './Component/MainHeader';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Services from './Component/Services';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Footer';
const App=()=>{
  return (
    <>
      <Routes>

        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
       </Routes>
       <Footer/>
    </>
  );
}

export default App;
