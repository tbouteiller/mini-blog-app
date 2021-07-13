import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { firestore } from "../firebase/config";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const history = useHistory();

  const newDate = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore
      .collection("posts")
      .add({ title: title, body: body, author: author, date: newDate });

    history.push("/");
  };

  return (
    <div className="create">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Content:</label>
        <textarea
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Author Name:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
