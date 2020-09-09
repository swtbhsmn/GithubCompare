import * as ActionTypes from './actionTypes';

export const search_github_user = (state = { errMess: null, github_user:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_USERS:
        return {...state, errMess: null, github_user: action.payload};
  
      case ActionTypes.SEARCH_USERNAME_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_USER:
          var user = action.payload;
          return { ...state,errMess:null,github_user:state.github_user.concat(user)};
  
      default:
        return state;
    }
  };