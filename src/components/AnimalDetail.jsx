import React from 'react';
import PropTypes from 'prop-types';

function AnimalDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedAnimal.species}</h1>
      <h1>{props.selectedAnimal.note}</h1>
      <h2>Submitted {props.selectedAnimal.formattedWaitTime}</h2>
      <hr/>
    </div>
  );
}

AnimalDetail.propTypes = {
  selectedAnimal: PropTypes.object
};

export default AnimalDetail;
