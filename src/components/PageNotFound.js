import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pagenotfound">
      <h1>404</h1>
      <h2>This page does not exist!</h2>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default PageNotFound;
