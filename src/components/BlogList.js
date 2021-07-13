import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs }) {
  return (
    <div className="list">
      <h2>Current Blogs</h2>
      {blogs.map((blog) => (
        <div className="preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>Written By: {blog.author}</p>
            <p>Date: {blog.date.toDate().toDateString()}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
