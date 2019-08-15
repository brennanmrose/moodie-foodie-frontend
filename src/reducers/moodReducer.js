export default function moodReducer(state = { moods: [] }, action) {
  switch (action.type) {
    case 'FETCH_MOODS':
      return { moods: action.payload }

    case 'ADD_MOOD':
      return {...state, moods: [...state.moods, action.payload]}

    case 'ADD_FOOD':
      let moodId = action.payload.id

      return { ...state,
        moods: state.moods.filter(mood => mood.id === moodId)
      }

    default:
      return state
  }

}
