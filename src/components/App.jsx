import React from 'react';
import Header from './Header';
import AnimalList from './AnimalList';
import AboutUs from './AboutUs';
import Admin from './Admin';
import Moment from 'moment';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import  NewAnimalControl from './NewAnimalControl';
import { v4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterAnimalList: {},
      selectedAnimal: null
    };
    this.handleAddingNewAnimalToList = this.handleAddingNewAnimalToList.bind(this);
    this.handleChangingSelectedAnimal = this.handleChangingSelectedAnimal.bind(this);
  }
  handleChangingSelectedAnimal(animalId){
    this.setState({selectedAnimal: animalId});
  }
  handleAddingNewAnimalToList(newAnimal){
    var newAnimalId = v4();
    var newMasterAnimalList = Object.assign({}, this.state.masterAnimalList, {
      [newAnimalId]: newAnimal
    });
    newMasterAnimalList[newAnimalId].formattedWaitTime = newMasterAnimalList[newAnimalId].timeOpen.fromNow(true);
    this.setState({masterAnimalList: newMasterAnimalList});
  }
  updateAnimalElapsedWaitTime() {
    var newMasterAnimalList = Object.assign({}, this.state.masterAnimalList);
    Object.keys(newMasterAnimalList).forEach(animalId => {
      newMasterAnimalList[animalId].formattedWaitTime = newMasterAnimalList[animalId].timeOpen.fromNow(true);
    });
    this.setState({masterAnimalList: newMasterAnimalList});
  }


  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateAnimalElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }



  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=>(<AnimalList animalList={this.state.masterAnimalList} /> )} />

          <Route path='/about' component={AboutUs} />
          <Route path='/newanimal' render={()=>(<NewAnimalControl onNewAnimalCreation={this.handleAddingNewAnimalToList}/>)}/>
          <Route path='/admin' render={props=>(<Admin animalList={this.state.masterAnimalList} currentRouterPath={props.location.pathname}
            onAnimalSelection={this.handleChangingSelectedAnimal}
            selectedAnimal={this.state.selectedAnimal}/>)} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
