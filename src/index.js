import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import moodReducer from './reducers/moodReducer';
import foodReducer from './reducers/foodReducer';
import drinkReducer from './reducers/drinkReducer';
import dessertReducer from './reducers/dessertReducer';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  mood: moodReducer,
  food: foodReducer,
  drink: drinkReducer,
  dessert: dessertReducer
})

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
