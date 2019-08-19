export const deleteDrink = (data, moodId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/moods/${moodId}/drinks/${data.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(drink => dispatch({ type: 'DELETE_DRINK', payload: drink, data, moodId }))
  }
}
