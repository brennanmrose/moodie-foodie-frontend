import React from 'react';
import { Link } from 'react-router-dom';

const Mood = (props) => {

 let mood = props.match ? props.moods[props.match.params.id - 1] : props.mood

  return (
    mood ?
    <div>
      <h1>{mood.name}</h1>
      <h3>Please select from the following:</h3>
      <Link to={`/moods/${mood.id}/foods`}>Foods </Link>
      <br></br>
      <br></br>
      <Link to={`/moods/${mood.id}/drinks`}>Drinks </Link>
      <br></br>
      <br></br>
      <Link to={`/moods/${mood.id}/desserts`}>Desserts </Link>
    </div> :
    null
  )

}

export default Mood;
