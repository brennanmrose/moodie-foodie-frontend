import React from 'react';
import '../Drinks.css';
import DrinkInput from './DrinkInput';

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
            <p>{drink.description}</p>
            { drink.drink_url
              ? <a href={drink.drink_url} target="_blank">Learn More...</a>
              : null
            }
            <br></br>
            <div class="holder">
              <img src={drink.image_url} alt="Recipe" />
            </div>
          </li>
        ))}
      </ul>
      <DrinkInput moodProps={mood}/>
    </div>
    : null
  )

}

export default Drinks;
