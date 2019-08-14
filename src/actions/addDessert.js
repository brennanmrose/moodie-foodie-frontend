export const addDessert = (data, moodId) => {

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/moods/${moodId}/desserts`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(dessert => dispatch({ type: 'ADD_DESSERT', payload: dessert }))
    }

}
