import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs(){
  return (
    <div>
      <Link to="/">Home</Link> 
      <h1>About Us: </h1>
      <p>Elephants are super cool</p>
      <p>Most are incapable of flight</p>
    </div>
  );
}

export default AboutUs;
