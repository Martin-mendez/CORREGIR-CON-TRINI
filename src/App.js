import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PostForm from "./PostForm";
import NotFound from "./NotFound";

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div className="container">
        <h1>Blog de Comentarios con Fotos en React</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/add-post">Crear nuevo post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <PostList posts={posts} />
          </Route>
          <Route path="/post/:id">
            <PostDetail posts={posts} />
          </Route>
          <Route path="/add-post">
            <PostForm onAddPost={handleAddPost} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
