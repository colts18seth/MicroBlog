import { Switch, Route } from 'react-router-dom';

import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import PostForm from './PostForm';

function Routes() {

    // const handleComment = (e, action, id, data) => {
    //     let post = blogList.filter(p => p.id === id)[0];
    //     if (action === 'add') {
    //         post.comments.push(data);
    //     } else if (action === 'delete') {
    //         const index = post.comments.findIndex(c => c.id === data);
    //         post.comments.splice(index, 1);
    //         e.target.parentNode.remove();
    //     }
    // }

    return (
        <Switch>
            <Route exact path='/'><BlogList /></Route>
            <Route exact path='/new'><PostForm /></Route>
            <Route exact path='/:key'><BlogDetails />
            </Route>
        </Switch >
    )
}

export default Routes;