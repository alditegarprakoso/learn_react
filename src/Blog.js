import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link to="artikel1">Artikel 1</Link>
        </li>
        <li>
          <Link to="artikel2">Artikel 2</Link>
        </li>
        <li>
          <Link to="artikel3">Artikel 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
