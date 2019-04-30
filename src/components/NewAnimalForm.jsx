import React from 'react';

function NewAnimalForm(){
  let _species = null;
  let _note= null;
  function handleNewAnimalFormSubmission(event) {
    event.preventDefault();
    console.log(_species.value);
    console.log(_note.value);
    _species.value = '';
    _note.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewAnimalFormSubmission}>
        <textarea
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

export default NewAnimalForm;
