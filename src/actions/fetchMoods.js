export function fetchMoods() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/moods')
      .then(response => response.json())
      .then(moods => dispatch({
        type: 'FETCH_MOODS',
        payload: moods
      }))
  }
}

// action creator is a function that action object and that action object will be dispatched to the reducer which will return the new version of state
// dispatch action to reducer instead of dispatching from connect because thunk will allow us to dispatch it when it's ready instead of doing it and expecting an immediate return
