import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';



function NewAnimalForm(props){
  let _species = null;
  let _note= null;

  function handleNewAnimalFormSubmission(event) {
    event.preventDefault();
    props.onNewAnimalCreation({species: _species.value, note: _note.value, id: v4(), timeOpen: new Moment()});
    _species.value = '';
    _note.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewAnimalFormSubmission}>
        <input
          type='text'
          id='species'
          placeholder='Species'
          ref={(input) => {_species = input;}}/>
        <textarea
          id='note'
          placeholder='Note'
          ref={(textarea) => {_note = textarea;}}/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

NewAnimalForm.propTypes = {
  onNewAnimalCreation: PropTypes.func
};


export default NewAnimalForm;
