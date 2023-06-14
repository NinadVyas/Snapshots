import React from 'react';

import { useState } from "react";

import CompanyLogo from './../../Assets/logo2.jpeg';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

import './navbar-style.scss';

export const Navbar = () => {

  const [toogle, setToogle] = useState(false);

    //Method to show NAV
  const handleToogle = () => {
    setToogle(!toogle); 
    console.log("toogle de navbar!!")
  };  

  return(
    <header>
      <div className="logo">
        <img className="logo-img" src={CompanyLogo} alt="Logo"/>
        <div className="logo-text">
            <h3>Ninad Vyas</h3>
            {/* <p>Photograohy & Video</p> */}
        </div>
      </div>

      {/* <div className="logo">Logo Page</div> */}


      <div className="hamburger" onClick={handleToogle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={toogle?"nav_bar active":"nav_bar"}>
      {/* <div className="nav_bar"> */}
        <ul>
          {/* <li><Link to="/" className="active1">INICIO</Link></li> */}
          <div className="logo-text">
                        <h2 className='name'>Hey I'm Ninad.</h2>
                        {/* <p>Photograohy & Video</p> */}
                        <h4 className="subtitle">I Like to capture frames of life and of course nature as well.</h4>
                        <div className='icons'>
                        <a className='insta' href='https://www.instagram.com/ninaddv7/'>
                       <h2><BsInstagram/></h2> 
                    </a>
                    <a className='twit' href='https://twitter.com/NinadVyas87'>
                    <h2><BsTwitter/></h2> 
                    </a>
                    <a className='gith' href='https://github.com/NinadVyas'>
                    <h2><BsGithub/></h2> 
                    </a>
                    <a className='linkd' href='https://www.linkedin.com/in/ninad-vyas-b767491a3/'>
                    <h2><BsLinkedin/></h2> 
                    </a>
                    </div>
                    </div>
        </ul>
      </div>
    </header>
  )
  
}
export default Navbar;