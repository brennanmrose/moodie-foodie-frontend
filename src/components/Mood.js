import React from 'react';
import '../Mood.css';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

const Mood = (props) => {

 let mood = props.match ? props.moods[props.match.params.id - 1] : props.mood

 let divStyle = {
   color: 'blue',
   backgroundImage: `url(${mood && mood.image_url})`
 };

  return (
    mood ?
    <div class="container-full-bg">
      <div class="jumbotron">
        <div class="container">
          <Jumbotron  fluid style={ divStyle }>
            <h1>{mood.name}</h1>
            <h3>Please select from the following:</h3>
            <Link to={`/moods/${mood.id}/foods`}>Foods </Link>
            <br></br>
            <br></br>
            <Link to={`/moods/${mood.id}/drinks`}>Drinks </Link>
            <br></br>
            <br></br>
            <Link to={`/moods/${mood.id}/desserts`}>Desserts </Link>
          </Jumbotron>
        </div>
      </div>
    </div>
     : null
  )

}

export default Mood;
