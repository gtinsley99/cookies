import { useState } from "react";
import { RegisterRoute } from "../utils";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterRoute(username, email, password, props.setUser, props.setCookie, props.setRes);
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="registerDiv">
        <h2>Register here</h2>
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
          <label>Email:</label>
          <input
            placeholder="Insert email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;