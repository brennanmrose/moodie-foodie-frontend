import React from 'react';
import '../Mood.css';
import DeleteMood from './DeleteMood';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';

// let mood = props.match ? props.moods[props.match.params.id - 1] : props.mood
// debugger
const Mood = (props) => {

  let toFind = parseInt(props.match.params.id);

  let mood = props.moods.filter(mood => mood.id == props.match.params.id)[0]

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
            <h4 id="text"><span>1. <Link to={`/moods/${mood.id}/foods`} class="victuals">Foods </Link></span></h4>
            <br></br>
            <br></br>
            <h4 id="text"><span>2. <Link to={`/moods/${mood.id}/drinks`} class="victuals">Drinks </Link></span></h4>
            <br></br>
            <br></br>
            <h4 id="text"><span>3. <Link to={`/moods/${mood.id}/desserts`} class="victuals">Desserts </Link></span></h4>
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
            <DeleteMood mood={mood}/>
          </Jumbotron>
        </div>
      </div>
    </div>
     : null
  )

}

export default Mood;
