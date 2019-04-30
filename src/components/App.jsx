import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import AnimalList from './AnimalList';
import AboutUs from './AboutUs';
import BlogList from './BlogList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import  NewAnimalControl from './NewAnimalControl';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterAnimalList: []
    };
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/animals' component={AnimalList} />
          <Route path='/blogs' component={BlogList} />
          <Route path='/about' component={AboutUs} />
          <Route path='/newanimal' render={()=><NewAnimalControl onNewAnimalCreation={this.handleAddingNewAnimalToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
