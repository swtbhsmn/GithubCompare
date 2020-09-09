import * as ActionTypes from './actionTypes';
import { githubUrl} from '../shared/baseUrl';


export const searchUsername = (username) => (dispatch) => {

   dispatch(doLoading(true));
    return fetch(githubUrl +username, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addUsername(response)))
    .catch(error =>dispatch(searchFailed(error.message)));
};

export const addUsername= (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
});

export const searchFailed = (errmess) => ({
    type: ActionTypes.SEARCH_USERNAME_FAILED,
    payload: errmess
});

export const doLoading = () => ({
    type: ActionTypes.DO_LOADING
});