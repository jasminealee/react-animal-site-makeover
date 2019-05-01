import React from 'react';
import alpacaImage from '../assets/images/alpacaimage.jpg';

function AboutUs(){
  return (
    <div>
      <h1>About Us: </h1>
      <img src={alpacaImage}/>
      <p>Alpacas are super cool</p>
      <p>We will one day invent a time machine.</p>
      <p>I am the coolest alpaca.</p>
    </div>
  );
}

export default AboutUs;
