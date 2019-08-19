export const deleteFood = (data, moodId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/moods/${moodId}/foods/${data.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(food => dispatch({ type: 'DELETE_FOOD', payload: food, data, moodId }))
  }
}
