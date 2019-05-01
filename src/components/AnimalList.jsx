import React from 'react';
import Animal from './Animal';
import PropTypes from 'prop-types';



function AnimalList(props) {
  return (
    <div>
      <hr/>
      <h1>Animal</h1>
      <hr/>
      {props.animalList.map((animal) =>
        <Animal species={animal.species}
          note={animal.note}
          formattedWaitTime={animal.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={animal.id}
          onAnimalSelection={props.onAnimalSelection}/>
      )}
    </div>
  );
}
AnimalList.propTypes = {
  animalList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onAnimalSelection: PropTypes.func
};


export default AnimalList;
