import React from 'react';
import Animal from './Animal';
import PropTypes from 'prop-types';


function AnimalList(props) {
  return (
    <div>
      <hr/>
      <h1>Animal</h1>
      <hr/>
      {Object.keys(props.animalList).map(function(animalId) {
        var animal = props.animalList[animalId];
        return (<Animal species={animal.species}
          note={animal.note}
          formattedWaitTime={animal.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={animalId}
          onAnimalSelection={props.onAnimalSelection}
          animalId={animalId}
        />
        );
      })}
    </div>
  );
}

AnimalList.propTypes = {
  animalList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onAnimalSelection: PropTypes.func
};

export default AnimalList;
