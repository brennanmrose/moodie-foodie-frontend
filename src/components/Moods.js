import React from 'react';
import Mood from './Mood';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton} from 'react-bootstrap'

const Moods = (props) => {

  return (
    <div>
    {props.moods.map(mood => <li key={mood.id}><Link to={`/moods/${mood.id}`}>{mood.name}</Link></li>)}
    </div>
  )

}

export default Moods;






// <Dropdown>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Dropdown Button
//   </Dropdown.Toggle>
//
//   <Dropdown.Menu>
//     {props.moods.map(mood => {
//       <Dropdown.Item tag={ Link } tag={ Link } to={`/moods/${mood.id}`}>{mood.name}</Dropdown.Item>
//     })}
//   </Dropdown.Menu>
// </Dropdown>
