import { useParams } from "react-router-dom";

function BlogDetail() {
  const urlParams = useParams();
  return (
    <div>
      <h1>Ini adalah detail blog</h1>
      <p>Helo ini adalah detail artikel {urlParams.slug}</p>
    </div>
  );
}

export default BlogDetail;
