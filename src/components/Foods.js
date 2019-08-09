import React from 'react';

const Foods = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    mood ?
    <div>
      <h1>Foods</h1>
      <ul>
        {mood.foods.map((food, index) => (
          <li>
            {food.name} - {food.description}
          </li>
        ))}
      </ul>
    </div>
    : <p>There were no moods found with this id</p>
  )

}

export default Foods;
