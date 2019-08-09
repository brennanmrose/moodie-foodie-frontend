import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchMoods } from './actions/fetchMoods';

import MoodsContainer from './containers/MoodsContainer';
import VictualsContainer from './containers/VictualsContainer';
import Home from './components/Home';
import NavBar from './components/NavBar'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/home' component={ Home } />
        <MoodsContainer />
        <VictualsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moods: state.moods
  }
}

export default connect(mapStateToProps, { fetchMoods })(App);
