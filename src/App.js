import React from 'react';
import { connect } from 'react-redux';
import MoodsContainer from './containers/MoodsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <MoodsContainer />
      </div>
    );
  }
}

export default connect()(App);
