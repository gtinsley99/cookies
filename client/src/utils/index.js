const noAvatar = require("../images/noAvatar.png");

export const LoginRoute = async (
  logUsername,
  logPassword,
  setUser,
  setCookie,
  setRes
) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: logUsername,
        password: logPassword,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setUser(data.user.username);
    setCookie("username", data.user.username, { maxAge: 604800, path: "/" })
    setCookie("jwt_token", data.user.token, { maxAge: 604800, path: "/" });
    if (data.user.avatar) {
        setCookie("userAvatar", data.user.avatar, { maxAge: 604800, path: "/" });
      } else {
        setCookie("userAvatar", noAvatar, { maxAge: 604800, path: "/" });
      }
  } catch (error) {
    console.log(error);
    setRes(error);
  }
};

export const RegisterRoute = async (
  regUsername,
  regEmail,
  regPassword,
  regUrl,
  setUser,
  setCookie,
  setRes
) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: regUsername,
        email: regEmail,
        password: regPassword,
        avatar: regUrl
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data)
    console.log(regUrl)
    setUser(data.user.username);
    setCookie("username", data.user.username, { maxAge: 604800, path: "/" })
    setCookie("jwt_token", data.user.token, { maxAge: 604800, path: "/" });
    if (data.user.avatar) {
        setCookie("userAvatar", data.user.avatar, { maxAge: 604800, path: "/" });
      } else {
        setCookie("userAvatar", noAvatar, { maxAge: 604800, path: "/" });
      }
  } catch (error) {
    console.log(error);
    setRes(error);
  }
};

export const AuthCheck = async (jwt_token, setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}t/users/loginwithtoken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};
