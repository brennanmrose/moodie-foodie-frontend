export const addDrink = (data, moodId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/moods/${moodId}/drinks`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(drink => dispatch({ type: 'ADD_DRINK', payload: drink }))
    }

}
