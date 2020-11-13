import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    GET_POSTS,
    GET_DETAILS
} from './actionTypes';

const INITIAL_STATE = {
    posts: []
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_POSTS:
            return { ...state, posts: action.payload }

        case GET_DETAILS:
            return { ...state, postDetails: action.payload }

        case ADD_POST:
            state.posts.push(action.payload)
            return { ...state }

        case EDIT_POST:
            state.posts[action.payload.id - 1] = action.payload;
            return { ...state }

        case DELETE_POST:

            return { ...state, }

        case ADD_COMMENT:
            state.posts[action.payload.blog.key].comments.push({
                comment: action.payload.comment,
                key: action.payload.key
            });
            return { ...state }

        case DELETE_COMMENT:
            const index = state.posts[action.payload.blog.key].comments.findIndex(c => c.key === action.payload.comment.key)
            state.posts[action.payload.blog.key].comments.splice(index, 1);
            return { ...state }

        default:
            return { ...state }
    }
}

export default rootReducer;