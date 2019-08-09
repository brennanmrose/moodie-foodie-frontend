import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Mood from '../components/Mood';
import Moods from '../components/Moods';
import MoodInput from '../components/MoodInput';
import Home from '../components/Home';

class MoodsContainer extends React.Component {

  render() {
    return(
      <div>
        <Route exact path='/moods' render={ (routerProps) => <Moods {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/new' component={MoodInput} />
        <Route exact path='/moods/:id' render={ (routerProps) => <Mood {...routerProps} moods={this.props.moods} /> } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    moods: state.moods
  }
}

export default connect(mapStateToProps)(MoodsContainer);
