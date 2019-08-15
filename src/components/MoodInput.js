import React from 'react';
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
        <form onSubmit={this.handleOnSubmit}>
          <label>Create a New Mood: </label>
          <br></br>
          <input
            type='text'
            placeholder='Name'
            value={this.state.name}
            name="name"
            onChange={this.handleOnChange}
          />
          <br></br>
          <input
            type='text'
            placeholder='image_url'
            value={this.state.image_url}
            name="image_url"
            onChange={this.handleOnChange}
          />
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addMood })(MoodInput);
