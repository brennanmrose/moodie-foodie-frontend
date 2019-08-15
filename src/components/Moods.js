import React from 'react';
import Mood from './Mood';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap'

const Moods = (props) => {

  return (
    <div>
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
