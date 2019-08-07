import React from 'react';
import { connect } from 'react-redux';

class MoodInput extends React.Component {

  state = { name: '' }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Create a New Mood: </label>
          <input type='text'placeholder='Name' value={this.state.name} name="name" onChange={this.handleOnChange}/><br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect()(MoodInput);
