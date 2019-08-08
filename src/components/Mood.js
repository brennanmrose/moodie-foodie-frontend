import React from 'react';

const Mood = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    <div>
      {mood ? mood.name : null}
    </div>
  )

}

export default Mood
