
const BASE_URL = "http://localhost:3000"

export function getPosts() {
    return async function (dispatch) {
        let res = await axios.get(`${BASE_URL}/api/posts`);
        dispatch(gotPosts(res.data.posts));
    };
}

function gotPosts(posts) {
    dispatch({
        type: "LOAD_POSTS",
        payload: posts
    });
}