import { Switch, Route } from 'react-router-dom';
import Blog from './Blog';
import NewPostForm from './NewPostForm';

function Routes() {
    return (
        <Switch>
            <Route path='/'>
                <Blog />
            </Route>
            <Route path='/new'>
                <NewPostForm />
            </Route>
        </Switch>
    )
}

export default Routes;