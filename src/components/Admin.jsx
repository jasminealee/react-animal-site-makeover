import React from 'react';
import PropTypes from 'prop-types';
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';


function Admin(props){
  let optionalSelectedAnimalContent = null;
  if (props.selectedAnimal != null){
    optionalSelectedAnimalContent =  <AnimalDetail selectedAnimal={props.selectedAnimal}/>;
  }
  return (
    <div>
      <h1>Admin</h1>
      <AnimalList
        animalList={props.animalList}
        currentRouterPath={props.currentRouterPath}
        onAnimalSelection={props.onAnimalSelection} />
    </div>
  );
}

Admin.propTypes = {
  animalList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onAnimalSelection: PropTypes.func.isRequired,
  selectedAnimal: PropTypes.object
};

export default Admin;
