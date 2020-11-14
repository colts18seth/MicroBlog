
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

function deleteComment(cID, pID) {
    return ({
        type: "DELETE_COMMENT",
        payload: { cID, pID }
    })
}

function upVote(id) {
    return ({
        type: "UP_VOTE",
        payload: id
    })
}

function downVote(id) {
    return ({
        type: "DOWN_VOTE",
        payload: id
    })
}

export { gotPosts, gotDetails, addPost, deletePost, editPost, addComment, deleteComment, upVote, downVote };