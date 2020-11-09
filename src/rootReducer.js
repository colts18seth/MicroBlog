import {
    ADD_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT
} from './actionTypes';

const INITIAL_STATE = {
    posts: {}
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: { ...state.posts, [action.payload.key]: action.payload } }
        case DELETE_POST:
            console.log("delete");
            return { ...state }
        default:
            return { ...state }
    }
}

export default rootReducer;