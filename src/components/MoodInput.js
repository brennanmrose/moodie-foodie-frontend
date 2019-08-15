import React from 'react';
import '../MoodInput.css';
import { connect } from 'react-redux';
import { addMood } from '../actions/addMood'

class MoodInput extends React.Component {

  state = {
    name: '',
    image_url: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addMood(this.state)
    this.setState({
      name: '',
      image_url: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} class="form">
          <h1 class="new-mood">Create a New Mood: </h1>
          <br></br>
          <label>Name: </label>
          <input
            type='text'
            placeholder='Name'
            value={this.state.name}
            name="name"
            onChange={this.handleOnChange}
          />
          <br></br>
          <label>Image Url: </label>
          <input
            type='text'
            placeholder='image_url'
            value={this.state.image_url}
            name="image_url"
            onChange={this.handleOnChange}
          />
          <br></br>
          <br></br>
          <input type="submit"/>
        </form>
        <img src="https://i.pinimg.com/originals/ee/0d/13/ee0d13a31e39f58fe87cc331b8fb638a.gif" alt="Refrigerator" class="new-mood-img"/>
      </div>
    )
  }
}

export default connect(null, { addMood })(MoodInput);
