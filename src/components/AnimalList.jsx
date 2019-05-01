import React from 'react';
import Animal from './Animal';
import PropTypes from 'prop-types';



function AnimalList(props) {
  return (
    <div>
      <h1>Animals: </h1>
      <hr/>
      {props.animalList.map((animal, index) =>
        <Animal species={animal.species}
          note={animal.note}
          key={index}/>
      )}
    </div>
  );
}
AnimalList.propTypes = {
  animalList: PropTypes.array
};


export default AnimalList;
