export const deleteDessert = (data, moodId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/moods/${moodId}/desserts/${data.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(dessert => dispatch({ type: 'DELETE_DESSERT', payload: dessert, data, moodId }))
  }
}
