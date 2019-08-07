import React from 'react';
import { connect } from 'react-redux';
import { fetchMoods } from './actions/fetchMoods';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect()(App);
