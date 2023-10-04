import { useState } from "react";
import { faker } from "@faker-js/faker";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser(username);
    props.setCookie("username", username, {maxAge: 604800, path: "/"});
    props.setCookie("userAvatar", faker.image.avatar(), {maxAge: 604800, path: "/"});
    props.setUserPic(props.cookies.userAvatar);
    setUsername("");
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