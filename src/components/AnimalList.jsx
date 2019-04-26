import React from 'react';
import Animal from './Animal';
import { Link } from 'react-router-dom';


const masterAnimalList = [
  {
    species: 'Squirrel',
    note: 'They are omnivores'
  }
];

function AnimalList() {
  return (
    <div>
      <Link to="/about">About</Link>
      <h1>Farmer's Market Schedule: </h1>
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