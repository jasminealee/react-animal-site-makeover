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
      <hr/>
    </div>
  );
}



Animal.propTypes = {
  species: PropTypes.string,
  note: PropTypes.string,
};

export default Animal;
