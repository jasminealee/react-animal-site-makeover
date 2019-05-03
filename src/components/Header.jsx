import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/newanimal">Create Animal</Link> | <Link to="/about">About</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;
