import React from 'react';
import Header from './Header';
import AnimalList from './AnimalList';
import AboutUs from './AboutUs';
import Error404 from './Error404';
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
