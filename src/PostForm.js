import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function PostForm({ addPost, edit, editPost }) {
    let INITIAL_STATE;

    if (edit) {
        INITIAL_STATE = {
            id: edit.id,
            title: edit.title,
            description: edit.description,
            body: edit.body,
            comments: edit.comments || null
        }
    } else {
        INITIAL_STATE = {
            title: "",
            description: "",
            body: "",
            comments: []
        };
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleButton = (e) => {
        e.preventDefault();
        if (e.target.type !== "button") {
            if (edit) {
                editPost(edit.id, formData);
            } else {
                addPost(formData);
            }
        }
        history.push("/");
    }

    return (
        <div className="PostForm">
            <form className="container" onSubmit={handleButton} >
                <h1 className="pb-4">New Post</h1>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea className="form-control" id="body" rows="5" name="body" value={formData.body} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <button onClick={handleButton} type="button" className="btn btn-secondary ml-2">Cancel</button>
            </form>
        </div>
    );
};

export default PostForm;