import React from 'react';
import { connect } from 'react-redux';
import { addDrink } from '../actions/addDrink'

class DrinkInput extends React.Component {

  state = {
    name: '',
    description: '',
    drink_url: '',
    image_url: '',
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addDrink(this.state, this.props.moodProps.id)
    this.setState({
      name: '',
      description: '',
      drink_url: '',
      image_url: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Create a New Drink for {this.props.moodProps.name}: </label>
          <br></br>
          <input
            type='text'
            placeholder='Name'
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input
            type='text'
            placeholder='Description'
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
          />
          <input
            type='text'
            placeholder='drink_url'
            name="drink_url"
            value={this.state.drink_url}
            onChange={this.handleOnChange}
          />
          <input
            type='text'
            placeholder='image_url'
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleOnChange}
          />
          <br></br>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addDrink })(DrinkInput);
