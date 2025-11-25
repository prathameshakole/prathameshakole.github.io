import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Hi",
            date: "November 25, 2025",
            content: "Welcome to my new blog. This is a space where I share my thoughts. Stay tuned for more updates or maybe not."
        },

        {
            id: 2,
            title: "Blog 1",
            date: "",
            content: "I need to write something."
        }
    ];

    return (
        <div className="blog-page">
            <h1>Prathamesh's Blog</h1>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="blog-post">
                        <h2>{post.title}</h2>
                        <span className="date">{post.date}</span>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
            <Link to="/" className="back-link">← Back to Portfolio</Link>
        </div>
    );
}

export default Blog;
