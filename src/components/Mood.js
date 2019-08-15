import React from 'react';
import '../Mood.css';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

const Mood = (props) => {

 let mood = props.match ? props.moods[props.match.params.id - 1] : props.mood

 let divStyle = {
   color: 'white',
   backgroundImage: `url(${mood && mood.image_url})`
 };

  return (
    mood ?
    <div class="container-full-bg">
      <div class="jumbotron">
        <div class="container">
          <Jumbotron  style={ divStyle }>
            <h1 id="title"><span>{mood.name}</span></h1>
            <h3 id="text"><span>Please select from the following:</span></h3>
            <br></br>
            <h4 id="text"><span>1. <Link to={`/moods/${mood.id}/foods`}>Foods </Link></span></h4>
            <br></br>
            <br></br>
            <h4 id="text"><span>2. <Link to={`/moods/${mood.id}/drinks`}>Drinks </Link></span></h4>
            <br></br>
            <br></br>
            <h4 id="text"><span>3. <Link to={`/moods/${mood.id}/desserts`}>Desserts </Link></span></h4>
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
