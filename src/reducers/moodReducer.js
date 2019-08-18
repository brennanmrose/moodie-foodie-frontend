export default function moodReducer(state = { moods: [] }, action) {
  switch (action.type) {
    case 'FETCH_MOODS':
      return { moods: action.payload }

    case 'ADD_MOOD':
      return {...state, moods: [...state.moods, action.payload]}

    case 'ADD_FOOD':
      let moodId = action.payload.id

      let newMoods = state.moods.map(mood => {
      	if (moodId === mood.id) {
          return action.payload
        } else {
          return mood
        }
      });

      return {...state, moods: newMoods}

    default:
      return state
  }

}
 // look for id from action creator and filter it out for delete

// return { ...state,
//   moods: state.moods.filter(mood => mood.id === moodId)
// }

// You will need to map through all of them and then have an if statement
// to check the mood id and if they match, then you want to return the mood
// that is coming in through the action but otherwise yuou want to return
// the mood that is already in the array
