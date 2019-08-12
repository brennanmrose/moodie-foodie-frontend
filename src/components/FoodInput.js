import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../actions/addFood'

class FoodInput extends React.Component {

  state = {
    name: '',
    description: '',
    recipe_url: '',
    image_url: '',
    mood_id: ''
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: '',
      description: '',
      recipe_url: '',
      image_url: '',
      mood_id: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Create a New Food: </label>
          <input
            type='text'
            placeholder='Name'
            value={this.state.name}
            name="name"
            onChange={this.handleOnChange}
          />
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addFood })(FoodInput);
