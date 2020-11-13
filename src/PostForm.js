import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPostCreator } from './actionCreators';
import { editPostCreator } from './actionCreators';

function PostForm({ edit }) {
    const INITIAL_STATE = {
        title: "",
        description: "",
        body: ""
    }

    let EDIT_INITIAL_STATE;
    if (edit) {
        EDIT_INITIAL_STATE = {
            title: edit.title,
            description: edit.description,
            body: edit.body,
            id: edit.id
        }
    }

    let startState;
    if (!edit) {
        startState = INITIAL_STATE;
    } else {
        startState = EDIT_INITIAL_STATE;
    }

    const [formData, setFormData] = useState(startState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const addPostFunc = () => {
        if (!edit) {
            dispatch(addPostCreator(formData));
            setFormData(INITIAL_STATE);
        } else {
            dispatch(editPostCreator(edit.id, formData));
            setFormData(INITIAL_STATE);
        }
        history.push("/");
    }

    return (
        <div className="PostForm">
            <form className="container" >
                <h1 className="pb-4">{!edit ? "New Post" : "Edit Post"}</h1>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input onChange={handleChange} value={formData.title} className="form-control" id="title" name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input onChange={handleChange} value={formData.description} className="form-control" id="description" name="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea onChange={handleChange} value={formData.body} className="form-control" id="body" rows="5" name="body" />
                </div>
                <button onClick={addPostFunc} type="button" className="btn btn-primary">Save</button>
                <button onClick={() => history.push('/')} type="button" className="btn btn-secondary ml-2">Cancel</button>
            </form>
        </div>
    );
};

export default PostForm;