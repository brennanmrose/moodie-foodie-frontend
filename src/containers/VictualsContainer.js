import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Foods from '../components/Foods';
import FoodInput from '../components/FoodInput';
import Drinks from '../components/Drinks';
import DrinkInput from '../components/DrinkInput';
import Desserts from '../components/Desserts';
import DessertInput from '../components/DessertInput';

class VictualsContainer extends React.Component {

  render() {
    return (
      <div>
        <Route path='/moods/:id/foods' render={ (routerProps) => <Foods {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/:id/drinks' render={ (routerProps) => <Drinks {...routerProps} moods={this.props.moods} /> } />
        <Route path='/moods/:id/desserts' render={ (routerProps) => <Desserts {...routerProps} moods={this.props.moods} /> } />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    moods: state.mood.moods
  }
}

export default connect(mapStateToProps)(VictualsContainer);
