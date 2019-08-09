import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class VictualsContainer extends React.Component {

  render() {
    return (
      Victuals
    )
  }

}

const mapStateToProps = (state) => {
  return {
    moods: state.moods
  }
}

export default connect(mapStateToProps)(VictualsContainer);
