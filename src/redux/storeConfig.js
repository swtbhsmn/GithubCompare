import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import {search_github_user } from './searchUsername';

const ConfigureStore = () => {
    const store = createStore(
        
        combineReducers({
        fetchUsername:search_github_user,
    
        }),
        applyMiddleware(thunk)
    );

    return store;
}

export default ConfigureStore;