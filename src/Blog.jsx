import React from 'react'
import './blog.css'
import blogimg1 from './images/blog-image0.jpg'
function Blog() {
  return (
    <div className='blog'>
        <h1 className='blog-header'>
            OUR BLOG
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, optio!</p>
        <div className='blog-main'>
            
            <div className='blog-content'>
            <span className='blog-Date'>16 July 2019</span>
                <img src={blogimg1} alt="" />
                <div className='blog-auther'>
                    <span className='span-col-blue'>posted BY:Nisha Sharma</span>
                    <p>
                        <span className='span-col-blue'>05</span>
                         like
                         <span className='span-col-blue'>05</span>
                         comment
                    </p>
                </div>
                <strong style={{color:'gray'}}>More places To Explore</strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nisi quam incidunt explicabo accusamus, ea vero sapiente, quos veniam mollitia tempora molestias asperiores numquam ratione maiores commodi dolores eius fugiat.</p>
           
            </div>
            <div className='blog-content'>
            <span className='blog-Date'>21 August 2019</span>
                <img src={blogimg1} alt="" />
                <div className='blog-auther'>
                    <span className='span-col-blue'>posted BY: Nidhi Sharma</span>
                    <p>
                        <span className='span-col-blue'>05</span>
                         like
                         <span className='span-col-blue'>06</span>
                         comment
                    </p>
                </div>
                <strong style={{color:'gray'}}>More places To Explore</strong>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed nisi quam incidunt explicabo accusamus, ea vero sapiente, quos veniam mollitia tempora molestias asperiores numquam ratione maiores commodi dolores eius fugiat.</p>
           
            </div>
        </div>
        <br />
        <br />
    </div>
  )
}

export default Blog