import React from 'react';
import Animal from './Animal';
import PropTypes from 'prop-types';


function AnimalList(props) {
  const animallist = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '20px',
    paddingBottom: '20px',
    border: 'groove'

  };
  return (
    <div>
      <h1>Animals</h1>
      <hr/>
      <div>
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
    </div>
  );
}

AnimalList.propTypes = {
  animalList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onAnimalSelection: PropTypes.func
};

export default AnimalList;
