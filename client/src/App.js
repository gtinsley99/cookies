import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Title from "./components/Title";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Title user={user}/>
      {user === "" ? <Login setUser={setUser} /> : <p>no</p>}
    </div>
  );
}

export default App;
