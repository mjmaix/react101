import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    const { type, payload } = action;
    switch (action.type) {
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state, post };
            // newState[post.id] = post;
            return { ...state, [payload.data.id]: payload.data };
        case FETCH_POSTS:
            return _.mapKeys(payload.data, 'id');
        case DELETE_POST:
            return _.omit(state, payload);
        default:
            return state;
    }
}
