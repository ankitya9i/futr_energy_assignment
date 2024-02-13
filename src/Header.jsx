import React from 'react'

import I1 from './images/1.png';
import I2 from './images/2.png';
import I3 from './images/3.png';
import './header.css'

function Header() {
  return (
        
    <div className='header' class="container-fluid bg-primary  text-white opacity-75">
        <div class="container">
            <div class="row align-items-center justify-content-between ">
                <div class="col-md-4">
                    <a href="#" class="navbar-brand text-white">
                      <h1>Global Travel</h1></a>
                </div>
                <div class="col-md-8 d-flex flex-column justify-content-center">
                    
                        <div class="container text-center text-white">
                            <ul class="list-inline bg-white text-black p-3">
                                <li class="list-inline-item">

                                  <img src={I1} className='img'/>
                                  <span class='ml-2' >145 Street Road,</span>
                                </li>
                                <li class="list-inline-item">
                                  <img src={I1} class='img-fluid mr-2'/>
                                  <span>New York</span>
                                </li>
                                <li class="list-inline-item">
                                  <img src={I3}/>
                                  <span> +715678954378 </span>
                                </li>
                                
                               
                              </ul>
                            
                        </div>
                   
                    <nav class="nav">
                        <a class="nav-link text-white mx-2" href="#">Home</a>
                        <a class="nav-link text-white mx-2" href="#">About</a>
                        <a class="nav-link text-white mx-2" href="#">Travel</a>
                        <a class="nav-link text-white mx-2" href="#">Blog</a>
                        <a class="nav-link text-white mx-2" href="#">Contact Us</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>

  

  )
}

export default Header



