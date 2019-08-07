import React from 'react';

class MoodInput extends React.Component {

  state = { name: '' }

  render() {
    return (
      <div>
        <form>
          <label>Create a New Mood: </label>
          <input type='text'placeholder='Name' value={this.state.name}/>
        </form>
      </div>
    )
  }
}

export default MoodInput;
