import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchMoods } from '../actions/fetchMoods';
import Mood from '../components/Mood';
import Moods from '../components/Moods';
import Foods from '../components/Foods';
import Drinks from '../components/Drinks'
import Desserts from '../components/Desserts'
import MoodInput from '../components/MoodInput';
import Home from '../components/Home'


class MoodsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return(
      <div>
        <Route exact path='/moods' render={ (routerProps) => <Moods {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/new' component={MoodInput} />
        <Route exact path='/moods/:id' render={ (routerProps) => <Mood {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/:id/foods' render={ (routerProps) => <Foods {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/:id/drinks' render={ (routerProps) => <Drinks {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/:id/desserts' render={ (routerProps) => <Desserts {...routerProps} moods={this.props.moods} /> } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moods: state.moods
  }
}

export default connect(mapStateToProps, { fetchMoods })(MoodsContainer);
