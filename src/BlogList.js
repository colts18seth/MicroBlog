import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BlogList.css';
function BlogList() {
    // const { posts } = useSelector(s => ({ posts: s.posts }));
    // let postsArr = [];
    // for (let key in posts) {
    //     postsArr.push({ post: posts[key] })
    // }
    useEffect(() => {
        dispatch(getTodosFromAPI())
    }, [dispatch]);
    return (
        <div className="BlogList row justify-content-around">
            {posts.length !== 0 ?
                posts.map(p => (
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