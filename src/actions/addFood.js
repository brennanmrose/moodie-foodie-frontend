export const addFood = (data, moodId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/moods/${moodId}/foods`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(food => dispatch({ type: 'ADD_FOOD', payload: food, moodId }))
    }

}
