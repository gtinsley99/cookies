import { useState, useEffect } from "react";
import "./App.css";
import Title from "./components/Title";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Pics from "./components/Pics";
import Picsapi from "./components/Picsapi";
import Register from "./components/Register";
import SideBar from "./components/Sidebar";
import { onScroll } from "./components/Funtions";
import { useCookies } from "react-cookie";

function App() {
  const [user, setUser] = useState("");
  const [pics, setPics] = useState(null);
  const [page, setPage] = useState(1);
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);



  Picsapi(setPics, cookies, setUser);


  return (
    <div className="App">
      {/* Navbar with logout button*/}
      <Navbar user={user} setUser={setUser} removeCookie={removeCookie} setPage={setPage}/>
      {/* Show when logged out or when logged in */}
      {user === "" ? (
        <>
          <Register setUser={setUser} setCookie={setCookie}/>
          <Login setUser={setUser} setCookie={setCookie} />
        </>
      ) : (
        <>
          <Title page={page} />
          <SideBar />
          <Pics pics={pics} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default App;
