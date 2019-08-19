import React from 'react';
import { connect } from 'react-redux';
import { deleteDessert } from '../actions/deleteDessert'

class DeleteDessert extends React.Component {

  handleOnClick = () => {
    this.props.deleteDessert(this.props.dessertProps, this.props.moodId)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Delete {this.props.dessertProps.name}</button>
      </div>
    );
  };

};

export default connect(null, { deleteDessert })(DeleteDessert);
