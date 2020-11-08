import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <div className="jumbotron">
                <h1 className="display-1">MicroBlog</h1>
                <p className="lead">Welcome to my Blog!</p>
                <Link to='/'>Blog</Link>
                <Link to='/new' className='pl-4'>Add a new Post</Link>
            </div>
        </div>
    );
}

export default Header;