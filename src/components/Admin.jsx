import React from 'react';
import PropTypes from 'prop-types';
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';


function Admin(props){
  let optionalSelectedAnimalContent = null;
  if (props.selectedAnimal != null) {
    optionalSelectedAnimalContent =  (<AnimalDetail selectedAnimal={props.animalList[props.selectedAnimal]}/>);
  }
  return (
    <div>
      <h1>Admin</h1>
      <div>
        {optionalSelectedAnimalContent}
        <hr/>
        <AnimalList
          animalList={props.animalList}
          currentRouterPath={props.currentRouterPath}
          onAnimalSelection={props.onAnimalSelection} />
      </div>
    </div>
  );
}

Admin.propTypes = {
  animalList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onAnimalSelection: PropTypes.func.isRequired,
  selectedAnimal: PropTypes.string
};

export default Admin;
