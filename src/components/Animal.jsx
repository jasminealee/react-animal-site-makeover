import React from 'react';
import PropTypes from 'prop-types';

function Animal(props){
  const animalInformation =
    <div>
      <h3>{props.species}</h3>
      <h3>{props.note}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onAnimalSelection({ species: props.species, note: props.note, formattedWaitTime: props.formattedWaitTime});}}>
        {animalInformation}
      </div>
    );
  } else {
    return (
      <div>
        {animalInformation}
      </div>
    );
  }
}

Animal.propTypes = {
  species: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onAnimalSelection: PropTypes.func
};

export default Animal;
