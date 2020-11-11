

function addPost(post) {
    return ({
        type: "ADD_POST",
        payload: post
    });
}

function deletePost(key) {
    return ({
        type: "DELETE_POST",
        payload: key
    });
}

function editPost(post) {
    return ({
        type: "EDIT_POST",
        payload: post
    });
}

function addComment(comment, key, blog) {
    return ({
        type: "ADD_COMMENT",
        payload: { comment, key, blog }
    });
}

function deleteComment(blog, comment) {
    return ({
        type: DELETE_COMMENT,
        payload: { blog, comment }
    })
}

export { addPost, deletePost, editPost, addComment, deleteComment };