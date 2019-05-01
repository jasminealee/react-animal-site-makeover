import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/animallist">Animal List</Link> | <Link to="/newanimal">Create Animal</Link> | <Link to="/admin">Admin</Link> | <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
