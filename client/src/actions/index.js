import axios from 'axios';
import { FETCH_USER, FETCH_FAVORITES } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/auth/current-user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFavorites = () => async dispatch => {
    const res = await axios.get('/api/reports/favorites');
    dispatch({ type: FETCH_FAVORITES, payload: res.data });
};