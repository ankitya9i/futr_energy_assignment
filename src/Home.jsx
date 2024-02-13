import React from 'react'
import backgroundImage from './images/travel-banner.jpeg'
import planeimg from './images/plane-img.png'
import './Home.css'
import Form from './Form_home'
function Home() {
  return (

    <div className="home">

    <img src={backgroundImage} alt="Background Image" className="background-image" />
    <div className="welcome-text">
      <h1 className='intr-h1'>TRAVEL </h1>
      <h1>WITH US</h1>
      <div className='form'>
        
        <Form/>
        <div className=''>
          <label htmlFor=""></label>
        </div>
      </div>
      <button type="button" className='btn-home'>Read more</button>
    </div>
    
    
  </div>
  )
}

export default Home