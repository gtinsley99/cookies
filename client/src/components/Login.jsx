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
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          placeholder="Insert username here..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Password:</label>
        <input
          placeholder="Insert password here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
