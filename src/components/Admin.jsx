import React from 'react';
import PropTypes from 'prop-types';
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';


function Admin(props){
  return (
    <div>
      <h1>Admin</h1>
      <AnimalDetail />
      <AnimalList
       animalList={props.animalList}
       currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  animalList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
