import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import AboutTeam from "./AboutTeam";
import Blog from "./Blog";
import BlogDetail from "./BlogDetail";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import Todo from "./Todo";
function App() {
  return (
    <div>
      <nav>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/todo" style={{ marginRight: 10 }}>
          Todo
        </Link>
        <Link to="/blog" style={{ marginRight: 10 }}>
          Blog
        </Link>
        <Link to="/about" style={{ marginRight: 10 }}>
          About
        </Link>
        <Link to="/about/team">Team</Link>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<AboutTeam />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
