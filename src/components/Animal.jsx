import React from 'react';
import PropTypes from 'prop-types';

function Animal(props){
  const animal = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '5px'
  };
  return (
    <div style={animal}>
      <h3>{props.species}</h3>
      <h3>{props.note}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>
  );
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {alert('hey, you just clicked the block belonging to ' + props.species);}}>
        {animal}
      </div>
    );
  } else {
    return (
      <div>
        {animal}
      </div>
    );
  }
}


Animal.propTypes = {
  species: PropTypes.string,
  note: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Animal;
