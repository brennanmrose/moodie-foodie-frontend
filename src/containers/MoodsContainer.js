import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchMoods } from '../actions/fetchMoods';
import Moods from '../components/Moods';
import MoodInput from '../components/MoodInput';


class MoodsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchMoods();
  }

  render() {
    return(
      <div>
        <Route path='/moods/new' component={MoodInput} />
        <Route exact path='/moods' render={ () => <Moods moods={this.props.moods} /> } />
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
