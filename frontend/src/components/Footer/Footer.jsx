import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'
import { Navigate } from 'react-router-dom'

const Footer = () => {
  return (
    <div  className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets.logo} alt="" />
                <p>Welcome to Foodie, where passion meets palate. Explore culinary delights, from savory to sweet, curated with love. Indulge in flavors that tantalize your taste buds. Bon appétit!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                   <a href="https://www.linkedin.com/in/aishwarya-mourya/"><img  src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 6767676767</li>
                    <li>contactfoodie@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © foodie.com -All Right Reserved</p>

    </div>
  )
}

export default Footer