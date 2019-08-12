import React from 'react';
import '../Foods.css';
import FoodInput from './FoodInput';

const Foods = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    mood ?
    <div>
      <h1>{mood.name} Foods</h1>
      <ul>
        {mood.foods.map((food, index) => (
          <li>
            <h4>{food.name}</h4>
            <p>{food.description}</p>
            <a href={food.recipe_url} target="_blank">Link to Recipe</a>
            <br></br>
            <div class="holder">
              <img src={food.image_url} alt="Recipe" />
            </div>
          </li>
        ))}
      </ul>
      <FoodInput moodProps={mood}/>
    </div>
    : null
  )

}

export default Foods;
