import { combineReducers } from 'redux';
import simple from './simpleReducer';
import count from './countReducer';

export default combineReducers({
    simple,
    count
});