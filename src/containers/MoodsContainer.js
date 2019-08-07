import React from 'react';
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

export default MoodsContainer
