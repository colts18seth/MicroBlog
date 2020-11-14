import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './actionCreators';
import { Link } from 'react-router-dom';
import './BlogList.css';

function BlogList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    let { posts } = useSelector(s => ({ posts: s.posts }));
    const postsArr = Object.keys(posts).map(i => posts[i])

    return (
        <div className="BlogList row justify-content-around">
            {postsArr ?
                postsArr.map(p => (
                    < div key={p.id} className="col-5 p-0 mb-4" >
                        <div className="container border border-info rounded">
                            <Link to={`/${p.id}`}>
                                <h3>{p.title}</h3>
                            </Link>
                            <p className="mb-3"><em>{p.description}</em></p>
                        </div>
                    </div>
                )) :
                <p>No Posts Yet</p>
            }
        </div >
    );
}

export default BlogList;