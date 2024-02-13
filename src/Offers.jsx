import React from 'react'
import './offers.css'
import Travelicon1 from './icons/travel-icon.png'
import Travelicon2 from './icons/travel-icon2.png'
import Travelicon3 from './icons/travel-icon3.png'
import Travelicon4 from './icons/travel-icon4.png'

import london from './images/London.jpg'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
function Offers() {
  return (
    <div className='offers'>
        <h1>SELECT OFFERS FOR TRAVELLING</h1>
        <p>it is a long established fact thata reader will be distracted by the readable content of a page when looking at its layout</p>
        <div className='inneroffers'>
            <div className='inneroffers-1'>
                <img src={Travelicon1} alt="" />
                <h4>Different countries</h4>
                <p>There are many Varients od the passages of  lorem ipsum</p>
                <button className='offer-btn'>Read more</button>
            </div>
            <div className='inneroffers-1'>
                <img src={Travelicon2} alt="" />
                <h4>Different countries</h4>
                <p>There are many Varients od the passages of  lorem ipsum</p>
                <button className='offer-btn'>Read more</button>
            </div>
            <div className='inneroffers-1'>
                <img src={Travelicon3} alt="" />
                <h4>Different countries</h4>
                <p>There are many Varients od the passages of  lorem ipsum</p>
                <button className='offer-btn'>Read more</button>
            </div>
            <div className='inneroffers-1'>
                <img src={Travelicon4} alt="" />
                <h4>Different countries</h4>
                <p>There are many Varients od the passages of  lorem ipsum</p>
                <button className='offer-btn'>Read more</button>
            </div>
        </div>


        <br />
        <br />
        <div className='london-things'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, similique! Placeat voluptates ducimus, laudantium iure facilis blanditiis cumque sequi ea eveniet quibusdam ipsa ex nihil.</p>
        <img src={london} alt="" className='london-img'/>
        </div>

        <br />
        <br />
        
        <div className='best-places'>
           
            <div className='place'>
                <img src={img1} alt="" />
                <h4>Hollywood Tour</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae corporis sapiente adipisci magnam, qui minima.</p>
               
            </div>
            <div className='place'>
                <img src={img2} alt="" />
                <h4>New York</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam enim consectetur deserunt adipisci eum nam!</p>

            </div>
            <div className='place'>
                <img src={img3} alt="" />
                <h4>London</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente temporibus necessitatibus molestias sunt ipsam cupiditate.</p>
                
            </div>
        </div>

        <br />
        <div className='itely-travel'>
            <h1 className='itly-header'>ITLY TRAVEL GUIDE</h1>
            <p className='itly-txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugiat ea harum, assumenda sequi dolorum quasi iste voluptates vero odio porro magnam molestias illum ullam cum animi ipsam aliquam quaerat?</p>
            <div className='itly-btns'>
                <button className='offer-btn itly-btn'>Book Now</button>
                <button className='offer-btn itly-btn'>Get more</button>
            </div>
        </div>


    </div>
  )
}

export default Offers