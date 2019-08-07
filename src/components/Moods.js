import React from 'react';

const Moods = (props) => {

  return (
    <div>
      {props.moods.map(mood => <li key={mood.id}>{mood.name}</li>)}
    </div>
  )

}

export default Moods;
