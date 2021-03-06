import React from 'react';
import PropTypes from 'prop-types';
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';


function Admin(props){
  const admin = {
    fontFamily: 'sans-serif',
    borderBottom: '5px red solid'
  };
  let optionalSelectedAnimalContent = null;
  if (props.selectedAnimal != null) {
    optionalSelectedAnimalContent =  (<AnimalDetail selectedAnimal={props.animalList[props.selectedAnimal]}/>);
  }
  return (
    <div>
      <div style={admin}>
        <h1>Admin</h1>
      </div>
      <div>
        {optionalSelectedAnimalContent}
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
