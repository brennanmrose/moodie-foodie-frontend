import React from 'react';
import '../Desserts.css';
import DessertInput from './DessertInput';

const Desserts = (props) => {

  let mood = props.moods[props.match.params.id - 1]

  return (
    mood ?
    <div>
      <h1>{mood.name} Desserts</h1>
      <ul>
        {mood.desserts.map((dessert, index) => (
          <li>
            <h4>{dessert.name}</h4>
            <p>{dessert.description}</p>
            <a href={dessert.recipe_url} target="_blank">Link to Recipe</a>
            <br></br>
            <div class="holder">
              <img src={dessert.image_url} alt="Recipe" />
            </div>
          </li>
        ))}
      </ul>
      <DessertInput moodProps={mood}/>
    </div>
    : null
  )

}

export default Desserts;
