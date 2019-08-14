export default function drinkReducer(state = { drinks: [] }, action) {
  switch (action.type) {
    case 'ADD_DRINK':
      return {...state, drinks: [...state.drinks, action.payload]}

    default:
      return state
  }

}
