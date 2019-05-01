import React from 'react';
import alpacaImage from '../assets/images/alpacaimage.jpg';

function AboutUs(){
  const aboutus = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '20px',
    border: 'groove'
  };
  return (
    <div>
      <h1>About Us: </h1>
      <div style={aboutus}>
        <img src={alpacaImage}/>
        <hr/>
        <p>Alpacas are super cool.</p>
        <p>We will one day invent a time machine.</p>
        <p>I am the coolest alpaca.</p>
      </div>
    </div>

  );
}

export default AboutUs;
