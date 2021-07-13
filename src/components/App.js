import Navbar from "./Navbar";
import Home from "./Home";
import CreatePost from "./CreatePost";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <hr />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreatePost />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
