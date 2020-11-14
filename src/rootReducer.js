import {
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    GET_POSTS,
    GET_DETAILS,
    UP_VOTE,
    DOWN_VOTE
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
            return {
                ...state, postDetails: { ...state.postDetails, comments: [...state.postDetails.comments, action.payload] }
            }

        case DELETE_COMMENT:
            const cID = action.payload.cID;
            return {
                ...state, postDetails: { ...state.postDetails, comments: state.postDetails.comments.filter(c => c.id !== cID) }
            }

        case UP_VOTE:
            const uID = action.payload;
            return {
                ...state, posts: {
                    ...state.posts,
                    [uID]: {
                        ...state.posts[uID],
                        votes: state.posts[uID].votes + 1
                    }
                }, postDetails: {
                    ...state.postDetails, votes: state.postDetails.votes + 1
                }
            }

        case DOWN_VOTE:
            const dID = action.payload;
            return {
                ...state, posts: {
                    ...state.posts,
                    [dID]: {
                        ...state.posts[dID],
                        votes: state.posts[dID].votes - 1
                    }
                }, postDetails: {
                    ...state.postDetails, votes: state.postDetails.votes - 1
                }
            }

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