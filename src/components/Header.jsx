import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/animallist">Animal List</Link> | <Link to="/newanimal">Create Animal</Link> | <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
