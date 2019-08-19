import React from 'react';
import { connect } from 'react-redux';
import { deleteDrink } from '../actions/deleteDrink'

class DeleteDrink extends React.Component {

  handleOnClick = () => {
    this.props.deleteDrink(this.props.drinkProps, this.props.moodId)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Delete {this.props.drinkProps.name}</button>
      </div>
    );
  };

};

export default connect(null, { deleteDrink })(DeleteDrink);
