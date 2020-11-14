
function gotPosts(posts) {
    return ({
        type: "GET_POSTS",
        payload: posts
    });
}

function gotDetails(post) {
    return ({
        type: "GET_DETAILS",
        payload: post
    });
}

function addPost(post) {
    return ({
        type: "ADD_POST",
        payload: post
    });
}

function deletePost(id) {
    return ({
        type: "DELETE_POST",
        payload: id
    });
}

function editPost(post) {
    return ({
        type: "EDIT_POST",
        payload: post
    });
}

function addComment(postId, text) {
    return ({
        type: "ADD_COMMENT",
        postId,
        payload: text
    });
}

function deleteComment(blog, comment) {
    return ({
        type: "DELETE_COMMENT",
        payload: { blog, comment }
    })
}

export { gotPosts, gotDetails, addPost, deletePost, editPost, addComment, deleteComment };