import React from 'react';
import { connect } from 'react-redux';
import { deleteMood } from '../actions/deleteMood'

class DeleteMood extends React.Component {

  handleOnClick = () => {
    this.props.deleteMood(this.props.mood)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Delete Mood</button>
      </div>
    );
  };

};

export default connect(null, { deleteMood })(DeleteMood);
