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

      case 'ADD_DESSERT':
        let dessertMoodId = action.payload.id

        let newDessertMoods = state.moods.map(mood => {
          if (dessertMoodId === mood.id) {
            return action.payload
          } else {
            return mood
          }
        });

        return {...state, moods: newDessertMoods}

      case 'DELETE_FOOD':

        let findMood = state.moods.filter(mood => mood.id === action.moodId)[0]
        findMood.foods = findMood.foods.filter(food => food.id !== action.data.id)

        let deletedState = state.moods.map(mood => {
          if (mood.id === findMood.id) {
            return findMood
          } else {
            return mood
          }
        })

        return {...state, moods: deletedState};

        case 'DELETE_DRINK':

          let findDrinkMood = state.moods.filter(mood => mood.id === action.moodId)[0]
          findDrinkMood.drinks = findDrinkMood.drinks.filter(drink => drink.id !== action.data.id)

          let deletedDrink = state.moods.map(mood => {
            if (mood.id === findDrinkMood.id) {
              return findDrinkMood
            } else {
              return mood
            }
          })

          return {...state, moods: deletedDrink};

          case 'DELETE_DESSERT':

            let findDessertMood = state.moods.filter(mood => mood.id === action.moodId)[0]
            findDessertMood.desserts = findDessertMood.desserts.filter(dessert => dessert.id !== action.data.id)

            let deletedDessert = state.moods.map(mood => {
              if (mood.id === findDessertMood.id) {
                return findDessertMood
              } else {
                return mood
              }
            })

            return {...state, moods: deletedDessert};

      default:
        return state

  }

}
 // look for id from action creator and filter it out for delete
