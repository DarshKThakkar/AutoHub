import React from 'react';
import "./Carousel.css";

function Carousel({images}) {
  return ( <>

  <div className="slider">

    <div className="slide-track">
      <div className="slide">
        <img src="/Brands/suzuki.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/tata.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/kia.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/toyota.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/mg.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/suzuki.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/tata.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/kia.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/toyota.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/mg.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/suzuki.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/tata.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/kia.png" height="250" width="300" alt="" className='img'/>
      </div>
      <div className="slide">
        <img src="/Brands/toyota.png" height="250" width="300" alt="" className='img'/>
      </div>
    </div>
  </div>

  </> );
}

export default Carousel;