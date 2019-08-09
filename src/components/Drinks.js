import React from 'react';

const Drinks = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    mood ?
    <div>
      <h1>Drinks</h1>
      <ul>
        {mood.drinks.map((drink, index) => (
          <li>
            {drink.name} - {drink.description}
          </li>
        ))}
      </ul>
    </div>
    : <p>There were no moods found with this id</p>
  )

}

export default Drinks;
