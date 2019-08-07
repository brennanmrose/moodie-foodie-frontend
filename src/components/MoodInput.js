import React from 'react';

class MoodInput extends React.Component {

  state = { name: '' }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>Create a New Mood: </label>
          <input type='text'placeholder='Name' value={this.state.name} name="name" onChange={this.handleOnChange}/><br></br>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default MoodInput;
