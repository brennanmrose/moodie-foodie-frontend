import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import MoodsContainer from './containers/MoodsContainer';
import Home from './components/Home';
import NavBar from './components/NavBar'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/home' component={ Home } />
        <MoodsContainer />
      </div>
    );
  }
}

export default connect()(App);
