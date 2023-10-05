import { faker } from "@faker-js/faker";

export const LoginRoute = async (
    logUsername,
    logPassword,
    setUser,
    setCookie,
    setRes,
  ) => {
    try {
      const res = await fetch("http://localhost/users/login", {
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
      setCookie("jwt_token", data.user.username, {maxAge: 604800, path: "/"});
      setCookie("userAvatar", faker.image.avatar(), {maxAge: 604800, path: "/"});
    } catch (error) {
      console.log(error);
      setRes(error);
    }
  };

  export const RegisterRoute = async (
    regUsername,
    regEmail,
    regPassword,
    setUser,
    setCookie,
    setRes
  ) => {
    try {
      const res = await fetch("http://localhost:80/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: regUsername,
          email: regEmail,
          password: regPassword,
        }),
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setUser(data.user.username);
      setCookie("jwt_token", data.user.token, 7);
      setCookie("userAvatar", faker.image.avatar(), {maxAge: 604800, path: "/"})
    } catch (error) {
      console.log(error);
      setRes(error);
    }
  };
  
  export const AuthCheck = async (jwt_token, setUser) => {
    try {
      const res = await fetch("http://localhost/users/loginwithtoken", {
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