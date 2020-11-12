import axios from 'axios';
import { gotPosts, addPost } from './actions';

const BASE_URL = "http://localhost:5000";

function getPosts() {
    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/api/posts`);
        dispatch(gotPosts(res.data));
    };
}

function addPostCreator(data) {
    return async function (dispatch) {
        let res = await axios.post(`${BASE_URL}/api/posts`, data);
        dispatch(addPost(res.data))
    };
}

export { getPosts, addPostCreator };