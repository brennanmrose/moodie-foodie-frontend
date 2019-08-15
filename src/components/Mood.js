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
          <Jumbotron  style={ divStyle }>
            <h1>{mood.name}</h1>
            <h3>Please select from the following:</h3>
            <br></br>
            <h4>1. <Link to={`/moods/${mood.id}/foods`}>Foods </Link></h4>
            <br></br>
            <br></br>
            <h4>2. <Link to={`/moods/${mood.id}/drinks`}>Drinks </Link></h4>
            <br></br>
            <br></br>
            <h4>3. <Link to={`/moods/${mood.id}/desserts`}>Desserts </Link></h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Jumbotron>
        </div>
      </div>
    </div>
     : null
  )

}

export default Mood;
