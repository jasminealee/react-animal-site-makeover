import React from 'react';
import Animal from './Animal';
import { Link } from 'react-router-dom';



function AnimalList() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/animals">Animals</Link> | <Link to="/blogs">Blogs</Link> | <Link to="/newanimal">New Animal</Link> | <Link to="/about">About</Link>
      <h1>Animals: </h1>
      <hr/>
      {masterAnimalList.map((animal, index) =>
        <Animal
          species={animal.species}
          note={animal.note}
          key={index}/>
      )}
    </div>
  );
}


export default AnimalList;
