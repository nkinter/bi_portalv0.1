import { FETCH_FAVORITES } from '../actions/types';

export default (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case FETCH_FAVORITES:
            return action.payload;
        default:
            return state;
    }
};