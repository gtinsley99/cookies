import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Title from "./components/Title";
import Pics from "./components/Pics";
import Picsapi from "./components/Picsapi";

function App() {
  const [user, setUser] = useState("");
  const [pics, setPics] = useState(null);

  Picsapi(setPics);

  return (
    <div className="App">
      <Title user={user} setUser={setUser} />
      {user === "" ? <Login setUser={setUser} /> : <Pics pics={pics} />}
    </div>
  );
}

export default App;
