import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewAnimalForm  from './NewAnimalForm';
import PropTypes from 'prop-types';

class NewAnimalControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewAnimalForm onNewAnimalCreation={this.props.onNewAnimalCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewAnimalControl.propTypes = {
  onNewAnimalCreation: PropTypes.func
};

export default NewAnimalControl;
