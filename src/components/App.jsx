import React from 'react';
import Header from './Header';
import Animal from './Animal';
import AnimalList from './AnimalList';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={AnimalList} />
        <Route path='/about' component={AboutUs} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
