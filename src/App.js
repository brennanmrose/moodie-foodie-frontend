import React from 'react';
import { connect } from 'react-redux';
import { fetchMoods } from './actions/fetchMoods';

class App extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     moods: state.moods
//   }
// }

export default connect()(App);
// this connect is automatically calling dispatch on the return value of fetchMoods
