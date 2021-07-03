import changeNumber from './UpDown';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    changeNumber : changeNumber 
})

export default RootReducer;