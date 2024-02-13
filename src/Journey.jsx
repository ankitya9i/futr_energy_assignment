import React from 'react'
import planeimg from './images/plane-img.png'
import './journey.css'
function Journey() {
  return (
    <div>
      <div className='journey'>
      <h1>OUR JOURNEY OF TRAVEL</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ducimus voluptatibus at, illo voluptas expedita nobis, minima itaque nemo repellat necessitatibus asperiores fuga numquam velit hic quae non cum!</p>
      <div className='journey-back-img'>
        <div className='journey-back-img-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque recusandae dolorum magni perferendis quo architecto debitis praesentium adipisci maiores alias corporis asperiores molestias molestiae, quasi totam suscipit laboriosam harum quibusdam! Tempora nulla deleniti veniam veritatis odio aperiam in quis blanditiis facilis. Corporis enim optio omnis velit nostrum sit similique rem consectetur pariatur perspiciatis, voluptas quidem temporibus hic nisi expedita adipisci iusto culpa ipsam vitae aut dolores voluptatem reprehenderit aliquid? Voluptatem eaque, quo laboriosam doloribus ut incidunt laborum eligendi rem. Alias autem vitae rem distinctio omnis similique odit cum culpa quos laborum. Quibusdam alias excepturi facere consectetur tempora neque repellendus!
        </div>
         <img src={planeimg} alt="" className='right-image' />
      </div>
      <button className='journey-btn'>Read More</button>
      
    </div>
    </div>
  )
}

export default Journey