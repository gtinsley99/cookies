import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Pics from "./components/Pics";
import Picsapi from "./components/Picsapi";
import Register from "./components/Register";
import SideBar from "./components/Sidebar";
import Suggested from "./components/Suggested";
import { useCookies } from "react-cookie";
import TopPics from "./components/TopPics";
import { AuthCheck } from "./utils";

function App() {
  const [user, setUser] = useState("");
  const [pics, setPics] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt_token"]);
  const [res, setRes] = useState(null);

  Picsapi(setPics, cookies, setUser);

  const loginWithToken = async (cookie) => {
    await AuthCheck(cookies.jwt_token, setUser);
  };

  useEffect(() => {
    if (cookies.jwt_token !== false) {
      loginWithToken(cookies.jwt_token);
    }
  }, []);

  return (
    <div className="App">
      {/* Navbar with logout button*/}
      <Navbar user={user}  />
      {/* Show when logged out or when logged in */}
      {user === "" ? (
        <>
          <Register setUser={setUser} setCookie={setCookie} cookies={cookies} setRes={setRes} />
          <Login setUser={setUser} setCookie={setCookie} cookies={cookies} setRes={setRes} />
        </>
      ) : (
        <>
          <TopPics />
          <SideBar cookies={cookies} />
          <Suggested user={user} cookies={cookies} setUser={setUser} removeCookie={removeCookie} />
          <Pics pics={pics} />
        </>
      )}
    </div>
  );
}

export default App;
