import { combineReducers } from 'redux';
import authReducer from './authReducer';
import favoritesReducer from "./favoritesReducer";

export default combineReducers({
   auth: authReducer,
    favorites: favoritesReducer
});