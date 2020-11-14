import axios from 'axios';
import { gotPosts, addPost, editPost, gotDetails, deletePost, addComment } from './actions';

const BASE_URL = "http://localhost:5000";

function getPosts() {
    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/api/posts`);
        dispatch(gotPosts(res.data));
    };
}

function getDetails(id) {
    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/api/posts/${id}`);
        dispatch(gotDetails(res.data));
    }
}

function addPostCreator(data) {
    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/api/posts`, data);
        dispatch(addPost(res.data))
    };
}

function editPostCreator(id, data) {
    return async function (dispatch) {
        let res = await axios.put(`${BASE_URL}/api/posts/${id}`, data);
        dispatch(editPost(res.data))
    };
}

function deletePostCreator(id) {
    return async function (dispatch) {
        await axios.delete(`${BASE_URL}/api/posts/${id}`)
        dispatch(deletePost(id))
    }
}

function addCommentCreator(postId, text) {
    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/api/posts/${postId}/comments`, text)
        dispatch(addComment(postId, res.data))
    }
}

export { getPosts, addPostCreator, editPostCreator, getDetails, deletePostCreator, addCommentCreator };