import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {SearchInput} from './form';
import { createForms } from 'react-redux-form';
import {search_github_user } from './searchUsername';
const ConfigureStore = () => {
    const store = createStore(
        
        combineReducers({
        fetchUsername:search_github_user,
      
         ...createForms({
             github_compare_form:SearchInput
         })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}

export default ConfigureStore;