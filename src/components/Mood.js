import React from 'react';

const Mood = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    mood ?
    <div>
      <h1>{mood.name}</h1>
      <h3>Please select from the following:</h3>
      <p>1. Foods</p>
      <p>2. Drinks</p>
      <p>3. Desserts</p>
    </div> :
    <p>There were no moods found with this id</p>
  )

}

export default Mood;
