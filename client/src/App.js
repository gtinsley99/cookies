import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Pics from "./components/Pics";
import Picsapi from "./components/Picsapi";
import { onScroll } from "./components/Funtions";

function App() {
  const [user, setUser] = useState("");
  const [pics, setPics] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const [page, setPage] = useState(1);

  Picsapi(setPics);
  onScroll(setShowNav);
  return (
    <div className="App">
      {/* Navbar with logout button*/}
      {showNav && <Navbar user={user} setUser={setUser} />}
      {/* Show when logged out or when logged in */}
      {user === "" ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <Title page={page} />
          <Pics pics={pics} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default App;
