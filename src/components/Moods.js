import React from 'react';
import Mood from './Mood';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import '../Moods.css';

const Moods = (props) => {

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <p id="moods">Select a mood from the dropdown below:</p>
       <Dropdown >
       <Dropdown.Toggle variant="success" id="dropdown-basic">
         Moods
       </Dropdown.Toggle>

       <Dropdown.Menu >
         {props.moods.map(mood => {
           return <Dropdown.Item ><Link to={`/moods/${mood.id}`}>{mood.name}</Link></Dropdown.Item>
         })}
       </Dropdown.Menu>
     </Dropdown>
    </div>
  )

}

export default Moods;
