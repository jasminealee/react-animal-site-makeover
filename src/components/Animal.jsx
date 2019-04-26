import React from "react";
import PropTypes from "prop-types";


function Land(props){
  return (
      <div>
        <h3>{props.species}</h3>
        <p><em>{props.note}</em></p>
        <hr/>
      </div>
   );
 });
}

Animal.propTypes = {
  species: PropTypes.string,
  note: PropTypes.string,
};