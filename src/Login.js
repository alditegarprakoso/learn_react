import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function loginHandler(e) {
    e.preventDefault();

    const checkLogin = true;
    if (checkLogin) {
      navigate("/dashboard");
    }
  }
  return (
    <div>
      <h1>Silahkan Login terlebih dahulu</h1>
      <form onSubmit={loginHandler}>
        <input type="text" name="username" /> <br />
        <input type="password" name="password" /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
