import React from 'react';

class NewAnimalControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exampleBooleanStateData: false,
      exampleStringStateData: 'Hey',
      exampleArrayStateData: [],
      exampleIntegerStateData: 1
    };
  }

  render(){
    return (
      <div>
        <p>This is the NewAnimalControl component!</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewAnimalControl;
