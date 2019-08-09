import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchMoods } from '../actions/fetchMoods';
import Mood from '../components/Mood';
import Moods from '../components/Moods';
import Foods from '../components/Foods';
import MoodInput from '../components/MoodInput';


class MoodsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return(
      <div>
        <Route path='/moods/new' component={MoodInput} />
        <Route path='/moods/:id' render={ (routerProps) => <Mood {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/:id/foods' render={ (routerProps) => <Foods {...routerProps} moods={this.props.moods} /> } />
        <Route exact path='/moods' render={ (routerProps) => <Moods {...routerProps} moods={this.props.moods} /> } />
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
