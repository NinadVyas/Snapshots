import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar-style.scss';

import CompanyLogo from './../../Assets/logo2.jpeg';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export const Sidebar = () => { 
    return(
        <div className="sidebar">
            <Link to="#" className="link">
                <div className="sidebar-header">
                    <img className="logo" src={CompanyLogo} alt="Logo"/>
                    <div className="logo-text">
                        <h1>Ninad Vyas</h1>
                        {/* <p>Photograohy & Video</p> */}
                        <h3 className="subtitle">Hey I'm Ninad.</h3>
                        <h4 className="subtitle1">I Like to capture frames of life and of course nature as well.</h4>
                    </div>
                   
                </div>
                <div className='icons1'>
                <h2 className='insta' href='https://www.instagram.com/ninaddv7/'>
                        <BsInstagram/>
                    </h2>
                    <h2 className='twit' href='https://twitter.com/NinadVyas87'>
                        <BsTwitter/>
                    </h2>
                    <h2 className='gith' href='https://github.com/NinadVyas'>
                        <BsGithub/>
                    </h2>
                    <h2 className='linkd' href='https://www.linkedin.com/in/ninad-vyas-b767491a3/'>
                        <BsLinkedin/>
                    </h2>
                    </div>
            </Link>

            <div className="sidebar-content">




            </div>
            
        </div>
    )
}
export default Sidebar;