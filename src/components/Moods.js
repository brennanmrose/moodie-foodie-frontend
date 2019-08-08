import React from 'react';
import Mood from './Mood';

const Moods = (props) => {

  return (
    <div>
      {props.moods.map(mood => <li key={mood.id}><Mood mood={mood}/></li>)}
    </div>
  )

}

export default Moods;
