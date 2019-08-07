export function fetchMoods() {
  fetch('http://localhost:3000/api/v1/moods/1/desserts')
    .then(response => response.json())
    .then(data => console.log(data))
}

// action creator is a function that action object and that action object will be dispatched to the reducer which will return the new version of state
