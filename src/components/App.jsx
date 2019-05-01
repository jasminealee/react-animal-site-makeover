import React from 'react';
import Header from './Header';
import Welcome from './welcome';
import AnimalList from './AnimalList';
import AboutUs from './AboutUs';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import  NewAnimalControl from './NewAnimalControl';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterAnimalList: []
    };
    this.handleAddingNewAnimalToList = this.handleAddingNewAnimalToList.bind(this);
  }
  handleAddingNewAnimalToList(newAnimal){
    var newMasterAnimalList = this.state.masterAnimalList.slice();
    newMasterAnimalList.push(newAnimal);
    this.setState({masterAnimalList: newMasterAnimalList});
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/animallist' render={()=><AnimalList animalList={this.state.masterAnimalList} />} />
          <Route path='/about' component={AboutUs} />
          <Route path='/newanimal' render={()=><NewAnimalControl onNewAnimalCreation={this.handleAddingNewAnimalToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
