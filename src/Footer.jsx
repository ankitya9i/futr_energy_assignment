import React from 'react'
import './footer.css'
import facebook from './icons/facebook.png'
import twitter from './icons/Twitter.png'
import linkedin from './icons/linkedin.png'

import insta from './icons/instagram.png'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-contact'>
            <div className='icons-link'>

                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <h4>Contact Us</h4>
            <p>123 second Street fifth Avenue Manhattan, New York +9876543210</p>
            <p></p>
            <p></p>
        </div>

        <div className='footer-contact'>
            <br />
            <h4>ADDITIONAL LINKS</h4>
            <p>About Us</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>News</p>
            <p>Contact Us</p>
        </div>

        <div className='footer-contact'>
           <br />
            <h4>Contact</h4>
            <div className='input-1'>
            <input type="text" className='finput' placeholder='Name' />
            <input type="text" className='finput' placeholder='Email'/>
            </div>
            <input type="text" placeholder='Comment'/>
            <button className='fbtn'>Submit</button>
        </div>
        <div className='footer-links'>


        </div>
        <div className='contact'>

        </div>
    </div>
  )
}

export default Footer