import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/animals">Animals</Link> | <Link to="/blogs">Blogs</Link> | <Link to="/newanimal">New Animal</Link> | <Link to="/about">About</Link> 

      <h1>Welcome!</h1>
    </div>
  );
}

export default AboutUs;
