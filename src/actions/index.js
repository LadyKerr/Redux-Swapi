import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE';

export const getSwapi = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('https://swapi.co/api/people')
    .then(({ data }) => {
      console.log(data)
      dispatch({ 
        type: SUCCESS, 
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({ 
        type: FAILURE, 
        payload: err 
      });
   })
}
