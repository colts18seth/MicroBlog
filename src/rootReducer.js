import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    GET_POSTS
} from './actionTypes';

const INITIAL_STATE = {
    posts: []
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_POSTS:
            return { ...state, posts: action.payload }

        case ADD_POST:
            state.posts.push(action.payload)
            return { ...state }

        case EDIT_POST:
            return { ...state, posts: { ...state.posts, [action.payload.key]: action.payload } }

        case DELETE_POST:
            delete state.posts[action.payload]
            return { ...state }

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