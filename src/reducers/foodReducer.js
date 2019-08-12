export default function foodReducer(state = { foods: [] }, action) {
  switch (action.type) {
    case 'ADD_FOOD':
      return {...state, foods: [...state.foods, action.payload]}

    default:
      return state
  }

}
