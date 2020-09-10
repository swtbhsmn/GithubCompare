import * as ActionTypes from './actionTypes';

export const search_github_user = (state = { isLoading:false,errMess: null, github_user:[]}, action) => {
    switch (action.type) {
  
      case ActionTypes.SEARCH_USERNAME_FAILED:
        return {...state,isLoading:false, errMess: action.payload};
  
      case ActionTypes.ADD_USER:
          var user = action.payload;
          return { ...state,isLoading:false,errMess:null,github_user:state.github_user.concat(user)};
      case ActionTypes.DO_LOADING:
          return {...state,isLoading:true,errMess:null};
      default:
        return state;
    }
  };