import React from 'react';
import elephantAndDog from '../assets/images/elephantanddog.jpg';
import { Link } from 'react-router-dom';

function AboutUs(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/animals">Animals</Link> | <Link to="/blogs">Blogs</Link> | <Link to="/about">About</Link>
      <h1>About Us: </h1>
      <img src={elephantAndDog}/>
      <p>Elephants are super cool</p>
      <p>Most are incapable of flight</p>
    </div>
  );
}

export default AboutUs;
