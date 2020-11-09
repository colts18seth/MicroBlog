import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BlogList.css';
function BlogList() {
    const { posts } = useSelector(s => ({ posts: s.posts }));
    let postsArr = [];
    for (let key in posts) {
        postsArr.push({ post: posts[key] })
    }
    return (
        <div className="BlogList row justify-content-around">
            {postsArr.length !== 0 ?
                postsArr.map(p => (
                    < div key={p.post.key} className="col-5 p-0 mb-4" >
                        <div className="container border border-info rounded">
                            <Link to={`/${p.post.key}`}>
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