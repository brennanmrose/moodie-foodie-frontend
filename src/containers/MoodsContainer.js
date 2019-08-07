import React from 'react';
import { connect } from 'react-redux';

import Moods from '../components/Moods';
import MoodInput from '../components/MoodInput';


class MoodsContainer extends React.Component {

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

export default connect(mapStateToProps)(MoodsContainer);
