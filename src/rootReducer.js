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
    posts: {},
    postDetails: {}
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_POSTS:
            const postsObj = arrayToObject(action.payload);
            return { ...state, posts: postsObj }

        case GET_DETAILS:
            return { ...state, postDetails: action.payload }

        case ADD_POST:
            return { ...state, posts: { ...state.posts, [action.payload.id]: action.payload } }

        case EDIT_POST:
            return { ...state, posts: { ...state.posts, [action.payload.id]: action.payload } }

        case DELETE_POST:
            const newObj = state.posts;
            delete newObj[action.payload]
            return { ...state, posts: { ...newObj } }

        case ADD_COMMENT:
            const id = action.postId;
            return { ...state, posts: { ...state.posts, [id]: { ...state.posts[id], comments: [...state.posts[id].comments, action.text] } } }

        //! figure this out soon plzzzz

        case DELETE_COMMENT:
            const index = state.posts[action.payload.blog.key].comments.findIndex(c => c.key === action.payload.comment.key)
            state.posts[action.payload.blog.key].comments.splice(index, 1);
            return { ...state }

        default:
            return { ...state }
    }
}

const arrayToObject = (array) =>
    array.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {})

export default rootReducer;