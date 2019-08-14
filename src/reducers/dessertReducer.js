export default function dessertReducer(state = { desserts: [] }, action) {
  switch (action.type) {
    case 'ADD_DESSERT':
      return {...state, desserts: [...state.desserts, action.payload]}

    default:
      return state
  }

}
