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

    case 'ADD_DRINK':
      let drinkMoodId = action.payload.id

      let newDrinkMoods = state.moods.map(mood => {
      	if (drinkMoodId === mood.id) {
          return action.payload
        } else {
          return mood
        }
      });

      return {...state, moods: newDrinkMoods}
  }

}
 // look for id from action creator and filter it out for delete
