import React from 'react';
import Mood from './Mood';
import { Link } from 'react-router-dom';

const Moods = (props) => {

  return (
    <div>
      {props.moods.map(mood => <li key={mood.id}><Link to={`/moods/${mood.id}`}>{mood.name}</Link></li>)}
    </div>
  )

}

export default Moods;
