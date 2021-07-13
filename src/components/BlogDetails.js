import React from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/config";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

function BlogDetails() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = firestore.collection("posts").onSnapshot((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      setBlogs(data);
    });
    return unsubscribe;
  }, []);

  const handleDelete = (id) => {
    firestore.collection("posts").doc(id).delete();
    history.push("/");
  };

  return (
    <div>
      {blogs
        .filter((blog) => blog.id === id)
        .map((filteredBlog) => (
          <div className="details" key={filteredBlog.id}>
            <h2>{filteredBlog.title}</h2>
            <h4>Author: {filteredBlog.author}</h4>
            <h5>ID: {id}</h5>
            <br />
            <p>{filteredBlog.body}</p>
            <button onClick={() => handleDelete(filteredBlog.id)}>
              Delete Post
            </button>
          </div>
        ))}
    </div>
  );
}

export default BlogDetails;
