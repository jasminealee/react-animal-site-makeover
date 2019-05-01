import React from 'react';
import Header from './Header';
import Welcome from './welcome';
import AnimalList from './AnimalList';
import AboutUs from './AboutUs';
import Admin from './Admin';
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
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateAnimalElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateAnimalElapsedWaitTime() {
    let newMasterAnimalList = this.state.masterAnimalList.slice();
    newMasterAnimalList.forEach((animal) =>
      animal.formattedWaitTime = (animal.timeOpen).fromNow(true)
    );
    this.setState({masterAnimalList: newMasterAnimalList});
  }


  handleAddingNewAnimalToList(newAnimal){
    var newMasterAnimalList = this.state.masterAnimalList.slice();
    newAnimal.formattedWaitTime = (newAnimal.timeOpen).fromNow(true);
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
          <Route path='/admin' render={(props)=><Admin animalList={this.state.masterAnimalList} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
