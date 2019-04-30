import React from 'react';
import alpacaImage from '../assets/images/alpacaimage.jpg';
import { Link } from 'react-router-dom';

function AboutUs(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/animals">Animals</Link> | <Link to="/blogs">Blogs</Link> | <Link to="/newanimal">New Animal</Link> | <Link to="/about">About</Link>
      <h1>About Us: </h1>
      <img src={alpacaImage}/>
      <p>Alpacas are super cool</p>
      <p>We will one day invent a time machine.</p>
      <p>I am the coolest alpaca.</p>
    </div>
  );
}

export default AboutUs;
