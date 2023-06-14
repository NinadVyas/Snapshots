// import logo from './logo.svg';
import './App.scss';

import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from '../src/pages/home/home.js';


import ScrollToTop from './scrollToTop';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <div className="content">
          {/* Create ScrollToTop para el scrolltop to change page*/}
          <ScrollToTop /> 
          <Routes>
            <Route path="/" element={<Home />} className="home"/>



          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
