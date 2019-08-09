import React from 'react';
import { connect } from 'react-redux';
import MoodsContainer from './containers/MoodsContainer';
import Home from './components/Home';
import NavBar from './components/NavBar'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <MoodsContainer />
      </div>
    );
  }
}

export default connect()(App);
