import React from 'react';
import PropTypes from 'prop-types';

function Animal(props){
  const animal = (
    <div>
      <h3>{props.species}</h3>
      <h3>{props.note}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>
  );
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onAnimalSelection(props.animalId);}}>
        {animal}
      </div>
    );
  } else {
    return <div>{animal}</div>;
  }
}

Animal.propTypes = {
  species: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onAnimalSelection: PropTypes.func,
  animalId: PropTypes.string.isRequired
};

export default Animal;
