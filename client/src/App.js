import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Pics from "./components/Pics";
import Picsapi from "./components/Picsapi";
import Register from "./components/Register";
import SideBar from "./components/Sidebar";
import Suggested from "./components/Suggested";
import { useCookies } from "react-cookie";

function App() {
  const [user, setUser] = useState("");
  const [pics, setPics] = useState(null);
  const [userPic, setUserPic] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);

  Picsapi(setPics, cookies, setUser);


  return (
    <div className="App">
      {/* Navbar with logout button*/}
      <Navbar user={user} setUser={setUser} removeCookie={removeCookie} setUserPic={setUserPic} />
      {/* Show when logged out or when logged in */}
      {user === "" ? (
        <>
          <Register setUser={setUser} setCookie={setCookie} setUserPic={setUserPic} cookies={cookies} />
          <Login setUser={setUser} setCookie={setCookie} setUserPic={setUserPic} cookies={cookies}/>
        </>
      ) : (
        <>
          <SideBar cookies= {cookies} />
          <Suggested user={user} cookies={cookies}/>
          <Pics pics={pics} />
        </>
      )}
    </div>
  );
}

export default App;
