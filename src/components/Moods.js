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
     <div class="image-holder">
       <img src="https://em.wattpad.com/b419c5b27906bd43ef378c680627ee29b9144e2a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6857687878547357456a442d66513d3d2d31342e313532623665333063343663643430393932313834313632393638332e676966" alt="Recipe" class="center"/>
     </div>
    </div>
  )

}

export default Moods;
