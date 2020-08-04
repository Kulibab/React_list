import {createStore, combineReducers} from 'redux';
import coursesListReducer from './courses-list-reducer';

let reducers = combineReducers({
    coursesListPage: coursesListReducer
})

let store = createStore(reducers);

window.store = store;

export default store;