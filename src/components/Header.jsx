import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  const header = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '20px',
    border: '5px groove lightgrey'
  };
  return (
    <div style={header}>
      <Link to="/">Home</Link> | <Link to="/newanimal">Create Animal</Link> | <Link to="/about">About</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;
