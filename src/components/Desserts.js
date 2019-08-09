import React from 'react';

const Desserts = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    mood ?
    <div>
      <h1>Desserts</h1>
      <ul>
        {mood.desserts.map((dessert, index) => (
          <li>
            {dessert.name} - {dessert.description}
          </li>
        ))}
      </ul>
    </div>
    : <p>There were no moods found with this id</p>
  )

}

export default Desserts;
