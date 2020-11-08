
import { Link } from 'react-router-dom';
import './BlogList.css';
function BlogList({ blogList }) {
    return (
        <div className="BlogList row justify-content-around">
            {blogList.map(blog => (
                <div key={blog.id} className="col-5 p-0 mb-4">
                    <div className="container border border-info rounded">
                        <Link to={`/${blog.id}`}>
                            <h3>{blog.title}</h3>
                        </Link>
                        <p className="mb-3"><em>{blog.description}</em></p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;