import React from 'react';
import { connect } from 'react-redux';

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
        <MoodInput />
        <Moods />
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
