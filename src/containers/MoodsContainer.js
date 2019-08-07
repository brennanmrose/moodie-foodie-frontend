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

export default connect()(MoodsContainer);
