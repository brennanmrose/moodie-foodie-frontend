import React from 'react';

const Drinks = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    mood ?
    <div>
      <h1>{mood.name} Drinks</h1>
      <ul>
        {mood.drinks.map((drink, index) => (
          <li>
            <h4>{drink.name}</h4>
            {drink.description}
            <br></br>
            <br></br>
            { drink.drink_url
              ? <a href={drink.drink_url} target="_blank">Learn More...</a>
              : null
            }
            <br></br>
            <img src={drink.image_url} alt="Recipe" />
          </li>
        ))}
      </ul>
    </div>
    : null
  )

}

export default Drinks;
