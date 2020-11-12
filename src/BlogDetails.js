import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addComment, deletePost, deleteComment } from './actions';
import { v4 as uuid } from 'uuid';
import PostForm from './PostForm';
import './BlogDetails.css';

function BlogDetails() {
    const { posts } = useSelector(s => ({ posts: s.posts }));
    const dispatch = useDispatch();
    const { key } = useParams();
    const blog = posts[key - 1];

    const [showForm, setShowForm] = useState(false);
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setComment(value);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const removePost = () => {
        dispatch(deletePost(blog.key));
    }

    const addCommentFunc = () => {
        const key = uuid();
        dispatch(addComment(comment, key, blog));
        setComment('');
    }

    const removeComment = (comment) => {
        dispatch(deleteComment(blog, comment))
    }

    return (
        < div className="BlogDetails" >
            {!showForm ?
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <h3>{blog.title}</h3>
                        <div className="icons d-flex flex-row">
                            <div onClick={toggleForm}>
                                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-pencil-square text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                            </div>
                            <div onClick={removePost}>
                                <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-x text-danger ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="mb-3"><em>{blog.description}</em></p>
                    <p>{blog.body}</p>
                </div> :
                <PostForm edit={blog} />
            }
            <hr />
            <div className="container">
                <h4 className="mb-4">Comments</h4>
                <ul>
                    {blog.comments &&
                        blog.comments.map(c => (
                            <li key={c.key} className="d-flex">{c.comment}
                                <span onClick={() => removeComment(c)}>
                                    <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-x text-danger" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>
                            </li>
                        ))}
                </ul>
                <div>
                    <input name="comment" onChange={handleChange} value={comment} placeholder="Add Comment"></input>
                    <button onClick={addCommentFunc} type="button" className="btn btn-primary btn-sm ml-2">Add</button>
                </div>
            </div>
        </div >
    );
}

export default BlogDetails;