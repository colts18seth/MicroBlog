import { Switch, Route } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';
import PostForm from './PostForm';

function Routes() {
    return (
        <Switch>
            <Route exact path='/'><BlogList /></Route>
            <Route exact path='/new'><PostForm /></Route>
            <Route exact path='/:id'><BlogDetails />
            </Route>
        </Switch >
    )
}

export default Routes;