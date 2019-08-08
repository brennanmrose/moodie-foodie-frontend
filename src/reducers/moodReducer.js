export default function moodReducer(state = { moods: [] }, action) {
  switch (action.type) {
    case 'FETCH_MOODS':
      return { moods: action.payload }

    case 'ADD_MOOD':
      return {...state, moods: [...state.moods, action.payload]}

    default:
      return state
  }

}
