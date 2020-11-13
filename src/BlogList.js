import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './actionCreators';
import { Link } from 'react-router-dom';
import './BlogList.css';

function BlogList() {
    const dispatch = useDispatch();
    let { posts } = useSelector(s => ({ posts: s.posts }));

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);

    let postsArr = [];
    for (let key in posts) {
        postsArr.push({ post: posts[key] })
    }

    return (
        <div className="BlogList row justify-content-around">
            {postsArr ?
                postsArr.map(p => (
                    < div key={p.post.id} className="col-5 p-0 mb-4" >
                        <div className="container border border-info rounded">
                            <Link to={`/${p.post.id}`}>
                                <h3>{p.post.title}</h3>
                            </Link>
                            <p className="mb-3"><em>{p.post.description}</em></p>
                        </div>
                    </div>
                )) :
                <p>No Posts Yet</p>
            }
        </div >
    );
}

export default BlogList;