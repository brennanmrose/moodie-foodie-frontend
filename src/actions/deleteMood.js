export const deleteMood = (data) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/moods/${data.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(mood => dispatch({ type: 'DELETE_MOOD', payload: mood, data }))
  }

}
