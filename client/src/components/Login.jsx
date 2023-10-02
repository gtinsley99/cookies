import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser(username);
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="inputField">
          <label>Username:</label>
          <input
            placeholder="Insert username here..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="inputField">
          <label>Password:</label>
          <input
            placeholder="Insert password here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
