import React from 'react';
import Animal from './Animal';
import penguinImage from '../assets/images/penguinimage.jpg';
import PropTypes from 'prop-types';


function AnimalList(props) {
  const animalList = {
    fontFamily: 'sans-serif',
    borderBottom: '5px solid red'
  };
  return (
    <div>
      <br/>
      <div style={animalList}>
        <img src={penguinImage}/>
      </div>
      <div style={animalList}>
        <h1>Animals:</h1>
      </div>
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
