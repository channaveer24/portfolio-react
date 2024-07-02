import React from 'react'
import './Footer.css'
import footerLogo from  '../../assets/footer_logo.svg'
import user_icon from  '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footerLogo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reiciendis et sunt excepturi. Vel, placeat?</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Ener your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left"> 2024 Channaveer Patil. All rights reserved.</p>
            <div className="fotter-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer