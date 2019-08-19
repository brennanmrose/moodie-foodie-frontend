import React from 'react';
import { connect } from 'react-redux';
import { deleteFood } from '../actions/deleteFood'

class DeleteFood extends React.Component {

  handleOnClick = () => {
    this.props.deleteFood(this.props.foodProps, this.props.moodId)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Delete {this.props.foodProps.name}</button>
      </div>
    );
  };

};

export default connect(null, { deleteFood })(DeleteFood);
