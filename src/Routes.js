import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import PostForm from './PostForm';

function Routes() {
    let history = useHistory();
    const [blogList, setBlogList] = useState([]);

    const addPost = (post) => {
        post.id = uuid();
        setBlogList([...blogList, post]);
    }

    const removePost = (id) => {
        setBlogList(blogList.filter(blog => blog.id !== id));
        history.push("/");
    }

    const editPost = (id, newData) => {
        const postIndex = blogList.findIndex(blog => blog.id === id);
        blogList[postIndex] = newData;
        history.push(`/${id}`);
    }

    const handleComment = (e, action, id, data) => {
        let post = blogList.filter(p => p.id === id)[0];
        if (action === 'add') {
            post.comments.push(data);
        } else if (action === 'delete') {
            const index = post.comments.findIndex(c => c.id === data);
            post.comments.splice(index, 1);
            e.target.parentNode.remove();
        }
    }

    return (
        <Switch>
            <Route exact path='/'><BlogList blogList={blogList} /></Route>
            <Route exact path='/new'><PostForm addPost={addPost} /></Route>
            <Route exact path='/:id'><BlogDetails blogList={blogList} removePost={removePost} editPost={editPost} handleComment={handleComment} />
            </Route>
        </Switch>
    )
}

export default Routes;