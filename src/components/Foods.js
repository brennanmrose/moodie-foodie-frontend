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
            <h4>{food.name}</h4>
            {food.description}
            <br></br>
            <br></br>
            <a href={food.recipe_url} target="_blank">Link to Recipe</a>
            <br></br>
            <img src={food.image_url} alt="Recipe" height="600" width="600"/>
          </li>
        ))}
      </ul>
    </div>
    : null
  )

}

export default Foods;
